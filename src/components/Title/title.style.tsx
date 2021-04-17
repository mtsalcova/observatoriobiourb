import styled, { css } from 'styled-components';
import { Typography } from '@material-ui/core';
import defaultTheme from 'styles/defaultTheme';

const { primary } = defaultTheme.palette;

export const Subtitle = styled(Typography)`
  ${(props: any) =>
    props.colorCustom &&
    css`
      color: ${props.colorCustom};
    `}
`;

export const TitleCore = styled(Typography)`
  ${(props: any) =>
    props.colorCustom &&
    css`
      color: ${props.colorCustom};
    `}
`;
