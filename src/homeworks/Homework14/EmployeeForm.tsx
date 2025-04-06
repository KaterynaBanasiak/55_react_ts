import { useFormik } from "formik";
import * as Yup from "yup";
import Button from "../../components/Button/button";
import { FormContainer, InputField, Label, CheckboxWrapper } from "./styles.ts";

const validationSchema = Yup.object({
  fullName: Yup.string()
    .min(5, "Минимум 5 символов")
    .max(50, "Максимум 50 символов")
    .required("Обязательное поле"),
  age: Yup.number()
    .min(18, "Минимальный возраст — 18")
    .max(80, "Максимальный возраст — 80")
    .required("Обязательное поле"),
  terms: Yup.boolean()
    .oneOf([true], "Необходимо принять правила")
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
      />
      {formik.touched.fullName && formik.errors.fullName && <div>{formik.errors.fullName}</div>}

      <Label>Age</Label>
      <InputField
        name="age"
        type="number"
        onChange={formik.handleChange}
        value={formik.values.age}
      />
      {formik.touched.age && formik.errors.age && <div>{formik.errors.age}</div>}

      <CheckboxWrapper>
        <input
          type="checkbox"
          name="terms"
          onChange={formik.handleChange}
          checked={formik.values.terms}
        />
        <label htmlFor="terms">Правила использования</label>
      </CheckboxWrapper>
      {formik.touched.terms && formik.errors.terms && <div>{formik.errors.terms}</div>}

      <Button name="Create" type="submit" />
    </FormContainer>
  );
}

export default EmployeeForm;
