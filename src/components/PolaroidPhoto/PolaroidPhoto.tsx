import { Box, Details } from './polaroidPhoto.style';
import Image from 'next/image';

interface Props {
  imageSrc: string;
  link: string;
}

const PolaroidPhoto = ({ imageSrc, link }: Props) => {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <Box>
        <img src={imageSrc} width={240} height={240} />
        {/* <Details>
            <strong>@mtsalcova</strong>
          </Details> */}
      </Box>
    </a>
  );
};

export { PolaroidPhoto };
