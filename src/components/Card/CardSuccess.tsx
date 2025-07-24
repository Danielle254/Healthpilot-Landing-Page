import type { CardSuccessPropsType } from "./Types";

export default function CardSuccess({ userName }: CardSuccessPropsType) {
  return (
    <div className="pt-[17px] pb-[10px] md:pb-[17px] px-[15px] max-w-[672px] z-10 text-center mx-auto">
      <div className="h-12 w-12 bg-button rounded-full mb-[10px] mx-auto flex items-center justify-center">
        <img
          src="/checkmark.svg"
          className="h-[20.2px] w-[27.9px] pt-px pl-[2px]"
          alt=""
        />
      </div>
      <h2 className="font-bold text-3xl/[1.3] tracking-[-0.3px] text-primary text-balance mb-[14px] whitespace-pre-line">
        {`Thanks${
          userName.length > 0 ? `, ${userName}` : ""
        }!\nWe'll be in touch soon.`}
      </h2>
      <div className="py-[13px]">
        <p className="text-lg/[1.43] text-primary mb-2">
          Don't want to wait for us to call?
          <br />
          Call us now to speak to a licensed agent.
        </p>
        <a
          href="tel:+15558675309"
          className="text-3xl/[1.25] tracking-[-0.3px] font-bold underline text-phone-blue"
        >
          555-867-5309
        </a>
      </div>
    </div>
  );
}
