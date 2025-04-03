import { useEffect, useState } from "react";
import axios from "axios";
import Button from "../../components/Button/button";
import Input from "../../components/Input/Input";
import Spinner from "../../components/Spinner/Spinner";
import { Lesson13Container, ImageWrapper, ErrorMessage } from "./styles";

const IMAGE_URL = "https://dog.ceo/api/breeds/image/random";

function Lesson13() { 
    const [image, setImage] = useState<string>("");
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [query, setQuery] = useState<string>("");

    const fetchImage = async () => {
        setError(null);
        setIsLoading(true);
        try {
            const response = await axios.get(IMAGE_URL);
                setImage(response.data.message);
            } catch (error: any) {
                setError (error.message);
            } finally {
                setIsLoading(false);
            }
        };

        useEffect(() => {
            fetchImage();
        }, []);
        useEffect(() => {
            if (query.trim() !== "") {
                fetchImage();
            }
        }, [query]);

        return (
            <Lesson13Container>
                <Input
                name="search"
                value={query}
                onChange={ (e) => setQuery(e.target.value)}
                placeholder="Type something to fetch new image"
                />
                <Button onClick={fetchImage} disabled={isLoading}>GET MORE IMAGES</Button>
                {isLoading && <Spinner />}
                {error && <ErrorMessage>{error}</ErrorMessage>}
                {image && <ImageWrapper src={image} alt="Random Animal" />}
            </Lesson13Container>
        );
}

export default Lesson13;