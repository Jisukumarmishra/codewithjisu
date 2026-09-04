import "./globals.css";
import Navbar from "@/components/Navbar";
import ProgressBar from "@/components/ProgressBar";
import Footer from "@/components/Footer";

// 🔥 Step 1: ThemeProvider import kiya
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata = {
  title: "Jisu Kumar | MERN Developer | Full Stack Developer",
  description: "MERN Developer, Full Stack Developer and Problem Solver.",
  keywords: [
    "MERN",
    "Full Stack",
    "React",
    "Node.js",
    "Spring Boot",
    "React Native",
  ],
  authors: [{ name: "Jisu Kumar" }],
  openGraph: {
    title: "Jisu Kumar | MERN Developer | Full Stack Developer",
    description: "MERN Developer, Full Stack Developer and Problem Solver.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    // 🔥 Step 2: className="dark" hatakar suppressHydrationWarning lagaya
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=Inter:ital,wght@0,400;0,500;0,600;0,700;1,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {/* 🔥 Step 3: Sab kuch ThemeProvider me wrap kar diya */}
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <ProgressBar />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
