import React from 'react';
import Grid from '@material-ui/core/Grid';
import {Twemoji} from 'react-emoji-render';

const ThirtyFour= () => {
    return (
        <div>

            <Grid align="left" width="75%">
                <p>

                    Winning should not be an ultimate goal, learning should be. <br/>

                    Keeping this in mind, I participated in "International speech contest" in my club. My topic was: An Unsuitable Girl. <br/>
                    A lot of people helped me prepare the speech, gave feedback on how I can improve my speech and different delivery aspects. <br/>

                    Presenting on an actual stage was real fun, rather than on an online platform.

                    My biggest achievement during this competition is, I had the courage to on stage and competed against some super awesome speakers. <br/>

                    When you take learning as fun, you can go above and beyond. <br/>

                    <img key={1} src={'blogImages/0003.jpg'} alt="1" width="300" height="200"/> <br/>

                    <Grid align="center" style={{backgroundColor:"#eeeeee"}} width="75%">
                        <p style={{fontFamily:"Alegreya, serif", color:"blue", lineHeight:'1.8'}}>
                            ENJOY READING!!! <Twemoji svg text=" 🤗🤗" />
                            <br/>
                            #toastmasters #internationalSpeechContest #experiences #publicSpeaking #writing #blogging #blogger
                        </p>
                    </Grid>
                </p>
            </Grid>

        </div>
    );
};

export default ThirtyFour;
