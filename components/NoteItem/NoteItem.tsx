import { Note } from "@/types/types";
import Link from "next/link";
import css from './NoteItem.module.css';

interface NoteItemProps {
  item: Note;
}

const NoteItem = ({ item }: NoteItemProps) => {
  return (
    <li>
      <Link className={css.link} href={`/notes/${item.id}`}>{item.title}</Link>
    </li>
  );
};

export default NoteItem;
