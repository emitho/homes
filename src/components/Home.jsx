import React from 'react';
import { Box, Typography, Button, Container, Card, CardContent, Grid, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { styled } from '@mui/system';
import { motion, AnimatePresence } from "framer-motion";

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


import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { Parallax } from 'react-parallax';

import ScrollProgressBar from 'react-scroll-progress-bar';

const Background = styled('div')({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  "&::before": {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.3)', 
    zIndex: 1,
  },
});

const StyledParallax = styled(Parallax)({
  position: 'relative',
  height: '90vh',
});

const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.5 } },
};

const Banner = styled(Box)(({ theme }) => ({
  position: 'relative',
  color: '#fff',
  marginBottom: '1rem',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  height: '80vh',
  paddingTop: '5rem',
  paddingBottom: '5rem',
  overflow: 'hidden',
  zIndex: 2,
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

const useTypewriterEffect = (text, delay = 2000) => {
  const [visibleText, setVisibleText] = React.useState('');

  React.useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < text.length) {
        setVisibleText((prev) => prev + text.charAt(index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, delay / text.length);

    return () => clearInterval(interval);
  }, [text, delay]);

  return visibleText;
};

// Add your FAQs here
const faqs = [
  {
    question: "I'm tired of the constant tenant turnover and vacancies. What's your solution?",
    answer: "With us, we become your long-term tenant and sign leases ranging from three to four years or more based on your comfort. This arrangement means you won't have to worry about vacancies or tenant turnovers anymore."
  },
  {
    question: "How do you handle property upkeep? I've had tenants who've left the property in less than ideal conditions.",
    answer: "We treat your property as a premium vacation rental. Regular professional cleaning and maintenance are a part of our operations, keeping your property in top-notch condition. This also helps in maintaining the property's value for when you decide to sell."
  },
  {
    question: "I've had tenants who've missed payments or paid late. How can I be sure this won't happen with you?",
    answer: "We are a business, not an indiv idual relying on a 9-to-5 job. Our financial stability, backed by our capital reserves, ensures we always make rent payments on time. We can provide financial records for your peace of mind."
  },
  {
    question: "How much rent would I get? Is it at par with the market rates?",
    answer: "We offer a premium over the general market rates for long-term rentals. We understand the value of your property and are prepared to pay a fitting price."
  },
  {
    question: "I manage multiple units and dealing with many tenants can be a hassle. How would working with you be different?",
    answer: "We can lease multiple units from you, which means you'll only have to deal with one professional entity. This simplifies your responsibilities significantly. Plus, we handle everything on our end, so you'll hardly ever hear from us!"
  },
  {
    question: "I worry about parties and noise complaints. How do you manage these issues?",
    answer: "We have a strict no-party policy in place and all our properties are equipped with noise detectors. These devices alert us if noise levels go beyond the acceptable limits, and we act immediately. If guests breach our rules, they are asked to leave. We take the tranquillity of your property seriously."
  },
  
];

const Home = () => {
  const tagline = "Providing hassle-free long-term leases for property owners.";
  const visibleTagline = useTypewriterEffect(tagline, 4000); // duration in milliseconds

  return (
    <div>
      <ScrollProgressBar height="5px" bgColor="#5cb85c" duration="1" />
      <StyledParallax
        blur={0}
        bgImage={'https://images.unsplash.com/photo-1565625443865-2c41cdb647d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80'}
        bgImageAlt="Background Image"
        strength={200}
      >
        <Background />
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
        <div className="typewriter">
              <AnimatePresence>
                {visibleTagline.split('').map((char, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: i * 0.00004 }} // adjust the delay factor as needed
                  >
                    {char}
                  </motion.span>
                ))}
              </AnimatePresence>
            </div>
            <Button variant="contained">Learn more</Button>
          </motion.div>
    </Container>
  </Banner>
      </StyledParallax>
            
      
      <Container maxWidth="md" sx={{ my: 5 }}>
        <Typography variant="h4" component="h1" align="center" gutterBottom>
          Years of Experience in Management
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
      
      <Container maxWidth="md" sx={{ my: 5 }}>
        <Typography variant="h4" component="h1" align="center" gutterBottom>
          Frequently Asked Questions
        </Typography>
        <Typography variant="h6" component="p" align="center" color="text.secondary" paragraph>
          Some of the most common questions we get asked.
        </Typography>
        <div>
          {faqs.map((faq, index) => (
            <Accordion key={index}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>{faq.question}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{faq.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Home;
