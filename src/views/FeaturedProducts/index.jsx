import FeaturedProduct from "@/components/FeaturedProduct";

const FeaturedProducts = ({allProducts}) => {
    // console.log(allProducts);
    const selectedObjects = [];
const uniqueCategories = new Set();
for (const obj of allProducts) {
  if (!uniqueCategories.has(obj.category)) {
    selectedObjects.push(obj);
    uniqueCategories.add(obj.category);
  }
}
    return (
        <section className="m-6">
            <h1 className="text-4xl font-bold">Featured Products</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6'>
            {selectedObjects.map(product=><FeaturedProduct key={product._id} product={product}></FeaturedProduct>)}
        </div>
        </section>
    );
};

export default FeaturedProducts;