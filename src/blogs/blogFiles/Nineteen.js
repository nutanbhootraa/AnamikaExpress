import React from 'react';
import Grid from '@material-ui/core/Grid';
const Nineteen = () => {
    return (
        <div>
            <Grid align="left" width="75%">
                <p>
                    <b style={{color:"blue"}}><i>Classes</i></b>
                    <ol>
                        <li>Classes should be small. But how much small is small enough? We count responsibilities not lines. Classes should follow single responsibility principle : A class or module should have one, and only one, <i>reason to change</i></li>
                        <li>A class should begin with a list of variables in following order :  Public static constants, then Private static variables, followed by private instance variables.</li>
                        <li>Public functions should follow the list of variables.</li>
                        <li>Class should have a small number of instance variables.</li>
                        <li>A class should support Open-Close principle, Open for extension but closed for modification.</li>
                    </ol>
                </p>
            </Grid>

            <Grid align="left" width="75%">
                <p>
                    <b style={{color:"blue"}}><i>Systems</i></b> <br/>
                    <ol>
                        <li>Software systems should separate the startup process, when the application objects are constructed and the dependencies are "wired" together, from the runtime logic that takes over after startup.</li>
                        <li>One way to separate construction from use is simply to move all aspects of construction to main, or modules called main, and to design the rest of the system assuming that all objects have been constructed and wired up appropriately.</li>
                        <li>A powerful mechanism for separating construction from use is "Dependency Injection"(DI), the application of "inversion of control" to "Dependency Management"</li>
                        <li>Dependency Inversion Principle : High level modules should not depend on low level modules, both should depend on abstractions/Interfaces. Abstractions should not depend on details. Details should depend on abstractions.</li>
                    </ol>
                </p>
            </Grid>


            <Grid align="center" style={{backgroundColor:"#eeeeee"}} width="75%">
                <p style={{fontFamily:"Alegreya, serif", color:"blue", lineHeight:'1.8'}}>
                    ENJOY CODING!!!
                    <br/>
#writing #blogging #techBlog #blogger #cleanCode #Class #Systems
                </p>
            </Grid>
        </div>
    );
}

export default Nineteen;
