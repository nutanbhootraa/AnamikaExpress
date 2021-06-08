import React from 'react';
import Grid from '@material-ui/core/Grid';
import {Twemoji} from 'react-emoji-render';

const TwentyTwo = () => {
    return (
        <div>
            <Grid align="left" width="75%">
                <p>
                    What 5-digit number has the following features :: <br/>
                    If we put the numeral 1 at the beginning, we get a number three times smaller than if we put numeral 1 at the end of the number.
                    <br/>

                    Hint : 1abcde * 3 = abcde1 <br/><br/>
                    Have a happy week <Twemoji svg text=" 🤗🤗" />
                    <br/> #puzzleNinja #logicalReasoning #blogging #puzzles #blogger
                </p>
            </Grid>
        </div>
    );
};


export default TwentyTwo;