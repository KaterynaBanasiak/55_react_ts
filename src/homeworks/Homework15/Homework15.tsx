import { useFormik } from "formik";
import * as Yup from "yup";

import Input from "../../components/Input/Input";
import Checkbox from "../../components/Checkbox/Checkbox";
import { Homework15Wrapper } from "./styles";
import Button from "../../components/Button/button";

interface FormValues {
  code: string;
  agreement: boolean;
}

const validationSchema = Yup.object().shape({
  code: Yup.string()
    .required("Validation code is required")
    .matches(/^\d{6}$/, "Code must be exactly 6 digits"),
  agreement: Yup.boolean()
    .oneOf([true], "You must accept privacy and policy")
});

function Homework15() {
  const formik = useFormik<FormValues>({
    initialValues: {
      code: "",
      agreement: false
    },
    validationSchema,
    validateOnChange: false,
    onSubmit: () => {
      console.log("Вы успешно вошли");
    }
  });

  return (
    <Homework15Wrapper onSubmit={formik.handleSubmit}>
      <Input
        name="code"
        label="Validation code *"
        id="code_id"
        placeholder="Enter 6-digit code"
        type="number"
        value={formik.values.code}
        onChange={formik.handleChange}
        error={formik.errors.code}
      />

      <Checkbox
        id="agreement"
        name="agreement"
        label="Privacy and policy"
        checked={formik.values.agreement}
        onChange={formik.handleChange}
        error={formik.errors.agreement}
      />

      <Button type="submit">Login</Button>
    </Homework15Wrapper>
  );
}

export default Homework15;
