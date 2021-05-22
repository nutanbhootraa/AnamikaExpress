import React from 'react';
import Grid from '@material-ui/core/Grid';
const Seventeen = () => {
    return (
        <div>
            <Grid align="left" width="75%">
                <p>
                    <b style={{color:"blue"}}><i>Functions</i></b>
                    <ol>
                        <li>Function should be small.</li>
                        <li>Do not repeat yourself.</li>
                        <li>Function should do only one thing.</li>
                        <i>
<pre>{`void testAbcFunctionality(int number) {
  if (number < 300 && number > 600) {
    throw new Exception("invalid number");
  }
  if (number % 2 ==0) {
    uploadNumberToEarth2(number);
  }
  if (number % 2 !=0) {
    uploadNumberToEarth2(number + 1);
  }
}

void uploadNumberToEarth2(int number) {
... Do something
}
`}</pre> </i>
 What is wrong with the above code? <br/>
                        a) Code is repeating.<br/>
                        b) It is 1 big function with multiple functionalities : In below code, all the functions are very small and doing only one functionality.
<i><pre>{`void testAbcFunctionality(int number) {
    verifyNumber(number);
    if (isOdd(number)) {
      n++;
    }
    uploadNumberToEarth2(n);

}

void verifyNumber(int number) {
  if (number < 300 && number > 600) {
    throw new Exception("invalid number");
  }
}

boolean isOdd(int number) {
  if (number % 2 !=0) {
    return true;
  }
  return false;
}

void uploadNumberToEarth2(int number) {
... Do something
}
          `}</pre></i>
                        <li> Function should be read top to bottom : If you see above code block, it will first verify number, then it will check whether the number is even or odd, then it will upload number.</li>
                        <li>Use descriptive names. It can be long but make it intuitive, don't assume anyone will understand the name.</li>
                        <li>The ideal number of function arguments is zero(niladic), next comes one(monadic), followed closely by two(dyadic). Three arguments(triadic) should be avoided where possible.
                        More than three(polyadic) requires very special justification and then also should not be used.
                        </li>
                        <li>Avoid using flag arguments, i.e., don't pass boolean into a function. It immediately complicated the signature of the method and the function does more than one thing, one for true and other for false.</li>
                        <li>When a function needs more than two or three arguments, wrap those arguments inside the class and pass the object.</li>
                        <li>Avoid writing functions in such a way that user has to remember order. For example, assertEquals(expected, actual) can be rewritten as assertExpectedEqualsActual(expected, actual).</li>
                        <li>Avoid side effects :
                           <i> <pre>{`void checkPassword(String userName, String password) {
  String codePhrase = getCodePhraseForUsernamePassword(userName, password);
  if("Valid Password".equals(codePhrase)) {
    Session.initialize();
    return true;
  }
  return false;
}`}</pre> </i>
                            The side effect here is to call session.initialize(). User will not know that some action on session is also triggered while checking password.
                        </li>
                        <li>Functions should either do something or answer something, but not both. For example,
                            <i> <pre>{`boolean set(String attribute, String value);`}</pre> </i>
                            If this function sets the value to attribute and returns true, if it is successful else false. This leads to the following statement :
                            <i> <pre>{` if(set("UserName", "Anamika")) `}</pre> </i>
                            "Is it asking whether the UserName is already set" or "Is it asking whether UserName is set now"? <br/>

                            Solution to remove this ambiguity :
                            <i> <pre>{` if (attributeExists("UserName")) {
  setAttribute("userName", "Anamika");
}  `}</pre> </i>
                        </li>
                        <li>Prefer Exceptions to return Error Codes.</li>
                        <li>A function which handles errors should do nothing else.</li>
                        <li>The first draft might be clumsy and disorganized, restructure it and refine it until it reads the way you want it to read.</li>
                    </ol>
                </p>
            </Grid>
            <Grid align="center" style={{backgroundColor:"#eeeeee"}} width="75%">
                <p style={{fontFamily:"Alegreya, serif", color:"blue", lineHeight:'1.8'}}>
                    ENJOY CODING!!!
                </p>
            </Grid>
        </div>
    );
}

export default Seventeen;