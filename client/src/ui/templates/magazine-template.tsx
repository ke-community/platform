import React from 'react';
import { FC, Node } from '~/utils/types';
import { Box } from '@theme-ui/components';

export const MagazineTemplate: FC<{ children: Node }> = ({ children }) => (
  <Box sx={{ maxWidth: 1120 }}>{children}</Box>
);
