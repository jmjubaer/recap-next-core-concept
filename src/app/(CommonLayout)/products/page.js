import ProductCard from "@/components/product/ProductCard";
import styles from "./Product.module.css";
export const metadata = {
    title: "Product",
};
// When we use (cache: "force-cache" ) its  means its statically build when build the project.
// When we use ( next: { revalidate: 30 } ) its  means its statically build the project after every 30 seconds
// When we use ( cache: "no-store") its  means its dynamically build the project after every request
const ProductsPage = async () => {
    const res = await fetch("http://localhost:5000/products", {
        cache: "no-store",
    });
    const data = await res.json();
    return (
        <div className={styles.text_style}>
            Products Page
            <div className='grid grid-cols-3 gap-10'>
                {data?.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default ProductsPage;
