import { useParams } from 'react-router-dom';

export default function MyItem() {
  const { isbn } = useParams();

  return (
    <>
      <h1>My Item</h1>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div>
          <div>artist: 가수 이름</div>
          <div>album: 앨범 이름</div>
          <div>release date: 발매일</div>
          <div>genre: 장르</div>
          <div>isbn number: {isbn}</div>
          <div>track list: 트랙 리스트</div>
        </div>

        <div
          style={{
            width: '20rem',
            height: '20rem',
            margin: '2rem auto',
            lineHeight: '15rem',
            backgroundColor: 'lightgray',
          }}
        >
          album cover
        </div>

        <div>
          <div>purchase date: 구매일</div>
          <div>price: 구매 가격</div>
          <div>vinyl state: 음반 상태</div>
          <div>memo: 메모</div>
        </div>
      </div>
    </>
  );
}
