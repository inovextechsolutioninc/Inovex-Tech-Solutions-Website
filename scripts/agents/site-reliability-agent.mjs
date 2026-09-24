import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import https from 'https';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function checkUrl(url) {
  return new Promise((resolve) => {
    // Skip internal relative links for this basic external check
    if (url.startsWith('/')) return resolve(true);
    
    https.get(url, (res) => {
      resolve(res.statusCode >= 200 && res.statusCode < 400);
    }).on('error', () => {
      resolve(false);
    });
  });
}

async function runSiteReliabilityAgent() {
  console.log("🤖 [Site Reliability Agent] Waking up...");
  console.log("🔍 Scanning content directory for broken links...");

  const contentDir = path.join(process.cwd(), 'src', 'content', 'articles');
  if (!fs.existsSync(contentDir)) {
    console.log("No articles found to scan.");
    return;
  }

  const files = fs.readdirSync(contentDir).filter(f => f.endsWith('.json'));
  let brokenLinksFound = 0;

  for (const file of files) {
    const filePath = path.join(contentDir, file);
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Extract hrefs using regex
    const linkRegex = /href="(https?:\/\/[^"]+)"/g;
    let match;
    
    while ((match = linkRegex.exec(content)) !== null) {
      const url = match[1];
      console.log(`Testing link: ${url}`);
      
      const isAlive = await checkUrl(url);
      if (!isAlive) {
        console.log(`❌ BROKEN LINK DETECTED in ${file}: ${url}`);
        brokenLinksFound++;
        
        // In a full agent setup, this is where you trigger Claude to rewrite the file
        // and remove or replace the broken link.
      }
    }
  }

  if (brokenLinksFound === 0) {
    console.log("✅ [Site Reliability Agent] Scan complete. 100% of links are healthy.");
  } else {
    console.log(`⚠️ [Site Reliability Agent] Found ${brokenLinksFound} broken links. Logging for Developer Agent review.`);
  }
}

runSiteReliabilityAgent();
