import { Button as ButtonCore, ButtonProps } from '@material-ui/core';

const Button: React.FC<ButtonProps> = ({
  color = 'primary',
  variant = 'contained',
  children,
  ...props
}) => {
  return (
    <ButtonCore {...props} variant={variant} color={color}>
      {children}
    </ButtonCore>
  );
};

export { Button };
