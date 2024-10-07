import React from "react";
import {
  Typography,
  Box,
  Container,
  Grid,
  Card,
  CardContent,
} from "@mui/material";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import AssignmentIcon from '@mui/icons-material/Assignment';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import QuizIcon from '@mui/icons-material/Quiz';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import ChatIcon from '@mui/icons-material/Chat';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';

const squareVariants = {
  hidden: { opacity: 0, x: "-100%", y: 0 },
  visible: {
    opacity: 1,
    x: 0,
    y: [0, -10, 0], // Moves up and down
    transition: {
      x: { duration: 1 },
      y: {
        repeat: Infinity,
        repeatType: "reverse",
        duration: 2, // Speed of up and down motion
      },
    },
  },
};

const additionalCards = [
  {
    title: "Memory Booster",
    description: "Memory Match Game is a fun and engaging game where players flip and match pairs of cards to test and improve their memory skills.",
    imageUrl: "/assets/images/chess.jpg", // Replace with your image path
    link: "/memory-match",
  },
  {
    title: "Creative canvas",
    description: "Creative Canvas is an interactive platform that lets users unleash their creativity by drawing, painting, and designing on a digital canvas.",
    imageUrl: "/assets/images/canvas.jpg", // Replace with your image path
    link: "/draw",
  },
];
const learningCards = [
  {
    title: "Coping Toolbox",
    description: "Discover effective coping strategies for managing stress and anxiety, designed to help you regain control, reduce tension, and promote emotional resilience.",
    imageUrl: "/assets/images/anxiety.jpg", // Replace with your image path
    link: "/coping-strategies",
  },
  {
    title: "CBT Fundamentals",
    description: "Cognitive-behavioral therapy (CBT) techniques and resources provide powerful tools to help individuals identify and challenge negative thought patterns, develop healthier emotional responses, and implement practical strategies for improving mental health",
    imageUrl: "/assets/images/cbt.jpg", // Replace with your image path
    link: "/cbt",
  },
];
// Data for items and links
const tools = [
  { name: "Mood Journal", icon: <EmojiEmotionsIcon />, link: "/mood-tracker", description: "Track your moods and emotions daily." },
  { name: "Goal Planner", icon: <EventNoteIcon />, link: "/goal-setting", description: "Plan and track your personal goals." },
  { name: "Wellness Quiz", icon: <QuizIcon />, link: "/self-assessment", description: "Take quizzes to assess your mental well-being." },
  { name: "Habit Organizer", icon: <AssignmentIcon />, link: "/habit-tracker", description: "Organize and track your daily habits." },
  { name: "Mindful Meditation", icon: <AutoAwesomeIcon />, link: "/guided-meditation", description: "Engage in guided meditation sessions." },
  { name: "AI Counselor", icon: <ChatIcon />, link: "/chatbot", description: "Chat with an AI counselor for support." },
];

