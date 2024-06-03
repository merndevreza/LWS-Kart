import { auth } from "@/auth";
import BreadCrumb from "@/components/BreadCrumb";
import WishList from "@/components/WishList/WishList";
import { getWishlistProducts } from "@/database/queries/queries";

const WishlistPage = async () => {
  const session = await auth();
  const products = await getWishlistProducts(session?.user?.id);
  console.log(products);
  return (
    <main>
      <BreadCrumb pageTitle="Wishlist" />
      <section className="container gap-6 pt-4 pb-16">
        <WishList userId={session?.user?.id} products={products} />
      </section>
    </main>
  );
};

export default WishlistPage;
