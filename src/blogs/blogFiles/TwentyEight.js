import React from 'react';
import Grid from '@material-ui/core/Grid';
import {Twemoji} from 'react-emoji-render';

const TwentyEight= () => {
    return (
        <div>

            <Grid align="left" width="75%">
                <p>

                    It’s a declarative style of programming. A style of writing computer programs that treat computations as evaluating mathematical functions i.e., an expression that relates an input set to an output set.
                    <br/>
                    It deals with certain key concepts like Pure function, immutable state, assignment less programming etc.<br/>

                    => Functional programming uses <a style={{fontFamily:"Alegreya, serif", color:"green"}}> higher order functions**</a> but often permits mutability at the risk of we failing to do the right things. <br/>

                    => Pure Functional Programming : Functional Programming with immutability.<br/>

                    Java uses Functional Programming whereas Haskell uses Pure Functional Programming<br/>

                    => Lambda Expressions : An anonymous method that has mutability at very minimum and it has only a parameter list and a body.
                    Return type is always inferred based on the context. <br/>

                    (parameters) - > body <br/>

                    Lambdas are stateless. Local variable factor scope must be final or effectively final. <br/>


                    Pure Function : A function is a pure function if it always returns the same result for same argument variables and it has no side effects like modifying an argument or outputting something. <br/>

                    The basic objective of this style of programming is to make code more concise, less complex, more predictable and easier to test compared to the legacy style of coding.<br/>

                    <i>In next article we will learn how to use Functional Programming.</i>

                    <p style={{fontFamily:"Alegreya, serif", color:"green"}}>
                        Higher order functions** :
                        <ul>
                            <li>We can pass objects to a function</li>
                            <li>We can create objects within function</li>
                            <li>We can return objects from a function</li>
                            <li>We can pass a function to a function</li>
                            <li>We can create a function within a function</li>
                            <li>We can return a function from a function</li>
                        </ul>
                    </p>


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

export default TwentyEight;
