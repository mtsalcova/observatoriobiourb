import TextFieldCore from '@material-ui/core/TextField';

interface Props {
  label: string;
  variant?: any;
}

const TextField: React.FC<Props> = ({ label, variant = 'outlined' }) => {
  return <TextFieldCore variant={variant} label={label} />;
};

export { TextField };
