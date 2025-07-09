import { Category } from "@/types/categories";
import { Note } from "@/types/types";
import axios from "axios";

interface NoteListRes {
  notes: Note[];
  total: number;
}

axios.defaults.baseURL = "https://next-docs-api.onrender.com";

const getNotes = async (categoryId?: string): Promise<NoteListRes> => {
  const res = await axios.get<NoteListRes>("/notes", {
    params: { categoryId },
  });
  return res.data;
};

export default getNotes;

export const getSingleNote = async (id: string): Promise<Note> => {
  const res = await axios.get<Note>(`/notes/${id}`);
  return res.data;
};

export const getCategories = async (): Promise<Category[]> => {
  const res = await axios.get<Category[]>("/categories");
  return res.data;
};
