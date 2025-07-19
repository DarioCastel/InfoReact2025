import React from 'react';
import styled from 'styled-components';

type ContainerProps = {
  children: React.ReactNode;
};

const Wrapper = styled.div`
  padding: 1rem;
  max-width: 1200px;
  margin: auto;
`;

const Container = ({ children }: ContainerProps) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Container;
