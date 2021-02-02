import React from "react";
import "./styles.css";

import Skills from './components/Skills'
import Exp from './components/Exp'
import Project from './components/Project'
import Blogs from "./components/Blogs";

import {Grid} from '@material-ui/core'
import {motion} from "framer-motion";
import { Animator, ScrollContainer, ScrollPage, batch, FadeIn, StickyIn, ZoomIn } from "react-scroll-motion";

export default function App() {
  const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());

  return (
    <>
    <div className="main" style={{backgroundColor:'#101010'}}>
      
      {/* Main container */}
      <Grid container
        display = "column"
        justify = 'center'
        alignItems = 'center'
      >
        <Grid item className='about'>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="stretch"
            style={{fontFamily: 'Open Sans, sans-serif'}}
          >
            <Grid item className="about_hello">
            <motion.div animate={{opacity: 1}} transition={{duration:3}} initial={{opacity:0}}>
              Hello! <br/> I'm
              </motion.div>
            </Grid>
            
            <Grid item className="about_name" style={{
              fontFamily: 'Lato, sans-serif', 
              background: 'linear-gradient(to right, #005e7f, #61b6cd)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
            <motion.div animate={{opacity: 1}} transition={{duration:1.5}} initial={{opacity:0}}>
              RUPAK DEY
              </motion.div>
            </Grid>
            
            <Grid item className="about_intro">
            <motion.div animate={{opacity: 1}} transition={{duration:3}} initial={{opacity:0}}>
            <b>
                    <span style={{color: '#959da5'}}>Based in </span>
                    Mumbai, India.<br/>
                    <span style={{color: '#959da5'}}> Currently in my senior year, pursuing <br/></span>
                    Bachelors in Computer Engineering. <br/>
                    <span style={{color: '#959da5'}}>Have a knack for </span>
                    Frontend Development 
                    <span style={{color: '#959da5'}}><br/> and </span>
                    UI/UX Designing.
                    <span style={{color: '#959da5'}}> Open to <br/> </span>
                    project collaborations, internships 
                    <span style={{color: '#959da5'}}><br/> & </span> 
                    full-time opportunities!
            </b>
            </motion.div>
            </Grid>
            
            <Grid item className="about_contact">
            <motion.div animate={{opacity: 1}} transition={{duration:3}} initial={{opacity:0}}>
            <b>
                    <span style={{color: '#959da5'}}> Contact: <br/></span>
                    <a href="mailto:rupakdey9999@gmail.com" style={{color:'white', textDecoration: 'none'}}
                     target="_blank" rel="noopener noreferrer">
                       E-Mail <br/>
                    </a>  
                    <a href="https://github.com/deyRupak" style={{color:'white', textDecoration: 'none'}}
                     target="_blank" rel="noopener noreferrer">
                       Github <br/>
                    </a>  
                    <a href="https://www.linkedin.com/in/rupak-dey-7717b5193/" style={{color:'white', textDecoration: 'none'}}
                     target="_blank" rel="noopener noreferrer">
                       LinkedIn <br/>
                    </a>
                    <a href="https://dev.to/deyrupak" style={{color:'white', textDecoration: 'none'}}
                     target="_blank" rel="noopener noreferrer">
                       Dev.to
                    </a>
            </b>
            </motion.div>  
            </Grid>  
          </Grid>
        </Grid>

        <Skills />
        <Exp />
        <Project />
        <Blogs />

        <Grid item>
            <ScrollContainer>
            <ScrollPage page={9}>
            
            <span style={{textAlign: 'center', fontFamily: 'Open Sans, sans-serif'}}>
            <Animator animation={ZoomInScrollOut}>
              <span style={{
                fontSize: "0.8rem", 
                background: 'linear-gradient(to right, #005e7f, #61b6cd)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                RupakDey
              </span>
              
            </Animator>
            </span>
            
            </ScrollPage>
            </ScrollContainer>
        </Grid>
        
      </Grid>

    </div>
    </>
  );
}
