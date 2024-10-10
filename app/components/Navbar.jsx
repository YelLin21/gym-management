import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 p-4 shadow-lg fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">
          <Link href="/">Gym Manager</Link>
        </div>
        <div className="space-x-4">
          <Link href="/" className="text-white hover:bg-blue-500 px-3 py-2 rounded-md">
            Home
          </Link>
          <Link href="/member" className="text-white hover:bg-blue-500 px-3 py-2 rounded-md">
             Member
          </Link>
          <Link href="/plan" className="text-white hover:bg-blue-500 px-3 py-2 rounded-md">
            Plan
          </Link>
          <Link href="/staff" className="text-white hover:bg-blue-500 px-3 py-2 rounded-md">
            Staff
          </Link>
        </div>
      </div>
    </nav>
  );
}
