export type FormDataType = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
};

export type CardFormPropsType = {
  showSuccess: React.Dispatch<React.SetStateAction<boolean>>;
  formData: FormDataType;
  setFormData: React.Dispatch<React.SetStateAction<FormDataType>>;
};

export type CardSuccessPropsType = {
  userName: string;
};

export type CardHeaderItemPropsType = {
  itemText: string;
};
