import { useState } from "react";
import CardForm from "./CardForm";
import CardHeader from "./CardHeader";
import CardSuccess from "./CardSuccess";

export default function Card() {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  return (
    <section className="rounded-[35px] mx-[15px] shadow-[0_4px_12px_0_#00000040] max-w-[768px] md:mx-auto">
      <CardHeader />
      {showSuccessMessage ? (
        <CardSuccess />
      ) : (
        <CardForm showSuccess={() => setShowSuccessMessage(true)} />
      )}
    </section>
  );
}
