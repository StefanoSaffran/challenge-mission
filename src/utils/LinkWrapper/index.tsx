import React from 'react';

import { NavLink, NavLinkProps } from 'react-router-dom';
import { useTheme } from 'styled-components';

type LinkProps = NavLinkProps<HTMLAnchorElement>;

const LinkWrapper = (props: LinkProps) => {
  const { colors } = useTheme();

  return (
    <NavLink
      activeStyle={{ color: colors.primary, fontWeight: 700 }}
      {...props}
    />
  );
};
export default LinkWrapper;
