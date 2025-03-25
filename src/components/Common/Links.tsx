import React from "react";
import { Link } from "react-router-dom";

interface LinkProps {
  to: string;
  label?: string;
  icon?: React.ReactNode;
}

interface LinksProps {
  links: LinkProps[];
  className?: string;
  onClick?: () => void;
}

const Links: React.FC<LinksProps> = ({ links, className, onClick }) => {
  return (
    <>
      {links.map((link) => (
        <Link key={link.to} to={link.to} className={className} onClick={onClick}>
          {link.icon && <span>{link.icon}</span>}
          {link.label && <span>{link.label}</span>}
        </Link>
      ))}
    </>
  );
};

export default Links;
