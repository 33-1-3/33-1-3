import { Link, useSearchParams } from "react-router-dom";

export default function SearchResult() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");

  function getItemPath(isbn) {
    return `/item/${isbn}`;
  }

  return (
    <>
      <h1>Search Result</h1>
      <div>검색어: {query}</div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "1rem auto",
          gap: "2rem",
        }}
      >
        <Link
          to={getItemPath(1)}
          style={{
            display: "block",
            width: "10rem",
            height: "10rem",
            lineHeight: "5rem",
            backgroundColor: "lightgray",
          }}
        >
          isbn:1인 음반
        </Link>
        <Link
          to={getItemPath(2)}
          style={{
            display: "block",
            width: "10rem",
            height: "10rem",
            lineHeight: "5rem",
            backgroundColor: "lightgray",
          }}
        >
          isbn:2인 음반
        </Link>
        <Link
          to={getItemPath(3)}
          style={{
            display: "block",
            width: "10rem",
            height: "10rem",
            lineHeight: "5rem",
            backgroundColor: "lightgray",
          }}
        >
          isbn:3인 음반
        </Link>
        <Link
          to={getItemPath(4)}
          style={{
            display: "block",
            width: "10rem",
            height: "10rem",
            lineHeight: "5rem",
            backgroundColor: "lightgray",
          }}
        >
          isbn:4인 음반
        </Link>
        <Link
          to={getItemPath(5)}
          style={{
            display: "block",
            width: "10rem",
            height: "10rem",
            lineHeight: "5rem",
            backgroundColor: "lightgray",
          }}
        >
          isbn:5인 음반
        </Link>
      </div>
    </>
  );
}
