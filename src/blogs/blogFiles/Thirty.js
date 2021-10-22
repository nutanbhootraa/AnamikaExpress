import React from 'react';
import Grid from '@material-ui/core/Grid';
import {Twemoji} from 'react-emoji-render';

const Thirty= () => {
    return (
        <div>

            <Grid align="left" width="75%">
                <p>
Ram has to buy 100 pencils from different shops. The different shops have different rates.
                    <br/>
                    First Shop : 5 Paise <br/>
                    Second Shop : 1 rupee<br/>
                    Third Shop : 5 rupees<br/>
                    He should have atleast 1 pencil from each shop. A total of 100 rupees, he has in his purse and he has to spend all his money.
                    <br/>
                    From which shop he should buy and how many pencils?

                    <Grid align="center" style={{backgroundColor:"#eeeeee"}} width="75%">
                        <p style={{fontFamily:"Alegreya, serif", color:"blue", lineHeight:'1.8'}}>
                            Enjoy Solving the Puzzle <Twemoji svg text=" 🤗🤗" />
                            <br/>
                            #elementaryMathematics #puzzles #puzzleWorld #writing #blogging #blogger
                        </p>
                    </Grid>
                </p>
            </Grid>

        </div>
    );
};

export default Thirty;
