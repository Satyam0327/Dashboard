import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { mockTransactions } from "../../data/mockData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import WaterIcon from '@mui/icons-material/Water';
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import LocalDrinkIcon from '@mui/icons-material/LocalDrink';
import TrafficIcon from "@mui/icons-material/Traffic";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";
import GeographyChart from "../../components/GeographyChart";
import BarChart from "../../components/BarChart";
import StatBox from "../../components/StatBox";
import ProgressCircle from "../../components/ProgressCircle";

import { useState } from "react"; // Import useState if not already imported

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
   const [progress, setProgress] = useState(75);
   const waterType = "fresh"; // Replace with your actual water type ("fresh" or "saline")

  const textColor =
    waterType === "fresh" ? colors.grey[100] : colors.green[500];

  return (
    
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
 <Header
  title={
    <span
      style={{
        backgroundImage: 'linear-gradient(to right, #10B981, #60A5FA)', 
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        color: 'transparent',
        fontFamily: 'serif'
      }}
    >
      AI  WELL   ADVISOR
    </span>
  }
/>

  
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
      <DownloadOutlinedIcon sx={{ mr: "10px" }} />
        Download pdf
    </Button>
  </Box>
</Box>

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
                <Typography
               variant="h3"
                  fontWeight="bold" // You can adjust the font weight as needed
                fontFamily="Arial, sans-serif" // You can change the font family to a suitable one
                olor={colors.grey[100]}
>
                Water Supply
              </Typography>
              <Typography
                variant="h3"
                fontWeight="bold"
                color={colors.greenAccent[500]}
              >
                342.32
              </Typography>
            </Box>
            <Box>
              <IconButton>
                <DownloadOutlinedIcon
                  sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
                />
              </IconButton>
            </Box>
          </Box>
          <Box height="250px" m="-20px 0 0 0">
            <LineChart isDashboard={true} />
          </Box>
        </Box>
        <Box
      gridColumn="span 4"
      gridRow="span 2"
      backgroundColor={colors.primary[400]}
      p="30px"
    >
      <Typography variant="h3" fontWeight="1000">
        Water reserve
      </Typography>
      <Box display="flex" flexDirection="column" alignItems="center" mt="25px">
       
        <ProgressCircle size="125" progress={progress} /> {/* Pass the progress value */}
        <Typography
          variant="h5"
          color={colors.greenAccent[500]}
          sx={{ mt: "15px" }}
        >
          {progress}% {/* Display the progress percentage */}
        </Typography>
      </Box>
    </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          {/* <Typography
            variant="h5"
            fontWeight="600"
            sx={{ padding: "30px 30px 0 30px" }}
          >
            Sales Quantity
          </Typography> */}
          <Box height="250px" mt="-20px">
            <BarChart isDashboard={true} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
