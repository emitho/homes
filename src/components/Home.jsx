import React from 'react';
import { Box, Typography, Button, Container, Card, CardContent, Grid, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { styled } from '@mui/system';
import stylish from 'styled-components';
import { motion, AnimatePresence } from "framer-motion";
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

import CommentIcon from '@mui/icons-material/Comment';
import StarIcon from '@mui/icons-material/Star';
import HistoryIcon from '@mui/icons-material/History';
import NoMeetingRoomIcon from '@mui/icons-material/NoMeetingRoom';
import CleanHandsIcon from '@mui/icons-material/CleanHands';
import TimerIcon from '@mui/icons-material/Timer';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import BusinessIcon from '@mui/icons-material/Business';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import { green } from '@mui/material/colors';
import { useInView } from 'react-intersection-observer';
import Typist from 'react-typist';
import SovereignLogo from '../assets/Asset_5.png';



import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { Parallax } from 'react-parallax';

import ScrollProgressBar from 'react-scroll-progress-bar';

const CustomButton = stylish.button`  display: inline-block;
font-size: 10px;
text-transform: uppercase;
letter-spacing: 1.5px;
color: white;
background-color: #000;
border: none;
cursor: pointer;
padding: 12px 24px;
transition: all 0.3s ease;
border-radius: 25px;
box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
margin: 4px 2px;
:hover {
  background-color: #45a049;
  box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
  color: white;
  transform: translateY(-7px);`;

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

const BitcoinIcon = (props) => (
  <img src="https://logodownload.org/wp-content/uploads/2017/06/bitcoin-logo-7-1.png" alt="Bitcoin Icon" {...props} />
);

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
    description: "We're the last tenant you will ever need. 3-5 year lease with possibility of renewal.",
    icon: <NoMeetingRoomIcon fontSize="large" sx={{ color: green[500] }} />,
  },
  {
    title: "Property Upkeep",
    description: "Professional, regular cleaning & maintenance included  – Pristine condition always.",
    icon: <CleanHandsIcon fontSize="large" sx={{ color: green[500] }} />,
  },
  {
    title: "Timely Payments",
    description: "Steady, timely rent payments - No chasing down tenants for rent money.",
    icon: <TimerIcon fontSize="large" sx={{ color: green[500] }} />,
  },
  {
    title: "Fair Pay",
    description: "We pay competively to market rates and pay in hard currency. No low-balling, no inflation headache.",
    icon: (
      <Box display='flex' alignItems='center' justifyContent='center' gap='-10px'>
        <AttachMoneyIcon fontSize="large" sx={{ color: green[500] }} />
        <CurrencyBitcoinIcon fontSize='large' sx={{ color: '#f7931a' }}/>
      </Box>
    ),
  },
  {
    title: "Single Entity",
    description: "One professional entity for your multiple units – Eliminates complexity.",
    icon: <BusinessIcon fontSize="large" sx={{ color: green[500] }} />,
  },
  {
    title: "Zero Noise Guarantee",
    description: "No neighboor complains – Zero tolerance for noise and parties.",
    icon: <VolumeOffIcon fontSize="large" sx={{ color: green[500] }} />,
  },
];

