import localFont from "next/font/local";
import { ThemeModeScript } from "flowbite-react";
import { DarkThemeToggle } from "flowbite-react";
import "./globals.css";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "HottuDogo",
  description: "Happy birthday to the cutest person in the world!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <ThemeModeScript />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-night-500`}
      >
        {children}
      </body>
    </html>
  );
}
