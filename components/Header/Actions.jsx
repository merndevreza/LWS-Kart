// import WishlistIcon from "./WishlistIcon";
import CartIcon from "./CartIcon";
import AccountIcon from "./AccountIcon";

const Actions = ({ dictionary }) => {
  return (
    <div className="flex items-center space-x-4">
      {/* <WishlistIcon dictionary={dictionary} /> */}
      <CartIcon dictionary={dictionary} />
      <AccountIcon dictionary={dictionary} />
    </div>
  );
};

export default Actions;
