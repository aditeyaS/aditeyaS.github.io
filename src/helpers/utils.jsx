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
