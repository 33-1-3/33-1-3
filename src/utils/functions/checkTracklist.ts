interface InfoNameProps {
  infoName: string;
}

const checkTracklist = ({ infoName }: InfoNameProps) =>
  infoName === 'Tracklist';

export default checkTracklist;
