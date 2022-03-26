import { Link, LinkProps } from '@mui/material';
import React, { FC } from 'react';

interface LinkOrFragmentProps extends Omit<LinkProps, 'href'> {
  href?: string | null;
}

const LinkOrFragment: FC<LinkOrFragmentProps> = (props) => {
  const { children, href, ...rest } = props;

  if (!href) {
    return <>{children}</>;
  }

  return (
    <Link
      href={href}
      color="inherit"
      rel="noopener noreferrer"
      target="_blank"
      {...rest}
    >
      {children}
    </Link>
  );
};

export default LinkOrFragment;
