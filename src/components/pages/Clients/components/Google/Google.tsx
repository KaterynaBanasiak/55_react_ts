import { CompanyWrapper, Info } from "../styles.ts";
import Button from "../../../../Button/button";
import { useNavigate } from "react-router-dom";

function Google() {
  const navigate = useNavigate();

  const goToAmazon = () => {
    navigate('/clients/amazon');
  };

  return (
    <CompanyWrapper>
      <Info>Google is a global leader in search and AI.</Info>
      <Button name="Go to Amazon" onClick={goToAmazon} />
    </CompanyWrapper>
  );
}

export default Google;
