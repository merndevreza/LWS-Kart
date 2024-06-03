import WishListCard from "./WishListCard";

const WishList = ({products,userId}) => {
   return (
      <div className="mx-auto space-y-4 max-w-6xl">
         {
            products.map(product=><WishListCard key={product.id} userId={userId} product={product}/>)
         }
          
      </div>
   );
};

export default WishList;