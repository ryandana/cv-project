// app/blog/page.tsx
import Link from "next/link";
import { Blog } from "@/types/blog";
import { BlogContainer } from "./BlogContainer";

async function getBlogs(): Promise<Blog[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blogs`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch blogs: ${res.status}`);
  }

  const json = await res.json();

  // Case A: API returns { data: Blog[] }
  if (json && Array.isArray(json.data)) {
    return json.data;
  }

  // Case B: API returns { blogs: Blog[] }
  if (json && Array.isArray(json.blogs)) {
    return json.blogs;
  }

  // Case C: API returns a raw array
  if (Array.isArray(json)) {
    return json;
  }

  // Otherwise, we didn't get what we expected
  throw new Error(`Unexpected /blogs response shape: ${JSON.stringify(json)}`);
}

export default async function BlogPage() {
  const posts = await getBlogs();

  // Safety guard: render a friendly message if no array came back
  if (!Array.isArray(posts) || posts.length === 0) {
    return (
      <main className="min-h-screen px-2 sm:px-4 py-8 sm:py-12 bg-[var(--ctp-mocha-base)] text-[var(--ctp-mocha-text)]">
        <BlogContainer>
          <h1 className="text-4xl font-bold text-[var(--ctp-mocha-lavender)] mb-8 text-center">
            Blog Post
          </h1>
          <p className="text-center text-xl">No posts found.</p>
        </BlogContainer>
      </main>
    );
  }

  return (
    <main className="min-h-screen px-4 py-12 bg-[var(--ctp-mocha-base)] text-[var(--ctp-mocha-text)]">
      <BlogContainer>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--ctp-mocha-lavender)] mb-6 sm:mb-8 text-center px-4">
          Blog Post
        </h1>

        <div className="w-full">
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-7xl mx-auto px-2 sm:px-4 py-4 sm:py-8">
            {posts.map((post, index) => (
              <li
                key={post.id}
                data-index={index}
                className="bg-[var(--ctp-mocha-surface1)] rounded-lg p-4 sm:p-6 shadow-sm hover:shadow-lg transition-shadow duration-300 w-full blog-post-item"
              >
                <Link href={`/blog/${post.slug}`} className="block h-full">
                  {post.image_url ? (
                    <img
                      src={post.image_url}
                      alt={post.title || "Blog post image"}
                      className="w-full h-40 sm:h-48 object-cover rounded mb-3 sm:mb-4 blog-post-image"
                    />
                  ) : (
                    <div className="w-full h-40 sm:h-48 bg-gray-200 flex items-center justify-center text-gray-500 text-xs sm:text-sm rounded mb-3 sm:mb-4">
                      No image available
                    </div>
                  )}

                  <h2 className="text-lg sm:text-xl font-semibold text-center text-[var(--ctp-mocha-blue)] leading-snug blog-post-title">
                    {post.title}
                  </h2>
                  <p className="text-[var(--ctp-mocha-subtext0)] text-center mt-2 text-xs sm:text-sm line-clamp-3 blog-post-excerpt">
                    {post.excerpt}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </BlogContainer>
    </main>
  );
}