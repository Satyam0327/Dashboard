import React from 'react';
import { Box, Button, IconButton, Typography, useTheme } from '@mui/material';
import { tokens } from '../../theme';
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';
import Header from '../../components/Header';
import LineChart from '../../components/LineChart';
import BarChart from '../../components/BarChart';
import ProgressCircle from '../../components/ProgressCircle';

import { useState } from 'react'; 

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [progress, setProgress] = useState(75);
  const waterType = 'fresh';

  const textColor = waterType === 'fresh' ? colors.grey[100] : colors.green[500];

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header
          title={
            <span
              style={{
                backgroundImage:
                  'linear-gradient(to right, #10B981, #60A5FA)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
                fontFamily: 'sans-serif',
              }}
            >
              AI WELL ADVISOR
            </span>
          }
        />

        <Box>
          <Button
            sx={{
              background: 'linear-gradient(to right, #10B981, #60A5FA)',
              color: 'white',
              fontSize: '18px',
              fontWeight: 'bold',
              padding: '10px 20px',
            }}
          >
            <DownloadOutlinedIcon sx={{ mr: '10px' }} />
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
        <Box gridColumn="span 8" gridRow="span 2" backgroundColor={colors.primary[400]}>
          <Box
            mt="25px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
          >
            <Box width='30rem'>
              <Typography
                variant="h3"
                fontWeight="bold"
                fontFamily="Arial, sans-serif"
                color={textColor} // Change the text color here
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
                  sx={{ fontSize: '26px', color: colors.greenAccent[500] }}
                />
              </IconButton>
            </Box>
          </Box>
          <Box height="250px" m="-20px 0 0 0">
            <LineChart isDashboard={true} />
          </Box>
        </Box>
        <Box gridColumn="span 4" gridRow="span 2" backgroundColor={colors.primary[400]} p="30px">
          <Typography
            variant="h3"
            fontWeight="bold"
            fontFamily="Arial, sans-serif"
            color={'white'} 
          >
            Water Reserve
          </Typography>
          <Box display="flex" flexDirection="column" alignItems="center" mt="25px">
            <ProgressCircle size="130" progress={progress} />
            <Typography variant="h5" color={colors.greenAccent[500]} sx={{ mt: '15px' }}>
              {progress}%
            </Typography>
          </Box>
        </Box>
        <Box gridColumn="span 4" gridRow="span 2" backgroundColor={colors.primary[400]} width='50rem' height='20rem'>
          <Box height="20rem" mt="">
            <BarChart isDashboard={true} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
