"use client";
const ErrorPage = ({ error, reset }) => {
    // reset is a function thar rerender this page
    return (
        <div className='text-4xl text-center text-red-500'>
            <p>Something went wrong</p>
            <p>{error.message}</p>
            <button
                onClick={reset}
                className='mt-3 text-white bg-red-600 hover:bg-blue-700 transition px-4 py-2 rounded-lg'>
                try again
            </button>
        </div>
    );
};

export default ErrorPage;
