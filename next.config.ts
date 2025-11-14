import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(webm)$/,
      type: "asset/resource",
    });
    return config;
  },
  // Add page extensions for MDX
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
};

// Simply wrap with MDX - no ContentLayer needed
const withMDX = createMDX({
  // Add MDX options here if needed
});

export default withMDX(nextConfig);
