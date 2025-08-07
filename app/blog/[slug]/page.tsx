// app/blog/[slug]/page.tsx
import { Blog } from '@/types/blog';
import { notFound } from 'next/navigation';
import { BlogDetailContainer } from './BlogDetailContainer';

async function getBlog(slug: string): Promise<Blog | null> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blogs/${slug}`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) return null;
  return res.json();
}

export default async function BlogDetail(props: { params: { slug: string } }) {
  const { slug } = props.params;
  const post = await getBlog(slug);

  if (!post) return notFound();

  return (
    <main className="min-h-dvh px-4 py-12 bg-[var(--ctp-mocha-base)] text-[var(--ctp-mocha-text)] relative">
      <div className="absolute inset-0 w-full min-h-screen bg-[var(--ctp-mocha-surface0)] z-10 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      <BlogDetailContainer>
        <article className="z-20 relative max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-[var(--ctp-mocha-lavender)] mb-4 blog-title">
            {post.title}
          </h1>
          <time className="block text-[var(--ctp-mocha-subtext0)] mb-6 blog-date">
            {post.published_at}
          </time>
          {post.image_url && (
            <img
              src={post.image_url}
              alt={post.title}
              className="w-full h-64 object-cover rounded-md mb-6 blog-image"
            />
          )}
          {typeof post.content === 'string' && post.content.trim() !== '' ? (
            <div
              className="prose prose-invert prose-lg text-[var(--ctp-mocha-text)] blog-content"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          ) : (
            <p className="text-[var(--ctp-mocha-subtext0)] italic blog-content">
              No content available.
            </p>
          )}
        </article>
      </BlogDetailContainer>
    </main>
  );
}