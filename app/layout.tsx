import './globals.css';

import type { Metadata } from 'next';
import { Suspense } from 'react';

import PostHogPageView from '@/PostHogPageView';

import { PHProvider } from './providers';

export const metadata: Metadata = {
    title: 'Home of Stefan Lier',
    description: 'Personal Website of Stefan Lier',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <PHProvider>
                <body className="antialiased">
                    <Suspense>
                        <PostHogPageView />
                    </Suspense>
                    {children}
                </body>
            </PHProvider>
        </html>
    );
}
