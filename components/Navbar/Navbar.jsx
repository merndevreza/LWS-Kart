import CategoryMenu from "./CategoryMenu";
import LangSwitcher from "./LangSwitcher";
import MainMenu from "./MainMenu";
import SignInOut from "./SignInOut";

const Navbar = ({dictionary}) => {
  return (
    <nav className="bg-gray-800">
      <div className="container flex">
        <CategoryMenu dictionary={dictionary}/>

        <div className="flex items-center justify-between flex-grow md:pl-12 py-5">
          <MainMenu  dictionary={dictionary}/>
          <div className="space-x-5">
          <SignInOut  dictionary={dictionary}/>
          <LangSwitcher/>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
