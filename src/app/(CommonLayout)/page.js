import ProductCard from "@/components/product/ProductCard";
import Link from "next/link";
import React from "react";
// When we use ( next: { revalidate: 30 } ) its  means its statically build the project after every 30 seconds
const MainPage = async () => {
    const res = await fetch("http://localhost:5000/products", {
        next: {
            revalidate: 30,
        },
    });
    const data = await res.json();
    return (
        <div>
            <div className='grid grid-cols-3 gap-10'>
                {data?.slice(0, 3).map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
            <div className='text-center mt-10'>
                <Link
                    className='mt-3 text-2xl w-full bg-blue-600 hover:bg-blue-700 transition px-4 py-2 rounded-lg'
                    href='/products'>
                    Load More
                </Link>
            </div>
        </div>
    );
};

export default MainPage;
