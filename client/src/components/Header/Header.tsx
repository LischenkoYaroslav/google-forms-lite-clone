import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import styles from "./Header.styles";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <AppBar position="static" sx={{ width: "100%", marginBottom: "2rem" }}>
      <Toolbar sx={styles.toolbar}>
        <Typography variant="h1" component="div" sx={styles.logo}>
          FormsLite
        </Typography>
        <Box sx={styles.btnContainer}>
          <Button color="inherit">
            <Link to="/">Home</Link>
          </Button>
          <Button variant="outlined" color="inherit">
            <Link to="/forms/new">New Form</Link>
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
