import LinkWithLocale from "@/components/LinkWithLocale";

const NotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center space-y-5 w-full h-screen">
      <h2 className="text-3xl text-center">
        <span className="block mb-3">Oops!</span>Page not found
      </h2>
      <LinkWithLocale href="/">
        <span className="bg-[#00D991] px-2 py-1 rounded text-black">
          Go Home
        </span>
      </LinkWithLocale>
    </div>
  );
};

export default NotFound;
