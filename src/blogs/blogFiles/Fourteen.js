import React from 'react';
import Grid from '@material-ui/core/Grid';

const Fourteen = () => {
    return (
        <div>
            <Grid align="left" width="75%">
                <p>
                    <b style={{color:"blue"}}><i>Why Clean Code?</i></b>
                    <ul>
                        <li>You are a programmer </li>
                        <li> You want to be a better programmer </li>
                        <li> Code will always be there. If you think that one dat code will disappear, then you are wrong.
                            We will never get rid of code, because code represents the details
                            of the requirements. At some level details can't be ignored or abstracted.
                            They have to be specified. Specifying requirement in such detail
                            that a machine can execute them is <i>programming</i>. such a specification is <i>code</i>.  </li>
                        <li> Never write bad code. Never hurry in writing code. Later equals never. </li>
                        <li>The total cost of owning a mess : More tangles, more twists, more time and hence more effort. </li>
                        <li> Redesigning a code costs more. Better do good design & code first time. </li>
                        <li>Unprofessional attitude towards code can swallow your code & mess it up. </li>
                        <li>Only way to make the deadline & go fast is to keep code as clean as possible at all times.</li>
                        <li> A programmer without "code-sense" can look at a messy module and recognize the mess, but will have no idea what to do about it. A programmer with "code-sense"
                            will look at a messy module and see options and variations.</li>
                        <li>The Boy Scout Rule : Leave the campground cleaner than you found it</li>
                    </ul>
                </p>
            </Grid>
            <Grid align="center" style={{backgroundColor:"#eeeeee"}} width="75%">
                <p style={{fontFamily:"Alegreya, serif", color:"blue", lineHeight:'1.8'}}>
                    ENJOY CODING!!! <br/>
                    #techBlogs #Blogger #Blogging #cleanCode #whyCleanCode
                </p>
            </Grid>
        </div>
    );
}

export default Fourteen;