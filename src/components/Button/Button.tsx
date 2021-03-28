import ButtonCore from '@material-ui/core/Button';

interface Props {
  color?: any;
  variant?: any;
}

const Button: React.FC<Props> = ({
  color = 'primary',
  variant = 'contained',
  children
}) => {
  return (
    <ButtonCore variant={variant} color={color}>
      {children}
    </ButtonCore>
  );
};

export { Button };
