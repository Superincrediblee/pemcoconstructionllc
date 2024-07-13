import type { Metadata } from 'next';
import CssBaseline from '@mui/material/CssBaseline';
import NavBar from '@/components/nav/NavBar';
import './globals.css';
import Footer from '@/components/footer';

export const metadata: Metadata = {
  title: 'Pemco Construction LLC',
  description:
    'Providing premium maintenance services with exceptional customer service across Alabama, Georgia, e.t.c . Our experienced technicians deliver professionalism and integrity for all your mainteinance repair needs',
  icons: {
    icon: [`favicon.ico`],
    apple: [`apple-touch-icon.png`],
    shortcut: [`apple-touch-icon.png`],
  },
  manifest: `site.webmanifest`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <CssBaseline />
      <body>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
