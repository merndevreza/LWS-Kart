import BreadCrumb from "@/components/BreadCrumb";
import CheckoutForm from "@/components/Checkout/CheckoutForm";
import CheckoutSummary from "@/components/Checkout/CheckoutSummary";

const CheckoutPage = () => {
  return (
    <main>
      <BreadCrumb pageTitle="Checkout" />
      <div className="container grid grid-cols-12 items-start pb-16 pt-4 gap-6">
        <section className="col-span-8 border border-gray-200 p-4 rounded">
          <h3 class="text-lg font-medium capitalize mb-4">Checkout</h3>
          <CheckoutForm />
        </section>
        <CheckoutSummary />
      </div>
    </main>
  );
};

export default CheckoutPage;
