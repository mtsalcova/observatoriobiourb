import { Line } from './downloadItem.style';
import { Button } from 'components';

interface Props {
  title: string;
  link: string;
}

const DownloadItem = ({ title, link }: Props) => {
  return (
    <Line>
      <a href={link} target="_blank" rel="noreferrer">
        <p>{title}</p>
        <Button color="primary">
          <img src="/images/icons/download-icon.svg" width="14" height="14" />
        </Button>
      </a>
    </Line>
  );
};

export { DownloadItem };
