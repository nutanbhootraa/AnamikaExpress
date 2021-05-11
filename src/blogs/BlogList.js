import React, {Component} from 'react';
import Button from "@material-ui/core/Button";
import Paper from '@material-ui/core/Paper';

class BlogList extends Component{

    constructor(props) {
        super(props);
    }

    render() {
        return (
        this.props.category === 'All' ?
            <div className={this.props.classes.mainClass}>
                    {this.props.listOfBlogs.map((blog) => (
                        <Paper elevation={3} className={this.props.classes.sidebarAboutBox}>
                            {blog.title}
                        </Paper>
                    ))}
            </div>
            :             <div className={this.props.classes.mainClass}>

            {this.props.listOfBlogs.filter(blog => (blog.category === this.props.category) ).map((blog) => (
                <Paper elevation={3} className={this.props.classes.sidebarAboutBox}>
                    {blog.title}
                </Paper>
            ))}

            </div>

        );
    }
}

export default BlogList;