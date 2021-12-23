import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from "next/link";
import { useTranslation, useLanguageQuery } from "next-export-i18n";

const Button = React.forwardRef(
  // @ts-expect-error
  ({ onClick, href, children, selected, icon }, ref) => {
    const dark_gold = "border-diablo-dark-gold text-diablo-dark-gold"
    const obsidian_gold = "border-obsidian-gold text-obsidian-gold"
    return (
      <button
        className={
          `border-t-8 border-transparent px-2 md:px-6 lg:px-8
          ${selected ? dark_gold : `${obsidian_gold} hover:${dark_gold}`}`
        }
        href={href}
        onClick={onClick}
        // @ts-expect-error
        ref={ref}
      >
        <FontAwesomeIcon icon={icon} className="text-2xl" />
        {/* {children} */}
      </button>
    );
  }
);

const MobileButton = React.forwardRef(
  // @ts-expect-error
  ({ onClick, href, children, selected, icon }, ref) => {
    return (
      <button
        className={`w-16 h-16  text-center rounded-full ${selected ? "bg-diablo-dark-gold text-white" : "text-razzmatazz hover:text-red-900"}`}
        href={href}
        onClick={onClick}
        // @ts-expect-error
        ref={ref}
      >
        <FontAwesomeIcon icon={icon} className="text-3xl" />
        {/* {children} */}
      </button>
    );
  }
);

export const PageLink = ({ text, path, selected, icon }) => {
  const { t } = useTranslation();
  const [query] = useLanguageQuery();

  return (
    <Link href={{ pathname: path, query }} passHref>
      {/* @ts-expect-error */}
      <Button selected={selected} icon={icon}>{t(text)}</Button>
    </Link>
  );
};

export const MobilePageLink = ({ text, path, selected, icon }) => {
  const { t } = useTranslation();
  const [query] = useLanguageQuery();

  return (
    <Link href={{ pathname: path, query }} passHref>
      {/* @ts-expect-error */}
      <MobileButton
        selected={selected}
        icon={icon}
      >
        {t(text)}
      </MobileButton>
    </Link>
  );
};

Button.displayName = "Button";
MobileButton.displayName = "MobileButton";
PageLink.displayName = "PageLink";
MobilePageLink.displayName = "MobilePageLink";
