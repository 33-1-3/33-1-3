import styled from 'styled-components';

export interface BookshelfProps {
  count: number;
  step: number;
}

const Img = styled.img`
  width: 640px;
  height: 160px;
`;

const Bookshelf = ({ count, step, ...props }: BookshelfProps) => {
  const imgIdx = Math.min(Math.ceil(count / step), 5);
  return <Img src={`/assets/shelf${imgIdx}.svg`} alt="" {...props} />;
};

Bookshelf.defaultProps = {
  step: 10,
};

export default Bookshelf;
