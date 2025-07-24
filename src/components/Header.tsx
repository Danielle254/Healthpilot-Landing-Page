export default function Header() {
  return (
    <header className="py-4 px-[15px] border-b-1 border-placeholder-gray h-20 md:h-[86px] flex flex-col justify-center">
      <div className="max-w-256 w-full flex items-center justify-between mx-auto">
        <img src="/logo.png" alt="EverWell logo" className="w-[175px]" />
        <p className="italic text-header-gray text-lg hidden md:block">
          Your Medicare Personal Shopper
        </p>
        <a
          href="https://www.healthpilot.com"
          className="bg-button hover:bg-button-hover py-3 px-[14px] rounded-[10px] font-bold text-lg/[1.14] text-center sm:px-6 sm:w-[176px] text-white focus:outline-focus-blue focus:outline-[3px]"
        >
          Get Started
        </a>
      </div>
    </header>
  );
}
