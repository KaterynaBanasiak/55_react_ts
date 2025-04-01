import { ChangeEvent, useState } from "react";
import Input from "../../components/Input/Input"; 
import { Homework11Container, Result } from "./styles"; 

function Homework11() {
  const [firstInputValue, setFirstInputValue] = useState<string>("");
  const [secondInputValue, setSecondInputValue] = useState<string>("");

  const handleFirstInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFirstInputValue(event.target.value);
  };

  const handleSecondInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSecondInputValue(event.target.value);
  };

  return (
    <Homework11Container>
      <Result>Количество изменений первого Input: {firstInputValue.length}</Result>
      <Input
        name="firstInput"
        value={firstInputValue}
        onChange={handleFirstInputChange}
        placeholder="Введите текст для первого инпута"
      />
      <Input
        name="secondInput"
        value={secondInputValue}
        onChange={handleSecondInputChange}
        placeholder="Введите текст для второго инпута"
      />
    </Homework11Container>
  );
}

export default Homework11;
