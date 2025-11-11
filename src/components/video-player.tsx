"use client";

import type { ComponentType } from "react";
import dynamic from "next/dynamic";

const ReactPlayer = dynamic(
  () => import("react-player").then((mod) => mod.default),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-full w-full items-center justify-center text-sm text-muted-foreground">
        Carregando player...
      </div>
    ),
  },
) as ComponentType<any>;

interface VideoPlayerProps {
  url: string;
  controls?: boolean;
}

export function VideoPlayer({ url, controls = true }: VideoPlayerProps) {
  return <ReactPlayer width="100%" height="100%" url={url} controls={controls} />;
}

