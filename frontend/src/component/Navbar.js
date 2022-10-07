import * as React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authAction } from "../store/authReducer";

import PropTypes from "prop-types";
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

const drawerWidth = 240;
const navItems = [
  { val: "Home", Link: "/home2" },
  { val: "SignUp", Link: "/signup" },
  { val: "LogIn", Link: "/signin" },
];
const newNavItems = [
  { val: "Home", Link: "/home2" },
  { val: "BookTruck", Link: "/bookTruck" },
];
const adminNavItems = [
  { val: "Home", Link: "/home2" },
  { val: "Vehicles", Link: "/admin/vehicles" },
  { val: "Product", Link: "/admin/products" },
  { val: "Orders", Link: "/admin/orders" },
];
function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const dispatch = useDispatch();

  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  const [value, setValue] = React.useState(token);
  const [userRole, setUserRole] = React.useState(role);

  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Kagzi Transports
      </Typography>
      <Divider />
      <List style={{ textDecoration: "none" }}>
        {!value &&
          navItems.map((item, index) => (
            <ListItem key={index} disablePadding>
              <Link style={{ textDecoration: "none" }} to={item.Link}>
                <ListItemButton sx={{ textAlign: "center" }}>
                  <ListItemText primary={item.val} />
                </ListItemButton>
              </Link>
            </ListItem>
          ))}

        {value &&
          userRole === "user" &&
          newNavItems.map((item, index) => (
            <ListItem key={index} disablePadding>
              <Link style={{ textDecoration: "none" }} to={item.Link}>
                <ListItemButton sx={{ textAlign: "center" }}>
                  <ListItemText primary={item.val} />
                </ListItemButton>
              </Link>
            </ListItem>
          ))}

        {value &&
          userRole === "Admin" &&
          adminNavItems.map((item, index) => (
            <ListItem key={index} disablePadding>
              <Link style={{ textDecoration: "none" }} to={item.Link}>
                <ListItemButton sx={{ textAlign: "center" }}>
                  <ListItemText primary={item.val} />
                </ListItemButton>
              </Link>
            </ListItem>
          ))}

        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            {value && (
              <Button
                primary="Log Out"
                onClick={() => {
                  const token = localStorage.getItem("token");
                  console.log("sdfd", token);
                  localStorage.removeItem("token");
                  localStorage.removeItem("user");
                  localStorage.removeItem("role");
                  localStorage.removeItem("abdulOrder");
                  localStorage.removeItem("orderData");
                  setValue("");
                  setUserRole("");
                  navigate("/home2");
                  dispatch(authAction.logOut());
                }}
              >
                Log Out
              </Button>
            )}
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar component="nav">
        <Toolbar sx={{ color: "red" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            Kagzi Transports
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {!value &&
              navItems.map((item, index) => (
                <Link
                  style={{ textDecoration: "none" }}
                  to={item.Link}
                  key={index}
                >
                  <Button sx={{ color: "#fff" }}>{item.val}</Button>
                </Link>
              ))}
            {value &&
              userRole === "user" &&
              newNavItems.map((item, index) => (
                <Link
                  style={{ textDecoration: "none" }}
                  to={item.Link}
                  key={index}
                >
                  <Button
                    sx={{ color: "#fff" }}
                    onClick={() => {
                      console.log(`${item.val} page and ${value}`);
                    }}
                  >
                    {item.val}
                  </Button>
                </Link>
              ))}

            {value &&
              userRole === "Admin" &&
              adminNavItems.map((item, index) => (
                <Link
                  style={{ textDecoration: "none" }}
                  to={item.Link}
                  key={index}
                >
                  <Button
                    sx={{ color: "#fff" }}
                    onClick={() => {
                      console.log(`${item.val} page and ${value}`);
                    }}
                  >
                    {item.val}
                  </Button>
                </Link>
              ))}
            {value && (
              // <Link style={{ textDecoration: "none" }} to="#">
              <Button
                sx={{ color: "#fff" }}
                onClick={() => {
                  const token = localStorage.getItem("token");
                  console.log("sdfd", token);
                  localStorage.removeItem("token");
                  localStorage.removeItem("user");
                  localStorage.removeItem("role");
                  localStorage.removeItem("abdulOrder");
                  localStorage.removeItem("orderData");
                  setValue("");
                  setUserRole("");
                  navigate("/home2");
                  dispatch(authAction.logOut());
                }}
              >
                Log Out
              </Button>
              // </Link>
            )}
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
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}

Navbar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Navbar;
