import { ReactNode } from 'react';
import { NavLink, NavLinkProps } from 'react-router-dom';

type CustomNavLinkProps = NavLinkProps & {
  activeIcon?: ReactNode;
  inactiveIcon?: ReactNode;
  title?: string;
};

function Link({
  activeIcon,
  inactiveIcon,
  title,
  ...props
}: CustomNavLinkProps) {
  return (
    <NavLink
      {...props}
      className={({ isActive }) =>
        isActive
          ? 'flex rounded-md bg-white px-2 py-4'
          : 'flex rounded-md px-2 py-4 text-black opacity-60 transition-all duration-150 hover:opacity-100'
      }
    >
      {({ isActive }) =>
        isActive ? (
          <span className="flex gap-2">
            {activeIcon} <p>{title}</p>
          </span>
        ) : (
          <span className="flex gap-2">
            {inactiveIcon} <p>{title}</p>
          </span>
        )
      }
    </NavLink>
  );
}

export default Link;
