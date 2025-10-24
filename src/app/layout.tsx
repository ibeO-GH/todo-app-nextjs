import type { Metadata } from "next";
import { ReactQueryProvider } from "@/lib/ReactQueryProvider";
import { cn } from "@/lib/utils";
import "@/styles/globals.css";

export const metadata = {
  title: "MyTodo App",
  description: "Todo app migrated to Next.js with React Query and Tailwind",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn("min-h-screen bg-gray-900 text-gray-100 font-sans")}>
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </body>
    </html>
  );
}
