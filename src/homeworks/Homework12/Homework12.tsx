import axios from "axios";
import { useEffect, useState } from "react";
import Button from "../../components/Button/button";
import { Homework12Container, FactWrapper, Error } from "./styles";
import Spinner from "../../components/Spinner/Spinner";

const FACT_URL = "https://catfact.ninja/fact";

function Homework12() {
  const [fact, setFact] = useState<string | undefined>(undefined);
  const [error, setError] = useState<string | undefined>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getFact = async () => {
    setError(undefined);
    try {
      setIsLoading(true);
      const response = await axios.get(FACT_URL);
      setFact(response.data.fact);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getFact();
  }, []);

  return (
    <Homework12Container>
      <button onClick={getFact} disabled={isLoading}>
        GET MORE FACTS
      </button>
      <FactWrapper>{isLoading ? <Spinner /> : fact}</FactWrapper>
      {error && <Error>{error}</Error>}
    </Homework12Container>
  );
}

export default Homework12;
