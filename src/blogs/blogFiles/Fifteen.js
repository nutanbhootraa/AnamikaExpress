import React from 'react';
import Grid from '@material-ui/core/Grid';
import CheckIcon from '@material-ui/icons/Check';
import ClearIcon from '@material-ui/icons/Clear';
const Fifteen = () => {
    return (
        <div>
            <Grid align="left" style={{backgroundColor:"#eeeeee"}} width="75%">
                <p style={{fontFamily:"Alegreya, serif", color:"#6a6c60", lineHeight:'1.8'}}>
                    <b  style={{color:"blue"}}><i>Meaningful Names</i></b>
                    <ol>
                        <li>Use Intention-Revealing Names
                            <ul>
                                <li>int a;</li>
                                <li>int noOfPeople;</li>
                                <li>int noOfPeopleInSociety;</li>
                            </ul>
                            <p> What do these examples represent?<br/>
                                First declaration, reveals nothing, whereas second declaration will tell you number of people but still it is vague,
                                But the last declaration will reveal no of people in particular society.</p>
                        </li>
                        <li> Avoid Disinformation
                            <ul>
                                <li>Do not use abbreviations</li>
                                <li> Don't use list for group or vice versa</li>
                                <li>A truly awful example of disinformative names would be the use of lower case L or upper case O as
                                    variable names
                                    <p>
                                        int a=l;<br/>
                                        if(O==l) a=Ol;<br/>
                                        else l=01;<br/>
                                    </p>
                                </li>
                            </ul>
                        </li>
                        <li> Make Meaningful Distinctions
                            <ul>
                                <li>Number-series naming (a1,a2, ..., aN) is the opposite of intentional naming. Such names are not disinformative,
                                    They are non-informative. They provide no clue about author's intentions. For example : <br/>
                                    int a[];

                                </li>
                                <li>
                                    Noise words are another meaningless distinction. <br/>Say, you have a class 'Product'. Then you create class ProductData or ProductInfo.<br/>
                                    how will someone distinguish among these classes. A few noise words are a, an, the, info, data etc.<br/>
                                    Same applies to functions too.
                                    <br/>for example : getName(), getNameInfo(), getNameData() or getNameString().
                                </li>
                                <li>
                                    Noise words are redundant. The word "variable" should never appear in a variable name. The word "table"
                                    should never appear in table name.
                                </li>
                            </ul>
                        </li>
                        <li> Use Pronounceable Names
                            <ul>
                                <li>int nopis;</li>
                                <li>int noOfPeopleInSociety</li>
                                <p>How will you pronounce example 1 : n o p i s? and everytime someone new onboards to your team, will you explain to that person?<br/>
                                instead, if you write as example 2, it is self-understood.
                                </p>
                            </ul>
                        </li>
                        <li>Use Searchable Names
                            <ul>
                                <li>
                                    Don't use magic numbers or strings, i.e, don't write constants everytime. Imagine you have to change a constant "10" in the whole codebase, would it be easy to change it every where?
                                    or rather, if you write "10" as variable "NO_OF_POSTS_PER_PAGE = 10", then it will be easy to understand as well as change if needed.
                                </li>
                            </ul>
                        </li>
                        <li>Avoid Encoding
                            <ul>
                                <li>Don't add -m prefix to member variables<br/>
                                    int mNoOfPeopleInSociety <ClearIcon color="secondary"/> <br/>
                                    int noOfPeopleInSociety<CheckIcon color="primary"/>
                                </li>
                                <li>Don't add I prefix for interface or abstract class.<br/>
                                   interface : IPersonFactory, implemented class : PersonFactory <ClearIcon color="secondary"/> <br/>
                                   interface : PersonFactory, implemented class : PersonFactoryImpl<CheckIcon color="primary"/>
                                </li>
                            </ul>
                        </li>
                        <li>Avoid Mental Mapping
                        <p> <b><i>Clarity is king. </i></b>
                            Don't assume a variable name is self-understood.
                            Write code that others can understand.
                        </p>
                        </li>
                        <li>A class name should not be a verb, it should be noun or noun phrase names.<br/>
                            Customer, Account <CheckIcon color="primary"/><br/>
                            Accounting, Processor, Manager, Managing <ClearIcon color="secondary"/>
                        </li>
                        <li>A method name should have verb or verb phrase names.<br/>
                            getName() <CheckIcon color="primary"/><br/>
                            nameInfo() <ClearIcon color="secondary"/>
                        </li>
                        <li>Accessors, Mutators or Predicates should be named for their value and prefixed with get, set or is, according to the javabean standards.</li>
                        <li>Don't Be Cute <ClearIcon color="secondary"/><ClearIcon color="secondary"/>
                        <p>whack(), holyHandGrenade() <ClearIcon color="secondary"/><br/>
                        kill(), deleteItems() <CheckIcon color="primary"/>
                        </p>
                        </li>
                        <li>Pick One Word Per Concept
                        <p> For instance, it's confusing to have fetch, retrieve and get as equivalent methods of different classes, for fetching data. How will you remember which method name goes with which class?</p>
                        </li>
                        <li>Don't Pun
                        <p>For instance, add() method can be used for insert() and append(), but don't use add() method here.</p>
                        </li>
                    </ol>
                </p>
            </Grid>
            <Grid align="left" style={{backgroundColor:"#eeeeee"}} width="75%">
                Try to understand the following code, rectify what we have learned in this chapter. <br/>
                <a href="/attachments/meaningfulNames_BadCode.txt" download="Bad Code">
                    Bad Code
                </a>
            </Grid>
            <Grid align="left" style={{backgroundColor:"#eeeeee"}} width="75%">
                Rectified code : (Try to rectify by yourself first)<br/>
                <a href="/attachments/meaningfulNames_GoodCode.txt" download="Good Code">
                    Good Code
                </a>
            </Grid>
            <Grid align="center" style={{backgroundColor:"#eeeeee"}} width="75%">
                <p style={{fontFamily:"Alegreya, serif", color:"blue", lineHeight:'1.8'}}>
                    ENJOY CODING!!!
                </p>
            </Grid>
        </div>
    );
}

export default Fifteen;