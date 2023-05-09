'use client';

import { useEffect } from 'react';
import AOS from 'aos';

export function AOSProvider() {
  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);

  return null;
}
