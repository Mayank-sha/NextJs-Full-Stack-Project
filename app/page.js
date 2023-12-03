import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 className="text-5xl mb-8 font-bold">NextJs Tutorial</h1>
      <Link href="/client" className="btn btn-accent">
        Let's get started
      </Link>
    </div>
  );
}
