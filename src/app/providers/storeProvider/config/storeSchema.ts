import { ICourse } from "entity/Course";

export interface StoreSchema {
  courses: ICourse[];
  setCourses: (courses: ICourse[]) => void;
  tag: string | null;
  setTag: (tag: string | null) => void;
  isLoading: boolean;
  setIsLoading: (bool: boolean) => void;
}