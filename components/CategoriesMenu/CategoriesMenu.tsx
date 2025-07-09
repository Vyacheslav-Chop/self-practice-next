"use client";

import { Category } from "@/types/categories";
import Link from "next/link";
import { useEffect, useState } from "react";
import css from "./CategoriesMenu.module.css";

type CategoriesMenuProps = {
  categories: Category[];
};

export default function CategoriesMenu({ categories }: CategoriesMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.code === "Escape") {
        setIsOpen(false);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <div className={css.wrapperMenu}>
      <button className={css.toggleBtn} onClick={toggle}>
        Note
      </button>
      {isOpen && (
        <ul className={css.listMenu}>
          <li>
            <Link
              className={css.linkMenu}
              href="/notes/filter/all"
              onClick={closeMenu}
            >
              All notes
            </Link>
          </li>
          {categories.map((category) => (
            <li key={category.id}>
              <Link
                className={css.linkMenu}
                href={`/notes/filter/${category.id}`}
                onClick={closeMenu}
              >
                {category.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
