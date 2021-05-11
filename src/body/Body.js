import './Body.css';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import Select from "@material-ui/core/Select";
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
    mainClass: {
        boxShadow: theme.shadows[6],
        backgroundColor:"light grey",
        padding: theme.spacing(3),
    },
    sidebarAboutBox: {
        padding: theme.spacing(2),
        backgroundColor: theme.palette.grey[200],
        boxShadow: theme.shadows[6],
    },
}));


function Body() {
    const classes = useStyles();

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [category, setCategory] = React.useState('All');

    const handleClose = () => {
        setAnchorEl(null);
        setCategory('All');
    };

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
        setCategory(event.currentTarget.value);
    };
    const listOfCategories = [
        {
            id: '1',
            category: 'All',
        },
        {
            id: '2',
            category: 'Short Stories',
        },
        {
            id: '3',
            category: 'Puzzles',
        },
        {
            id: '4',
            category: 'Tech Blog',
        },
        {
            id: '5',
            category: 'Random Thoughts',
        },
    ];

    const listOfBlogs = [
        {
            id: '1',
            category: 'Short Stories',
            title: 'Why women can\'t keep secrets',
        },
        {
            id: '2',
            category: 'Short Stories',
            title: 'Mental Health : A Luxury Today?',
        },
        {
            id: '3',
            category: 'Puzzles',
            title: 'Puzzle 1 : Slitherlink',
        },
        {
            id: '4',
            category: 'Short Stories',
            title: 'Missing flight at Mumbai international airport',
        },
        {
            id: '5',
            category: 'Short Stories',
            title: 'My 1st flight journey',
        },
        {
            id: '5',
            category: 'Short Stories',
            title: 'Who am I?',
        },
        {
            id: '5',
            category: 'Short Stories',
            title: '3 mentors of my life',
        },
        {
            id: '5',
            category: 'Short Stories',
            title: 'Let me breathe; please set me free',
        },
        {
            id: '5',
            category: 'Short Stories',
            title: 'Independent India : A crossword puzzle',
        },
        {
            id: '5',
            category: 'Short Stories',
            title: 'Lockdown Thoughts : Privilege of what I want over what I need',
        },
        {
            id: '5',
            category: 'Short Stories',
            title: 'क्या हम वाकई स्वतंत्र हैं',
        },
        {
            id: '5',
            category: 'Short Stories',
            title: 'A Thought',
        },
    ];

    return (
        <div className={classes.mainClass}>
            <Container maxWidth="xs" align="center" display="inline">
            <Button
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={handleClick}
                style={{backgroundColor:'coral'}}
            >
                {category}
            </Button>

            <Menu
                keepMounted
                anchorEl={anchorEl}
                onClose={handleClose}
                open={Boolean(anchorEl)}
            >
                {listOfCategories.map((category) => (
                    <MenuItem onClick={handleClose}>{category.category}</MenuItem>
                ))}
            </Menu>
            </Container>

            <Container>
                {listOfBlogs.map((blog) => (
                    <Paper elevation={3} className={classes.sidebarAboutBox}>
                        {blog.title}
                    </Paper>
                ))}
            </Container>


        </div>
    );
}

export default Body;
