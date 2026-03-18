import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Build My PC",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    
    <html lang="en">
      <head>
        <title>Build My PC</title>
        <link rel="icon" href="/favicon.ico" type="image/x-icon"/>
        <meta name="google-site-verification" content="UDZuWV0SY1Uvh9RdKcTEUGJ6otpWTZ_kHiUuZnp5B5c" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header />
        {children}
        <p className="prawa">© 2026 Build My PC. Wszelkie prawa zastrzeżone.<br></br>Kopiowanie i wykorzystywanie bez zgody autora jest zabronione.</p>
      </body>
    </html>
  );
}
