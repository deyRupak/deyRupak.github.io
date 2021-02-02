import React from "react";
import "./skills.css";
import "../styles.css";

import {Grid} from '@material-ui/core'
import { Animator, ScrollContainer, ScrollPage, batch, Fade, Move, Sticky } from "react-scroll-motion";

export default function Skills() {
  const FadeUp = batch(Fade(), Move(), Sticky());

  return (
    <>
        <Grid item className='skills'>

        <Grid
            container
            direction="column"
            justify="center"
            alignItems="stretch"
            style={{fontFamily: 'Lato, sans-serif'}}
        >

          <Grid item className="skill_title">
            <ScrollContainer>
            <ScrollPage page={1}>
            <Animator animation={FadeUp}>
              
              <span style={{background: 'linear-gradient(to right, #005e7f, #61b6cd)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'}}>
                Skills
              </span>       
              
              </Animator>
              </ScrollPage>
            </ScrollContainer>           
          </Grid>

          <Grid item className="skill_items">
          <div>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="stretch"
            >
                
                <Grid item style={{textAlign : 'left', margin: '0 3rem 3rem 0'}}>
                <b>
                python<br/>
                html / css<br/>
                react<br/>
                mysql<br/>
                </b>
                </Grid>
                <Grid item style={{textAlign : 'right', marginLeft: '0 0 3rem 3rem'}}>
                c++&nbsp;&nbsp;&nbsp;c<br/>
                javascript<br/>
                php<br/>
                mongodb<br/>
                </Grid>
                
            </Grid>
            </div>
          </Grid>
        </Grid>

        </Grid>
    </>
  );
}