const images = [
  {
    original: 'https://a0.muscache.com/im/pictures/miso/Hosting-756042222497511873/original/c953a450-7ac5-4a3f-b2b9-cc65f7bb8663.jpeg?im_w=720',
    thumbnail: 'https://a0.muscache.com/im/pictures/miso/Hosting-756042222497511873/original/c953a450-7ac5-4a3f-b2b9-cc65f7bb8663.jpeg?im_w=720',
  },
  {
    original: 'https://a0.muscache.com/im/pictures/e1a47e0a-5c72-482c-8057-bbc3cd054cc7.jpg?im_w=1200',
    thumbnail: 'https://a0.muscache.com/im/pictures/e1a47e0a-5c72-482c-8057-bbc3cd054cc7.jpg?im_w=1200',
  },
  // more images...
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

  const [searchValue, setSearchValue] = React.useState('');

  

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
      <motion.div initial={{ scale: 1 }} animate={{ scale: 1 }} transition={{ duration: 2 }}>
        <Box display={'flex'} flexDirection={'row'} marginBottom={'-30px'}>
        <Typography 
          variant="h2" 
          color="inherit" 
          gutterBottom
          sx={{
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
          }}
        >
        PLE
        </Typography>
        <Typography 
          variant="h2" 
          color="inherit" 
          gutterBottom
          sx={{
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
            paddingTop: '6px',
            marginRight: '10px',
          }}
        >
          <img src="https://logodownload.org/wp-content/uploads/2017/06/bitcoin-logo-7-1.png" alt="Bitcoin Icon" className='shadowedPNG' width={'42px'} paddingBottom='20px'/>
        </Typography>
        <Typography 
          variant="h2" 
          color="inherit" 
          gutterBottom
          sx={{
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
            marginBottom: '-10px'
          }}
        >
        Cave
        </Typography>
        </Box>
        <Box display={'flex'} flexDirection={'row'} marginBottom={'20px'}>
        <Typography 
          variant="h5" 
          color="inherit" 
          gutterBottom
          sx={{
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
            marginRight: '10px',

          }}
        >
          by 
        </Typography>
        
        <img src={SovereignLogo} className='shadowedPNG' width='100px' paddingTop='30px' alt="React Logo" />
        </Box>
      </motion.div>
      <div className='typist-text'>
      <Typist className='typist-text' textShadow='2px 2px 4px rgba(0, 0, 0, 0.7)' startDelay='800' avgTypingDelay={5} cursor={{ show: true, blink: true, hideWhenDone: true }} >
        Providing hassle-free long-term leases for property owners and a home for professional travelers.
      </Typist>
      </div>
      <Button variant='contained' >Work with us</Button>
    </motion.div>
  </Container>
</Banner>
      </StyledParallax>
            
      
      
      <Container maxWidth="md" sx={{ my: 5 }}>
        <Typography variant="h4" component="h1" align="center" gutterBottom>
          What we offer:
        </Typography>
        <Typography variant="h6" component="p" align="center" color="text.secondary" paragraph>
          Our business model is to literally solve all common problems you face as a property owner.
        </Typography>
        <Grid container spacing={3}>
          {serviceList.map((service, index) => (
            <Grid item xs={12} sm={4} key={index}>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Card sx={{ minWidth: 275, cursor: 'default', userSelect: 'none' }}>
                  
                  <CardContent>
                  <Box height='200px' display = 'flex' flexDirection = 'column' justifyContent = 'space-between' alignItems = 'center' >
                    {service.icon}
                    <Typography variant="h5" component="div" gutterBottom>
                      {service.title}
                    </Typography>
                    <Typography align = 'center' variant="body2" color="text.secondary">
                      {service.description}
                    </Typography>
                    <CustomButton>click to learn more</CustomButton>
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Container maxWidth="md" sx={{ my: 5 }}>
        <Typography variant="h4" component="h1" align="center" gutterBottom>
          Years of Experience
        </Typography>
        <Typography variant="h6" component="p" align="center" color="text.secondary" paragraph>
          We have been hosting on Airbnb for several years with great reviews and feedback from our guests.
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Card sx={{ minWidth: 275, cursor: 'default', userSelect: 'none' }}>
                
                <CardContent>
                <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center' gap='2vh'>
                  <CommentIcon fontSize="large" sx={{ color: green[500] }} />
                  <Typography variant="h5" component="div">
                    116
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Reviews
                  </Typography>
                  </Box>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>

          <Grid item xs={12} sm={4}>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Card sx={{ minWidth: 275, cursor: 'default', userSelect: 'none' }}>
                <CardContent>
                <Box display='flex' flexDirection='row' justifyContent='center' marginBottom='2vh'>
                  <StarIcon fontSize="large" sx={{ color: green[500] }} /> <StarIcon fontSize="large" sx={{ color: green[500] }} /><StarIcon fontSize="large" sx={{ color: green[500] }} /><StarIcon fontSize="large" sx={{ color: green[500] }} /><StarIcon fontSize="large" sx={{ color: green[500] }} />
                  </Box>
                  <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center' gap='2vh'>
                  <Typography variant="h5" component="div">
                  5/5 Star Rating
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    by 95% of guests
                  </Typography>
                  </Box>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>

          <Grid item xs={12} sm={4}>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Card sx={{ minWidth: 275, cursor: 'default', userSelect: 'none' }}>
                <CardContent>
                  <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center' gap='2vh'>
                  <HistoryIcon fontSize="large" sx={{ color: green[500] }} />
                  <Typography variant="h5" component="div">
                    7 Years
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    on Airbnb
                  </Typography>
                  </Box>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth="md" sx={{ my: 5 }}>
  <Typography variant="h4" component="h1" align="center" gutterBottom>
    Property Gallery
  </Typography>
  <Typography variant="h6" component="p" align="center" color="text.secondary" paragraph>
    Here are some of the properties we manage.
  </Typography>
  <ImageGallery items={images} />
</Container>
       <Container maxWidth="md" sx={{ my: 5 }}>
      <Typography variant="h4" component="h1" align="center" gutterBottom>
        Frequently Asked Questions
      </Typography>

      <input 
        type="text" 
        placeholder="Search FAQs..." 
        value={searchValue} 
        onChange={(e) => setSearchValue(e.target.value)} 
      />

      {
        faqs
          .filter(faq => 
            faq.question.toLowerCase().includes(searchValue.toLowerCase())
          )
          .map((faq, index) => (
            <Accordion key={index}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>{faq.question}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  {faq.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))
      }
    </Container>
    </div>
  );
};

export default Home;
