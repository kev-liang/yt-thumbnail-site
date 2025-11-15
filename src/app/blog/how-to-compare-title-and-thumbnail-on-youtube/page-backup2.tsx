"use client"; // or keep as server component if no interactivity

import { BlogPost } from "@/app/blog/blog-posts";
import MDXContent from "./page.mdx";
import { getBlogPostBySlug } from "@/utils/blogUtils";

export default function BlogPostPage() {
  const currBlogPost = getBlogPostBySlug(
    "how-to-compare-title-and-thumbnail-on-youtube"
  ) as BlogPost;

  return <MDXContent post={currBlogPost} />;
}
