import WishlistIcon from "./WishlistIcon";
import CartIcon from "./CartIcon";
import AccountIcon from "./AccountIcon";
import { auth } from "@/auth";

const Actions = async ({ dictionary }) => {
  const session = await auth();
  return (
    <div className="flex items-center gap-4">
      <WishlistIcon user={session?.user} dictionary={dictionary} />
      <CartIcon user={session?.user} dictionary={dictionary} />
      <AccountIcon dictionary={dictionary} />
    </div>
  );
};

export default Actions;
