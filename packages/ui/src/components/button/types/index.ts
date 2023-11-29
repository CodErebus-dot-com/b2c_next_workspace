// @flow

import { ChakraProps } from '@chakra-ui/react';
import type { ReactNode } from 'react';

export type ButtonProps = {
  children?: ReactNode;
  className?: string;
  id?: string;
  variation?: 'primary' | 'secondary';
  onClick?: (event: any) => void;
} & ChakraProps;
