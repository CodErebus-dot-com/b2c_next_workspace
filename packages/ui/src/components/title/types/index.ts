// @flow

import type { ReactNode } from 'react';
import type { HeadingProps as ChakraHeadingProps  } from '@chakra-ui/react';

export type TitleProps = {
    children: ReactNode;
    level?: 1 | 2 | 3 | 4 | 5 | 6;
} & ChakraHeadingProps

export type HeadingLevelProps = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | undefined;