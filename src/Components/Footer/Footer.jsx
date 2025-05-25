import logo from "../../assets/images/logo.png";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div>
        <div className="flex items-center justify-center">
            <hr className="h-px w-4/5 bg-gray-400 opacity-50 outline-none border-1" />
        </div>
        <div className="flex items-center justify-around pt-4">
            <div>
                <img src={logo} alt="logo" className="h-20"/>
            </div>
            <div>
                <p className="text-black text-sm font-[inter] normal-case no-underline">Copyright &copy; {year} page by Ayan</p>
            </div>
        </div>
    </div>
  )
};

export default Footer;
