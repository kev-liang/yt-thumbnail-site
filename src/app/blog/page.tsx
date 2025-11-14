import { blogPosts } from "@/app/blog/blog-posts";
import { BlogCard } from "@/app/components/blog/BlogCard";
import { Box, Typography } from "@mui/material";

export default function BlogPage() {
  const posts = [
    { title: "My First Blog Post", href: "/blog/first-post" },
    { title: "My Second Post", href: "/blog/second-post" },
  ];

  return (
    <div>
      <Typography variant="h2" sx={{ fontWeight: "bold", textAlign: "center" }}>
        Blogs
      </Typography>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "1fr 1fr 1fr" },
          gap: 3,
          my: 3,
        }}
      >
        {blogPosts.map((post) => (
          <BlogCard post={post} key={post.slug} />
        ))}
      </Box>
    </div>
  );
}
