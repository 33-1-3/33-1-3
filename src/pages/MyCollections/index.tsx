import { Link, useParams } from 'react-router-dom';
export default function MyCollections() {
  const { userid } = useParams();

  return (
    <>
      <h1>{userid}&apos;s Collections</h1>
      <button
        type="button"
        style={{
          display: 'block',
          width: '40rem',
          height: '5rem',
          margin: '1rem auto',
          fontSize: '1.5rem',
          lineHeight: '5rem',
          cursor: 'pointer',
          color: 'gray',
        }}
      >
        +
      </button>
      <Link
        to={`/mycollection/${userid}/1`}
        style={{
          display: 'block',
          width: '40rem',
          height: '5rem',
          margin: '1rem auto',
          lineHeight: '5rem',
          backgroundColor: 'lightgray',
        }}
      >
        Collection 1
      </Link>
      <Link
        to={`/mycollection/${userid}/2`}
        style={{
          display: 'block',
          width: '40rem',
          height: '5rem',
          margin: '1rem auto',
          lineHeight: '5rem',
          backgroundColor: 'lightgray',
        }}
      >
        Collection 2
      </Link>
      <Link
        to={`/mycollection/${userid}/3`}
        style={{
          display: 'block',
          width: '40rem',
          height: '5rem',
          margin: '1rem auto',
          lineHeight: '5rem',
          backgroundColor: 'lightgray',
        }}
      >
        Collection 3
      </Link>
    </>
  );
}
