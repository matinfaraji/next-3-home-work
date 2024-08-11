import { Skeleton } from "@mui/material";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div>
      <Skeleton variant="text" width={210} height={40} />
      <Skeleton variant="rectangular" width={210} height={118} />
      <Skeleton variant="circular" width={40} height={40} />
    </div>
  );
}
