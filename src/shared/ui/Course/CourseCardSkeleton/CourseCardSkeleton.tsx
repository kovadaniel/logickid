import Skeleton from "@mui/material/Skeleton";
import CourseCard from "../CourseCard";
import CourseCardContent from "../CourseCardContent";

const CourseCardSkeleton = () => (
  <CourseCard>
    <Skeleton width="100%" height="162px" variant="rectangular" />
    <CourseCardContent>
      <Skeleton width="100%" height="18px" />
    </CourseCardContent>
  </CourseCard>
);

export default CourseCardSkeleton;
