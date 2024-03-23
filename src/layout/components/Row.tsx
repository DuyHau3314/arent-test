import React, { FC } from 'react';
import { device } from 'src/theme';
import styled from 'styled-components';

type RowProps = {
  marginTop?: string;
  marginBottom?: string;
  marginLeft?: string;
  marginRight?: string;
  paddingTop?: string;
  paddingBottom?: string;
  paddingLeft?: string;
  paddingRight?: string;
  marginX?: string;
  marginY?: string;
  width?: string;
  centerX?: boolean;
  centerY?: boolean;
  children: React.ReactNode;
};

const StyledRow = styled.div<RowProps>`
  display: flex;
  justify-content: ${({ centerX }) => (centerX ? 'center' : 'flex-start')};
  align-items: ${({ centerY }) => (centerY ? 'center' : 'stretch')};
  margin-top: ${({ marginY, marginTop }) => marginTop || marginY || '0'};
  margin-bottom: ${({ marginY, marginBottom }) => marginBottom || marginY || '0'};
  margin-left: ${({ marginX, marginLeft }) => marginLeft || marginX || '0'};
  margin-right: ${({ marginX, marginRight }) => marginRight || marginX || '0'};
  padding-top: ${({ paddingTop }) => paddingTop || '0'};
  padding-bottom: ${({ paddingBottom }) => paddingBottom || '0'};
  padding-left: ${({ paddingLeft }) => paddingLeft || '0'};
  padding-right: ${({ paddingRight }) => paddingRight || '0'};
  width: ${({ width }) => width || 'auto'};

  @media ${device.small} {
    margin-top: ${({ marginY }) => marginY || '0'};
    margin-bottom: ${({ marginY }) => marginY || '0'};
    margin-left: 0;
    margin-right: 0;
    padding-left: 0;
    padding-right: 0;
    width: 100%;
  }
`;

const Row: FC<RowProps> = ({ children, ...props }) => {
  return <StyledRow {...props}>{children}</StyledRow>;
};

export default Row;
