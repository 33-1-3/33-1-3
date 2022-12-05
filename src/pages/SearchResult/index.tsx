import { Link, useSearchParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import Discogs from 'disconnet';

const SECRET = import.meta.env.VITE_API_SECRET;
const KEY = import.meta.env.VITE_API_KEY;

export default function SearchResult() {
  const [searchParams, setSearchParams] = useSearchParams();

  const getResults = () => {
    let p = new URLSearchParams(window.location.search);
    const value = p.get('query');

    const [result, setResult] = useState([]);

    useEffect(() => {
      async function fetchResults() {
        try {
          const res = await axios.get(
            `https://api.discogs.com/database/search?q=${value}&key=${KEY}&secret=${SECRET}&sort=title&sort_order=asc`
          );
          setResult(res.data.results);
          // console.log(res);
        } catch (error) {
          console.error(error);
        }
      }
      fetchResults();
    }, []);
    return result.map((re, i) => {
      console.log(re);

      return (
        <Link
          to={getItemPath({ i })}
          style={{
            display: 'block',
            width: '10rem',
            height: '10rem',
            lineHeight: '5rem',
            backgroundColor: 'lightgray',
          }}
        >
          {re.title}
        </Link>
      );
    });
  };

  function getItemPath(isbn: string) {
    return `/item/${isbn}`;
  }

  function selectSort(e) {
    const value = e.target.options[e.target.selectedIndex].value;
    let p = new URLSearchParams(window.location.search);
    p.set('sort', value);
    setSearchParams(p);
  }

  function selectView(e) {
    const value = e.target.options[e.target.selectedIndex].value;
    let p = new URLSearchParams(window.location.search);
    p.set('view', value);
    setSearchParams(p);
  }

  return (
    <>
      <h1>Search Result</h1>

      <select name="정렬방식" onChange={selectSort} style={{ width: '6rem' }}>
        <option value="name" defaultValue="true">
          이름순
        </option>
        <option value="date">년도순</option>
        <option value="price">가격순</option>
      </select>
      <select name="보기방식" onChange={selectView} style={{ width: '6rem' }}>
        <option value="block" defaultValue="true">
          블록
        </option>
        <option value="list">리스트</option>
      </select>

      <div style={{ marginTop: '1rem' }}>
        검색어: {searchParams.get('query')}
      </div>
      <div>정렬방식: {searchParams.get('sort')}</div>
      <div>보기방식: {searchParams.get('view')}</div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          margin: '1rem auto',
          gap: '2rem',
        }}
      >
        {getResults()}
        {/* <Link
          to={getItemPath(1)}
          style={{
            display: 'block',
            width: '10rem',
            height: '10rem',
            lineHeight: '5rem',
            backgroundColor: 'lightgray',
          }}
        >
          isbn:1인 음반
        </Link>
        <Link
          to={getItemPath(2)}
          style={{
            display: 'block',
            width: '10rem',
            height: '10rem',
            lineHeight: '5rem',
            backgroundColor: 'lightgray',
          }}
        >
          isbn:2인 음반
        </Link>
        <Link
          to={getItemPath(3)}
          style={{
            display: 'block',
            width: '10rem',
            height: '10rem',
            lineHeight: '5rem',
            backgroundColor: 'lightgray',
          }}
        >
          isbn:3인 음반
        </Link>
        <Link
          to={getItemPath(4)}
          style={{
            display: 'block',
            width: '10rem',
            height: '10rem',
            lineHeight: '5rem',
            backgroundColor: 'lightgray',
          }}
        >
          isbn:4인 음반
        </Link>
        <Link
          to={getItemPath(5)}
          style={{
            display: 'block',
            width: '10rem',
            height: '10rem',
            lineHeight: '5rem',
            backgroundColor: 'lightgray',
          }}
        >
          isbn:5인 음반
        </Link> */}
      </div>
    </>
  );
}
