import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import AddCircleIcon from '@material-ui/icons/AddCircle';
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
                <div className={this.props.classes.mainClass} style={{minHeight:'175px'}}>
                    <Grid container elevation={3} className={this.props.classes.sidebarAboutBox} align="center">
                        <Grid container direction={'row'} spacing={24}>
                            <Grid item xl={6} md={6} sm={12} xs={12} align="center">
                                <h2>Latest Post : Clean code</h2>
                            </Grid>
                            <Grid item xl={6} md={6} sm={12} xs={12} align="right">
                                <AddCircleIcon style={{ fontSize: 30 }} onClick={this.handleClick.bind(this, this.props.listOfBlogs[0].id, lengthOfArray)}/>
                            </Grid>
                        </Grid>
                        <Grid container>
                            {this.state.isToggleOn[this.props.listOfBlogs[0].id] ?
                                <div>
                                    <Grid item xl={6} md={6} sm={12} xs={12} align="center">
                                        <h3>{this.props.listOfBlogs[0].title}</h3>
                                    </Grid>
                                    <Grid item xl={6} md={6} sm={12} xs={12}>
                                        <ShowBlog blog={this.props.listOfBlogs[0]}/>
                                    </Grid>
                                </div>
                                : null}
                            </Grid>
                        </Grid>
                </div>

        );
    }
}

export default Latest;