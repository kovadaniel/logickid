import { styled } from "@mui/material/styles";
import ListItemButton, { ListItemButtonProps } from "@mui/material/ListItemButton";

const TopicButton = styled(ListItemButton)<ListItemButtonProps>(({ theme }) => ({
  padding: "12px",
  borderRadius: "12px",
  fontFamily: "Nunito, sans-serif",
  fontWeight: 900,
  "&.Mui-selected": {
    backgroundColor: "#5FBF77",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#5FBF77",
    }
  },
  "&.Mui-disabled": {
    opacity: "1"
  }
}));

export default TopicButton;
