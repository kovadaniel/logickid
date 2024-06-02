import { styled } from "@mui/material/styles";
import Skeleton, { SkeletonProps } from "@mui/material/Skeleton";

const TopicSkeleton = styled(Skeleton)<SkeletonProps>(({ theme }) => ({
  width: "100%",
  height: 42,
  borderRadius: "15px",
  marginTop: "3px",
  marginBottom: "3px",
}));

export default TopicSkeleton;
