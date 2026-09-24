import { NextResponse } from 'next/server';
import Anthropic from '@anthropic-ai/sdk';

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY || 'sk-placeholder',
});

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, email, company, message } = data;

    console.log(`🤖 [CRM Enrichment Agent] Intercepted new lead: ${name} at ${company}`);

    let enrichmentData = "";

    if (process.env.ANTHROPIC_API_KEY) {
      // Ask Claude to act as a sales engineer and research the prospect
      const response = await anthropic.messages.create({
        model: "claude-3-5-sonnet-20240620",
        max_tokens: 1000,
        system: "You are an elite Sales Engineer for Inovex Tech Solutions (an AI automation agency).",
        messages: [{ 
          role: "user", 
          content: `We just received a lead. Name: ${name}. Company URL/Name: ${company}. Message: "${message}". Based on this domain and message, write a 3-bullet-point briefing for our sales team on exactly what this company likely does, and 2 specific AI automations we can sell them.` 
        }]
      });
      enrichmentData = response.content[0].text;
    } else {
      enrichmentData = `[SIMULATED ENRICHMENT]\n- Industry: Unknown (No API Key)\n- Recommended Pitch: Pitch them a custom RAG chatbot and n8n CRM sync based on their message: "${message}".`;
    }

    // In production, you would send this to your Slack, email, or HubSpot
    console.log("==========================================");
    console.log("📨 NEW LEAD BRIEFING PREPARED BY CLAUDE:");
    console.log("==========================================");
    console.log(enrichmentData);
    console.log("==========================================");

    return NextResponse.json({ success: true, message: "Lead processed and enriched by AI Agent." });

  } catch (error) {
    console.error("CRM Agent Error:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
