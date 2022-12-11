import styled from 'styled-components';

export interface BookshelfProps {
  width: string | number;
  height: string | number;
  count: number;
  step: number;
}

const Bookshelf = ({
  width,
  height,
  count,
  step,
  ...props
}: BookshelfProps) => {
  const imgIdx = Math.min(Math.ceil(count / step), 5);
  return (
    <img
      width={width}
      height={height}
      src={`/assets/shelf${imgIdx}.svg`}
      alt=""
      {...props}
    />
  );
};

Bookshelf.defaultProps = {
  width: '640px',
  height: '160px',
  step: 10,
};

export default Bookshelf;
