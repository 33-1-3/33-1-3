import { useNavigate, createSearchParams } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    const { value } = e.target.querySelector('input');
    const params = { query: value };
    navigate({
      pathname: '/searchresult',
      search: `?${createSearchParams(params)}`,
    });
  }

  return (
    <>
      <h1 style={{ fontSize: '5rem' }}>
        {/* TODO: 이미지가 깨진다 svg로 불러오쟈 */}
        <img
          src="/assets/logo.svg"
          alt="Thirty Three Third"
          style={{ width: '10rem' }}
        />
      </h1>
      <h2 style={{ fontSize: '2rem' }}>Record your records!</h2>
      <form
        onSubmit={handleSubmit}
        style={{ width: '30rem', margin: '2rem auto' }}
      >
        <input
          type="text"
          id="main-search-bar"
          placeholder="Search vinyls by artist, album, song!"
          style={{ width: '30rem', height: '1.5rem' }}
        />
      </form>
    </>
  );
}
