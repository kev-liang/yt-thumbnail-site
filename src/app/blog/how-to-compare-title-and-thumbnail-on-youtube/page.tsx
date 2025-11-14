"use client";

import { BlogPost } from "@/app/blog/blog-posts";
import { BlogPostHeader } from "@/app/components/blog/BlogHeader";
import { getBlogPostBySlug } from "@/utils/blogUtils";
import { Typography } from "@mui/material";

const FirstPost = () => {
  const currBlogPost = getBlogPostBySlug(
    "how-to-compare-title-and-thumbnail-on-youtube"
  ) as BlogPost;

  return (
    <>
      {/* <Typography variant="h2" sx={{ fontWeight: "bold", textAlign: "center" }}>
        {currBlogPost.title}
      </Typography> */}
      <BlogPostHeader post={currBlogPost} />
    </>
  );
};

export default FirstPost;
