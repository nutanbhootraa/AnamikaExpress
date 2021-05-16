import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import ShowBlog from "./ShowBlog";
import Button from '@material-ui/core/Button';
import RandomThoughts from './RandomThoughts';
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
        this.props.category === 'All' ?
            <div className={this.props.classes.mainClass}>
                    {this.props.listOfBlogs.map((blog) => (
                        <Grid container elevation={3} className={this.props.classes.sidebarAboutBox} direction={'column'} align="center">
                            <Grid style={{backgroundColor:"#eeeeee"}}>
                                <img key={blog.id} src={'blogImages'+ blog.src} title={blog.title} alt={blog.title} width="200" height="200"/>
                            </Grid>
                            <Grid item>
                                <h3>{blog.title}</h3>
                            </Grid>
                            <Grid item>
                                <Button onClick={this.handleClick.bind(this, blog.id, lengthOfArray)}  color="primary" variant="contained">
                                    Read more
                                </Button>
                            </Grid>
                            <Grid container>
                                {this.state.isToggleOn[blog.id] ? <ShowBlog blog={blog}/> : null}
                            </Grid>
                        </Grid>
                    ))}
            </div>
            : this.props.category === 'Random Thoughts' ? <RandomThoughts/> :
            <div className={this.props.classes.mainClass}>
            {this.props.listOfBlogs.filter(blog => (blog.category === this.props.category) ).map((blog) => (
                <Grid container elevation={3} className={this.props.classes.sidebarAboutBox} direction={'column'} align="center">
                    <Grid style={{backgroundColor:"#eeeeee"}}>
                        <img key={blog.id} src={'blogImages'+ blog.src} title={blog.title} alt={blog.title} width="200" height="200"/>
                    </Grid>
                    <Grid item>
                        <h3>{blog.title}</h3>
                    </Grid>
                    <Grid item>
                        <Button onClick={this.handleClick.bind(this, blog.id, lengthOfArray)}  color="primary" variant="contained">
                            Read more
                        </Button>
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