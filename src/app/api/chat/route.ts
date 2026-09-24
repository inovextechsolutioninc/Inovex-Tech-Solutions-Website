import { NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";

// Initialize Anthropic client
const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY || "sk-placeholder",
});

export async function POST(req: Request) {
  try {
    const { message, history } = await req.json();

    // RAG Knowledge Base (Hardcoded for this demo, usually fetched from Pinecone)
    const companyContext = `
      You are the Inovex Tech Solutions AI Sales Concierge.
      
      ABOUT US:
      - We build custom AI automation, RAG chatbots, and Agentic SEO systems for B2B companies.
      - We don't do endless pilots. We scope, plan, and deliver within 21 days.
      
      OUR SERVICES:
      1. AI Automation (CRM syncing, human-handoffs).
      2. RAG Chatbots (Customer service bots that know company data).
      3. Agentic SEO (Bots that write content and rank websites automatically).
      
      OUR PRICING:
      - Foundation Setup (One-time): $1,500 to $3,000.
      - AI Visibility Retainer (Monthly): $1,000 to $2,500.
      - Custom Programmatic SEO / Enterprise: $5,000 to $15,000+.
      
      RULES FOR YOU:
      1. Be concise, highly professional, and slightly conversational.
      2. If asked about pricing, be transparent but encourage them to contact us for a scoping call.
      3. Never promise a feature we don't build. We only build AI/Automation.
      4. Always end by asking a relevant question to qualify the lead.
    `;

    // Map history to Anthropic format
    const formattedMessages = history
      .filter((msg: any) => msg.text !== "Hi! I'm the Inovex AI Concierge. What bottleneck can we automate for your business today?")
      .map((msg: any) => ({
        role: msg.role === "ai" ? "assistant" : "user",
        content: msg.text
      }));

    // Add the new message
    formattedMessages.push({ role: "user", content: message });

    if (process.env.ANTHROPIC_API_KEY) {
      const response = await anthropic.messages.create({
        model: "claude-3-5-haiku-20241022",
        max_tokens: 300,
        system: companyContext,
        messages: formattedMessages,
      });

      return NextResponse.json({ reply: response.content[0].text });
    } else {
      // Simulate reply if no API key is provided yet
      await new Promise(r => setTimeout(r, 1000));
      return NextResponse.json({ 
        reply: `[SIMULATED RESPONSE: No API key found]. Based on what you said, a custom RAG Chatbot starts around $1,500. Would you like to schedule a scoping call to map out the requirements?` 
      });
    }
  } catch (error) {
    console.error("Chat API Error:", error);
    return NextResponse.json(
      { reply: "Sorry, my circuits are a little overloaded right now. Please head over to the Contact page to reach our human team!" }, 
      { status: 500 }
    );
  }
}
