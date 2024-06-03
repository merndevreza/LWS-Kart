import { doSocialLogin } from "@/app/actions"; 

const SocialLogin = ({ title }) => { 
  return (
    <>
      <div className="mt-6 flex justify-center relative">
        <div className="text-gray-600 uppercase px-3 bg-white z-10 relative">
          {title}
        </div>
        <div className="absolute left-0 top-3 w-full border-b-2 border-gray-200"></div>
      </div>
      <form action={doSocialLogin} className="mt-4 flex gap-4">
          <button
            type="submit"
            name="action"
            value="fb"
            className="w-1/2 py-2 text-center text-white bg-blue-800 rounded uppercase font-roboto font-medium text-sm hover:bg-blue-700"
          >
            facebook
          </button>
          <button
            type="submit"
            name="action"
            value="google"
            className="w-1/2 py-2 text-center text-white bg-red-600 rounded uppercase font-roboto font-medium text-sm hover:bg-red-500"
          >
            google
          </button>
        </form>
    </>
  );
};

export default SocialLogin;
