import { auth } from "@/auth";
import BreadCrumb from "@/components/BreadCrumb";
import WishList from "@/components/WishList/WishList";

const WishlistPage = async () => {
  const session = await auth();
  return (
    <main>
      <BreadCrumb pageTitle="Wishlist" /> 
        <section className="container gap-6 pt-4 pb-16">
          <WishList userId={session?.user?.id} />
        </section> 
    </main>
  );
};

export default WishlistPage;
