import {
  Link,
  useParams,
  useSearchParams,
  createSearchParams,
  useNavigate,
} from "react-router-dom";

export default function MyCollection() {
  const { userid, collectionid } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  function getMyitemPath(isbn, userid) {
    return `/myitem/${isbn}?userid=${userid}`;
  }

  function handleSubmit(e) {
    e.preventDefault();
    let { value } = e.target.querySelector("input");
    const params = { query: value };
    setSearchParams(params);
  }

  function selectSort(e) {
    const value = e.target.options[e.target.selectedIndex].value;
    const sorted = { sort: value };
    setSearchParams(sorted);
  }

  function selectView(e) {
    const value = e.target.options[e.target.selectedIndex].value;
    const sorted = { view: value };
    setSearchParams(sorted);
  }

  return (
    <>
      <h1>
        {userid}의 콜렉션 {collectionid}
      </h1>
      <form onSubmit={handleSubmit}>
        <input type="text" id="main-search-bar" placeholder="Search..." />
      </form>
      <select name="정렬방식" onChange={selectSort} style={{ width: "6rem" }}>
        <option value="none" selected disabled>
          == 선택 ==
        </option>
        <option value="name">이름순</option>
        <option value="date">년도순</option>
        <option value="price">가격순</option>
      </select>
      <select name="보기방식" onChange={selectView} style={{ width: "6rem" }}>
        <option value="list" selected>
          리스트
        </option>
        <option value="block">블록</option>
      </select>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "1rem auto",
          gap: "2rem",
        }}
      >
        <Link
          to={getMyitemPath(1, userid)}
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
          to={getMyitemPath(2, userid)}
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
          to={getMyitemPath(3, userid)}
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
          to={getMyitemPath(4, userid)}
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
          to={getMyitemPath(5, userid)}
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
