import { useState } from "react";
import CardForm from "./CardForm";
import CardHeader from "./CardHeader";
import CardSuccess from "./CardSuccess";
import CardFooter from "./CardFooter";
import type { FormDataType } from "./Types";

const blankForm: FormDataType = {
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
};

export default function Card() {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [formData, setFormData] = useState(blankForm);

  return (
    <section className="rounded-[35px] mx-[15px] shadow-[0_4px_12px_0_#00000040] max-w-[768px] md:mx-auto bg-white z-10 relative">
      <CardHeader />
      {showSuccessMessage ? (
        <CardSuccess userName={formData.firstName} />
      ) : (
        <CardForm
          showSuccess={setShowSuccessMessage}
          formData={formData}
          setFormData={setFormData}
        />
      )}
      <CardFooter />
    </section>
  );
}
