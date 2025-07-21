export default function CardForm({
  showSuccess,
}: {
  showSuccess: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const labelStyling = "text-primary-text font-semibold text-[18px]/[1.3]";
  const inputStyling =
    "border-[1px] border-placeholder-gray rounded-[15px] py-[10px] px-[20px] min-h-[60px] placeholder-placeholder-gray placeholder-[18px] focus:outline-focus-blue focus:outline-[3px]";
  return (
    <div className="py-[26px] px-[15px] max-w-[672px] mx-auto z-10">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          showSuccess;
        }}
        className="grid grid-cols-1 md:grid-cols-2 gap-[18px]"
      >
        <div className="flex flex-col gap-[5px]">
          <label htmlFor="firstName" className={labelStyling}>
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            placeholder="First Name"
            className={inputStyling}
          />
        </div>
        <div className="flex flex-col gap-[5px]">
          <label htmlFor="lastName" className={labelStyling}>
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            placeholder="Last Name"
            className={inputStyling}
          />
        </div>
        <div className="flex flex-col gap-[5px]">
          <label htmlFor="phone" className={labelStyling}>
            Phone Number<span className="text-warning-red pl-[3px]">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            placeholder="Phone Number"
            className={inputStyling}
          />
        </div>
        <div className="flex flex-col gap-[5px]">
          <label htmlFor="email" className={labelStyling}>
            Email<span className="text-warning-red pl-[3px]">*</span>
          </label>
          <input
            type="email"
            id="email"
            placeholder="Email Address"
            className={inputStyling}
          />
        </div>
        <input
          type="submit"
          className="bg-button text-white hover:bg-button-hover rounded-full w-full py-[12px] px-[24px] font-bold text-[18px]/[1.14] h-[50px] my-[36px] md:w-[288px] md:mx-auto md:col-span-2 md:my-[32px] focus:outline-focus-blue focus:outline-[3px]"
        />
      </form>
    </div>
  );
}
