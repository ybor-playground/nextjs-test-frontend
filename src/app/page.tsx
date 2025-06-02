import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#121212] text-white font-[family-name:var(--font-geist-sans)]">
      <div className="w-full max-w-md bg-white text-black rounded-lg shadow-lg p-6 mt-12">
        <h1 className="text-2xl font-mono text-center mb-6">
          <Image
            src="/ybor-logo.svg"
            alt="Ybor Tech logo"
            width={180}
            height={38}
            priority
          />
        </h1>

        <div className="space-y-4 mb-6">
          <p className="font-mono text-sm">
            1. GET STARTED BY EDITING{" "}
            <span className="rounded bg-gray-100 px-2 py-1">
              SRC/APP/PAGE.TSX
            </span>
          </p>
          <p className="font-mono text-sm">
            2. SAVE AND SEE YOUR CHANGES INSTANTLY
          </p>
        </div>

        <Link
          href="https://developer.p6m.dev/"
          className="w-full bg-[#1a1a1a] text-white visited:text-white active:text-white py-3 rounded flex items-center justify-center mb-4 hover:bg-[#2a2a2a] transition-colors gap-x-2"
          target="_blank"
        >
          <span>Deploy Now</span>
          <Image
            aria-hidden
            src="/rocket.svg"
            alt="File icon"
            width={16}
            height={16}
          />
        </Link>

        <Link
          href="https://developer.p6m.dev/"
          className="w-full block bg-[#f5f5f5] text-black py-3 rounded hover:bg-[#e5e5e5] transition-colors text-center"
          target="_blank"
        >
          Read our Docs
        </Link>
      </div>

      <div className="flex items-center justify-center space-x-6 mt-auto py-6">
        <Link
          href="https://nextjs.org/learn" // Building Next.js project covering foundations
          className="flex items-center text-sm text-gray-400 hover:text-white transition-colors gap-x-2"
          target="_blank"
        >
          <Image
            aria-hidden
            src="/learn.svg"
            alt="Learn icon"
            width={16}
            height={16}
          />{" "}
          Learn
        </Link>
        <Link
          href="https://nextjs.org/docs/app/guides" // Specific guides for Next.js (e.g., routing, data fetching, auth)
          className="flex items-center text-sm text-gray-400 hover:text-white transition-colors gap-x-2"
          target="_blank"
        >
          <Image
            aria-hidden
            src="/app.svg"
            alt="Window icon"
            width={16}
            height={16}
          />{" "}
          Examples
        </Link>
        <Link
          href="https://nextjs.org"
          className="flex items-center text-sm text-gray-400 hover:text-white transition-colors gap-x-2"
          target="_blank"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />{" "}
          Go to nextjs.org
        </Link>
      </div>
    </div>
  );
}