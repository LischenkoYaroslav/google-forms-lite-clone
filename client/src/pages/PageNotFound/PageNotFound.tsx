import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export const PageNotFound = () => {
  return (
    <>
      <Typography variant="h3" sx={{ pb: 3 }}>
        Page not found
      </Typography>
      <Link to={"/"}>
        <Button variant="contained">Go to Home page</Button>
      </Link>
    </>
  );
};
