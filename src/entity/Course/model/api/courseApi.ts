import { api } from "shared/api/api";
import { BASE_URL } from "shared/const/api";

export const getCourses = async () => {
  return api.get(BASE_URL + "/docs/courses.json");
};
