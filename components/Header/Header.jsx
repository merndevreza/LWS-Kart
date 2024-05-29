import Actions from "./Actions";
import Logo from "./Logo";
import Search from "./Search";

const Header = ({dictionary}) => {
  return (
    <header className="py-4 shadow-sm bg-white">
      <div className="container flex items-center justify-between">
        <Logo />
        <Search dictionary={dictionary}/>
        <Actions dictionary={dictionary}/>
      </div>
    </header>
  );
};

export default Header;
