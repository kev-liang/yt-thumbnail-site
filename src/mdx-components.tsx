import { BlogPostHeader } from "@/app/components/blog/BlogHeader";
import { Typography } from "@mui/material";
import { getBlogPostBySlug } from "@/utils/blogUtils";
import type { MDXComponents } from "mdx/types";
import { BlogPost } from "@/app/blog/blog-posts";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    BlogPostHeader: ({ slug }: { slug: string }) => {
      const currBlogPost = getBlogPostBySlug(slug) as BlogPost;
      return <BlogPostHeader post={currBlogPost} />;
    },
    p: (props) => <Typography variant="body1" {...props} />,
    li: (props) => <Typography variant="body1" component="li" {...props} />,
    em: (props) => <Typography variant="body1" component="em" {...props} />,
    strong: (props) => (
      <Typography variant="body1" component="strong" {...props} />
    ),
  };
}
