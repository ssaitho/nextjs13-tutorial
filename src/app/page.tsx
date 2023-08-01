import './globals.css'
import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>home</h1>
      <Link href="/page1">
        <span className="bg-green-500 p-3 rounded text-xs text-white">page1へ</span>
      </Link>
    </>
  );
}
