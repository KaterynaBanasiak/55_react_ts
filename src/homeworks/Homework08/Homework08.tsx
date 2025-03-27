import { useState } from "react";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/button";
import "./Homework08.css"; 

function Homework08() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="homework08-container">
      <h2>Change Password</h2>
      <Input
        name="password"
        label="Password"
        placeholder="Enter your password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button name="SHOW PASSWORD" onClick={() => setShowPassword(!showPassword)} />
      {showPassword && <p>{password}</p>}
    </div>
  );
}

export default Homework08;
