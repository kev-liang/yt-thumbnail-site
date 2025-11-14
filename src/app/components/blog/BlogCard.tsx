import { BlogPost } from "@/app/blog/blog-posts";
import BlogSubtitle from "@/app/components/blog/BlogSubtitle";
import { Card, CardContent, Typography, Box } from "@mui/material";
import Link from "next/link";

interface BlogCardProps {
  post: BlogPost;
}

export const BlogCard = ({ post }: BlogCardProps) => {
  return (
    <Link href={`blog/${post.slug}`} style={{ textDecoration: "none" }}>
      <Card
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          transition: "all 0.3s ease-in-out",
          "&:hover": {
            transform: "translateY(-2px)",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          },
          cursor: "pointer",
          borderRadius: 2,
          overflow: "hidden",
        }}
      >
        <Box sx={{ width: "100%", height: 200, overflow: "hidden" }}>
          <img
            src={post.image}
            alt={post.imageAlt || "blog image"}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </Box>

        <CardContent sx={{ flexGrow: 1, p: 3, pb: 2 }}>
          <Box sx={{ mb: 1.5 }}>
            <BlogSubtitle post={post} />
          </Box>

          <Typography
            variant="body1"
            color="text.secondary"
            sx={{
              lineHeight: 1.5,
              mb: 2,
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              color: "grey.400",
            }}
          >
            {post.description}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
};
