import Image from 'next/image';

const FeaturedProduct = () => {
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
  <figure>
    <Image src="https://i.ibb.co/6rj4618/amd-ryzen-5-5500-01-500x500.jpg" alt="Shoes" width="300" height="300" /></figure>
  <div className="card-body">
    <h2 className="card-title">
    productName
      <div className="badge badge-accent">category</div>
    </h2>
    <p>description</p>
    <div className='flex'>
    <div className="badge badge-outline mr-2">status</div>
      <div className="badge badge-outline">averageRating</div>
    </div>
    <div className="card-actions items-center justify-end mt-4">
        <p>price</p>
      <button className="btn btn-primary">See Details</button>
    </div>
  </div>
</div>
    );
};

export default FeaturedProduct;