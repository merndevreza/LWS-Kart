const ProfileEditForm = ({ dictionary, user }) => {
  return (
    <div className="py-5">
      <h3 className="text-2xl text-center pb-2 text-black">Update Profile</h3>
      <form>
        <div className="space-y-2">
          <div>
            <label htmlFor="name" className="text-gray-600 mb-2 block">
              {dictionary.fullName}
            </label>
            <input
              type="text"
              name="name"
              defaultValue={user?.name}
              id="name"
              className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
              placeholder="fulan fulana"
            />
          </div>
          <div>
            <label htmlFor="email" className="text-gray-600 mb-2 block">
              {dictionary.emailAddress}
            </label>
            <input
              type="email"
              defaultValue={user?.email}
              name="email"
              id="email"
              className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
              placeholder="youremail.@domain.com"
            />
          </div>
          <div>
            <label htmlFor="phone" className="text-gray-600 mb-2 block">
              {dictionary.phoneNumber}
            </label>
            <input
              type="text"
              defaultValue={user?.phone}
              name="phone"
              id="phone"
              className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
              placeholder="Phone number"
            />
          </div>
        </div>
        <div className="mt-4">
          <button
            type="submit"
            className="block w-full py-2 text-center text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-medium"
          >
            Update Profile
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProfileEditForm;
