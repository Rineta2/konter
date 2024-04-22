import "@/components/sass/globals.scss";

import Head from '@/app/Head'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Head />
        {children}
      </body>
    </html>
  );
}
