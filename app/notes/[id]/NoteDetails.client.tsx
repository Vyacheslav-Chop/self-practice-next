"use client";

import ErrorText from "@/components/ErrorText/ErrorText";
import Loader from "@/components/Loader/Loader";
import { getSingleNote } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import { useParams, useRouter } from "next/navigation";
import css from './NoteDetails.module.css';

export default function NoteDetailsClient() {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();
  const {
    data: note,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["note", id],
    queryFn: () => getSingleNote(id),
    refetchOnMount: false,
  });

  const handleGoBack = () => {
    const isSure = confirm("Are you sure?");
    if (isSure) router.back();
  };

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
        <button className={css.button} onClick={handleGoBack}>Back</button>
        <h2 className={css.title}>{note?.title}</h2>
        <p className={css.content}>{note?.content}</p>
        <p className={css.date}>{formattedDate}</p>
      </div>
    </>
  );
}
