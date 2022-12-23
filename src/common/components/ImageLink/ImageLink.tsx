export interface ImageLinkProps {
  width: string | number;
  height: string | number;
  moveToLink: { site: string; pathname: string };
}

const ImageLink = ({ width, height, moveToLink }: ImageLinkProps) => {
  return (
    <a
      href={`${moveToLink.pathname}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src={`/assets/${moveToLink.site}.svg`}
        alt={`${moveToLink.site}로 이동`}
        width={width}
        height={height}
      />
    </a>
  );
};

export default ImageLink;
