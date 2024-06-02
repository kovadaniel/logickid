import { ICourse } from "entity/Course";
import { FC, ReactNode, useState } from "react";
import StoreContext from "../config/storeContext";

interface StoreProviderProps {
  children: ReactNode;
};

const StoreProvider: FC<StoreProviderProps> = ({ children }) => {
  const [courses, setCourses] = useState<ICourse[]>([]);
  const [tag, setTag] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <StoreContext.Provider value={{
      courses,
      setCourses,
      tag,
      setTag,
      isLoading,
      setIsLoading
    }}>
      {children}
    </StoreContext.Provider>
  );
}

export default StoreProvider;