import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'DSE Official Boutique - Premium Ladies Tailoring Services',
  description: 'Premium boutique and tailoring services for ladies in New Delhi. Designer blouses, salwar suits, lehengas, and more. Expert craftsmanship with personalized service.',
  keywords: 'boutique, tailoring, ladies, designer, blouse, salwar suit, lehenga, anarkali, New Delhi',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" async></script>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}