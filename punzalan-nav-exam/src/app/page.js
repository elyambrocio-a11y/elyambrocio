import Link from 'next/link';


export default function Home() {
  return (
    <div className="min-h-screen bg-blue-100 flex flex-col items-center justify-center gap-5">


      <Link
        href="/profile"
        className="bg-blue-600 text-white font-bold px-8 py-3 rounded-lg hover:bg-violet-700"
      >
        Go to Profile
      </Link>


      <Link
        href="/contact"
        className="bg-blue-600 text-white font-bold px-8 py-3 rounded-lg hover:bg-violet-700"
      >
        Go to Contact
      </Link>


    </div>
  );
}