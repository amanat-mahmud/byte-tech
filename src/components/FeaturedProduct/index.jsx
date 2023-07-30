import Image from 'next/image';

const FeaturedProduct = ({product}) => {
  const {_id,image,productName,category,description,status,averageRating,price} = product;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
  <figure>
    <Image src={image} alt="Shoes" width="300" height="300" /></figure>
  <div className="card-body">
    <h2 className="card-title">
    {productName}
      <div className="badge badge-accent">{category}</div>
    </h2>
    <p>{description.slice(0,100)+"..."}</p>
    <div className='flex'>
    <div className="badge badge-outline mr-2">{status}</div>
      <div className="badge badge-outline">{averageRating}</div>
    </div>
    <div className="card-actions items-center justify-end mt-4">
        <p>{price}</p>
      <button className="btn btn-primary">See Details</button>
    </div>
  </div>
</div>
    );
};

export default FeaturedProduct;