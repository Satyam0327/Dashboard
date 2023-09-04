import { Box, IconButton, useTheme } from "@mui/material";
import {  Button,  } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import InputBase from "@mui/material/InputBase";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import EmojiPeopleSharpIcon from '@mui/icons-material/EmojiPeopleSharp';
import SearchIcon from "@mui/icons-material/Search";

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      {/* SEARCH BAR */}
      <Box>
    <Button
      sx={{
        background: 'linear-gradient(to right, #10B981, #60A5FA)', // Use your desired gradient colors for the button
        color: 'white', // Text color (white for dark mode)
        fontSize: '18px',
        fontWeight: 'bold',
        padding: '10px 20px',
      }}
    >
      <ArrowBackIcon sx={{ mr: "10px" }} />
       Previous page
    </Button>
  </Box>

      {/* ICONS */}
      <Box display="flex">
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>
        <IconButton>
          <EmojiPeopleSharpIcon  />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Topbar;
