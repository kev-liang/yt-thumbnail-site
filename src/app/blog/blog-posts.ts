export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  duration: number;
  image: string;
  imageAlt?: string;
  tags?: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "how-to-compare-title-and-thumbnail-on-youtube",
    title: "How to Compare Title and Thumbnail on YouTube",
    description:
      "Learn how to compare your title and thumbnail on the YouTube site",
    date: "11/15/2025",
    duration: 4,
    image: "/images/blog/howto.png",
  },
];
