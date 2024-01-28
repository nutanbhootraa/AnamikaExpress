import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import ShowBlog from "./ShowBlog";
import Button from '@material-ui/core/Button';
import RandomThoughts from './RandomThoughts';

class ShowBlogList extends Component{

    constructor(props) {
        super(props);
        this.state = {
            isToggleOn : [],
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
                const url = window.location.href;
                const id = this.props.listOfBlogs.filter(blog => url.includes(blog.link)).map(blog => blog.id)[0];
                if (i == id) {
                    this.state.isToggleOn.push(true);
                } else {
                    this.state.isToggleOn.push(false);
                }
        }
        return (
        this.props.category.categoryName === 'Random Thoughts' ? <RandomThoughts/> :

            <div className={this.props.classes.root}>
            {this.props.listOfBlogs.filter(blog => (blog.category === this.props.category.id) ).map((blog) => (
                <Grid container elevation={3} className={this.props.classes.sidebarAboutBox} direction={'column'} align="center" id={'/'+this.props.category.link+'/' +blog.link}>
                    <Grid style={{backgroundColor:"#eeeeee"}}>
                        <img key={blog.id} src={'blogImages'+ blog.src} title={blog.title} alt={blog.title} width="200" height="200"/>
                        <h3>{blog.title}</h3>
                        {this.state.isToggleOn[blog.id] ?
                            <div style={{align:'center'}}>
                                <Button onClick={this.handleClick.bind(this, blog.id, lengthOfArray)}  color="primary" variant="contained">
                                     Read less
                                </Button>
                                <ShowBlog blog={blog}/>
                            </div>
                            : null}
                        <a href={'anamikaexpress/#/'+this.props.category.link+'/' +blog.link} style={{textDecoration:'none'}}>
                        <Button onClick={this.handleClick.bind(this, blog.id, lengthOfArray)}  color="primary" variant="contained">
                            {this.state.isToggleOn[blog.id] ? 'Read less' : 'Read more'}
                        </Button>
                        </a>
                    </Grid>
                </Grid>
            ))}
            </div>

        );
    }
}

export default ShowBlogList;