import { Backdrop, Box, CircularProgress, Typography } from "@mui/material";
import { baseFlexStyles } from "../muiStyles/flexStyle";

interface Props {
  message?: string;
}

const Loading = ({ message = "Loading..." }: Props) => {
  return (
    <Backdrop open={true} invisible={true}>
      <Box {...baseFlexStyles} justifyContent="center" height="100vh">
        <CircularProgress size={80} color="secondary" />
        <Typography
          variant="h4"
          sx={{ justifyContent: "center", position: "fixed", top: "60%" }}
        >
          {message}
        </Typography>
      </Box>
    </Backdrop>
  );
};

export default Loading;
