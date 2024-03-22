import React, { useState, useEffect } from "react";
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Accordion from "@mui/material/Accordion";
import { Grid, Typography } from "@mui/material";
import { motion, useAnimation } from 'framer-motion';
import image1 from '../../assets/HomeImage6.jpg';
import image2 from '../../assets/HomeImage7.jpg';
import image3 from '../../assets/HomeImage8.jpg';
import image4 from '../../assets/HomeImage9.jpg';
import Reveal from "../../utils/Reveal";
import './Accordian.css'



const AccordionItem = ({ title, content, isOpen, onChange }) => {
  return (
    <Accordion expanded={isOpen} onChange={onChange} style={{ background: 'transparent', margin: '0 auto',padding:'0.5rem 0' }}>
      <AccordionSummary
        expandIcon={isOpen ? <RemoveIcon /> : <AddIcon />}
        sx={{pt:'1rem'}}
      >
        <Reveal>
          <Typography variant='5' className="accordianHeading">{title}</Typography>
        </Reveal>
      </AccordionSummary>
      {/* <Reveal> */}

      <AccordionDetails sx={{ padding:'0 1rem 1rem' }}>
        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,

            transition: {
              duration: 1,
            },
          }}
          viewport={{ once: true }}>
          <p className="accordianContent"
          >{content}</p>
        </motion.div>
      </AccordionDetails>
      {/* </Reveal> */}
    </Accordion>
  );
};

const images = [
  image1,
  image2,
  image3,
  image4
];

const AccordianDisplay = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const [imageSrc, setImageSrc] = useState(images[0]);
  const controls = useAnimation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            controls.start({
              height: '2px',
              width: '100%',
              opacity: 1,
              transition: { duration: 2 }
            });
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(document.querySelector(".accordion-container"));

    // return () => observer.disconnect();
  }, []);

  const handleAccordionChange = (index) => {
    setOpenIndex(index);
    setImageSrc(images[index]);
  };

  return (
    <>
      <Grid container>
        <Grid item xs={12} md={6} className="accordion-container" >
          <AccordionItem
            title="DISTINCTION"
            content="Elevate your brand with an address in the heart of Toronto’s financial hub, 25 King Street West at King and Bay. Its connection to the city’s PATH system, immediate accessibility to transit, and the multitude of restaurants and cafes, makes it one of the most convenient locations in downtown Toronto."
            isOpen={openIndex === 0}
            onChange={() => handleAccordionChange(0)}
          />
          <motion.div
            style={{
              height: '2px',
              backgroundColor: 'rgb(165, 124, 82)',
              width: '0%',
              opacity: 0,
            }}
            animate={controls}
          />
          <AccordionItem
            title="BOUTIQUE"
            content="A rare opportunity to locate your business in an authentic heritage tower with a contemporary flair."
            isOpen={openIndex === 1}
            onChange={() => handleAccordionChange(1)}
          />
          <motion.div
            style={{
              height: '2px',
              backgroundColor: 'rgb(165, 124, 82)',
              width: '0%',
              opacity: 0,
            }}
            animate={controls}
          />
          <AccordionItem
            title="CLASS AAA COMPLEX"
            content="A roster of AAA amenities from bike storage with showers, tenant engagement programs and 24-hour security helping you attract and retain top talent."
            isOpen={openIndex === 2}
            onChange={() => handleAccordionChange(2)}
          />
          <motion.div
            style={{
              height: '2px',
              backgroundColor: 'rgb(165, 124, 82)',
              width: '0%',
              opacity: 0,
            }}
            animate={controls}
          />
          <AccordionItem
            title="MODERN EXPERIENCE"
            content="Exciting restaurants and shops as well as robust programming within an Art Deco building makes working here a unique experience."
            isOpen={openIndex === 3}
            onChange={() => handleAccordionChange(3)}
          />
          <motion.div
            style={{
              height: '2px',
              backgroundColor: 'rgb(165, 124, 82)',
              width: '0%',
              opacity: 0,
            }}
            animate={controls}
          />
        </Grid>
        <Grid item xs={12} md={6} style={{ padding: '2rem', margin: '0 auto' }}>
          <motion.div
            key={imageSrc} // Add key prop to force remount on imageSrc change
            initial={{
              opacity: 0,
              x: 50,
            }}
            animate={{
              opacity: 1,
              x: 0,
              transition: {
                duration: 1, // Change animation duration to 3 seconds
              },
            }}
            exit={{
              opacity: 0,
              x: -50,
              transition: {
                duration: 1,
              },
            }}
            style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
          >
            <img src={imageSrc} alt="Accordion Image" style={{ maxWidth: '100%', height: 'auto' }} />
          </motion.div>
        </Grid>

      </Grid>
    </>
  );
};

export default AccordianDisplay;
