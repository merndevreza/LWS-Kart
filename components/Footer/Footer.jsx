import Copyright from "./Copyright";
import FooterLogo from "./FooterLogo";
import FooterNavWidgets from "./FooterNavWidgets";

const Footer = ({dictionary}) => {
  return (
    <footer>
      <div className="bg-white pt-16 pb-12 border-t border-gray-100">
        <div className="container grid grid-cols-1 ">
          <FooterLogo dictionary={dictionary}/>
          <FooterNavWidgets dictionary={dictionary}/>
        </div>
      </div>
      <Copyright dictionary={dictionary}/>
    </footer>
  );
};

export default Footer;
