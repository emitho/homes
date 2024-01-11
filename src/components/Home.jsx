




// NEW STUFF

import React, { useState, useEffect, useRef } from 'react';
import { Box, Typography, Container, Card, CardContent, Grid, useMediaQuery, useTheme, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { styled } from '@mui/system';
import stylish from 'styled-components';
import { useInView } from 'react-intersection-observer';
import { gsap } from 'gsap';
import { motion, AnimatePresence } from "framer-motion";
import { ParallaxProvider } from 'react-scroll-parallax';
import throttle from 'lodash/throttle'; //
import { Link } from 'react-scroll';
import Typewriter from 'react-typewriter-effect';



import Modal from 'react-modal';
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
import { useSpring, animated } from 'react-spring';
import { ScrollMagicPluginGsap } from 'react-scrollmagic';
import { Tween } from 'react-gsap';

import founderImage from '../assets/founder.JPG'; // Adjust the path as per your file structure
import heroImage1 from '../assets/hero.png';
import heroImage2 from '../assets/hero2.png';
import heroImage3 from '../assets/hero3.png';
import heroImage4 from '../assets/hero4.png';
import heroImage5 from '../assets/hero5.png';
import heroImage6 from '../assets/hero6.png';
import skylineImage1 from '../assets/poolskylinehero1.png'
import skylineImage2 from '../assets/poolskylinehero2.png'
import skylineImage3 from '../assets/poolskylinehero3.png'

import premiumImage1 from '../assets/Premium1.png';
import premiumImage2 from '../assets/Premium2.png';
import tailoredImage1 from '../assets/Tailored1.png';
import Typist from 'react-typist';
import logoImage from '../assets/ACIIIDDD.png'; // Adjust the path as per your file structure
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Parallax as ParallaxScroll } from 'react-scroll-parallax';
import { Parallax as ParallaxReact } from 'react-parallax';
import ScrollProgressBar from 'react-scroll-progress-bar';


// ... [Other imports if necessary]

// Object to hold hero images
const heroImages = {
  image1: heroImage1,
  image2: heroImage2,
  image3: heroImage3,
  image4: heroImage4,
  image5: heroImage5,
  image6: heroImage6,
  image7: skylineImage1,
  image8: skylineImage2,
  image9: skylineImage3,
};



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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // This value controls the delay between each child animation
      },
    },
  };
  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 },
  };

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
    backgroundColor: 'rgba(0,0,0,0.0)', 
    zIndex: 1,
  },
});

// Styled components
const Banner = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
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

const Tagline = styled('div')(({ theme }) => ({
  fontSize: '1.5rem',
  fontWeight: 'bold',
  color: '#fff',
  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)',
  textAlign: 'center', // Ensure text is always centered
  marginTop: '20px',
  [theme.breakpoints.down('sm')]: {
    fontSize: '1rem', // Smaller font size for mobile
    marginTop: '10px',
  },
}));


const StyledParallax = styled(ParallaxReact)({
  position: 'relative',
  height: '90vh',
  backgroundPosition: 'center 90%', // Adjust the vertical positioning here
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,)', // Darken the image
    zIndex: 1,
  },
});
// Update serviceList to reflect new services
const BulletPoint = ({ text }) => (
  <motion.li
    variants={itemVariants}
    style={{
      background: 'rgba(255, 255, 255, 0.8)',
      padding: '5px 10px',
      margin: '5px 0',
      borderRadius: '5px',
      boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.16)',
      fontSize: '0.9rem',
    }}
  >
    {text}
  </motion.li>
);

const serviceList = [
  {
    title: "Full Management Package",
    features: [
      "Booking and hosting",
      "Regular cleaning",
      "Maintenance coordination",
      // Add more features as bullet points
    ],
    icon: <CleanHandsIcon fontSize="large" sx={{ color: green[500] }} />,
  },
  {
    title: "Tailored Pay-As-You-Go",
    features: [
      "Flexible fee structure",
      "Pay for what you use",
      // Add more features as bullet points
    ],
    icon: <TimerIcon fontSize="large" sx={{ color: green[500] }} />,
  },
  // Add more services as needed
];


