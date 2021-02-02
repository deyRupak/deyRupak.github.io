import React from "react";
import "./exp.css";
import "../styles.css";

import {Grid, Paper} from '@material-ui/core'
import { motion, useReducedMotion, useViewportScroll, useTransform } from "framer-motion";
import { Animator, ScrollContainer, ScrollPage, batch, Fade, Move, Sticky } from "react-scroll-motion";

export default function Exp() {
  const FadeUp = batch(Fade(), Move(), Sticky());
  
  const shouldReduceMotion = useReducedMotion()
  const { scrollY } = useViewportScroll()
  const skill_y = useTransform(scrollY, [0, 1], [0, -0.1], {
    clamp: false,
  })

  return (
    <>
        <Grid item className='exp'>
        
        <Grid
            container
            direction="column"
            justify="center"
            alignItems="stretch"
        >
          <Grid item className="exp_title"> 
          <ScrollContainer>
          <ScrollPage page={3}>
          <Animator animation={FadeUp}>
            <span style={{background: 'linear-gradient(to right, #005e7f, #61b6cd)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              Experience
            </span>
          </Animator>
          </ScrollPage>
          </ScrollContainer>
          </Grid>

          <Grid item className="exp_items">
          <motion.div style={{y: shouldReduceMotion ? 0 : skill_y}}>
            
                
                <Grid item style={{margin: '4rem 0 0'}}>
                  <div className="exp_item_title">
                  <span style={{fontFamily: 'Lato, sans-serif'}}>
                    Frontend Developer Intern<br/>
                  </span>
                  <span style={{fontSize: '1.2rem', color: '#959da5'}}>
                    Wonsulting<br/>Jul 2020 - Sept 2020
                  </span>
                  </div>
                  <div className="exp_item_desc">
                    <Paper elevation={0}
                    style={{padding: '0.5rem', backgroundColor: 'transparent', color: 'white', margin:'0 0.5rem'}}>
                    <li>Developed a Data Science learning portal.</li>
                    <li>Worked with a team of international students.</li>
                    <li>Tech: MERN Stack.</li>
                    </Paper>
                  </div>
                </Grid>

                <Grid item style={{margin: '2rem 0 0'}}>
                  <div className="exp_item_title">
                  <span style={{fontFamily: 'Lato, sans-serif'}}>
                    Frontend Developer Intern<br/>
                  </span>
                  <span style={{fontSize: '1.2rem', color: '#959da5'}}>
                    Software Development Group - RAIT<br/>Dec 2019 - Feb 2020
                  </span>
                  </div>
                  <div className="exp_item_desc">
                    <Paper elevation={0} 
                    style={{padding: '0.5rem', backgroundColor: 'transparent', color: 'white', margin:'0 0.5rem'}}>
                    <li>Mentored and Led a team of 5.</li>
                    <li>Automated medical research paper submission & approval system for <span style={{color:'#d9dbde'}}>DYP School of Medicine.</span></li>
                    <li>Developed an attendance management system for <span style={{color:'#d9dbde'}}>DYP School of Ayurveda</span>.</li>
                    <li>Tech: HTML/CSS/JS & PHP/MySQL. Live and managing 1000+ students.</li>
                    </Paper>
                  </div>
                </Grid>

                <Grid item style={{margin: '2rem 0 0'}}>
                  <div className="exp_item_title">
                  <span style={{fontFamily: 'Lato, sans-serif'}}>
                    Fullstack Developer Intern<br/>
                  </span>
                  <span style={{fontSize: '1.2rem', color: '#959da5'}}>
                    Software Development Group - RAIT<br/>Jun 2019 - Sept 2019
                  </span>
                  </div>
                  <div className="exp_item_desc">
                    <Paper elevation={0} 
                    style={{padding: '0.5rem', backgroundColor: 'transparent', color: 'white', margin:'0 0.5rem'}}>
                    <li>Developed a web application, automating student body elections of <span style={{color:'#d9dbde'}}>Mumbai University</span>.</li>
                    <li>Enhanced a module-based centralized management web system for <span style={{color:'#d9dbde'}}>Ramrao Adik Institute of Technology</span>.</li>
                    <li>Tech: HTML/CSS/JS & PHP/MySQL. Live and managing 1500+ students.</li>
                    </Paper>
                  </div>
                </Grid>
                
                
          </motion.div>
          </Grid>
          
        </Grid>
        
        </Grid>
      
    </>
  );
}
