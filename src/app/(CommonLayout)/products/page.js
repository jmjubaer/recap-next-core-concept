import ProductCard from '@/components/product/ProductCard';
import styles from './Product.module.css';
export const metadata = {
    title: "Product",
};
// When we use (cache: "force-cache" ) its  means its statically build when build the project.
const ProductsPage = async() => {
    const res = await fetch('http://localhost:5000/products',{
        cache: "force-cache"
    });
    const data = await res.json();
    console.log(data);
    return (
        <div className={styles.text_style}>
            Products Page
            <div className="grid grid-cols-3 gap-10">
        {
            data?.map(product => <ProductCard key={product.id} product={product}/>)
        }
            </div>
        </div>
    );
};

export default ProductsPage;