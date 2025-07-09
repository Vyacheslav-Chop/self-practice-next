import { getCategories } from "@/lib/api";
import CategoriesMenu from "../CategoriesMenu/CategoriesMenu";
import css from "./Header.module.css";
import Link from "next/link";

const Header = async () => {
  const categories = await getCategories();
  return (
    <header className={css.header}>
      <Link className={css.logo_link} href="/" aria-label="Home">
        NoteHub
      </Link>
      <nav aria-label="Main Navigation">
        <ul className={css.navigation}>
          <li>
            <Link className={css.link} href="/">
              Home
            </Link>
          </li>
          <li>
            <CategoriesMenu categories={categories} />
          </li>
          <li>
            <Link className={css.link} href="/profile">
              Profile
            </Link>
          </li>
          <li>
            <Link className={css.link} href="/about">
              About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
