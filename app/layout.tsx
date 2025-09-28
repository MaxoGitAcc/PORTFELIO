import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import { Metadata} from "next";

export const metadata: Metadata = {
  title: "MAXO's PORFELIO",
  description: "Welcome to my portfolio website!",
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css"
          integrity="sha512-2SwdPD6INVrV/lHTZbO2nodKhrnDdJK9/kg2XD1r9uGqPo1cUbujc+IYdlYdEErWNu69gVcYgdxlmVmzTWnetw=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body className="bg-[#0a0c23] text-white">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
