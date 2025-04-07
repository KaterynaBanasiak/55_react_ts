import { useFormik } from "formik";
import * as Yup from "yup";
import Button from "../Button/button.tsx";
import {
  FormContainer,
  InputField,
  Label,
  CheckboxWrapper,
  ErrorText,
} from "../../homeworks/Homework14/styles.ts";

const validationSchema = Yup.object({
  fullName: Yup.string()
    .required("Обязательное поле")
    .min(5, "Минимум 5 символов")
    .max(50, "Максимум 50 символов"),
  age: Yup.number()
    .required("Обязательное поле")
    .min(18, "Минимальный возраст — 18")
    .max(80, "Максимальный возраст — 80"),
  terms: Yup.boolean()
    .oneOf([true], "Необходимо принять правила"),
});

function EmployeeForm() {
  const formik = useFormik({
    initialValues: {
      fullName: "",
      age: "",
      terms: false,
    },
    validationSchema,
    onSubmit: (values) => {
      console.log("Данные формы:", values);
    },
  });

  return (
    <FormContainer onSubmit={formik.handleSubmit}>
      <Label>Full Name</Label>
      <InputField
  name="fullName"
  type="text"
  onChange={formik.handleChange}
  value={formik.values.fullName}
  error={!!(formik.touched.fullName && formik.errors.fullName)}
/>
      {formik.touched.fullName && formik.errors.fullName && (
        <ErrorText>{formik.errors.fullName}</ErrorText>
      )}

      <Label>Age</Label>
      <InputField
  name="age"
  type="number"
  onChange={formik.handleChange}
  value={formik.values.age}
  error={!!(formik.touched.age && formik.errors.age)}
/>

      {formik.touched.age && formik.errors.age && (
        <ErrorText>{formik.errors.age}</ErrorText>
      )}

      <CheckboxWrapper>
        <input
          type="checkbox"
          name="terms"
          onChange={formik.handleChange}
          checked={formik.values.terms}
        />
        <label htmlFor="terms">Правила использования</label>
      </CheckboxWrapper>
      {formik.touched.terms && formik.errors.terms && (
        <ErrorText>{formik.errors.terms}</ErrorText>
      )}

      <Button name="Create" type="submit" />
    </FormContainer>
  );
}

export default EmployeeForm;
