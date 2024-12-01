import type { Metadata } from 'next';
import { PHProvider } from './providers';
import './globals.css';
import dynamic from 'next/dynamic';

export const metadata: Metadata = {
    title: 'Home of Stefan Lier',
    description: 'Personal Website of Stefan Lier',
};

const PostHogPageView = dynamic(() => import('./PostHogPageView'), {
    ssr: false,
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <PHProvider>
                <body className="antialiased flex flex-col items-center">
                    <PostHogPageView />
                    {children}
                </body>
            </PHProvider>
        </html>
    );
}
