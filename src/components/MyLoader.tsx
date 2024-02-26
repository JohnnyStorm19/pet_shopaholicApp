import { Backdrop, Box, CircularProgress } from "@mui/material";

interface IMyLoaderProps {
  position: "bottom" | "center";
}

const MyLoader = ({ position }: IMyLoaderProps) => {
  return (
    <>
      {position === "bottom" && (
        <Box
          sx={{
            position: "fixed",
            inset: "0",
            backgroundColor: "rgba(0, 0, 0, 0.32)",
          }}
        >
          <CircularProgress
            color="success"
            sx={{
              position: "absolute",
              bottom: "1rem",
              left: "50%",
              transform: "translateX: -50%",
              opacity: "1",
            }}
          />
        </Box>
      )}
      {position === "center" && (
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open
        >
          <CircularProgress color="primary" />
        </Backdrop>
      )}
    </>
  );
};

export default MyLoader;
