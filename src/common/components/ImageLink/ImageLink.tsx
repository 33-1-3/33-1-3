import { Link } from 'react-router-dom';

export interface ImageLinkProps {
  width: string | number;
  height: string | number;
  moveToLink: { site: string; pathname: string };
}

const ImageLink = ({ width, height, moveToLink }: ImageLinkProps) => {
  return (
    <Link to={`${moveToLink.pathname}`} target="_blank">
      <img
        src={`/assets/${moveToLink.site}.svg`}
        alt={`${moveToLink.site}로 이동`}
        width={width}
        height={height}
      />
    </Link>
  );
};

export default ImageLink;
