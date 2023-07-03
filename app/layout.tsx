import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
import { ClerkProvider } from "@clerk/nextjs";

// local imports
import { ModalProvider } from "@/providers/modal-provider";

export const metadata = {
  title: "Dashboard",
  description: "E-Commerce Dashboard",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang='en'>
        <body className={inter.className}>
          <ModalProvider />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
