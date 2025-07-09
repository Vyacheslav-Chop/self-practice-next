'use client';
import Modal from "@/components/Modal/Modal";
import NotePreview from "@/components/NotePreview/NotePreview";
import { useParams } from "next/navigation";
import React from "react";

const PreviewClient = () => {
  const { id } = useParams<{ id: string }>();

  console.log(id);
  
  return (
    <Modal>
      <NotePreview id={id} />
    </Modal>
  );
};

export default PreviewClient;
