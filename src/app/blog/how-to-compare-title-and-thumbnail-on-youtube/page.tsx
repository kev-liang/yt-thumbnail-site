import { BlogPostHeader } from "@/app/components/blog/BlogHeader";
import { getBlogPostBySlug } from "@/utils/blogUtils";
import PageMDX from "./content.mdx";
import CustomMDXProvider from "@/app/components/blog/MDXProvider";
import { Container } from "@mui/material";
import { type BlogPost } from "@/app/blog/blog-posts";

export default function BlogPost() {
  const currPost = getBlogPostBySlug(
    "how-to-compare-title-and-thumbnail-on-youtube"
  ) as BlogPost;

  return (
    <CustomMDXProvider>
      <BlogPostHeader post={currPost} />
      <Container maxWidth="sm">
        <PageMDX />
      </Container>
    </CustomMDXProvider>
  );
}
