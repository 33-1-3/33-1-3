import { Link } from 'react-router-dom';

export default function Signin() {
  return (
    <>
      <h1>Signin</h1>
      <div
        style={{
          width: '20rem',
          height: '25rem',
          margin: '2rem auto',
          lineHeight: '25rem',
          backgroundColor: 'lightGray',
        }}
      >
        Signin Form
      </div>
      <Link to="/signup">Signup</Link>
    </>
  );
}
