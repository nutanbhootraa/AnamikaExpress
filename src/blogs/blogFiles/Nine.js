import React from 'react';
import Grid from '@material-ui/core/Grid';
import {Twemoji} from 'react-emoji-render';

const Nine = () => {
    return (
        <div>
            <Grid align="left" style={{backgroundColor:"#eeefff"}} width="75%">
                <p style={{fontFamily:"Alegreya, serif", color:"#6a6c60", lineHeight:'1.8'}}>
                    Challenge : Create a single loop by connecting horizontally and vertically adjacent dots with lines.<br/><br/>

                    Rules : The loop must be unbroken, never cross itself, and have no branches.
                    A number in a cell indicates the number of line segments that surround the cell. Empty cells may be surrounded by any number of lines.<br/><br/>

                    Example Solved puzzles :<br/><br/>

                    Easy :<br/>

                    <img key={1} src={'blogImages/puzzle11.jpeg'} alt="1" width="200" height="200"/> <br/>

                    Medium :<br/>
                    <img key={1} src={'blogImages/puzzle12.jpeg'} alt="1" width="200" height="300"/> <br/>


                    Hard :<br/>
                    <img key={1} src={'blogImages/puzzle13.jpeg'} alt="1" width="300" height="300"/> <br/>


                    Try to solve (hint : try to solve by eliminate method as shown in above pictures): <br/>
                    <img key={1} src={'blogImages/puzzle14.png'} alt="1" width="300" height="300"/> <br/>

                    Have a happy week <Twemoji svg text=" 🤗🤗" />
                </p>
            </Grid>
        </div>
    );
}

export default Nine;