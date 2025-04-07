import axios from "axios";
import { useEffect, useState } from "react";
import Button from "../../components/Button/button";
import {
  Lesson13Container,
  ImagesContainer,
  ImageWrapper,
  ErrorMessage,
  StyledInput,
} from "./styles";

const API_URL = "https://dog.ceo/api/breeds/image/random";

function Lesson13() {
  const [images, setImages] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>("");

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

  const deleteAllImages = () => {
    setImages([]);
  };

  useEffect(() => {
    fetchImage();
  }, []);

  // каждый раз при вводе текста делаем запрос
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    fetchImage();
  };

  return (
    <Lesson13Container>
      <StyledInput
        type="text"
        placeholder="Type something..."
        value={inputValue}
        onChange={handleInputChange}
      />

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
