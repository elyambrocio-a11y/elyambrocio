import Link from 'next/link';


export default function Contact() {
  return (
    <div className="min-h-screen bg-blue-100 flex flex-col items-center justify-center gap-5">


      <h1 className="text-3xl font-bold text-blue-700">
        Contact
      </h1>


      <h2 className="text-xl font-bold text-gray-800">
        Ricardo B. Punzalan Jr
      </h2>


      <p className="text-gray-700">
        Gmail: ricardo.punzalanjr@hcdc.edu.ph
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