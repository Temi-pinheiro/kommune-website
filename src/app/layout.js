'use client';
import { Toaster } from 'sonner';
import './globals.css';
import { useLayoutEffect } from 'react';

export default function RootLayout({ children }) {
  useLayoutEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;

      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);
  return (
    <html lang='en'>
      <body className={`  antialiased`}>
        <Toaster position='top-right' />
        {children}
      </body>
    </html>
  );
}
