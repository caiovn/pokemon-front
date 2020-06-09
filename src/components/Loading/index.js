import React from 'react';

import { StyledLoading, LoadingContainer } from './styles';

const Loading = () => (
  <LoadingContainer>
    <StyledLoading>
      <div className="lds-ring">
        <div />
        <div />
        <div />
        <div />
      </div>
    </StyledLoading>
  </LoadingContainer>
);

export default Loading;
