import React from 'react';
import Grid from '@material-ui/core/Grid';
import {Twemoji} from 'react-emoji-render';
import Alphabet from './Alphabet';
import Numbers from './Numbers';
import Punctuations from './Punctuations';

const TwentySeven = () => {
    return (
        <div>

            <Grid align="left" width="75%">
                <p>
                    <i>
                    "Morse code is a method used in telecommunication to encode text characters as standardized
                        sequences of two different signal durations, called dots and dashes, or dits and dahs.
                        Morse code is named after Samuel Morse, one of the inventors of the telegraph."
                    </i>
                    <br/> From
                    <a href="https://en.wikipedia.org/wiki/Morse_code"> Wikipedia</a>
                    <br/>
                    <br/>

                    Each Morse code symbol is formed by a sequence of dits and dahs.
                    The dit duration is the basic unit of time measurement in Morse code transmission.
                    The duration of a dah is three times the duration of a dit.
                    Each dit or dah within an encoded character is followed by a period of signal absence, called a space, equal to the dit duration.
                    The letters of a word are separated by a space of duration equal to three dits, and words are separated by a space equal to seven dits.
                    <br/>
                    <pre>
                    M   O   R   S  E          C    O   D  E<br/>
                    −− −−− ·−· ··· · (space) −·−· −−− −·· ·
</pre>
                    space between 2 letters = 3 dits<br/>
                    space between 2 words = 7 dits

                    <table>
                        <tr>
                            <td>
                                <Alphabet/>
                            </td>
                            <td>
                                <Numbers/>
                                <Punctuations/>
                            </td>
                        </tr>
                    </table>

                    <p style={{fontFamily:"Alegreya, serif", color:"red", lineHeight:'1.8'}}>
                        DO NOT memorize these codes, try to talk in morse code.
                        say for ME : dah dah   dit
                    </p>

                    <Grid align="center" style={{backgroundColor:"#eeeeee"}} width="75%">
                        <p style={{fontFamily:"Alegreya, serif", color:"blue", lineHeight:'1.8'}}>
                            ENJOY CODING!!! <Twemoji svg text=" 🤗🤗" />
                            <br/>
                            #codingIsFun #morseCode #writing #blogging #techBlog #blogger
                        </p>
                    </Grid>
                </p>
            </Grid>

        </div>
    );
};

export default TwentySeven;
