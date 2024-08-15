import { Skeleton, Stack } from "@mui/material";

export default function Loading() {
  return (
    <Stack
      sx={{
        height: "100vh",
        width: "100vw",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Skeleton variant="text" width={420} height={40} />
      <Skeleton variant="rectangular" width={420} height={118} />
      <Skeleton variant="circular" width={40} height={40} />
    </Stack>
  );
}
