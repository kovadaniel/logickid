import { FC, useContext, useEffect, useMemo } from "react";
import { MainPageProps } from "./MainPage.types";
import classes from "./MainPage.module.scss";
import { StoreContext } from "app/providers/storeProvider";
import Course from "entity/Course/ui/Course";
import { getCourses } from "entity/Course";
import CourseCardSkeleton from "shared/ui/Course/CourseCardSkeleton/CourseCardSkeleton";


const MainPage: FC<MainPageProps> = ({ className }) => {
  const {
    courses,
    setCourses,
    tag,
    isLoading,
    setIsLoading
  } = useContext(StoreContext);

  useEffect(() => {
    if (!courses.length) {
      setIsLoading(true)
      getCourses()
        .then((resp) => {
          setCourses(resp.data);
          setIsLoading(false);
        })
    }
  }, []);

  const filteredCourses = useMemo(() => {
    if (tag === null) return courses;
    return courses.filter((course) => course.tags.includes(tag))
  }, [tag, courses])

  return (
    <main className={classes.main}>
      <div className={classes.main__courses}>
        {isLoading ? (
          new Array(9).fill(0).map((_, i) => 
            <CourseCardSkeleton key={i} />)
        ) : (
          filteredCourses.map((card) =>
            <Course course={card} key={card.id} />
          )
        )}
      </div>
    </main>
  );
};

export default MainPage;
