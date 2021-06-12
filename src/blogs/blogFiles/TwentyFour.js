import React from 'react';
import Grid from '@material-ui/core/Grid';
import {Twemoji} from 'react-emoji-render';

const TwentyTwo = () => {
    return (
        <div>
            <Grid align="left" width="75%">
                <p>
                    <ul>
                        <li> <b>Single Responsibility Principle</b> <br/>
                            A class should only have a single responsibility, it should only have one reason to change.
                            <br/>
                            For e.g. : If a class is created for Person entity, then it should only be changed when Person entity is changed, not for any other entity.
                        </li>
                        <li> <b> Open-Closed Principle </b> <br/>
                            Software entities should be open for extension, but closed for modification.
                            we stop ourselves from modifying existing code and causing potential new bugs in an otherwise happy application.

                        </li>
                        <li> <b> Liskov Substitution Principle </b> <br/>
                            Objects in a program should be replaceable with instances of their subtypes without altering the correctness of that program.
                            i.e., <br/> if A is subclass of B, then we should be able to replace A, without changing B.
                        </li>
                        <li> <b> Interface Segregation Principle </b> <br/>
                            A client should never be forced to implement an interface that it does not use. For doing so,
                            keep interfaces small and with minimum functionality.
                        </li>
                        <li> <b> Dependency Inversion Principle </b> <br/>
                            High level modules should not depend on low level modules, both should depend on abstractions/Interfaces.
                            Abstractions should not depend on details. Details should depend on abstractions.
                        </li>
                    </ul>

                    <Grid align="center" style={{backgroundColor:"#eeeeee"}} width="75%">
                        <p style={{fontFamily:"Alegreya, serif", color:"blue", lineHeight:'1.8'}}>
                            ENJOY CODING!!! <Twemoji svg text=" 🤗🤗" />
                            <br/>
                            #codingIsFun #SOLIDprinciples #writing #blogging #techBlog #blogger
                        </p>
                    </Grid>
                </p>
            </Grid>
        </div>
    );
};


export default TwentyTwo;