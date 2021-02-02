import React, {useState, useEffect} from "react";
import "./blogs.css";
import "../styles.css";

import { Grid, Card, Typography, CardContent, CardActions, Button } from "@material-ui/core";
import { motion, useReducedMotion, useViewportScroll, useTransform } from "framer-motion";
import { Animator, ScrollContainer, ScrollPage, batch, Fade, Move, Sticky} from "react-scroll-motion";
import VisibilityIcon from '@material-ui/icons/Visibility';

export default function Blogs() {
  const FadeUp = batch(Fade(), Move(), Sticky());

  const shouldReduceMotion = useReducedMotion()
  const { scrollY } = useViewportScroll()
  const skill_y = useTransform(scrollY, [0, 1], [0, -0.3], {
    clamp: false,
  })

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://dev.to/api/articles?username=deyrupak")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])


  return (
    <>
      
        <Grid item className='blog'>
        <Grid
            container
            direction="column"
            justify="center"
            alignItems="stretch"
        >
          <Grid item className="blog_title"> 
            <ScrollContainer>
            <ScrollPage page={7}>
            <Animator animation={FadeUp}>
              <span style={{
                background: 'linear-gradient(to right, #005e7f, #61b6cd)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
                }}>Blogs</span>
            </Animator>
            </ScrollPage>
            </ScrollContainer>                
          </Grid>

          <Grid item className="blog_items">
          <motion.div style={{
            y: shouldReduceMotion ? 0 : skill_y}}
          >
              <Grid
              container
              direction="row"
              justify="space-around"
              alignItems="stretch"
              >

              {items.slice(0,2).map(item => (

                <Grid item style={{padding: '0.5rem'}} key={item.id} xs={8}>
                  <Card style={{ 
                  height: '16rem',
                  backgroundColor: 'transparent',
                  color: 'white'
                  }}>
                    <CardContent>
                      <Typography gutterBottom style={{color: 'white', fontFamily: 'Open Sans, sans-serif'}}>
                        {item.readable_publish_date}
                      </Typography>
                      <Typography variant="h5" component="h2" style={{fontFamily: 'Lato, sans-serif'}}>
                      <a href={item.url} target="_blank" rel="noopener noreferrer" style={{color:'white', textDecoration: 'none'}}>{item.title}</a>
                      </Typography>
                      <Typography style={{fontFamily: 'Open Sans, sans-serif', fontSize: '1rem'}}>
                      <br/>
                        {item.tags}
                      </Typography>
                    </CardContent>

                    <CardActions>
                      <Button size="small">
                        <a href={item.url} target="_blank" rel="noopener noreferrer" style={{color:'white'}}><VisibilityIcon /></a>
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>

              ))}
              
              </Grid>
            
              <Grid item xs={12} style={{textAlign: 'center', marginTop: '2rem'}}>
                
                <a href="https://dev.to/deyrupak" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none'}}>
                  <Button variant="outlined"  style={{
                    fontSize: '1rem', color:'white', borderRadius: '45px', border: '1px solid white'
                  }}>
                    READ MORE
                  </Button>
                </a>
                
              </Grid>

        </motion.div>
        </Grid>
        
      </Grid>
      </Grid>
      
    </>
  );
}
