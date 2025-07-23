import type { CardHeaderItemPropsType } from "./Types";

const cardHeaderText: string[] = [
  "US-based agents",
  "No pushy salespeople",
  "No spam calls, EVER.",
];

export default function CardHeader() {
  return (
    <div className="bg-header-blue text-white py-[7px] flex flex-col items-center rounded-tl-[35px] rounded-tr-[35px]">
      <ul className="flex flex-col md:flex-row py-[9px] md:w-[664px] md:justify-between">
        {cardHeaderText.map((item) => (
          <CardHeaderItem itemText={item} />
        ))}
      </ul>
    </div>
  );
}

function CardHeaderItem({ itemText }: CardHeaderItemPropsType) {
  return (
    <li className="py-[8px] px-[4px] list-image-[url(/checkmark.svg)]">
      <p className="text-[18px]/[1.4] pl-[6px] font-bold">{itemText}</p>
    </li>
  );
}
