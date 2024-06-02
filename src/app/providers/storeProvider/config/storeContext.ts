import { createContext } from "react";
import { StoreSchema } from "./storeSchema";

const StoreContext = createContext<StoreSchema>({
  courses: [],
  setCourses: () => {},
  tag: null,
  setTag: () => {},
  isLoading: false,
  setIsLoading: () => {},
});

export default StoreContext;