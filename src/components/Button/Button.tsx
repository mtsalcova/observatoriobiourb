import ButtonCore from '@material-ui/core/Button';

interface Props {
  color?: any;
  variant?: any;
}

const Button: React.FC<Props> = ({
  color = 'primary',
  variant = 'outlined',
  children
}) => {
  return (
    <ButtonCore variant={variant} color={color}>
      {children}
    </ButtonCore>
  );
};

export { Button };
