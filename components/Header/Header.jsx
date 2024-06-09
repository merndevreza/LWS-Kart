import Actions from "./Actions";
import Logo from "./Logo";
import Search from "./Search";

const Header = ({dictionary}) => {
  return (
    <header className="py-4 shadow-sm bg-white sticky left-0 top-0 w-full z-50">
      <div className="container flex items-center justify-between">
        <Logo />
        <Search dictionary={dictionary}/>
        <Actions dictionary={dictionary}/>
      </div>
    </header>
  );
};

export default Header;
