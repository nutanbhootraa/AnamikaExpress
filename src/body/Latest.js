import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ShowBlog from '../blogs/ShowBlog';

class Latest extends Component{

    constructor(props) {
        super(props);
        this.state = {
            isToggleOn : []
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
                                <h3>{this.props.listOfBlogs[0].category}</h3>
                                <h3>{this.props.listOfBlogs[0].title}</h3>
                            </Grid>
                            <Grid item>
                                <Button onClick={this.handleClick.bind(this, this.props.listOfBlogs[0].id, lengthOfArray)} color="primary" variant="contained">
                                    Read more
                                </Button>
                            </Grid>
                            {this.state.isToggleOn[this.props.listOfBlogs[0].id] ?
                                <div>
                                    <Grid item xl={6} md={6} sm={12} xs={12}>
                                        <ShowBlog blog={this.props.listOfBlogs[0]}/>
                                    </Grid>
                                </div>
                                : null}
                        </Grid>
        );
    }
}

export default Latest;