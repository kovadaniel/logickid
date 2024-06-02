import { styled } from "@mui/material/styles";
import List, { ListProps } from "@mui/material/List";

const TopicList = styled(List)<ListProps>(({ theme }) => ({
  border: "1px solid #CFCFE4",
  borderRadius: "18px",
  padding: "12px"
}));

export default TopicList;
