'use client';
import './globals.css';
import { useLayoutEffect } from 'react';

export default function RootLayout({ children }) {
  useLayoutEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;

      const locomotiveScroll = new LocomotiveScroll();
    })();
    setTimeout(() => setLoading(false), 3000);
  }, []);
  return (
    <html lang='en'>
      <body className={`  antialiased`}>{children}</body>
    </html>
  );
}
