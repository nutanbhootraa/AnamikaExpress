import './blogFiles/blogFiles.css'
import Zero from './blogFiles/Zero';
import One from './blogFiles/One';
import Two from './blogFiles/Two';
import Three from './blogFiles/Three';
import Four from './blogFiles/Four';
import Five from './blogFiles/Five';
import Six from './blogFiles/Six';
import Seven from './blogFiles/Seven';
import Eight from './blogFiles/Eight';
import Nine from './blogFiles/Nine';
import Ten from './blogFiles/Ten';
import Eleven from './blogFiles/Eleven';
import Twelve from './blogFiles/Twelve';
import Thirteen from './blogFiles/Thirteen';
import Fourteen from './blogFiles/Fourteen';
import Fifteen from './blogFiles/Fifteen';
import Sixteen from './blogFiles/Sixteen';
import Seventeen from './blogFiles/Seventeen';

const listOfBlogs = [
    {
        id: 17,
        category:'2',
        title:'Clean Code : Part 3',
        src: '/cleancode.jpg',
        show: <Seventeen />,
        link: 'functions',
        date: 'May 22, 2021',
    },
    {
        id: 16,
        category:'0',
        title:'Boss, Helper or Leader',
        src: '/bossleader.jpeg',
        show: <Sixteen />,
        link: 'bosshelperorleader',
        date: 'May 19, 2021',
    },
    {
        id: 15,
        category:'2',
        title:'Clean Code : Part 2',
        src: '/cleancode.jpg',
        show: <Fifteen />,
        link: 'meaningfulnames',
        date: 'May 15, 2021',
    },
    {
        id: 14,
        category:'2',
        title:'Clean Code : Part 1',
        src: '/cleancode.jpg',
        show: <Fourteen />,
        link: 'whycleancode',
        date: 'May 14, 2021',
    },
    {
        id: 13,
        category:'1',
        title:'Puzzle 2 : Bridge Building',
        src: '/puzzle1.jpg',
        show: <Thirteen />,
        link: 'bridgebuilder',
        date: 'May 13, 2021',
    },
    {
        id: 12,
        category: '0',
        title: 'Kuch kuch hota hai 20 : trailer',
        src: '/kkhh.jpg',
        show: <Twelve />,
        link: 'kkhh20trailer',
        date: 'May 10, 2021',
    },
    {
        id: 11,
        category: '0',
        title: 'Why women can\'t keep secrets',
        src: '/womenSecrets.jpg',
        show: <Eleven />,
        link: 'womencantkeepsecrets',
        date: 'May 7, 2021',
    },
    {
        id: 10,
        category: '0',
        title: 'Mental Health : A Luxury Today?',
        src: '/depression.jpeg',
        show: <Ten />,
        link: 'mentalhealth',
        date: 'May 7, 2021',
    },
    {
        id: 9,
        category: '1',
        title: 'Puzzle 1 : Slitherlink',
        src: '/puzzle1.jpg',
        show: <Nine />,
        link: 'slitherlink',
        date: 'May 5, 2021',
    },
    {
        id: 8,
        category: '0',
        title: 'Missing flight at Mumbai international airport',
        src: '/missingFlight.jpg',
        show: <Eight />,
        link: 'missingflight',
        date: 'May 2, 2021',
    },
    {
        id: 7,
        category: '0',
        title: 'My 1st flight journey',
        src: '/firstFlight.jpg',
        show: <Seven />,
        link: 'flightjourney',
        date: 'May 1, 2021',
    },
    {
        id: 6,
        category: '0',
        title: 'Who am I?',
        src: '/whoami.jpg',
        show: <Six />,
        link: 'whoami',
        date: 'Apr 30, 2021',
    },
    {
        id: 5,
        category: '0',
        title: '3 mentors of my life',
        src: '/mentors.jpg',
        show: <Five />,
        link: 'mymentors',
        date: 'Dec 12, 2020',
    },
    {
        id: 4,
        category: '0',
        title: 'Let me breathe; please set me free',
        src: '/setMeFree.jpg',
        show: <Four />,
        link: 'setmefree',
        date: 'Aug 28, 2020',
    },
    {
        id: 3,
        category: '0',
        title: 'Independent India : A crossword puzzle',
        src: '/indepindia.jpg',
        show: <Three />,
        link: 'independentIndiaCrosswordPuzzle',
        date: 'Aug 15, 2020',
    },
    {
        id: 2,
        category: '0',
        title: 'Lockdown Thoughts : Privilege of what I want over what I need',
        src: '/lockdown.jpg',
        show: <Two />,
        link: 'lockdownthoughts',
        date: 'Jun 10, 2020',
    },
    {
        id: 1,
        category: '0',
        title: 'क्या हम वाकई स्वतंत्र हैं',
        src: '/indepindia1.jpg',
        show: <One />,
        link: 'independentIndia',
        date: 'Aug 12, 2018',
    },
    {
        id: 0,
        category: '0',
        title: 'A Thought',
        src: '/thought.jpg',
        show: <Zero />,
        link: 'thought',
        date: 'Jan 6, 2017',
    },
];

export default listOfBlogs;