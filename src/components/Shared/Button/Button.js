import './Button.scss';

const Button = ({ children, type, variant, size }) => {
  const className = `${variant} ${size}`;
  return (
    <button type={type} className={className}>
      {children}
    </button>
  );
};
export default Button;
