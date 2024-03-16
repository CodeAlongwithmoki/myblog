import Link from "next/link";
import "../styles/globals.css";
import { HtmlContext } from "next/dist/server/future/route-modules/app-page/vendored/contexts/entrypoints";

export const metadata = {
  title: "Moki",
  description: "Generated by Next.js",
};

const Header = (
  <header className=" flex flex-col items-center justify-center rounded-lg  h-32 text-center bg-slate-700 my-2 text-white ">
    <Link className="text-5xl font-bold" href="/">
      Moki's Blog
    </Link>
    <p className="pt-2">Welcome to my AWESOME blog</p>
  </header>
);

const Footer = (
  <footer className="text-center mt-4 mb-4">
    <p className="border-t border-slate-600 text-black">Developed by Moki</p>
  </footer>
);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="bg-[#fff]">
      <body className=" max-w-2xl mx-auto px-6">
        {Header} {children} {Footer}
      </body>
    </html>
  );
}
