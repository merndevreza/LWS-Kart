"use client";
import { credentialLogin } from "@/app/actions";
import { useRouter } from "next/navigation";
import { useState } from "react";
import LinkWithLocale from "../LinkWithLocale";

const LoginForm = ({ dictionary }) => {
  const [error, setError] = useState("");
  const router = useRouter();
  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData(event.currentTarget);
      const response = await credentialLogin(formData);
      if (!!response.error) {
        setError(response.error.message);
      } else {
        router.push("/");
      }
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <>
      {error && <div className="text-red-600">{error}</div>}
      <form onSubmit={onSubmit}>
        <div className="space-y-2">
          <div>
            <label htmlFor="email" className="text-gray-600 mb-2 block">
              {dictionary.emailAddress}
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
              placeholder="youremail.@domain.com"
            />
          </div>
          <div>
            <label htmlFor="password" className="text-gray-600 mb-2 block">
              {dictionary.password}
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
              placeholder="*******"
            />
          </div>
        </div>
        <div className="flex items-center justify-between mt-6">
          <div className="flex items-center">
            <input
              type="checkbox"
              name="remember"
              id="remember"
              className="text-primary focus:ring-0 rounded-sm cursor-pointer"
            />
            <label
              htmlFor="remember"
              className="text-gray-600 ml-3 cursor-pointer"
            >
              {dictionary.rememberMe}
            </label>
          </div>
          <LinkWithLocale href="#">
            <span className="text-primary">{dictionary.forgotPassword}</span>
          </LinkWithLocale>
        </div>
        <div className="mt-4">
          <button
            type="submit"
            className="block w-full py-2 text-center text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-medium"
          >
            {dictionary.login}
          </button>
        </div>
      </form>
    </>
  );
};

export default LoginForm;
