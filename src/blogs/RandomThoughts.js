import React from 'react';
import Grid from '@material-ui/core/Grid';

const RandomThoughts = () => {
    return (
        <div>
            <Grid align="left" style={{backgroundColor:"#eeeeee"}} width="75%">
                <p style={{fontFamily:"Alegreya, serif", color:"#6a6c60", lineHeight:'1.8'}}>
                    Random Thought 3 : <br/> Kahani kitni hi choti kyu na ho.<br/>
                    Jis kahani ke hero aap khud hote ho, kisse usi se bante hain
                </p>
            </Grid>
            <Grid align="left" style={{backgroundColor:"#eeeeee"}} width="75%">
                <p style={{fontFamily:"Alegreya, serif", color:"#6a6c60", lineHeight:'1.8'}}>
                    Random Thought 2 : <br/> Ladkiyan to aise hi badnaam hai.. Paiso ke lie to mahabharat bhi hui thi
                </p>
            </Grid>
            <Grid align="left" style={{backgroundColor:"#eeeeee"}} width="75%">
                <p style={{fontFamily:"Alegreya, serif", color:"#6a6c60", lineHeight:'1.8'}}>
                    Random Thought 1 : <br/> Pehle mujhe EID ka din pata nahi tha.. ab solmon boi ne bata dia without any disappointment(because
                    that's what was expected from the trailer of Radhe)
                </p>
            </Grid>
            <Grid align="left" style={{backgroundColor:"#eeeeee"}} width="75%">
                <p style={{fontFamily:"Alegreya, serif", color:"#6a6c60", lineHeight:'1.8'}}>
                    Random Thought 0 : <br/>They say : nobody can make a female happy. <br/>
                    Are tum icecream deke to dekho
                </p>
            </Grid>
        </div>
    );
}

export default RandomThoughts;