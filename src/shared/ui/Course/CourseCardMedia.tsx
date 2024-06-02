import { styled } from "@mui/material/styles";
import CardMedia, { CardMediaProps } from "@mui/material/CardMedia";

const CourseCardMedia = styled(CardMedia)<CardMediaProps>(({ theme }) => ({
  objectFit: "contain",
  height: "162px",
}));

export default CourseCardMedia;