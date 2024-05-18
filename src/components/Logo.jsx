"use client";
import React, { useEffect, useState } from "react";
import clsx from "clsx";
import Link from "next/link";
import "../css/logo.css"; // CSS dosyasını içe aktarın

const Logo = ({ invert, href, className, children, ...props }) => {
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setExpanded((prev) => !prev);
    }, 6000); // Her 12 saniyede bir değiştir
    return () => clearInterval(interval);
  }, []);

  className = clsx(
    className,
    invert
      ? "text-white hover:text-custom-pink"
      : "text-black hover:text-custom-pink"
  );

  const initialText = "A & D";
  const expandedText = "AD SERVICES AND CO";

  const chars = expandedText.split("").map((char, index) => (
    <span
      key={index}
      className={clsx("inline-block transition-all duration-700", {
        "opacity-100 translate-x-0": expanded,
        "opacity-0 -translate-x-4": !expanded,
      })}
      style={{ transitionDelay: `${expanded ? index * 0.1 : 0}s` }}
    >
      {char === " " ? "\u00A0" : char} {/* Boşlukları &nbsp; ile değiştirin */}
    </span>
  ));

  const initialChars = initialText.split("").map((char, index) => (
    <span
      key={index}
      className={clsx("inline-block transition-all duration-700", {
        "opacity-0 -translate-x-4": expanded,
        "opacity-100 translate-x-0": !expanded,
      })}
      style={{ transitionDelay: `${expanded ? 0 : index * 0.1}s` }}
    >
      {char}
    </span>
  ));

  return (
    <h2
      className={clsx("cursor-pointer text-2xl font-semibold", className)}
      {...props}
    >
      <span className="relative logo-text">{initialChars}</span>
      <span className="relative logo-text">{chars}</span>
    </h2>
  );
};

export default Logo;
