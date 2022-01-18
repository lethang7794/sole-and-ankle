import React from 'react';
import styled from 'styled-components/macro';

import { COLORS, WEIGHTS } from '../../constants';

const VARIANT = {
  'new-release': {
    bgColor: COLORS.secondary,
    text: 'Just Released!',
  },
  'on-sale': {
    bgColor: COLORS.primary,
    text: 'Sale',
  },
};

const ShoeFlag = ({ variant = 'default' }) => {
  if (variant === 'default') {
    return null;
  }

  const style = VARIANT[variant];
  if (!style) {
    throw new Error(`Unknown variant: ${variant}`);
  }

  return <Wrapper bgColor={style.bgColor}>{style.text}</Wrapper>;
};

const Wrapper = styled.article`
  padding: 8px 10px;
  border-radius: 2px;
  color: ${COLORS.white};
  background-color: ${({ bgColor }) => bgColor};
  font-weight: ${WEIGHTS.bold};
`;

export default ShoeFlag;
