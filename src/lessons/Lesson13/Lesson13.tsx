import axios from "axios";
import { useEffect, useState } from "react";
import Button from "../../components/Button/button";
import {
  Lesson13Container,
  ImagesContainer,
  ImageWrapper,
  ErrorMessage,
} from "./styles";

const API_URL = "https://dog.ceo/api/breeds/image/random";

function Lesson13() {
  const [images, setImages] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Функция для запроса изображения
  const fetchImage = async () => {
    setError(null);
    setIsLoading(true);
    try {
      const response = await axios.get(API_URL);
      setImages((prevImages) => [...prevImages, response.data.message]);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  // Очистка всех изображений
  const deleteAllImages = () => {
    setImages([]);
  };

  // Запрос при загрузке страницы
  useEffect(() => {
    fetchImage();
  }, []);

  return (
    <Lesson13Container>
      <Button onClick={fetchImage} disabled={isLoading}>
        GET MORE IMAGES
      </Button>

      {images.length > 0 && (
        <Button onClick={deleteAllImages}>DELETE ALL DATA</Button>
      )}

      {error && <ErrorMessage>{error}</ErrorMessage>}

      <ImagesContainer>
        {images.map((img, index) => (
          <ImageWrapper key={index} src={img} alt="Dog" />
        ))}
      </ImagesContainer>
    </Lesson13Container>
  );
}

export default Lesson13;
