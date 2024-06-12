"use client";
import useCurrentLocale from "@/app/hooks/useCurrentLocale";
import BillingWidget from "./BillingWidget";
import ProfileWidget from "./ProfileWidget";
import ShippingWidget from "./ShippingWidget";
import { useRouter } from "next/navigation";

const AccountWrapper = ({ dictionary, session }) => {
  const locale = useCurrentLocale();
  const router = useRouter();
  if (!session?.user) {
   router.push(`${locale}/login`)
  }
  return (
    <div className="container  items-start gap-6 pt-4 pb-16">
      <div className="grid grid-cols-3 gap-4 mx-auto max-w-5xl">
        <ProfileWidget dictionary={dictionary} />
        <ShippingWidget dictionary={dictionary} />
        <BillingWidget dictionary={dictionary} />
      </div>
    </div>
  );
};

export default AccountWrapper;
