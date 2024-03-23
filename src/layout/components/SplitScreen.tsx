import React, { FC, ReactNode } from 'react';
import { device } from 'src/theme';
import styled from 'styled-components';

type PanelProps = {
  flex: number;
};

type SplitScreenProps = {
  children: [ReactNode, ReactNode];
  leftWidth?: number;
  rightWidth?: number;
  margin?: string;
};

type ContainerProps = {
  margin?: string;
};

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: row;
  margin: ${(props) => props.margin || '0'};

  @media ${device.small} {
    flex-direction: column;
  }
`;

export const Panel = styled.div<PanelProps>`
  flex: ${(props) => props.flex};
  width: 100%;
  @media ${device.small} {
    flex: none;
  }
`;

export const SplitScreen: FC<SplitScreenProps> = ({ children, leftWidth = 1, rightWidth = 1, margin }) => {
  const [left, right] = React.Children.toArray(children);

  return (
    <Container margin={margin}>
      <Panel flex={leftWidth}>{left}</Panel>
      <Panel flex={rightWidth}>{right}</Panel>
    </Container>
  );
};

export default SplitScreen;
