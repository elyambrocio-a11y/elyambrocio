import Link from 'next/link';


export default function Profile() {
  return (
    <div className="min-h-screen bg-blue-100 flex flex-col items-center justify-center gap-5">


      <h1 className="text-3xl font-bold text-blue-700">
        My Profile
      </h1>


      <img
        src="/profile.jpg"
        alt="Ricardo Punzalan"
        className="w-40 h-40 object-cover rounded-full"
      />


      <h2 className="text-xl font-bold text-gray-800">
        Ricado B. Punzalan Jr
      </h2>


      <p className="text-gray-700">
        BSIT Student
      </p>


      <Link
        href="/"
        className="bg-blue-600 text-white font-bold px-8 py-3 rounded-lg hover:bg-blue-700"
      >
        Back
      </Link>


    </div>
  );
}