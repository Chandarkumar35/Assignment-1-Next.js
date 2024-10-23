import Link from "next/link";

export default function Navbar() {
  return ( 
    <div className="flex items-center space-x-7 bg-blue-100 p-8 font-size-2xl m-4 border-blue-500 rounded font-bold text-center mb-4 text-center">

    <Link href="/" className="text-gray-800 hover:text-blue-500">Home</Link>
      <br />
      <Link href="/about"className="text-gray-800 hover:text-blue-500">About</Link>
      <br />
      <Link href="/jobs"className="text-gray-800 hover:text-blue-500">Job</Link>
      <br />
      <Link href="/jobs/programming"className="text-gray-800 hover:text-blue-500">Programming</Link>
    </div>
  );
}
