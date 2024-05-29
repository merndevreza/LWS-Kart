import WishListCard from "./WishListCard";

const WishList = () => {
   return (
      <div className="mx-auto space-y-4 max-w-6xl">
         <WishListCard/>
         <WishListCard/>
         <WishListCard/>
      </div>
   );
};

export default WishList;