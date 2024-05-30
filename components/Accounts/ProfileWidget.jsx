import { auth } from "@/auth";
import Logout from "../Auth/Logout";

const ProfileWidget = async ({ dictionary }) => {
  const session = await auth();
  return (
    <section className="shadow rounded bg-white px-4 pt-6 pb-8">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-medium text-gray-800 text-lg">
          {dictionary.personalProfile}
        </h3>
        <button className="text-primary">{dictionary.edit}</button>
      </div>
      {session?.user && (
        <div className="space-y-1">
          <h4 className="text-gray-700 font-medium">{session?.user.name}</h4>
          <p className="text-gray-800">{session?.user.email}</p>
          <p className="text-gray-800">{session?.user?.phone}</p>
          <div className="pt-4">
          <Logout/>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProfileWidget;
