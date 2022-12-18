import * as React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authAction } from "../store/authReducer";
import { orderAction } from "../store/orderReducer";

// mui imports
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
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";

const drawerWidth = 240;
const navItems = [
  { val: "Home", Link: "/" },
  { val: "SignUp", Link: "/signup" },
  { val: "LogIn", Link: "/signin" },
];
const newNavItems = [
  { val: "Home", Link: "/" },
  { val: "BookTruck", Link: "/user/bookTruck" },
];
const adminNavItems = [
  { val: "Home", Link: "/" },
  { val: "Vehicles", Link: "/admin/vehicles" },
  { val: "Product", Link: "/admin/products" },
  { val: "Orders", Link: "/admin/orders" },
];

function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [anchorElUser, setAnchorElUser] = React.useState();
  const [user, setUser] = React.useState();

  const dispatch = useDispatch();

  // getting data from local storage
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  const [value, setValue] = React.useState(token);
  const [userRole, setUserRole] = React.useState(role);

  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // function to show drawer navbar for different roles of the user
  const openDrawerNavbar = (navItem) => {
    return navItem.map((item, index) => (
      <ListItem key={index} disablePadding>
        <NavLink
          style={{ textDecoration: "none", color: "white" }}
          to={item.Link}
        >
          <ListItemButton sx={{ textAlign: "center" }}>
            <ListItemText primary={item.val} />
          </ListItemButton>
        </NavLink>
      </ListItem>
    ));
  };

  // function to show navbar for different user roles
  const openNavbar = (navItem) => {
    return navItem.map((item, index) => (
      <NavLink style={{ textDecoration: "none" }} to={item.Link} key={index}>
        <Button sx={{ color: "#fff" }}>{item.val}</Button>
      </NavLink>
    ));
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  // logOut/signOut function
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("role");
    localStorage.removeItem("abdulOrder");
    localStorage.removeItem("orderData");
    setValue("");
    setUserRole("");
    navigate("/");
    dispatch(orderAction.clearData());
    dispatch(authAction.logOut());
  };
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Box>
        <Typography variant="h6" sx={{ color: "white", my: 0.25 }}>
          Kagzi Transports
        </Typography>
        <Divider />
      </Box>

      <List style={{ textDecoration: "none" }}>
        {/* navbar for visiter */}
        {!value && openDrawerNavbar(navItems)}

        {/* navbar for the user of the website */}
        {value && userRole === "user" && openDrawerNavbar(newNavItems)}

        {/* navbar for the admin */}
        {value && userRole === "Admin" && openDrawerNavbar(adminNavItems)}
        {/* logout/signout button */}
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            {value && (
              <Button
                sx={{ color: "white" }}
                primary="Log Out"
                onClick={logout}
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

  React.useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
  }, []);
  return (
    <Box sx={{ display: "flex" }}>
      <AppBar component="nav" sx={{ backgroundColor: "#e00029" }}>
        <Toolbar>
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
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "block", color: "white" },
              cursor: "pointer",
            }}
            onClick={() => {
              navigate("/");
            }}
          >
            Kagzi Transports
          </Typography>
          <Box
            component={List}
            sx={{
              display: { xs: "none", sm: "block" },
              paddingRight: 5,
            }}
          >
            {/* show navbar to visiter */}
            {!value && openNavbar(navItems)}
            {/* show navbar to user  */}
            {value && userRole === "user" && openNavbar(newNavItems)}
            {/* show navbar to admin */}
            {value && userRole === "Admin" && openNavbar(adminNavItems)}

            {/* logout/signout button */}
            {/* {value && (
              <Button sx={{ color: "#fff" }} onClick={logout}>
                Log Out
              </Button>
            )} */}
          </Box>
          {value && (
            <Box
              sx={{
                flexGrow: 1,
                display: {
                  lg: "contents",
                  xs: "flex",
                },
                justifyContent: {
                  xs: "right",
                },
                marginRight: {
                  xs: 3,
                },
              }}
            >
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">
                    {user?.FirstName}
                    {user?.LastName}({user?.role})
                  </Typography>
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    handleCloseUserMenu();
                    logout();
                  }}
                >
                  <Typography textAlign="center">logout</Typography>
                </MenuItem>
              </Menu>
            </Box>
          )}
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
              backgroundColor: "#e00029",
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
