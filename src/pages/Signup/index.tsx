import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <>
      <h1>Signup</h1>
      <div
        style={{
          width: "20rem",
          height: "25rem",
          margin: "2rem auto",
          lineHeight: "25rem",
          backgroundColor: "lightGray",
        }}
      >
        Signup Form
      </div>
      <Link to="/signin">Signin</Link>
    </>
  );
}
