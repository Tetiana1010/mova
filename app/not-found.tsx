import Link from 'next/link';
 
export default function NotFound() {
  return (
    <div className='container flex items-center justify-center min-h-screen'>
      <div className='flex items-center divide-x'>
        <h1 className='text-xl px-2'>404</h1>
        <div className='text-sm px-2'>
          <h2>This page could not be found.</h2>
          <Link href="/" className='text-xs text-gray-600 hover:text-gray-800'>
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
};