// Image Component
const Image = () => {
  return (
    <Box sx={{ position: "relative", display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={squareVariants}
        style={{
          width: "100px",
          height: "100px",
          backgroundColor: "#ffcc00",
          position: "absolute",
          top: "-40px",
          left: "-40px",
          zIndex: 0,
          borderRadius: "10px",
        }}
      />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={squareVariants}
        style={{
          width: "100px",
          height: "100px",
          backgroundColor: "#00ccff",
          position: "absolute",
          bottom: "-40px",
          right: "-40px",
          zIndex: 0,
          borderRadius: "10px",
        }}
      />

      <img
        src="/assets/images/hero-imge.webp"
        alt="hero-img"
        style={{
          maxWidth: "100%",
          maxHeight: "100%",
          borderRadius: "10px",
          zIndex: 1,
          position: "relative",
        }}
      />
    </Box>
  );
};

const StarImage = () => {
  return (
    <Box sx={{ position: "relative", display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>
      <img
        src="/assets/images/star.png"
        alt="star-img"
        style={{
          maxWidth: "200px",
          maxHeight: "50%",
          position: "relative",
        }}
      />
    </Box>
  );
};

const Home = () => {
  const cardVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const darkMode = useSelector((state) => state.darkMode.darkMode);

  return (
    <Box
      sx={{
        minHeight: "calc(100vh - 128px)",
        color: darkMode ? "#ffffff" : "#000000",
        padding: 4,
        backgroundColor: darkMode ? "#000000" : "#ffffff",
      }}
    >
      <Container maxWidth="xl">
        <motion.div initial="hidden" animate="visible" variants={cardVariants} transition={{ duration: 1 }}>
          <Grid container spacing={10} mt={4}>
            <Grid item xs={12} sm={6} md={6}>
              <Typography variant="h1" align="left" gutterBottom sx={{ fontWeight: "medium", color: "#000000", maxWidth: '500px' }} mt={2}>
                Your <span style={{ fontWeight: "bold" }}>Comprehensive Solution</span> for <span style={{ fontWeight: "bold" }}>Mental Health Care.</span>
              </Typography>
              <Typography variant="h6" align="left" gutterBottom sx={{ fontWeight: "medium", maxWidth: '600px' }}>
                Explore a comprehensive range of resources, expert guidance, and a supportive community designed to empower you on your journey towards better mental health and overall well-being, helping you to thrive in every aspect of your life.
              </Typography>
              <Box sx={{
                backgroundColor: "#306B66",
                maxWidth: '150px',
                padding: '5px',
                paddingY: '10px',
                borderRadius: "5px",
                display: 'flex',
                justifyContent: 'center',
                marginTop: '20px',
                color: 'white'
              }}>
                <Link to='/survey' style={{ textDecoration: 'none'}}>
                <Typography sx={{ color: 'white', marginRight: "7px" }}>Take Survey Now</Typography>
                </Link>
                <ArrowForwardIcon />
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <Image />
            </Grid>
          </Grid>
        </motion.div>

        <Grid container mt={4} style={{ backgroundColor: '#EFFCEE', borderRadius: '10px', padding: '40px', marginTop:'60px' }}>
          <Grid item xs={12} sm={6} md={6}>
            <Typography variant="h2" align="left" gutterBottom sx={{ fontWeight: "bold", color: "#000000", maxWidth: '500px' }} mt={2}>
              Self-Care Resources for Personal Well-being
            </Typography>
            <Typography variant="h6" align="left" gutterBottom sx={{ fontWeight: "light", maxWidth: '600px' }}>
              Self-Care Tools offer essential resources to support your well-being, helping you manage stress, prioritize mental health, and build habits for a balanced, healthy life.
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6} md={6}>
            <StarImage />
          </Grid>

          <Grid container spacing={2} mt={2}>
            {tools.map((tool, index) => (
              <Grid item xs={6} sm={4} md={2} key={index}>
                <motion.div
                  whileHover={{ scale: 1.05 }} // Scale effect on hover
                  transition={{ duration: 0.3 }} // Duration of the hover effect
                >
                  <Card
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      alignItems: 'left',
                      backgroundColor: '#306B66',
                      height: '300px',
                      borderRadius: '10px',
                      
                    }}
                  >
                    <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
                      {/* Icon box */}
                      <Box
                        sx={{
                          fontSize: '3rem',
                          color: '#ffffff',
                          backgroundColor: '#3B807C',
                          maxWidth: '50px',
                          display: 'flex',
                          justifyContent: 'center',
                          paddingX: '10px',
                          paddingY: '20px',
                          borderRadius: '5px',
                        }}
                      >
                        {tool.icon}
                      </Box>

                      {/* Text content box at the bottom */}
                      <Box sx={{ mt: 'auto' }}>
                        <Link to={tool.link} style={{ textDecoration: 'none' }}>
                          <Typography variant="h4" sx={{ color: '#84E783', fontWeight: 'medium', mt: 2 }}>
                            {tool.name}
                          </Typography>
                        </Link>
                        <Typography variant="h6" sx={{ color: '#F6FAFA', textAlign: 'left', marginTop: 1, marginBottom: 1 }}>
                          {tool.description}
                        </Typography>

                        
                        <Link to={tool.link} style={{ textDecoration: 'none', marginTop: 5,  color: '#ffffff', fontSize:'20px' }}>
                          <ArrowCircleRightOutlinedIcon/>
                        </Link>
                      </Box>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>


        </Grid>

        <Grid container mt={4} style={{ marginTop: '60px', padding: '10px' }} spacing={4}>
          <Grid 
    item 
    xs={12} 
    sm={4} 
    md={4} 
    sx={{ 
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'space-between' // Makes sure the button aligns at the end 
    }}
  >
    <Typography variant="h1" align="left" gutterBottom sx={{ fontWeight: "bold", color: "#000000", maxWidth: '400px' }} mt={2}>
      Therapeutic Games for Wellness
    </Typography>
    <Typography variant="h6" align="left" gutterBottom sx={{ fontWeight: "light", maxWidth: '400px' }}>
      Therapeutic games provide a unique way to enhance emotional well-being, allowing players to explore feelings, develop coping strategies, and connect with others while promoting mindfulness and personal growth.
    </Typography>
    <Box sx={{ display: 'flex', justifyContent: 'flex-start', mt: 2 }}>
      <Link 
        to='/' 
        style={{ 
          textDecoration: 'none', 
          color: '#ffffff', 
          fontSize: '15px', 
          maxWidth: '160px', 
          display: 'flex', 
          justifyContent: 'center', 
          borderRadius: '20px', 
          padding: '10px', 
          fontWeight: 'bold', 
          backgroundColor: '#000000' 
        }}
      >
        See All Games <ArrowForwardIcon fontSize="small" sx={{ml: "10px"}} />
      </Link>
    </Box>
          </Grid>

          {additionalCards.map((card, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}  sx={{ 
              maxWidth: '300px', 
              borderRadius: '10px', 
              display: 'flex',
              justifyContent: 'left' ,
              
            }}>
              <motion.div
                whileHover={{ scale: 1.05 }} // Scale effect on hover
                transition={{ duration: 0.3 }} // Duration of the hover effect
                style={{ width: '100%' }} // Ensure motion div takes full width of grid item
              >
                <Card 
                  sx={{
                    border: '1px solid #E2E2E2', 
                    padding: '10px',  

                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'left', // Center items inside the card
                    justifyContent: 'left', // Vertically center the content
                    height: '100%',
                    borderRadius: '10px',
                    overflow: 'hidden',
                    backgroundColor: 'white',
                    boxShadow: 'none'
                  }}
                >
                  <img
                    src={card.imageUrl}
                    alt={card.title}
                    style={{
                      width: '100%', // Make the image responsive
                      height: '250px',
                      objectFit: 'cover',
                      borderRadius: '10px 10px 0 0' // Rounded corners for top of card
                    }}
                  />
                  <CardContent 
                    sx={{ 
                      display: 'flex', 
                      flexDirection: 'column', 
                      justifyContent: 'left', // Center content vertically
                      alignItems: 'left' // Center content horizontally
                    }}
                  >
                    <Typography variant="h4" sx={{ color: '#000', fontWeight: 'medium', mt: 2 }}>
                      {card.title}
                    </Typography>
                    <Typography variant="body1" sx={{ color: '#000', textAlign: 'left', mt: 1, mb: 3, fontSize:'12px' }}>
                      {card.description}
                    </Typography>
                    <Link to={card.link} style={{ textDecoration: 'none', color: '#000000', fontSize: '15px', border:'1px solid black', maxWidth:'120px', display:'flex', justifyContent:'center', borderRadius:'15px', padding:'5px', fontWeight:'bold' }}>
                      Learn More  <ArrowForwardIcon fontSize="small" sx={{ml: "10px"}} />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        <Grid container mt={4} style={{ marginTop: '60px', padding: '10px' }} spacing={4}>
          {learningCards.map((card, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}  sx={{ 
                maxWidth: '300px', 
                borderRadius: '10px', 
                display: 'flex',
                justifyContent: 'left' ,
                
              }}>
                <motion.div
                  whileHover={{ scale: 1.05 }} // Scale effect on hover
                  transition={{ duration: 0.3 }} // Duration of the hover effect
                  style={{ width: '100%' }} // Ensure motion div takes full width of grid item
                >
                  <Card 
                    sx={{
                      border: '1px solid #E2E2E2', 
                      padding: '10px',  

                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'left', // Center items inside the card
                      justifyContent: 'left', // Vertically center the content
                      height: '100%',
                      borderRadius: '10px',
                      overflow: 'hidden',
                      backgroundColor: 'white',
                      boxShadow: 'none'
                    }}
                  >
                    <img
                      src={card.imageUrl}
                      alt={card.title}
                      style={{
                        width: '100%', // Make the image responsive
                        height: '250px',
                        objectFit: 'cover',
                        borderRadius: '10px 10px 0 0' // Rounded corners for top of card
                      }}
                    />
                    <CardContent 
                      sx={{ 
                        display: 'flex', 
                        flexDirection: 'column', 
                        justifyContent: 'left', // Center content vertically
                        alignItems: 'left' // Center content horizontally
                      }}
                    >
                      <Typography variant="h4" sx={{ color: '#000', fontWeight: 'medium', mt: 2 }}>
                        {card.title}
                      </Typography>
                      <Typography variant="body1" sx={{ color: '#000', textAlign: 'left', mt: 1, mb: 3, fontSize:'12px' }}>
                        {card.description}
                      </Typography>
                      <Link to={card.link} style={{ textDecoration: 'none', color: '#000000', fontSize: '15px', border:'1px solid black', maxWidth:'120px', display:'flex', justifyContent:'center', borderRadius:'15px', padding:'5px', fontWeight:'bold' }}>
                        Learn More  <ArrowForwardIcon fontSize="small" sx={{ml: "10px"}} />
                      </Link>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          
          <Grid 
            item 
            xs={12} 
            sm={4} 
            md={4} 
            sx={{ 
              display: 'flex', 
              flexDirection: 'column', 
            }}
      >
        <Typography variant="h1" align="right" gutterBottom sx={{ fontWeight: "bold", color: "#000000", maxWidth: '400px' }} mt={2}>
          Interactive hub for knowledge and growth.
        </Typography>
        <Typography variant="h6" align="right" gutterBottom sx={{ fontWeight: "light", maxWidth: '400px', mt:5 }}>
          Unlock your potential with a diverse range of interactive learning tools and resources, designed to inspire growth, curiosity, and lifelong learning.         </Typography>
          </Grid>

        </Grid>

        <Box  mt={4} style={{ marginTop: '60px', backgroundColor: '#306B66', borderRadius: '10px', padding: '40px', color:'#ffffff' }} spacing={4}>          
          <Typography variant="h3" align="center" gutterBottom sx={{ fontWeight: "bold", color: "#ffffff", display:'flex' , justifyContent:'center' }} mt={2} mb={4}>
          Join our supportive network to connect with others <br/> on your mental well-being journey.
          </Typography>

          <Grid container>
            <Grid 
              item 
              xs={12} 
              sm={6} 
              md={6} 
              sx={{ 
                display: 'flex', 
                flexDirection: 'column', 
              }}
        >
          <Typography variant="h1" align="center" gutterBottom sx={{ fontWeight: "bold", color: "#000000", maxWidth: '600px', paddingX: 10 }} mt={2}>
            Support Circle
          </Typography>
          <Typography variant="h6" align="center" gutterBottom sx={{ fontWeight: "light", maxWidth: '600px', mt:1,  paddingX: 10, color: "#ffffff", opacity: 0.7 }} mb={2}>
            Build meaningful connections and find encouragement within a community that understands and supports your mental wellness journey.      </Typography>
            <motion.div
        whileHover={{ scale: 1.05, color: "#d4f1f4" }} // Framer Motion hover effect
        transition={{ duration: 0.3 }}
      >
        <Link 
          to='/support-groups' 
          style={{ 
            textDecoration: 'none', 
            color: '#ffffff', 
            fontSize: '18px', 
            display:'flex', 
            justifyContent:'center', 
            fontWeight:'bold',
          }}
        >
          Learn More  <ArrowForwardIcon fontSize="small" sx={{ml: "10px"}} />
        </Link>
      </motion.div>
            </Grid>
            <Grid 
              item 
              xs={12} 
              sm={6} 
              md={6} 
              sx={{ 
                display: 'flex', 
                flexDirection: 'column', 
              }}
        >
          <Typography variant="h1" align="center" gutterBottom sx={{ fontWeight: "bold", color: "#000000", maxWidth: '600px',  paddingX: 10 }} mt={2}>
            Peer Chat
          </Typography>
          <Typography variant="h6" align="center" gutterBottom sx={{ fontWeight: "light", maxWidth: '600px', mt:1 ,  paddingX: 10, opacity: 0.7,  color: "#ffffff"}} mb={2}>
            Engage in real-time conversations with peers to share experiences, offer support, and foster mutual understanding.       </Typography>
            <motion.div
        whileHover={{ scale: 1.05, color: "#d4f1f4" }} // Framer Motion hover effect
        transition={{ duration: 0.3 }}
      >
        <Link 
          to='/chat' 
          style={{ 
            textDecoration: 'none', 
            color: '#ffffff', 
            fontSize: '18px', 
            display:'flex', 
            justifyContent:'center', 
            fontWeight:'bold',
          }}
        >
          Learn More  <ArrowForwardIcon fontSize="small" sx={{ml: "10px"}} />
        </Link>
      </motion.div>
            </Grid>
          </Grid>

        </Box>

        <Typography variant="body1" align="center"  sx={{ fontWeight: "light", color: "#000000",}} mt={2}>
            Careness Copyright 2024
          </Typography>

      </Container>
    </Box>
  );
};

export default Home;
