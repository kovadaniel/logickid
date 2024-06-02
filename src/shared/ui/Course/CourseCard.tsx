import { styled } from "@mui/material/styles";
import Card, { CardProps } from "@mui/material/Card";

const CourseCard = styled(Card)<CardProps>(({ theme }) => ({
  borderRadius: "15px",
  maxHeight: "228px",
  height: "100%",
}));

export default CourseCard;