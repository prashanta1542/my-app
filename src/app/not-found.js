import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Not Found</h2>
        <p className="text-lg mb-4">Could not find requested resource</p>
        <Link href="/">
          <p className="text-blue-500 hover:underline">Return Home</p>
        </Link>
      </div>
    </div>
  );
}
