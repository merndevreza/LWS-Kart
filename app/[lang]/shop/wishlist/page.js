import WishlistProvider from "@/app/contextProvider/providers/WishlistProvider";
import BreadCrumb from "@/components/BreadCrumb";
import WishList from "@/components/WishList/WishList";

const WishlistPage = async () => {
  return (
    <main>
      <BreadCrumb pageTitle="Wishlist" />
      <WishlistProvider>
        <section className="container gap-6 pt-4 pb-16">
          <WishList/>
        </section>
      </WishlistProvider>
    </main>
  );
};

export default WishlistPage;
