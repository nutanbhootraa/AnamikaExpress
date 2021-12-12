import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

class ShowBlogList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isToggleOn1: false,
            isToggleOn2: false,
            isToggleOn3: false,
            isToggleOn4: false,
        };
        this.handleClick1 = this.handleClick1.bind(this);
        this.handleClick2 = this.handleClick2.bind(this);
        this.handleClick3 = this.handleClick3.bind(this);
        this.handleClick4 = this.handleClick4.bind(this);
    }

    handleClick1 = () => {
        this.setState({isToggleOn1: !this.state.isToggleOn1});
    };

    handleClick2 = () => {
        this.setState({isToggleOn2: !this.state.isToggleOn2});
    };

    handleClick3 = () => {
        this.setState({isToggleOn3: !this.state.isToggleOn3});
    };

    handleClick4 = () => {
        this.setState({isToggleOn4: !this.state.isToggleOn4});
    };


    render() {
        return (
            <Grid style={{backgroundColor: "#eeeeee"}}>
                <Button onClick={this.handleClick1.bind()} variant="contained">
Example 1 :
                </Button>
                <Grid style={{backgroundColor:"#eeeeee"}}>
                {this.state.isToggleOn1 ?
<pre>{`
    private static void runnableThreadWithoutLambda() {
        Runnable r = new Runnable() {
            @Override
            public void run() {
                System.out.println("This is Runnable Thread");
            }
        };

        r.run();

    }

    private static void runnableThreadWithLambda() {
        Runnable r = () -> System.out.println("This is Runnable Thread");

        r.run();
    }
`}</pre>
                    : null}
                </Grid>

                <Button onClick={this.handleClick2.bind()} variant="contained">
                    Example 2 :
                </Button>
                <Grid style={{backgroundColor:"#eeeeee"}}>
                    {this.state.isToggleOn2 ?
<pre>{`
    private static void sortNumbersWithoutLambda(List<Integer> unsortedNumbers) {
        Collections.sort(unsortedNumbers, new Comparator<Integer>() {
            @Override
            public int compare(Integer o1, Integer o2) {
                return o1.compareTo(o2);
            }
        });

        System.out.println(unsortedNumbers);
    }

    private static void sortNumbersWithLambda(List<Integer> unsortedNumbers) {
        Collections.sort(unsortedNumbers, (o1, o2) -> o1.compareTo(o2));

        System.out.println(unsortedNumbers);
    }
`}</pre>
                        : null}
                </Grid>

                <Button onClick={this.handleClick3.bind()} variant="contained">
                    Example 3 :
                </Button>
                <Grid style={{backgroundColor:"#eeeeee"}}>
                    {this.state.isToggleOn3 ?
<pre>{`
    private static void printImperatively(List<Integer> primeNumbers) {
        for (Integer i=0; i<primeNumbers.size(); i++) {
            System.out.println(primeNumbers.get(i));
        }
    }

    private static void printDeclaratively(List<Integer> primeNumbers) {
        for (Integer primeNumber : primeNumbers) {
            System.out.println(primeNumber);
        }
    }
`}</pre>
                        : null}
                </Grid>

                <Button onClick={this.handleClick4.bind()} variant="contained">
                    Example 4 :
                </Button>
                <Grid style={{backgroundColor:"#eeeeee"}}>
                    {this.state.isToggleOn4 ?
                        <pre>{`        private static List<String> firstNameStartingWithAInCamelCase(List<String> fullNames) {

        List<String> firstNamesStartingWithA = new ArrayList<>();

        for (String name : fullNames) {
            String nameSplitted[] = name.split(" ");
            String firstName = nameSplitted[0];

            if (firstName.startsWith("a")) {
                String firstNameInCamelCase = firstName.toUpperCase().charAt(0) + firstName.substring(1);
                firstNamesStartingWithA.add(firstNameInCamelCase);
            }
        }

        return firstNamesStartingWithA;
    }

    private static List<String> firstNameStartingWithAInCamelCaseWithLambda(List<String> fullNames) {
        return fullNames.stream().filter(name -> name.startsWith("a"))
                .map(name -> name.split(" ")[0])
                .map(firstName -> firstName.toUpperCase().charAt(0) + firstName.substring(1))
                .collect(Collectors.toList());
    }
`}</pre>
                        : null}
                </Grid>

            </Grid>
        )
    }
}

export default ShowBlogList;