const ServiceCard = ({ service, packageContent }) => {
  const [contentIndex, setContentIndex] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  const [startAnimation, setStartAnimation] = useState(false);

  const currentContent = packageContent[service.title][contentIndex];

  useEffect(() => {
    const interval = setInterval(() => {
      setContentIndex(prevIndex =>
        (prevIndex + 1) % packageContent[service.title].length
      );
    }, 5000); // Change content every 5 seconds

    return () => clearInterval(interval);
  }, [service.title, packageContent]);

  useEffect(() => {
    if (inView) {
      // Delay the start of the animation after the card comes into view
      const animationTimer = setTimeout(() => {
        setStartAnimation(true);
      }, 500); // 500 milliseconds delay, adjust as needed

      return () => clearTimeout(animationTimer);
    }
  }, [inView]);

  return (
    <div ref={ref} style={{ display: 'flex', justifyContent: 'center', margin: '20px' }}>
      <Card
        sx={{
          backgroundImage: `url(${currentContent.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '400px',
          width: '100%',
          opacity: 1,
          boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)',
          transition: 'transform 0.3s ease-in-out, boxShadow 0.3s ease-in-out, background-image 0.5s ease-in-out',
          '&:hover': {
            transform: 'scale(1.05)',
            boxShadow: '0 5px 15px rgb(0 0 0 / 0.3)',
          },
          ...(service.title === 'Full Management Package' && {
            border: '2px solid #ffd700', 
          }),
        }}
      >
        <CardContent>
          <Typography variant="h5" style={{ color: 'white', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)' }}>
            {currentContent.title}
          </Typography>
          {startAnimation && (
            <motion.ul
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.6, // Adjust this value for stagger delay
                  },
                },
              }}
              style={{ listStyleType: 'none', padding: 0 }}
            >
              {service.features.map((feature, index) => (
                <BulletPoint key={index} text={feature} />
              ))}
            </motion.ul>
          )}
        </CardContent>
      </Card>
    </div>
  );
};



const BioSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  

  const bioVariants = {
    offscreen: {
      y: 100,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        bounce: 0.4,
        duration: 1,
      },
    },
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', alignItems: 'center', justifyContent: 'center', my: 5, mx: 'auto', maxWidth: 'md' }}>
      <Box sx={{ maxWidth: '300px', width: '100%', p: 2, order: isMobile ? 2 : 1 }}>
        <motion.div initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.8 }} variants={bioVariants}>
          <Typography variant="h4" gutterBottom component="div" sx={{ textAlign: isMobile ? 'center' : 'left' }}>Founder's Story</Typography>
          <Typography variant="h6" gutterBottom component="div" sx={{ textAlign: isMobile ? 'center' : 'left' }}>The craft of turning spaces into sanctuaries for travelers.</Typography>
          <Typography variant="body1" sx={{ textAlign: isMobile ? 'center' : 'left', marginBottom: '10px' }}>
          At Aires BnB, we redefine rental management.

We offer two distinct paths: Our all-inclusive package manages every aspect of your property, from bookings to maintenance, while maximizing profitability. For those seeking specific support, our tailored pay-as-you-go option offers flexible services, whether it's routine cleaning, emergency responses, or even furniture leasing.


          </Typography>
        </motion.div>
      </Box>
      <Box sx={{ maxWidth: '300px', width: '100%', p: 2, order: isMobile ? 1 : 2 }}>
        <motion.img
          src={founderImage}
          alt="Founder"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 100 }}
          style={{ width: '100%', borderRadius: '10px', boxShadow: '0px 10px 20px rgba(0,0,0,0.2)' }}
        />
      </Box>
    </Box>
  );
};




const reviews = [
  {
    image: 'https://a0.muscache.com/im/pictures/user/5b0f9512-0212-48d3-b43f-065d2c854f31.jpg?im_w=240',
    name: 'Derek',
    review: `"...Fantastic location and the host was very helpful and great at responding to any queries."`
  },
  {
    image: 'https://a0.muscache.com/im/pictures/user/b3f8bfc2-1e09-4723-b2bb-81b2fd691e50.jpg?im_w=240',
    name: 'Maura',
    review: `"Phenomenal location! very easy check in and check out."`,
  },
  // and so on for the other properties
];




const PropertyGallery = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 6000); // change image every 5 seconds

    return () => {
      clearInterval(timer);
    };
  }, []);

  const variants = {
    hidden: { opacity: 0, x: 100, scale: 0.85 },
    visible: { opacity: 1, x: 0, scale: 1 },
    exit: { opacity: 0, x: -100, scale: 0.85 },
  };

  return (
    <Container maxWidth="md" sx={{ my: 5 }}>
      <ParallaxProvider>
<AnimatePresence mode="wait">
          <motion.div key={currentImageIndex} initial="hidden" animate="visible" exit="exit" variants={variants} transition={{ duration: 1 }}>
          <ParallaxScroll strength={500}>
    <img src={images[currentImageIndex].original} style={{ width: '100%' }} alt="Property"/>
</ParallaxScroll>
          <div style={{ position: 'relative', width: '80%', textAlign: 'center', padding: '10px' }}>
            <Typography variant="h6">{reviews[currentImageIndex]?.review}</Typography>
            <img src={reviews[currentImageIndex]?.image} alt={reviews[currentImageIndex]?.name} style={{width: '50px', height: '50px', borderRadius: '50%'}}/>
            <Typography variant="subtitle2">{reviews[currentImageIndex]?.name}</Typography>
          </div>
        </motion.div>
      </AnimatePresence>
      </ParallaxProvider>
    </Container>
  );
};
const BitcoinIcon = (props) => (
  <img src="https://logodownload.org/wp-content/uploads/2017/06/bitcoin-logo-7-1.png" alt="Bitcoin Icon" {...props} />
);

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


const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.5 } },
};





// Update FAQs to be more relevant to the new business model
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

const LoadingIndicator = styled('div')({
  height: '2px',
  width: '100%',
  backgroundColor: '#fff',
  marginTop: '10px',
  // Add any other styles for the loading indicator here
});
const packageContent = {
  "Full Management Package": [
    { title: "Optimized Rental, Optimized Returns.", description: "Effortless booking and hosting management...", image: premiumImage2 },
    // Add more content items as needed
  ],
  "Tailored Pay-As-You-Go": [
    { title: "Your Rental, Your Rules.", description: "Pay only for what you use, no hidden charges...", image: tailoredImage1 },
    // Add more content items as needed
  ],
  // Add more packages if necessary
};




const Home = () => {
  const [taglineVisible, setTaglineVisible] = useState(false);

  const [currentHeroImage, setCurrentHeroImage] = useState(heroImages.image9); // Default image
  const tagline = "Your Complete Property Rental Management Solution.";
  const visibleTagline = useTypewriterEffect(tagline, 1000); // duration in milliseconds
  const [searchValue, setSearchValue] = useState('');
  const [showLoader, setShowLoader] = useState(false);
  const [loading, setLoading] = useState(false);
  const [startTyping, setStartTyping] = useState(false);
  const logoRef = useRef(null); // Add this line to create a reference
  const taglineStyleMobile = {
    '@media (max-width: 600px)': {
      fontSize: '1rem', // Smaller font size for mobile
      marginTop: '10px', // Less margin to keep it closer to the logo
    },
  };

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const taglineStyle = isMobile ? 
    { fontSize: '1rem', marginTop: '10px', textAlign: 'center' } : 
    { fontSize: '1.5rem', marginTop: '20px', textAlign: 'center' };


  const logoStyle = {
    maxWidth: '100%',
    height: 'auto',
    filter: 'drop-shadow(0 0 10px white)',
    transition: 'all 0.5s ease-out', // Smooth transition for the logo
  };

  useEffect(() => {
    // Animate logo to fade in from the top
    if (logoRef.current) {
      gsap.fromTo(
        logoRef.current,
        { opacity: 0, y: -50 },
        { opacity: 1, y: 0, duration: 1.5, ease: 'power3.out' }
      );
    }

    // Start typing after 1.5 seconds
    const typingTimeout = setTimeout(() => {
      setStartTyping(true);
    }, 1500);

    return () => clearTimeout(typingTimeout);
  }, []);

  
 // Function to handle the start of the tagline typing
  const onTaglineStart = () => {
    // Animate logo movement when tagline starts
    if (logoRef.current) {
      gsap.to(logoRef.current, {
        marginTop: '-20px', // Adjust the value as needed
        duration: 0.5, // Smooth transition duration
      });
    }
  };


  useEffect(() => {
    // Delay for the Typewriter effect
    const typingDelay = setTimeout(() => {
      setStartTyping(true);
    }, 1000); // 1.5 seconds delay

    return () => clearTimeout(typingDelay);
  }, []);



  

  
  useEffect(() => {
    const handleScroll = () => {
      // Logic to handle scroll events
      // Determine the current scroll position and update state accordingly
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <div>
      <ScrollProgressBar height="5px" bgColor="#5cb85c" duration="1" />
      <StyledParallax
        blur={2.5}
        bgImage={currentHeroImage}
        bgImageAlt="Background Image"
        strength={200}
        style={{ backgroundPosition: 'center 100%', paddingBottom: '30px' }}
      >
        <Background />
        <Banner>
  <Container maxWidth="sm">
    <img 
      ref={logoRef} 
      src={logoImage} 
      alt="Logo" 
      style={logoStyle}
    />
  </Container>

  <Tagline>
    {startTyping && (
      <Typewriter
        text="Your Property's Potential, Unlocked."
        cursor
        cursorStyle='_'
        typeSpeed={30}
        deleteSpeed={50}
      />
    )}
  </Tagline>
</Banner>
      </StyledParallax>
      <Container maxWidth="md" sx={{ my: 5, px: { xs: 0, sm: 3 } }}> {/* Remove horizontal padding on mobile */}
  <Typography variant="h4" align="center" gutterBottom>Our Services</Typography>
  <Grid container spacing={{ xs: 0, sm: 3 }}> {/* Remove grid spacing on mobile */}
    {serviceList.map((service, index) => (
      <Grid item xs={12} key={index}> {/* Full width on mobile */}
        <ServiceCard service={service} packageContent={packageContent} />
      </Grid>
    ))}
  </Grid>
</Container>

<BioSection />




  

      {/* Property Gallery
      <Container maxWidth="md" sx={{ my: 5 }}>
        <Typography variant="h4" align="center" gutterBottom>Property Gallery</Typography>
        <PropertyGallery items={images}/>
      </Container>

      
      <Container maxWidth="md" sx={{ my: 5 }}>
        <Typography variant="h4" align="center" gutterBottom>Frequently Asked Questions</Typography>
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
      </Container> */}
    </div>
  );
};

export default Home;