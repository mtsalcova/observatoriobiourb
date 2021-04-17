import { TypographyProps } from '@material-ui/core';
import { Subtitle, TitleCore } from './title.style';

interface Props extends TypographyProps {
  type: string;
  colorCustom?: string;
}

const Title: React.FC<Props> = ({ children, type, ...props }) => {
  return (
    <>
      {type === 'subtitle' && <Subtitle {...props}>{children}</Subtitle>}
      {type === 'title' && <TitleCore {...props}>{children}</TitleCore>}
    </>
  );
};

export { Title };
