import React from "react";

export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Email: ${email}, Password: ${password}`);
    // Here, you can add your own login logic using the email and password values
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input type='email' value={email} onChange={handleEmailChange} />
      </label>
      <br />
      <label>
        Password:
        <input
          type='password'
          value={password}
          onChange={handlePasswordChange}
        />
      </label>
      <br />
      <button type='submit'>Submit</button>
    </form>
  );
}
