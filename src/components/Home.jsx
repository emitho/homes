import React from 'react';
import { Box, Typography, Button, Container, Card, CardContent, Grid } from '@mui/material';
import { styled } from '@mui/system';
import { motion } from "framer-motion";
import CommentIcon from '@mui/icons-material/Comment';
import StarIcon from '@mui/icons-material/Star';
import HistoryIcon from '@mui/icons-material/History';
import NoMeetingRoomIcon from '@mui/icons-material/NoMeetingRoom';
import CleanHandsIcon from '@mui/icons-material/CleanHands';
import TimerIcon from '@mui/icons-material/Timer';
import HomeIcon from '@mui/icons-material/Home';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import BusinessIcon from '@mui/icons-material/Business';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import { green } from '@mui/material/colors';

const Banner = styled(Box)(({ theme }) => ({
  position: 'relative',
  backgroundColor: '#424242',
  color: '#fff',
  marginBottom: '1rem',
  backgroundImage: 'linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(https://images.unsplash.com/photo-1565625443865-2c41cdb647d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80)',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  height: '80vh',
  paddingTop: '5rem',
  paddingBottom: '5rem',
  overflow: 'hidden',
  "&::after": {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: 'inherit',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    zIndex: -1,
    transform: 'scale(1)',
    transition: 'transform 5s linear',
    "&:hover": {
      transform: 'scale(1.1)',
    },
  },
}));

const serviceList = [
  {
    title: "No Vacancies",
    description: "Say goodbye to vacancies with our long-term lease commitment.",
    icon: <NoMeetingRoomIcon fontSize="large" sx={{ color: green[500] }} />,
  },
  {
    title: "Property Upkeep",
    description: "Premium upkeep of your property – pristine conditions, always.",
    icon: <CleanHandsIcon fontSize="large" sx={{ color: green[500] }} />,
  },
  {
    title: "Timely Payments",
    description: "Steady, timely rent payments - financial stability you can bank on.",
    icon: <TimerIcon fontSize="large" sx={{ color: green[500] }} />,
  },
  {
    title: "Above Market Rates",
    description: "We value your property; expect premiums above market rates.",
    icon: <AttachMoneyIcon fontSize="large" sx={{ color: green[500] }} />,
  },
  {
    title: "Single Entity",
    description: "Less hassle, more peace - one professional entity for your multiple units.",
    icon: <BusinessIcon fontSize="large" sx={{ color: green[500] }} />,
  },
  {
    title: "Tranquility",
    description: "Absolute tranquility guaranteed – Zero tolerance for noise and parties.",
    icon: <VolumeOffIcon fontSize="large" sx={{ color: green[500] }} />,
  },
];

const Home = () => {
  return (
    <div>
      <Banner display="flex" alignItems="center">
        <Container maxWidth="sm">
          <motion.div initial={{ y: -100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1 }}>
            <motion.div initial={{ scale: 0.5 }} animate={{ scale: 1 }} transition={{ duration: 2 }}>
              <Typography 
                variant="h2" 
                color="inherit" 
                gutterBottom
                sx={{
                  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'
                }}
              >
                Sovereign Horizon Homes
              </Typography>
            </motion.div>
            <Typography 
              variant="h5" 
              color="inherit" 
              paragraph
              sx={{
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'
              }}
            >
              Providing hassle-free long-term leases for property owners.
            </Typography>
            <Button variant="contained">Learn more</Button>
          </motion.div>
        </Container>
      </Banner>
      <Container maxWidth="md" sx={{ my: 5 }}>
        <Typography variant="h4" component="h1" align="center" gutterBottom>
          Our Profile
        </Typography>
        <Typography variant="h6" component="p" align="center" color="text.secondary" paragraph>
          We have been hosting on Airbnb for several years with great reviews and feedback from our guests.
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Card sx={{ minWidth: 275, cursor: 'default', userSelect: 'none' }}>
                <CardContent>
                  <CommentIcon fontSize="large" sx={{ color: green[500] }} />
                  <Typography variant="h5" component="div">
                    116
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Reviews
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>

          <Grid item xs={12} sm={4}>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Card sx={{ minWidth: 275, cursor: 'default', userSelect: 'none' }}>
                <CardContent>
                  <StarIcon fontSize="large" sx={{ color: green[500] }} />
                  <Typography variant="h5" component="div">
                    4.7
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Average Rating
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>

          <Grid item xs={12} sm={4}>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Card sx={{ minWidth: 275, cursor: 'default', userSelect: 'none' }}>
                <CardContent>
                  <HistoryIcon fontSize="large" sx={{ color: green[500] }} />
                  <Typography variant="h5" component="div">
                    7
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Years on Airbnb
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth="md" sx={{ my: 5 }}>
        <Typography variant="h4" component="h1" align="center" gutterBottom>
          Our Services
        </Typography>
        <Typography variant="h6" component="p" align="center" color="text.secondary" paragraph>
          Here are some of the ways we offer peace of mind to property owners.
        </Typography>
        <Grid container spacing={3}>
          {serviceList.map((service, index) => (
            <Grid item xs={12} sm={4} key={index}>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Card sx={{ minWidth: 275, height: '100%', cursor: 'default', userSelect: 'none' }}>
                  <CardContent>
                    {service.icon}
                    <Typography variant="h5" component="div" gutterBottom>
                      {service.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {service.description}
                    </Typography>
                  </CardContent>
                  <Button variant="contained" sx={{ mx: 2, my: 2 }}>Learn More</Button>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
      <footer>
        <Typography variant="body2" color="text.secondary" align="center" sx={{ my: 5 }}>
          © 2023 Sovereign Horizon Homes
        </Typography>
      </footer>
    </div>
  );
}

export default Home;
