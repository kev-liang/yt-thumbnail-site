import { blogPosts } from "@/app/blog/blog-posts";

export const getBlogPostBySlug = (slug: string) => {
  return blogPosts.find((blogPost) => blogPost.slug === slug);
};
