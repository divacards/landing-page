import React from "react";

import Link from "next/link";
import Button from "./Button";

const PageLink = ({ text, href, selected }) => {
  return (
    <Button key={text}>
      <Link href={href}>
        <span className={selected ? "font-bold" : null}>{text}</span>
      </Link>
    </Button>
  );
};

export default PageLink;
