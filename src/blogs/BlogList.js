import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import ShowBlog from "./ShowBlog";
import AddCircleIcon from '@material-ui/icons/AddCircle';

class BlogList extends Component{

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
                isToggle1.push(false);
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
        this.props.category === 'All' ?
            <div className={this.props.classes.mainClass}>
                    {this.props.listOfBlogs.map((blog) => (
                        <Grid container elevation={3} className={this.props.classes.sidebarAboutBox}>
                            <Grid container direction={'row'} spacing={24}>
                                <Grid item xl={6} md={6} sm={12} xs={12}>
                                    <h3>{blog.title}</h3>
                                </Grid>
                                <Grid item xl={6} md={6} sm={12} xs={12} align="right">
                                    <AddCircleIcon style={{ fontSize: 30 }} onClick={this.handleClick.bind(this, blog.id, lengthOfArray)}/>
                                </Grid>
                            </Grid>
                            <Grid container>
                                {this.state.isToggleOn[blog.id] ? <ShowBlog blog={blog}/> : null}
                            </Grid>
                        </Grid>
                    ))}
            </div>
            :
            <div className={this.props.classes.mainClass}>
            {this.props.listOfBlogs.filter(blog => (blog.category === this.props.category) ).map((blog) => (
                <Grid container elevation={3} className={this.props.classes.sidebarAboutBox} >
                    <Grid container direction={'row'} spacing={24}>
                        <Grid item xl={6} md={6} sm={12} xs={12} >
                            <h3>{blog.title}</h3>
                        </Grid>
                        <Grid item xl={6} md={6} sm={12} xs={12} align="right">
                            <AddCircleIcon style={{ fontSize: 30 }} onClick={this.handleClick.bind(this, blog.id, lengthOfArray)}/>
                        </Grid>
                    </Grid>
                    <Grid container>
                        {this.state.isToggleOn[blog.id] ? <ShowBlog blog={blog}/> : null}
                    </Grid>
                </Grid>
            ))}

            </div>

        );
    }
}

export default BlogList;