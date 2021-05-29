import React from 'react';
import Grid from '@material-ui/core/Grid';
const Twenty = () => {
    return (
        <div>

            <Grid align="left" width="75%">
                <p>
                    <b style={{color:"blue"}}><i>Concurrency(Summary from Clean Code)</i></b> <br/>
                    <ol>
                        It is much easier to write code that
                        executes in a single thread. It is also easy to write multithreaded code that looks fine on the
                        surface but is broken at a deeper level. Such code works fine until the system is placed
                        under stress.
                        <li> <b>Why Concurrency?</b> <br/>
                            Concurrency is a decoupling strategy. It helps us decouple what gets done from when it
                            gets done. In single-threaded applications what and when are so strongly coupled that the
                            state of the entire application can often be determined by looking at the stack backtrace.

                        </li>

                        <li>
                            <b>Myths and Misconceptions</b><br/>
                            <ul>
                                <li>Concurrency always improves performance.</li>
                                <li>Design does not change when writing concurrent programs.</li>
                                <li>Understanding concurrency issues is not important when working with a container such as a Web or EJB container.</li>
                                <li>Concurrency incurs some overhead, both in performance as well as writing additional code.</li>
                                <li>Correct concurrency is complex, even for simple problems.</li>
                                <li>Concurrency bugs aren’t usually repeatable.</li>
                                <li>Concurrency often requires a fundamental change in design strategy.</li>
                            </ul>
                        </li>

                        <li> <b>Concurrency Defense Principles</b><br/>
                            <ul>
                                <li> <b>Single Responsibility Principle</b><br/>
                                    The SRP5 states that a given method/class/component should have a single reason to change. Concurrency design is complex enough to be a reason to change in it’s own right and therefore deserves to be separated from the rest of the code.
                                    <ul>
                                        <li>Concurrency-related code has its own life cycle of development, change, and tuning.</li>
                                        <li>Concurrency-related code has its own challenges, which are different from and often more difficult than nonconcurrency-related code.</li>
                                        <li>The number of ways in which miswritten concurrency-based code can fail makes it challenging enough without the added burden of surrounding application code.</li>
                                        <li><b style={{color:"red"}}>**</b>Keep your concurrency-related code separate from other code.</li>
                                    </ul>
                                </li>
                                <li> <b>Limit the scope of the data</b><br/>
                                    The more places shared data can get updated, the more likely:
                                    <ul>
                                        <li>You will forget to protect one or more of those places—effectively breaking all code that modifies that shared data.</li>
                                        <li>There will be duplication of effort required to make sure everything is effectively guarded <u style={{color:"red"}}>(violation of DRY)</u>.
                                            <ul style={{color:"red"}} ><li>DRY : Don't Repeat Yourself</li></ul>
                                        </li>
                                        <li>It will be difficult to determine the source of failures, which are already hard enough to find.</li>
                                        <li><b style={{color:"red"}}>**</b>Take data encapsulation to heart; severely limit the access of any data that may be shared.</li>
                                    </ul>
                                </li>

                                <li> <b>Use Copies of Data</b><br/>
                                    A good way to avoid shared data is to avoid sharing the data in the first place. In some situations it is possible to copy objects and treat them as read-only. In other cases it might be possible to copy objects, collect results from multiple threads in these copies and then merge the results in a single thread.
                                    <br/>
                                    If there is an easy way to avoid sharing objects, the resulting code will be far less likely to cause problems. You might be concerned about the cost of all the extra object creation. It is worth experimenting to find out if this is in fact a problem. However, if using copies of objects allows the code to avoid synchronizing, the savings in avoiding the intrinsic lock will likely make up for the additional creation and garbage collection overhead.
                                </li>
                                <li><b>Threads Should Be as Independent as Possible</b><br/>
                                    Attempt to partition data into independent subsets than can be operated on by independent threads, possibly in different processors.
                                </li>
                            </ul>

                        </li>
                        <li> <b>Know Your Library</b>
                            <ul>
                                <li>Use the provided thread-safe collections.</li>
                                <li>Use the executor framework for executing unrelated tasks.</li>
                                <li>Use nonblocking solutions when possible.</li>
                                <li>Several library classes are not thread safe.</li>
                            </ul>
                        </li>

                        <li> <b>Beware Dependencies Between Synchronized Methods</b><br/>
                            Dependencies between synchronized methods cause subtle bugs in concurrent code. <br/>
                            <b style={{color:"red"}}>**</b>Avoid using more than one method on a shared object <br/>
                            There will be times when you must use more than one method on a shared object. When this is the case, there are three ways to make the code correct:
                            <ul>
                                <li>Client-Based Locking—Have the client lock the server before calling the first method and make sure the lock’s extent includes code calling the last method.</li>
                                <li>Server-Based Locking—Within the server create a method that locks the server, calls all the methods, and then unlocks. Have the client call the new method.</li>
                                <li>Adapted Server—create an intermediary that performs the locking. This is an example of server-based locking, where the original server cannot be changed.</li>
                            </ul>
                        </li>
                        <li> <b>Keep Synchronized Sections Small</b></li>
                        <li><b>Writing Correct Shut-Down Code Is Hard</b><br/>
                            Graceful shutdown can be hard to get correct. Common problems involve deadlock, with threads waiting for a signal to continue that never comes.<br/>
                            Think about shut-down early and get it working early. It’s going to take longer than you expect. Review existing algorithms because this is probably harder than you think.
                        </li>
                        <li><b>Testing Threaded Code</b><br/>
                            Write tests that have the potential to expose problems and then run them frequently, with different programatic configurations and system configurations and load. If tests ever fail, track down the failure. Don’t ignore a failure just because the tests pass on a subsequent run.<br/>
                            <ul>
                                <li>Treat spurious failures as candidate threading issues. Do not ignore system failures as one-offs.</li>
                                <li>Get your nonthreaded code working first.</li>
                                <li>Make your threaded code pluggable. Make your thread-based code especially pluggable so that you can run it in various configurations.</li>
                                <li> Make your threaded code tunable.</li>
                                <li>Run with more threads than processors.</li>
                                <li> Run on different platforms.</li>
                                <li>Instrument your code to try and force failures.</li>
                                <li>Do not ignore system failures as one-offs.</li>
                            </ul>
                        </li>
                    </ol>
                </p>
            </Grid>



            <Grid align="center" style={{backgroundColor:"#eeeeee"}} width="75%">
                <p style={{fontFamily:"Alegreya, serif", color:"blue", lineHeight:'1.8'}}>
                    ENJOY CODING!!!
                    <br/>
#writing #blogging #techBlog #blogger #cleanCode #Concurrency
                </p>
            </Grid>
        </div>
    );
}

export default Twenty;
