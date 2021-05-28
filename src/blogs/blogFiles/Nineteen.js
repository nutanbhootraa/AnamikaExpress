import React from 'react';
import Grid from '@material-ui/core/Grid';
const Nineteen = () => {
    return (
        <div>

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
                    <b style={{color:"blue"}}><i>Unit tests</i></b> <br/>
                    The Agile and TDD(Test Driven Development) movements have encouraged many programmers to write automated tests <br/>
                    The three laws of TDD :
                    <ol>
                        <li>You amy not write production code until you have written a failing unit test.</li>
                        <li>You may not write more of a unit test than is sufficient to fail, and not compiling is failing.</li>
                        <li>You may not write more production code than is sufficient to pass the currently failing test.</li>
                    </ol>
                    These three laws lock you into a cycle that is perhaps thirty seconds long. The tests and production code are written together, with the tests just a few seconds ahead of the production code.
                    <br/>
                    A few best practices while writing tests :
                    <ol>
                        <li>Keep tests clean. Tests should follow all the best practices given for functions.</li>
                        <li>Keep your tests readable.</li>
                        <li>Tests must be simple, succinct and expressive, but need not be as efficient as production code.</li>
                        <li>Avoid Duplication.</li>
                        <li>Use single concept per test.</li>
                        <li>Test suite should test everything.</li>
                        <li>Use a coverage tool to ensure maximum code coverage.</li>
                        <li>An Ignore test is a question about an ambiguity.</li>
                        <li>Test all the boundary conditions.</li>
                    </ol>

                    Clean tests follow other five rules : <b>F.I.R.S.T.</b>
                    <ol>
                        <li>Fast : Tests should be fast</li>
                        <li>Independent : Tests should not depend on each other.</li>
                        <li>Repeatable : Tests should be repeatable in all the environments.</li>
                        <li>Self-Validating : Tests should have a boolean output. Either they pass or fail.</li>
                        <li>Timely : Tests should be written in timely fashion</li>
                    </ol>
                </p>
            </Grid>


            <Grid align="center" style={{backgroundColor:"#eeeeee"}} width="75%">
                <p style={{fontFamily:"Alegreya, serif", color:"blue", lineHeight:'1.8'}}>
                    ENJOY CODING!!!
                    <br/>
#writing #blogging #techBlog #blogger #cleanCode #Class #Systems #unitTests #TDD
                </p>
            </Grid>
        </div>
    );
}

export default Nineteen;
