import React from 'react';
import Grid from '@material-ui/core/Grid';
const Eighteen = () => {
    return (
        <div>
            <Grid align="left" width="75%">
                <p>
                    <b style={{color:"blue"}}><i>Comments</i></b>
                    <ol>
                        <li>Comments do not make up for bad code.</li>
                        <li>Explain yourself in code.</li>
                        <li>Legal comments : sometimes our corporate coding standards force us to write certain comments for legal reasons. For example, copyright comment.</li>
                        <li>Comment should be explanation of intent. Do not add unnecessary words. Make an obvious connection between code and comment.</li>
                        <li>Comment should be clear and precise.</li>
                        <li>Warning of consequences : now we have @ignore attribute, but before junit4, the common practice was to put an underscore before the method name.</li>
                        <li>TODO comments : these comments explain what the code's future should be.</li>
                        <li>Always write javadocs for public APIs.</li>
                        <li>Do not write misleading comments.</li>
                        <li>Do not write redundant comment. For Example : <br/>
                            // Gets the name<br/>
                            public String getName(){}<br/>
                        </li>
                        <li>Do not use a comment when you can use a function or a variable.</li>
                        <li>Do not add comment at closing of the braces.</li>
                        <li>Don't comment out the code. Simply delete it and Use version control to see what has been changed. If it's unavoidable then use a TODO comment.</li>
                        <li>Do not write too much information.</li>
                        <li>Do not write java doc for non-public code.</li>
                        <li>A comment which got old, irrelevant and incorrect is obsolete. If you find an obsolete comment, update it.(Goes for dead/obsolete code)</li>
                    </ol>
                </p>
            </Grid>

            <Grid align="left" width="75%">
                <p>
                    <b style={{color:"blue"}}><i>Formatting</i></b> <br/>
                    You should take care that your code is nicely formatted. You should choose a set of simple rules that govern the format of your code, and then you should consistently apply those rules. Every programmer has his own favorite formatting rules, but if you work in team, then the team rules.
                    <ol>
                        <li>Caller function should be above callee. If possible.<i>
<pre>{`Public void a(){
   b();
}

private void b(){}
`}</pre> </i>
                        </li>
                        <li> Each line represents an expression or a clause and each group of lines represents a complete thought. Those thoughts should be separated from each other with blank lines.</li>
                        <li>Variables should be declared as close to their usage as possible.</li>
                        <li>In C++ we have scissors rule, which puts all the instance variables at the bottom. However, the common convention in Java is to put them all at the top of the class.</li>
                        <li>Choose consistent indentation.</li>
                        <li>Do not break indentation for one liner if conditions or for loops.</li>
                        <li>Avoid negative conditioning <br/>
                        if (someCondition1) is preferable over if(!someCondition2)
                        </li>
                        <li>Use ENUM instead of Constants, if possible</li>
                    </ol>
                </p>
            </Grid>

            <Grid align="left" width="75%">
                <p>
                    <b style={{color:"blue"}}><i>Error Handling</i></b>
                    <ol>
                        <li>Use exceptions rather than Error codes.</li>
                        <li>Use unchecked exceptions.</li>
                        <li> Provide context with each exception</li>
                    </ol>
                </p>
            </Grid>

            <Grid align="center" style={{backgroundColor:"#eeeeee"}} width="75%">
                <p style={{fontFamily:"Alegreya, serif", color:"blue", lineHeight:'1.8'}}>
                    ENJOY CODING!!!
                    <br/>
#writing #blogging #techBlog #blogger #cleanCode #Comments #Formatting #ErrorHandling
                </p>
            </Grid>
        </div>
    );
}

export default Eighteen;
