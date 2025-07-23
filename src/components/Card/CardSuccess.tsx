import type { CardSuccessPropsType } from "./Types";

export default function CardSuccess({ userName }: CardSuccessPropsType) {
  return (
    <div className="pt-[17px] pb-[10px] md:pb-[17px] px-[15px] max-w-[672px] z-10 text-center mx-auto">
      <div className="h-[48px] w-[48px] bg-button rounded-full mb-[10px] mx-auto flex items-center justify-center">
        <img
          src="/checkmark.svg"
          className="h-[20.2px] w-[27.9px] pt-[1px] pl-[2px]"
          alt=""
        />
      </div>
      <p className="font-bold text-[30px]/[1.3] tracking-[-0.3px] text-primary text-balance mb-[14px]">
        Thanks, {userName}! We'll be in touch soon.
      </p>
      <div className="py-[13px]">
        <p className="text-[18px]/[1.43] text-primary mb-[8px]">
          Don't want to wait for us to call?
          <br />
          Call us now to speak to a licensed agent.
        </p>
        <a
          href="tel:+15558675309"
          className="text-[30px]/[1.25] tracking-[-0.3px] font-bold underline text-phone-blue"
        >
          555-867-5309
        </a>
      </div>
    </div>
  );
}
