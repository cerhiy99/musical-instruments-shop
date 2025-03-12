"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import "./TopicHeader.scss";

export default function TopicHeader() {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean).slice(1);
  return (
    <div className="topicHeader">
      <div className="topicHeader__container">
        <div className="topicHeader__title">
          <nav>
            <li>
              <Link href={"/"}> Главная </Link>
            </li>
            {segments.map((segment, index) => {
              const href = "/" + segments.slice(0, index + 1).join("/");
              return (
                <li key={href} className="">
                  <span className=""> - </span>
                  <Link href={href} className="">
                    {decodeURIComponent(
                      segment[0].toUpperCase() + segment.slice(1)
                    )}
                  </Link>
                </li>
              );
            })}
          </nav>
        </div>
        <h2>
          {segments[segments.length - 1][0].toUpperCase() +
            segments[segments.length - 1].slice(1)}
        </h2>
      </div>
    </div>
  );
}
