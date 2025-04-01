import { ChangeEvent, useEffect, useState } from "react";
import Input from "../../components/Input/Input"; // Импортируем компонент Input
import Button from "../../components/Button/button"; // Импортируем компонент Button
import { Homework11Container, Result } from "./styles"; // Импортируем стили
import Product from "../../components/Product/Product"; // Импортируем компонент карточки

function Homework11() {
  // State для хранения значений инпутов
  const [firstInputValue, setFirstInputValue] = useState<string>("");
  const [secondInputValue, setSecondInputValue] = useState<string>("");

  // State для отслеживания количества изменений первого Input
  const [changeCount, setChangeCount] = useState<number>(0);

  // State для переключения видимости карточки продукта
  const [showCard, setShowCard] = useState<boolean>(true);

  // Обработчик для первого Input
  const handleFirstInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFirstInputValue(event.target.value);
  };

  // Обработчик для второго Input
  const handleSecondInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSecondInputValue(event.target.value);
  };

  // Отслеживание изменений первого Input
  useEffect(() => {
    setChangeCount((prevCount) => prevCount + 1);
  }, [firstInputValue]); // Каждый раз, когда изменяется значение первого инпута, обновляется счётчик

  // Обработчик для отображения/скрытия карточки
  const showHideCard = () => {
    setShowCard((prevValue) => !prevValue);
  };

  return (
    <Homework11Container>
      <Result>Количество изменений первого Input: {changeCount}</Result>
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
      <Button onClick={showHideCard}>Показать/скрыть карточку</Button>
      {showCard && <Product productName="Apple" productPrice={2} />}
    </Homework11Container>
  );
}

export default Homework11;



