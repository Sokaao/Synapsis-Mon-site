"use client";

import { DotLottieReact } from '@lottiefiles/dotlottie-react';

interface LottieAnimationProps {
  src: string;
  width?: string;
  height?: string;
  loop?: boolean;
  autoplay?: boolean;
  className?: string;
}

export default function LottieAnimation({ 
  src, 
  width = '400px', 
  height = '400px',
  loop = true,
  autoplay = true,
  className = ''
}: LottieAnimationProps) {
  return (
    <DotLottieReact
      src={src}
      loop={loop}
      autoplay={autoplay}
      style={{ width, height }}
      className={className}
    />
  );
}