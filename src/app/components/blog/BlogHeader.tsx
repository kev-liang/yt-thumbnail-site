import { Typography, Box } from "@mui/material";
import Image from "next/image";
import { BlogPost } from "@/app/blog/blog-posts";
import BlogSubtitle from "@/app/components/blog/BlogSubtitle";

interface BlogPostHeaderProps {
  post: BlogPost;
}

export const BlogPostHeader = ({ post }: BlogPostHeaderProps) => {
  return (
    <Box sx={{ maxWidth: 800, mx: "auto", mb: 4 }}>
      <Box sx={{ mb: 3 }}>
        <Typography
          variant="h2"
          sx={{
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          {post.title}
        </Typography>
        <Box sx={{ textAlign: "center", mt: 1 }}>
          <BlogSubtitle post={post} />
        </Box>
      </Box>

      <Box
        sx={{
          position: "relative",
          width: { xs: 320, sm: 480, md: 640, lg: 800 }, // 16:9 aspect ratio
          height: { xs: 180, sm: 270, md: 360, lg: 450 },
          mx: "auto",
          borderRadius: 2,
          overflow: "hidden",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        }}
      >
        <Image
          src={post.image}
          alt={post.title}
          fill
          style={{
            objectFit: "cover",
          }}
          priority
        />
      </Box>
    </Box>
  );
};
