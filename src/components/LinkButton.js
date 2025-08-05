import React from "react";
import { Link } from "react-router-dom";

function LinkButton({ to, children, className }) {
  const isExternal = /^https?:\/\//i.test(to);

  if (isExternal) {
    return (
      <a
        href={to}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {children}
      </a>
    );
  }

  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  );
}

export default LinkButton;

