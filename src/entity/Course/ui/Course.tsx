import { FC } from "react";
import { CourseProps } from "./Course.types";
import CardActionArea from "@mui/material/CardActionArea";
import { Typography } from "@mui/material";
import CourseCardContent from "shared/ui/Course/CourseCardContent";
import CourseCard from "shared/ui/Course/CourseCard";
import CourseCardMedia from "shared/ui/Course/CourseCardMedia";


const Course: FC<CourseProps> = ({ course }) => {
  return (
    <CourseCard>
      <CardActionArea>
        <CourseCardMedia
          component="img"
          src={course.image}
          style={{
            backgroundColor: course.bgColor
          }}
        />
      </CardActionArea>
      <CourseCardContent>
        <Typography fontWeight={900} lineHeight="18px">{course.name}</Typography>
      </CourseCardContent>
    </CourseCard>
  );
};

export default Course;
