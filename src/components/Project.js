import React from "react";
import "./prj.css";
import "../styles.css";
import discord from '../static/discord1.jpg'
import spotify from '../static/spotify3.jpg'
import oculus from '../static/oculus.png'

import { Grid, Card, CardActionArea, CardMedia, Typography, CardContent, CardActions, Button } from "@material-ui/core";
import GitHubIcon from '@material-ui/icons/GitHub';
import PublicIcon from '@material-ui/icons/Public';

import { motion, useReducedMotion, useViewportScroll, useTransform } from "framer-motion";
import { Animator, ScrollContainer, ScrollPage, batch, Fade, Move, Sticky} from "react-scroll-motion";

export default function Project() {

  const FadeUp = batch(Fade(), Move(), Sticky());

  const shouldReduceMotion = useReducedMotion()
  const { scrollY } = useViewportScroll()
  const skill_y = useTransform(scrollY, [0, 1], [0, -0.15], {
    clamp: false,
  })
  
  const prj_list = [
    {
      id: 1,
      prj_name:"Discord Clone",
      prj_desc:"Clone of Discord App built with ReactJS, REDUX and Firebase",
      prj_img:discord,
      prj_live:"https://discord-clone-rdx.web.app/",
      prj_github: "https://github.com/deyRupak/discord-clone"
    },

    {
      id: 2,
      prj_name:"Spotify Clone",
      prj_desc:"Clone of Spotify App built with ReactJS and Spotify API",
      prj_img:spotify,
      prj_github:"https://github.com/deyRupak/spotify-clone",
      prj_live: null
    },

    {
      id: 3,
      prj_name:"Oculus",
      prj_desc:"Aims early detection of 'Autism' & 'ADHD' fueled by ML & OpenCV",
      prj_img:oculus,
      prj_github:"https://github.com/deyRupak/oculus",
      prj_live: null
    },
  ]


  return (
    <>
      <Grid item className="prj">
        
      <Grid
            container
            direction="column"
            justify="center"
            alignItems="stretch"
        >
          <Grid item className="prj_title">  

          <ScrollContainer>
          <ScrollPage page={5}>
          <Animator animation={FadeUp}>
            <span style={{background: 'linear-gradient(to right, #005e7f, #61b6cd)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'}}>
              Projects
            </span>
          </Animator>
          </ScrollPage>
          </ScrollContainer>
            
          </Grid>

          <Grid item className="prj_items">
          <motion.div style={{y: shouldReduceMotion ? 0 : skill_y}}>

          <Grid
              container
              direction="row"
              justify="space-around"
              alignItems="stretch"
            >
                
                {prj_list.map((prj) => 
                  <Grid item key={prj.id} style={{marginBottom: '4rem'}}>
                  <Card style={{maxWidth: '20rem', height: '23rem', backgroundColor: 'transparent', color: 'white'}}>
                    <CardActionArea>
                      
                      <CardMedia
                        style={{height:'190px', width:'100%'}}
                        image={prj.prj_img}
                        title="Contemplative Reptile"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2" style={{fontFamily: 'Lato, sans-serif'}}>
                          {prj.prj_name}
                        </Typography>
                        <Typography variant="body2" component="p" style={{fontFamily: 'Open Sans, sans-serif'}}>
                          {prj.prj_desc}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <Button size="small">
                        <a href={prj.prj_github} style={{color:'white'}} target="_blank" rel="noopener noreferrer"><GitHubIcon /></a>
                      </Button>
                      { prj.prj_live && 
                      <Button size="small">
                        <a href={prj.prj_live} style={{color:'white'}} target="_blank" rel="noopener noreferrer"><PublicIcon /></a>
                      </Button>
                      }
                    </CardActions>
                  </Card>
                  </Grid>
                )
                }

                <Grid item xs={6} style={{textAlign: 'center', marginTop: '1rem'}}>
                  
                  <a href="https://github.com/deyRupak" target="_blank" rel="noopener noreferrer" 
                    style={{ textDecoration: 'none'}}>
                  <Button variant="outlined" style={{fontSize: '1rem', color:'white', borderRadius: '45px', border: '1px solid white'}}>
                      View More
                  </Button>
                  </a>
                  
                </Grid>
            </Grid>
                
          </motion.div>
          </Grid>

        </Grid>

      </Grid>
    </>
  );
}
