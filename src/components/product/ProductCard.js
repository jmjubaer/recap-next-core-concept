import Image from "next/image";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-gray-800 text-white p-4 rounded-lg shadow-lg w-full">
      <Image
        src={product.image}
        alt={product.product_name}
        width={250}
        height={250}
        className="rounded-lg object-cover w-full h-60"
      />
      <h2 className="text-lg font-bold mt-2">{product.product_name}</h2>
      <p className="text-sm text-gray-400">Brand: {product.brand}</p>
      <p className="text-sm text-gray-400">Category: {product.category}</p>
      <p className="text-lg font-semibold mt-2">${product.price}</p>
      <button className="mt-3 w-full bg-blue-600 hover:bg-blue-700 transition px-4 py-2 rounded-lg">
        Buy Now
      </button>
    </div>
  );
};

export default ProductCard;
