import Link from "next/link";

export default function Page1() {
  return (
    <>
      <h1>page1</h1>
      <Link href="/page2">page2へ</Link>
    </>
  );
}
