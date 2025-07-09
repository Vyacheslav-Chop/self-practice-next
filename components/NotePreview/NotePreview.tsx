"use client";

import { getSingleNote } from "@/lib/api";
import Loader from "../Loader/Loader";
import ErrorText from "../ErrorText/ErrorText";
import css from "./NotePreview.module.css";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

type NotePreviewProps = {
  id: string;
};

export default function NotePreview({ id }: NotePreviewProps) {
  const router = useRouter();

  const handleBack = () => {
    const isSure = confirm("Are you sure?");
    if (isSure) {
      router.back();
    }
  };

  const {
    data: note,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["note", id],
    queryFn: () => getSingleNote(id),
  });

  const formattedDate = note?.updatedAt
    ? `Updated at: ${note?.updatedAt}`
    : `Created at: ${note?.createdAt}`;

  return (
    <>
      {isLoading && <Loader />}
      {isError && (
        <ErrorText message="Oooops, something went wrong. Please try again." />
      )}
      <div className={css.container}>
        <button className={css.button} onClick={handleBack}>
          Back
        </button>
        <h2 className={css.title}>{note?.title}</h2>
        <p className={css.content}>{note?.content}</p>
        <p className={css.date}>{formattedDate}</p>
      </div>
    </>
  );
}
