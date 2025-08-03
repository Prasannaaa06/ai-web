import { supabase } from "./supabase";

export type Course = {
  id: string;
  title: string;
  description: string;
  price: number;
  image_url?: string;
};

// READ all
export const getCourses = async (): Promise<Course[]> => {
  const { data, error } = await supabase.from("courses").select("*");
  if (error) throw error;
  return data || [];
};

// CREATE
export const addCourse = async (c: Omit<Course, "id">) =>
  supabase.from("courses").insert(c).single().select();

// UPDATE
export const updateCourse = async (c: Course) =>
  supabase.from("courses").update(c).eq("id", c.id).select().single();

// DELETE
export const deleteCourse = async (id: string) =>
  supabase.from("courses").delete().eq("id", id);