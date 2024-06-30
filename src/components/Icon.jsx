export const Icon = ({ name, width = 24, height = 24, className }) => {
  console.log(name);
  return (
    <svg width={width} height={height} className={className}>
      <use xlinkHref={`/sprite.svg#${name}`}></use>
    </svg>
  );
};
