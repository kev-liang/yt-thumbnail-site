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
      <BlogPostHeader post={currBlogPost} />
      <Typography variant="body1">
        This guide is for people who want to see how their YouTube video’s title
        and thumbnail compare to others.
      </Typography>
    </>
  );
};

export default FirstPost;
