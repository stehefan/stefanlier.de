import type {Metadata} from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Home of Stefan Lier",
    description: "Personal Website of Stefan Lier",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={'antialiased flex flex-col items-center'}>
        {children}
        </body>
        </html>
    );
}
