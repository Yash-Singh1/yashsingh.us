'use client';

import { useEffect } from 'react';
import posthog from 'posthog-js';

export function PostHogProvider() {
  useEffect(() => {
    posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!);
  }, []);

  return null;
}
