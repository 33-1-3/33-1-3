const lengthToPxStr = (length: number | string) =>
  typeof length === 'number' ? length + 'px' : length;

export default lengthToPxStr;
