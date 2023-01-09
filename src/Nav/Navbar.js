import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router";

const drawerWidth = 240;
const navItems = [
  {
    title: "home",
    resource: "/",
  },
  {
    title: "about",
    resource: "/about",
  },
  {
    title: "services",
    resource: "/services",
  },
  {
    title: "resources",
    resource: "/resources",
  },
];

function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Box component={"img"} src="GLG_LOGO.svg" height={50} />
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.title} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        component="nav"
        sx={{ backgroundColor: "#ffffff", color: "#000000" }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{}}>
            <Box
              component={"img"}
              src="logo6.png"
              height={50}
              sx={{ display: { xs: "none", sm: "block" } }}
            />
          </Box>

          <Box sx={{ display: { xs: "none", sm: "block" }, padding: 0 }}>
            {navItems.map((item) => (
              <Button
                onClick={() => {
                  navigate(item.resource);
                }}
                key={item}
                sx={{ fontSize: 16, margin: 1, color: "#000000" }}
              >
                {item.title}
              </Button>
            ))}
            <Button
              onClick={() => {
                navigate("/contact");
              }}
              variant="outlined"
              color="inherit"
              sx={{
                fontSize: 20,
                margin: 1,
                color: "#000000",
                display: { xs: "none", md: "inline" },
              }}
            >
              Contact us
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

export default Navbar;
