import { Box, Button, Stack, ThemeProvider, createTheme } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Rightbar from "./components/Rightbar";
import Navbar from "./components/Navbar";
import Add from "./components/Add";
import { useState } from "react";

function App() {

  const [mode, setMode] = useState("light")

  const darkMode = createTheme({
    palette:{
      mode:mode,
    }
  })

  return (
    <ThemeProvider theme={darkMode} >
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar/>
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Sidebar setMode={setMode} mode={mode}/>
          <Feed/>
          <Rightbar/>
        </Stack>
        <Add/>
      </Box>
    </ThemeProvider>
  );
}

export default App;
