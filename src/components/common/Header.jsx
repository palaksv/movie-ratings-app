import {
  AppBar,
  Toolbar,
  styled,
  Box,
  Typography,
  InputBase,
} from "@mui/material";
import { useState } from "react";
import { logoURL } from "../../constants/constant.js";
import MenuIcon from "@mui/icons-material/Menu";
import HeaderMenu from "./HeaderMenu.jsx";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";
import { Link } from "react-router-dom";
import {APP_PATH} from '../../constants/route.js'



const StyledToolbar = styled(Toolbar)`
  background: #121212;
  min-height: 56px !important;
  padding: 0 115px !important;
  justify-content: space-between;
  & > * {
    padding:0 16px;
  }
  & > div {
    display: flex;
    align-items: center;
    cursor: pointer;
    & > p {
      font-size: 14px;
      font-weight: 550;
    }
  }
  & > p {
    font-size: 14px;
    font-weight: 550;
  }
`;

const Logo = styled("img")({
  width: 64,
});

const InputSearchField=styled(InputBase)`
background:#ffffff;
height:30px;
width:55%;
border-radius:5px;


`

const Header = () => {


const [open,setOpen]=useState(null);


const handleClick=(e)=>{
    setOpen(e.currentTarget);
}


const handleClose=()=>{
    setOpen(null);
}

  return (
    <AppBar position="static">
      <StyledToolbar>
        <Link to={`${APP_PATH}`} >
        <Logo src={logoURL} alt="logo" />
        </Link>
       
        <Box onClick={handleClick}>
          <MenuIcon />
          <Typography>Menu</Typography>
        </Box>
        <HeaderMenu  open={open} handleClose={handleClose}  />
        <InputSearchField />
        <Typography>
          IMDb <Box component="span">Pro</Box>
        </Typography>
        <Box>
          <BookmarkAddIcon />
          <Typography>Watchlist</Typography>
        </Box>
        <Typography>Sign in</Typography>
        <Box>
          <Typography>EN</Typography>
          <ExpandMoreIcon />
        </Box>
      </StyledToolbar>
    </AppBar>
  );
};

export default Header;
