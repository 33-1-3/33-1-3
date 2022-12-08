import { LPCover } from '@/common/components';
import React from 'react';
import { Link, useParams, useSearchParams } from 'react-router-dom';

export default function MyCollection() {
  const { userid, collectionid } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();

  function getMyitemPath(isbn: number, userid: string | undefined) {
    return `/myitem/${isbn}?userid=${userid}`;
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const { value } = (e.target as HTMLElement).querySelector('input');
    const p = new URLSearchParams(window.location.search);
    p.set('query', value);
    setSearchParams(p);
  }

  function selectSort(e: React.ChangeEvent<HTMLSelectElement>) {
    const value = e.target.options[e.target.selectedIndex].value;
    const p = new URLSearchParams(window.location.search);
    p.set('sort', value);
    setSearchParams(p);
  }

  function selectView(e: React.ChangeEvent<HTMLSelectElement>) {
    const value = e.target.options[e.target.selectedIndex].value;
    const p = new URLSearchParams(window.location.search);
    p.set('view', value);
    setSearchParams(p);
  }

  return (
    <>
      <h1>
        {userid}의 콜렉션 {collectionid}
      </h1>

      <form onSubmit={handleSubmit} style={{ display: 'inline-block' }}>
        <input
          type="text"
          id="main-search-bar"
          placeholder="Search..."
          style={{ width: '15rem' }}
        />
      </form>
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
          justifyContent: 'center',
          margin: '1rem auto',
          gap: '5rem',
        }}
      >
        <LPCover
          imgURL="https://i.discogs.com/jgaM3Iwz2t05Whh7VHfdtqYtIseHo3mRqk1PQNIUsF0/rs:fit/g:sm/q:90/h:398/w:400/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTYwMDg0/MDEtMTQwODY5NzMw/MS0zMzE2LmpwZWc.jpeg"
          title="꽃갈피"
          size="small"
          hoverInteraction={true}
        />
        <LPCover
          imgURL=""
          title="꽃갈피"
          size="small"
          hoverInteraction={true}
        />
        <LPCover
          imgURL="invalidString"
          title="꽃갈피"
          size="small"
          hoverInteraction={true}
        />
      </div>
    </>
  );
}
