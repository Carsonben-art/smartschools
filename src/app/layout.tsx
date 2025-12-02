import type { Metadata } from 'next';
import MuiProvider from '../components/providers/MuiProviders';

export const metadata: Metadata = {
  title: 'Bureti SmartSchools',
  description: 'Smart. Simple. School Management.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <MuiProvider>{children}</MuiProvider>
      </body>
    </html>
  );
}
