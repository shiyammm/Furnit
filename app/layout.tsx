import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Furnit',
  description:
    'Various new collections of furniture to decorate the corner of your house.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
