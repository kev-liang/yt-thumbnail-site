"use client";

import { useMDXComponents } from "@/mdx-components";
import { MDXProvider } from "@mdx-js/react";
import { ReactNode } from "react";

interface CustomMDXProviderProps {
  children: ReactNode;
}

export default function CustomMDXProvider({
  children,
}: CustomMDXProviderProps) {
  const components = useMDXComponents({});

  return <MDXProvider components={components}>{children}</MDXProvider>;
}
