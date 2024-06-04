import BreadCrumb from "@/components/BreadCrumb";
import WishList from "@/components/WishList/WishList";

const WishlistPage = () => {
  return (
    <main>
      <BreadCrumb pageTitle="Wishlist" />
      <section className="container gap-6 pt-4 pb-16">
        <WishList />
      </section>
    </main>
  );
};

export default WishlistPage;
