import checkmark from "../../assets/checkmark.png";

export default function CardHeader() {
  return (
    <div className="bg-header-blue text-white py-[7px] flex flex-col items-center rounded-tl-[35px] rounded-tr-[35px]">
      <ul className="flex flex-col md:flex-row py-[9px] md:w-[664px] md:justify-between">
        <li className="py-[8px] px-[4px] flex flex-row gap-[6px] items-center">
          <img src={checkmark} className="h-[18px] w-[18px]" alt="checkmark" />
          <p className="text-[18px]/[1.4] font-bold">US-based agents</p>
        </li>
        <li className="py-[8px] px-[4px] flex flex-row gap-[6px] items-center">
          <img src={checkmark} className="h-[18px] w-[18px]" alt="checkmark" />
          <p className="text-[18px]/[1.4] font-bold">No pushy salespeople</p>
        </li>
        <li className="py-[8px] px-[4px] flex flex-row gap-[6px] items-center">
          <img src={checkmark} className="h-[18px] w-[18px]" alt="checkmark" />
          <p className="text-[18px]/[1.4] font-bold">No spam calls, EVER.</p>
        </li>
      </ul>
    </div>
  );
}
