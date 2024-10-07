import MenuIcon from "@mui/icons-material/Menu";
import links from "../../utils/links.json";
import renderLinks from "../renderLinks/index.js";
import { IconButton, Drawer, List, Box, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";

// Styled component for NavLink
const NavLink = styled(Link)({
  textDecoration: "none",
  margin: "0 16px",
  "@media(max-width: 600px)": {
    margin: "16px 0",
  },
});

// Component for menu icon
export const NavigationBarMenu = ({ isOpenMenu, openDrawer }) => (
  <IconButton
    edge="start"
    color="inherit"
    aria-label="menu"
    onClick={openDrawer}
    sx={{ display: { xs: "block", sm: "block", md: "none" } }}
  >
    <MenuIcon />
  </IconButton>
);

// Component for navigation bar title
export const NavigationBarTitle = () => (
  <NavLink to="/">
    <Typography variant="h3" fontWeight="bold" color="#000000">
      Careness
    </Typography>
  </NavLink>
);

// Component for navigation links
export const NavigationLinks = ({ user }) => {
  const navigate = useNavigate(); // Move useNavigate to the top of the component

  return (
    <Box
      sx={{
        display: { xs: "none", sm: "none", md: "flex" },
        flexGrow: 1,
        justifyContent: "flex-end",
      }}
    >
      <Box sx={{ display: "flex" }}>
        {user ? renderLinks(links.user) : renderLinks(links.guest)}
      </Box>
      <Box sx={{ display: "flex", marginLeft: "90px" }}>
        {!user && renderLinks(links.login)}
      </Box>

      {/* Sign up button */}
      <Box
        sx={{
          backgroundColor: "#000000",
          borderRadius: "10px",
          display: "flex",
          justifyContent: "center", // Center horizontally
          alignItems: "center",
          cursor: "pointer",
        }}
        onClick={() => navigate("/join")} // Navigate to /join when clicked
      >
        {!user && (
          <Typography
            sx={{
              color: "white",
              padding: "7px",
              fontSize: "15px",
              paddingX: "10px",
            }}
          >
            Sign up
          </Typography>
        )}
      </Box>
    </Box>
  );
};

// Component for navigation drawer
export const NavigationDrawer = ({ user, isOpenMenu, closeDrawer }) => (
  <Drawer anchor="left" open={isOpenMenu} onClose={closeDrawer}>
    <div>
      <List
        component={Box}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          minWidth: "150px",
          width: "70vw",
        }}
      >
        {user
          ? renderLinks(links.user, closeDrawer)
          : renderLinks(links.guest, closeDrawer)}
      </List>
    </div>
  </Drawer>
);
