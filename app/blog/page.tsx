// app/blog/page.tsx

import Link from 'next/link'
import { Blog } from '@/types/blog'

/**
 * Fetches blog posts from the API and normalizes the response
 * into a raw Blog[] array, throwing if the shape is unexpected.
 */
async function getBlogs(): Promise<Blog[]> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/blogs`,
    { next: { revalidate: 60 } }
  )

  if (!res.ok) {
    throw new Error(`Failed to fetch blogs: ${res.status}`)
  }

  const json = await res.json()

  // Case A: API returns { data: Blog[] }
  if (json && Array.isArray(json.data)) {
    return json.data
  }

  // Case B: API returns { blogs: Blog[] }
  if (json && Array.isArray(json.blogs)) {
    return json.blogs
  }

  // Case C: API returns a raw array
  if (Array.isArray(json)) {
    return json
  }

  // Otherwise, we didn’t get what we expected
  throw new Error(`Unexpected /blogs response shape: ${JSON.stringify(json)}`)
}

export default async function BlogPage() {
  const posts = await getBlogs()

  // Safety guard: render a friendly message if no array came back
  if (!Array.isArray(posts) || posts.length === 0) {
    return (
      <main className="min-h-screen px-4 py-12 bg-[var(--ctp-mocha-base)] text-[var(--ctp-mocha-text)]">
        <h1 className="text-4xl font-bold text-[var(--ctp-mocha-lavender)] mb-8 text-center">
          Blog
        </h1>
        <p className="text-center text-xl">No posts found.</p>
      </main>
    )
  }

  return (
    <main className="min-h-screen px-4 py-12 bg-[var(--ctp-mocha-base)] text-[var(--ctp-mocha-text)]">
      <h1 className="text-4xl font-bold text-[var(--ctp-mocha-lavender)] mb-8 text-center">
        Blog
      </h1>

      <ul className="grid gap-8 max-w-4xl mx-auto">
        {posts.map((post) => (
          <li
            key={post.id}
            className="bg-[var(--ctp-mocha-surface1)] rounded-lg p-6 hover:shadow-lg transition"
          >
            <Link
              href={`/blog/${post.slug}`}
              className="block"
            >
              {post.image_url && (
                <img
                  src={post.image_url}
                  alt={post.title}
                  className="w-full h-48 object-cover rounded mb-4"
                />
              )}

              <h2 className="text-2xl font-semibold text-center text-[var(--ctp-mocha-blue)]">
                {post.title}
              </h2>
              <p className="text-[var(--ctp-mocha-subtext0)] mt-2">
                {post.excerpt}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  )
}
