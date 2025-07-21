export default function CardForm({
  showSuccess,
}: {
  showSuccess: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          showSuccess;
        }}
      ></form>
    </div>
  );
}
