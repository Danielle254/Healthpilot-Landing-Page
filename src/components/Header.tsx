import logo from "../assets/logo.png";

export default function Header() {
  return (
    <header className="py-[16px] px-[15px] border-b-[1px] border-placeholder-gray h-[80px] md:h-[86px]">
      <div className="max-w-[1024px] flex items-center justify-between mx-auto">
        <img src={logo} alt="EverWell logo" className="w-[175px]" />
        <p className="italic text-header-gray text-[18px] hidden md:block">
          Your Medicare Personal Shopper
        </p>
        <a
          href="https://www.healthpilot.com"
          className="bg-button hover:bg-button-hover py-[12px] px-[14px] rounded-[10px] font-bold text-[18px]/[1.14] text-center sm:px-[24px] sm:w-[176px] text-white focus:outline-focus-blue focus:outline-[3px]"
        >
          Get Started
        </a>
      </div>
    </header>
  );
}
