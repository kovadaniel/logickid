import { styled } from "@mui/material/styles";
import CardContent, { CardContentProps } from "@mui/material/CardContent";

const CourseCardContent = styled(CardContent)<CardContentProps>(({ theme }) => ({
  padding: "12px 18px 18px",
}));

export default CourseCardContent;