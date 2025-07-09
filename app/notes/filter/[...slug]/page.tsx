import getNotes from "@/lib/api";
import css from "./page.module.css";
import NoteList from "@/components/NoteList/NoteList";

type NotesByCategoryProps = {
  params: Promise<{ slug: string[] }>;
};

export default async function NotesByCategory({
  params,
}: NotesByCategoryProps) {
  const { slug } = await params;

  const category = slug[0] !== "all" ? slug[0] : undefined;

  const res = await getNotes(category);
  return (
    <div>
      <h1 className={css.title}>Note List</h1>
      {res.notes.length > 0 && <NoteList notes={res.notes} />}
    </div>
  );
}
