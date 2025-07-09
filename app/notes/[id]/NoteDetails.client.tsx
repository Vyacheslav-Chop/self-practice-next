'use client';

import ErrorText from "@/components/ErrorText/ErrorText";
import Loader from "@/components/Loader/Loader";
import { getSingleNote } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";

export default function NoteDetailsClient() {
  const id = useParams();
  const {
    data: note,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["note", id],
    queryFn: () => getSingleNote(String(id)),
    refetchOnMount: false,
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
      <div>
        <h2>{note?.title}</h2>
        <p>{note?.content}</p>
        <button>Edit</button>
        <p>{formattedDate}</p>
      </div>
    </>
  );
}
