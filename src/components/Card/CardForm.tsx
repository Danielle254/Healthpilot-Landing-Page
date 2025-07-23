import type { CardFormPropsType } from "./Types";

export default function CardForm({
  showSuccess,
  formData,
  setFormData,
}: CardFormPropsType) {
  function handleFormChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  type CardFormInputPropsType = {
    name: string;
    value: keyof typeof formData;
    text: string;
    type: string;
    placeholder: string;
    required: boolean;
    validation: [boolean, string?, string?];
    handleFormChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  };

  type InputDataType = {
    name: string;
    value: keyof typeof formData;
    text: string;
    type: string;
    placeholder: string;
    required: boolean;
    validation: [boolean, string?, string?];
  };

  const formInputData: InputDataType[] = [
    {
      name: "firstName",
      value: "firstName" as keyof typeof formData,
      text: "First Name",
      type: "text",
      placeholder: "First Name",
      required: false,
      validation: [false],
    },
    {
      name: "lastName",
      value: "lastName" as keyof typeof formData,
      text: "Last Name",
      type: "text",
      placeholder: "Last Name",
      required: false,
      validation: [false],
    },
    {
      name: "phone",
      value: "phone" as keyof typeof formData,
      text: "Phone Number",
      type: "tel",
      placeholder: "Phone Number",
      required: true,
      validation: [
        true,
        "[0-9]{10}",
        "Please enter a 10 digit phone number with no dashes",
      ],
    },
    {
      name: "email",
      value: "email" as keyof typeof formData,
      text: "Email",
      type: "email",
      placeholder: "Email Address",
      required: true,
      validation: [false],
    },
  ];

  function CardFormInput({
    name,
    value,
    text,
    type,
    placeholder,
    required,
    validation,
    handleFormChange,
  }: CardFormInputPropsType) {
    return (
      <div className="flex flex-col gap-[5px]">
        <label
          htmlFor="phone"
          className="text-primary font-semibold text-lg/[1.3]"
        >
          {text}
          {required && <span className="text-warning-red pl-[3px]">*</span>}
        </label>
        <input
          type={type}
          id={name}
          name={name}
          value={formData[value]}
          placeholder={placeholder}
          className="border-[1px] border-placeholder-gray rounded-[15px] py-[10px] px-[20px] min-h-[60px] placeholder:placeholder-gray placeholder:text-lg focus:outline-focus-blue focus:outline-[3px]"
          onChange={handleFormChange}
          required={required ? required : undefined}
          pattern={validation[0] ? validation[1] : undefined}
          title={validation[0] ? validation[2] : undefined}
        />
      </div>
    );
  }

  return (
    <div className="py-[26px] px-[15px] max-w-[672px] mx-auto z-10">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          showSuccess(true);
        }}
        className="grid grid-cols-1 md:grid-cols-2 gap-[18px]"
      >
        {formInputData.map((input) => (
          <CardFormInput
            name={input.name}
            value={input.value}
            text={input.text}
            type={input.type}
            placeholder={input.placeholder}
            required={input.required}
            validation={input.validation}
            handleFormChange={handleFormChange}
          />
        ))}
        <input
          type="submit"
          className="bg-button text-white hover:bg-button-hover rounded-full w-full py-[12px] px-[24px] font-bold text-lg/[1.14] h-[50px] mt-[36px] mb-[18px] md:w-[288px] md:mx-auto md:col-span-2 md:mt-[32px] md:mb-[16px] focus:outline-focus-blue focus:outline-[3px] cursor-pointer"
        />
      </form>
    </div>
  );
}
