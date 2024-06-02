import { styled } from "@mui/material/styles";
import ListItem, { ListItemProps } from "@mui/material/ListItem";

const TopicListItem = styled(ListItem)<ListItemProps>(({ theme }) => ({
  padding: 0,
}));

export default TopicListItem;
