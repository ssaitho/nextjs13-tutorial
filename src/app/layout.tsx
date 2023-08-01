"use client";
import { useState } from "react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [count, setCount] = useState(0);

  return (
    <html lang="en">
      <body className={inter.className}>
        <h2>Header</h2>
        <button onClick={() => setCount(count + 1)}>+</button>
        <div>{count}</div>
        {children}
      </body>
    </html>
  );
}
