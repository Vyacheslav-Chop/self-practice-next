import { getCategories } from "@/lib/api";
import Link from "next/link";
import css from "./NotesSidebar.module.css";

export default async function NotesSidebar() {
  const categories = await getCategories();

  return (
    <ul className={css.listMenu}>
      <li>
        <Link className={css.linkMenu} href="/notes/filter/all">
          All notes
        </Link>
      </li>
      {categories.map((category) => (
        <li key={category.id}>
          <Link className={css.linkMenu} href={`/notes/filter/${category.id}`}>
            {category.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
