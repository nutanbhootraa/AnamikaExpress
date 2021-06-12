import React from 'react';
import Grid from '@material-ui/core/Grid';
import {Twemoji} from 'react-emoji-render';

const Nine = () => {
    return (
        <div>
            <Grid align="left" width="75%">
                <p>
                    The Challenge : Link islands (Circles) with bridges (Straight lines), so that number on each island describes the number of bridges coming from that island.
                    <br/><br/>

                    The Rules : A maximum of two bridges can join any two island. Bridges must be either horizontal or vertical, and cannot cross other islands or bridges. The bridges must form a continuous link between islands.
                    <br/><br/>

                    Example Solved puzzles :<br/><br/>

                    Easy :<br/>

                    <img key={1} src={'blogImages/puzzle2/easy.jpeg'} alt="1" width="200" height="200"/> <br/>

                    Medium :<br/>
                    <img key={1} src={'blogImages/puzzle2/medium.jpeg'} alt="1" width="400" height="300"/> <br/>


                    Hard :<br/>
                    <img key={1} src={'blogImages/puzzle2/hard.jpeg'} alt="1" width="300" height="300"/> <br/>


                    Try to solve (hint : try to solve by eliminate method as shown in above pictures): <br/>
                    <img key={1} src={'blogImages/puzzle2/buildBridges.png'} alt="1" width="300" height="300"/> <br/>

                    Have a happy week <Twemoji svg text=" 🤗🤗" />
                    <br/><br/>
                    #puzzles #Blogger #Blogging #connectIslands #puzzleLover

                </p>
            </Grid>
        </div>
    );
}

export default Nine;