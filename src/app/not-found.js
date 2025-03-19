import Link from "next/link";

const NotFound = () => {
    return (
        <div className='flex flex-col items-center justify-center h-screen bg-gray-900 text-white text-center'>
            <h1 className='text-6xl font-bold'>404</h1>
            <p className='text-xl mt-4'>
                Oops! The page you`re looking for doesn`t exist.
            </p>
            <Link
                href='/'
                className='mt-6 px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition'>
                Go Home
            </Link>
        </div>
    );
};

export default NotFound;
