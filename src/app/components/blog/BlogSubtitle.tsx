import { BlogPost } from "@/app/blog/blog-posts";
import { Typography } from "@mui/material";

interface BlogSubtitleProps {
  post: BlogPost;
}

const BlogSubtitle = ({ post }: BlogSubtitleProps) => {
  return (
    <>
      <Typography
        sx={{
          color: "grey.400",
        }}
      >
        {post.duration} min. read | {post.date}
      </Typography>
    </>
  );
};

export default BlogSubtitle;
