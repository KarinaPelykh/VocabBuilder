export const Button = ({ type, className, onClick, prop, children }) => {
  return (
    <button type={type} className={className} onClick={onClick}>
      {prop}
      {children}
    </button>
  );
};
