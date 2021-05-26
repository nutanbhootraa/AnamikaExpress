import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import categories from '../categories/CategoriesMetaData';

class Latest extends Component{

    constructor(props) {
        super(props);
        this.state = {
            isToggleOn : [],
            currentCategory : categories.filter(category => category.categoryName === this.props.listOfBlogs[0].category)[0],
    };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick= (id, length) => {
        let isToggle1 = [];
        for (let i = 0; i <= length; i++) {
            if (i==id) {
                isToggle1.push(!this.state.isToggleOn[i]);
            }
            else {
                isToggle1.push(this.state.isToggleOn[i]);
            }
        }
        this.setState({isToggleOn : isToggle1});
    };

    render() {
        console.log(this.state.currentCategory);
        const lengthOfArray = this.props.listOfBlogs.length;
        for (let i = 0; i <= lengthOfArray; i++) {
            this.state.isToggleOn.push(false);
        }
        return (
                    <Grid container elevation={3} className={this.props.classes.sidebarAboutBox} align="center" direction={'column'}>
                            <Grid item>
                                <Typography variant="h4" color="secondary">
                                    <b> Latest Post </b>
                                </Typography>
                                <h3>{this.props.listOfBlogs[0].title}</h3>
                            </Grid>
                            <Grid item>
                                <a href={'/#/'+this.state.currentCategory.link+'/' +this.props.listOfBlogs[0].link} style={{textDecoration:'none'}}>
                                <Button color="primary" variant="contained">
                                    Read more
                                </Button>
                                </a>
                            </Grid>
                        </Grid>
        );
    }
}

export default Latest;