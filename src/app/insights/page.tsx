import fs from 'fs';
import path from 'path';
import Link from 'next/link';

export default async function InsightsPage() {
  const contentDir = path.join(process.cwd(), 'src/content/articles');
  
  let articles = [];
  if (fs.existsSync(contentDir)) {
    const files = fs.readdirSync(contentDir);
    articles = files
      .filter(file => file.endsWith('.json'))
      .map(file => {
        const content = fs.readFileSync(path.join(contentDir, file), 'utf8');
        return JSON.parse(content);
      })
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }

  return (
    <main className="min-h-screen pt-32 pb-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <div className="inline-block px-3 py-1 text-sm font-mono text-brand-primary border border-brand-primary/30 rounded-full mb-6">
            Agentic Content
          </div>
          <h1 className="font-display font-bold text-5xl md:text-6xl text-white uppercase tracking-tight mb-6">
            Latest Insights
          </h1>
          <p className="text-xl text-gray-400 font-light max-w-2xl">
            Fully autonomous SEO content generated and published by our internal AI agents.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <Link key={article.slug} href={`/insights/${article.slug}`} className="bg-brand-surface border border-white/5 rounded-2xl p-8 hover:border-brand-primary/30 transition-all flex flex-col h-full group">
              <div className="text-brand-primary font-mono text-xs mb-4">{article.date}</div>
              <h2 className="text-xl font-bold text-white mb-4 group-hover:text-brand-primary transition-colors">{article.title}</h2>
              <p className="text-gray-400 mb-8 flex-grow">{article.excerpt}</p>
              <div className="text-sm font-semibold text-brand-cyan">Read Article →</div>
            </Link>
          ))}
          {articles.length === 0 && (
            <div className="col-span-full text-center py-20 border border-white/5 border-dashed rounded-2xl text-gray-500">
              No articles generated yet. Run the Autonomous SEO Agent.
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
