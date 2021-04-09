import { Subtitle } from './title.style';

interface Props {
  variant: 'headingh1' | 'subtitle';
  color?: string;
}

const Title: React.FC<Props> = ({ variant, color, children }) => {
  return <>{variant === 'subtitle' && <Subtitle>{children}</Subtitle>}</>;
};

export { Title };
