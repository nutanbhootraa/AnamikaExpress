import React from 'react';
import Grid from '@material-ui/core/Grid';
import {Twemoji} from 'react-emoji-render';
import FPExample1 from './FPExample1';

const ThirtyTwo= () => {
    return (
        <div>

            <Grid align="left" width="75%">
                <p>

                    In our last article we have learned what is functional programming. Now how do we use it?
                    <br/>
                    Check out the following examples.

                    <FPExample1/>

                    <Grid align="center" style={{backgroundColor:"#eeeeee"}} width="75%">
                        <p style={{fontFamily:"Alegreya, serif", color:"blue", lineHeight:'1.8'}}>
                            ENJOY CODING!!! <Twemoji svg text=" 🤗🤗" />
                            <br/>
                            #codingIsFun #functionalProgramming #writing #blogging #techBlog #blogger
                        </p>
                    </Grid>
                </p>
            </Grid>

        </div>
    );
};

export default ThirtyTwo;
