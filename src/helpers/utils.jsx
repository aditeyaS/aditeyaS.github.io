export const skeleton = ({
  width = null,
  height = null,
  style = {},
  shape = 'rounded-full',
  className = null,
}) => {
  return (
    <div
      className={`bg-base-300 animate-pulse ${shape}${
        className ? ` ${className}` : ''
      }${width ? ` ${width}` : ''}${height ? ` ${height}` : ''}`}
      style={style}
    />
  );
};

// https://stackoverflow.com/questions/12043187/how-to-check-if-hex-color-is-too-black
export const isColorDark = (colorHex) => {
  var c = colorHex.substring(1); // strip #
  var rgb = parseInt(c, 16); // convert rrggbb to decimal
  var r = (rgb >> 16) & 0xff; // extract red
  var g = (rgb >> 8) & 0xff; // extract green
  var b = (rgb >> 0) & 0xff; // extract blue
  var luma = 0.2126 * r + 0.7152 * g + 0.0722 * b; // per ITU-R BT.709
  if (luma < 40) return true;
  else return false;
};
