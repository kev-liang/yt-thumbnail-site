import { BlogPostHeader } from "@/app/components/blog/BlogHeader";
import { Typography, Link as MuiLink, Box } from "@mui/material"; // Rename MUI Link
import { getBlogPostBySlug } from "@/utils/blogUtils";
import type { MDXComponents } from "mdx/types";
import { BlogPost } from "@/app/blog/blog-posts";
import Link from "next/link";
import Figure from "@/app/components/blog/Figure";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    BlogPostHeader: ({ slug }: { slug: string }) => {
      const currBlogPost = getBlogPostBySlug(slug) as BlogPost;
      return <BlogPostHeader post={currBlogPost} />;
    },
    // p: (props) => <Typography variant="body1" {...props} />,
    // li: (props) => <Typography variant="body1" component="li" {...props} />,
    // em: (props) => <Typography variant="body1" component="em" {...props} />,
    // strong: (props) => (
    //   <Typography
    //     variant="body1"
    //     component="p"
    //     sx={{ fontWeight: "bold" }}
    //     {...props}
    //   />
    // ),
    Figure,
    a: (props) => {
      // Use Next.js Link for internal links, MUI Link for styling
      const href = props.href as string;
      const target = props.target as string;
      const rel = props.rel as string;
      // const isExternal = true;
      const isExternal = href?.startsWith("http") || href?.startsWith("mailto");

      if (isExternal) {
        return (
          <MuiLink
            color="primary"
            underline="always"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              fontWeight: 500,
              "&:hover": {
                color: "primary.dark",
              },
            }}
            {...props}
          />
        );
      }

      // For internal links, wrap MuiLink with Next.js Link
      return (
        <MuiLink
          color="primary"
          underline="always"
          sx={{
            fontWeight: 500,
            "&:hover": {
              color: "primary.dark",
            },
          }}
          {...props}
        />
        // <Link href={href} passHref legacyBehavior>
        //   <Link
        //     color="primary"
        //     underline="always"
        //     sx={{
        //       fontWeight: 500,
        //       "&:hover": {
        //         color: "primary.dark",
        //       },
        //     }}
        //     {...props}
        //   />
        // </Link>
      );
    },
  };
}
