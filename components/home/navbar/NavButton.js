"use client";

import { Button } from "../../ui/button";

const NavButton = ({ href, label, onClick, className }) => {
  return (
    <Button
      size="sm"
      variant="secondary"
      className={className}
      onClick={() => onClick(href)}
    >
      {label}
    </Button>
  );
};

export default NavButton;
