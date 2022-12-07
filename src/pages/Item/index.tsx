import { useParams } from 'react-router-dom';
import { ArrowLink } from './components';

export default function Item() {
  const { isbn } = useParams();

  return (
    <>
      <h1>음반 상세정보</h1>
      <div
        style={{
          width: '15rem',
          height: '15rem',
          margin: '2rem auto',
          lineHeight: '15rem',
          backgroundColor: 'lightgray',
        }}
      >
        album cover
      </div>
      <div>artist: 가수 이름</div>
      <div>album: 앨범 이름</div>
      <div>release date: 발매일</div>
      <div>genre: 장르</div>
      <div>isbn number: {isbn}</div>
      <div>track list: 트랙 리스트</div>
      <ArrowLink />
    </>
  );
}
