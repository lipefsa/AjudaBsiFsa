import { Analytics } from '@vercel/analytics/react';

export function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}