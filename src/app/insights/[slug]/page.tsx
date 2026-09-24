import fs from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

export async function generateStaticParams() {
  const contentDir = path.join(process.cwd(), 'src/content/articles');
  if (!fs.existsSync(contentDir)) return [];
  
  const files = fs.readdirSync(contentDir);
  return files
    .filter(file => file.endsWith('.json'))
    .map(file => ({
      slug: file.replace('.json', ''),
    }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const contentDir = path.join(process.cwd(), 'src/content/articles');
  const filePath = path.join(contentDir, `${params.slug}.json`);
  
  if (!fs.existsSync(filePath)) return {};
  
  const article = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  return {
    title: `${article.title} | Inovex Tech Solutions`,
    description: article.excerpt,
  };
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const contentDir = path.join(process.cwd(), 'src/content/articles');
  const filePath = path.join(contentDir, `${params.slug}.json`);

  if (!fs.existsSync(filePath)) {
    notFound();
  }

  const article = JSON.parse(fs.readFileSync(filePath, 'utf8'));

  return (
    <main className="min-h-screen pt-32 pb-32">
      <div className="max-w-3xl mx-auto px-6">
        <div className="mb-12 border-b border-white/10 pb-12">
          <div className="text-brand-primary font-mono text-sm mb-6">{article.date} • {article.author}</div>
          <h1 className="font-display font-bold text-4xl md:text-5xl text-white tracking-tight mb-6 leading-tight">
            {article.title}
          </h1>
          <p className="text-xl text-gray-400 font-light leading-relaxed">
            {article.excerpt}
          </p>
        </div>
        
        <div 
          className="prose prose-invert prose-brand max-w-none text-gray-300 leading-loose"
          dangerouslySetInnerHTML={{ __html: article.htmlContent }} 
        />
        
        {/* Agentic SEO Injection */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              "headline": article.title,
              "description": article.excerpt,
              "author": {
                "@type": "Organization",
                "name": article.author
              },
              "datePublished": article.date,
            })
          }}
        />
      </div>
    </main>
  );
}
