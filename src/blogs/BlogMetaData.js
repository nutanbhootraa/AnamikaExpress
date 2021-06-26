import './blogFiles/blogFiles.css'
import {Twemoji} from 'react-emoji-render';

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
import Eighteen from './blogFiles/Eighteen';
import Nineteen from './blogFiles/Nineteen';
import Twenty from './blogFiles/Twenty';
import TwentyOne from './blogFiles/TwentyOne';
import TwentyTwo from './blogFiles/TwentyTwo';
import TwentyThree from './blogFiles/TwentyThree';
import TwentyFour from './blogFiles/TwentyFour';
import TwentyFive from './blogFiles/TwentyFive';
import TwentySix from './blogFiles/TwentySix';

const listOfBlogs = [
    {
        id: 26,
        idToShow: 15,
        category:'0',
        title:"My Brother's \"The Speech\"" ,
        src: '/speech.jpeg',
        show: <TwentySix />,
        link: 'thespeech',
        date: 'Jun 26, 2021',
    },
    {
        id: 25,
        idToShow: 14,
        category:'0',
        title:'Never lie',
        src: '/neverlie.jpg',
        show: <TwentyFive />,
        link: 'neverlie',
        date: 'Jun 18, 2021',
    },
    {
        id: 24,
        idToShow: 6,
        category:'2',
        title:'S.O.L.I.D Principles',
        src: '/solid.png',
        show: <TwentyFour />,
        link: 'solid',
        date: 'Jun 12, 2021',
    },
    {
        id: 23,
        idToShow: 3,
        category:'1',
        title:'Find the number?',
        src: '/questionMark.png',
        show: <TwentyThree />,
        link: 'findthenumber',
        date: 'Jun 08, 2021',
    },
    {
        id: 22,
        idToShow: 2,
        category:'1',
        title:'Minimum Number Of Colours',
        src: '/triangle.png',
        show: <TwentyTwo />,
        link: 'minimumColours',
        date: 'Jun 07, 2021',
    },
    {
        id: 21,
        idToShow: 13,
        category:'0',
        title:'YES to failures, NO to regrets',
        src: '/failurevsregret.jpg',
        show: <TwentyOne />,
        link: 'failuresvsregrets',
        date: 'Jun 04, 2021',
    },
    {
        id: 20,
        idToShow: 5,
        category:'2',
        title:'Clean Code : Part 6',
        src: '/cleancode.jpg',
        show: <Twenty />,
        link: 'part6',
        date: 'May 29, 2021',
    },
    {
        id: 19,
        idToShow: 4,
        category:'2',
        title:'Clean Code : Part 5',
        src: '/cleancode.jpg',
        show: <Nineteen />,
        link: 'part5',
        date: 'May 28, 2021',
    },
    {
        id: 18,
        idToShow: 3,
        category:'2',
        title:'Clean Code : Part 4',
        src: '/cleancode.jpg',
        show: <Eighteen />,
        link: 'part4',
        date: 'May 27, 2021',
    },
    {
        id: 17,
        idToShow: 2,
        category:'2',
        title:'Clean Code : Part 3',
        src: '/cleancode.jpg',
        show: <Seventeen />,
        link: 'functions',
        date: 'May 22, 2021',
    },
    {
        id: 16,
        idToShow: 12,
        category:'0',
        title:'Boss, Helper or Leader',
        src: '/bossleader.jpeg',
        show: <Sixteen />,
        link: 'bosshelperorleader',
        date: 'May 19, 2021',
    },
    {
        id: 15,
        idToShow: 1,
        category:'2',
        title:'Clean Code : Part 2',
        src: '/cleancode.jpg',
        show: <Fifteen />,
        link: 'meaningfulnames',
        date: 'May 15, 2021',
    },
    {
        id: 14,
        idToShow: 0,
        category:'2',
        title:'Clean Code : Part 1',
        src: '/cleancode.jpg',
        show: <Fourteen />,
        link: 'whycleancode',
        date: 'May 14, 2021',
    },
    {
        id: 13,
        idToShow: 1,
        category:'1',
        title:'Puzzle 2 : Bridge Building',
        src: '/puzzle1.jpg',
        show: <Thirteen />,
        link: 'bridgebuilder',
        date: 'May 13, 2021',
    },
    {
        id: 12,
        idToShow: 11,
        category: '0',
        title: 'Kuch kuch hota hai 20 : trailer',
        src: '/kkhh.jpg',
        show: <Twelve />,
        link: 'kkhh20trailer',
        date: 'May 10, 2021',
    },
    {
        id: 11,
        idToShow: 10,
        category: '0',
        title: 'Why women can\'t keep secrets',
        src: '/womenSecrets.jpg',
        show: <Eleven />,
        link: 'womencantkeepsecrets',
        date: 'May 7, 2021',
    },
    {
        id: 10,
        idToShow: 9,
        category: '0',
        title: 'Mental Health : A Luxury Today?',
        src: '/depression.jpeg',
        show: <Ten />,
        link: 'mentalhealth',
        date: 'May 7, 2021',
    },
    {
        id: 9,
        idToShow: 0,
        category: '1',
        title: 'Puzzle 1 : Slitherlink',
        src: '/puzzle1.jpg',
        show: <Nine />,
        link: 'slitherlink',
        date: 'May 5, 2021',
    },
    {
        id: 8,
        idToShow: 8,
        category: '0',
        title: 'Missing flight at Mumbai international airport',
        src: '/missingFlight.jpg',
        show: <Eight />,
        link: 'missingflight',
        date: 'May 2, 2021',
    },
    {
        id: 7,
        idToShow: 7,
        category: '0',
        title: 'My 1st flight journey',
        src: '/firstFlight.jpg',
        show: <Seven />,
        link: 'flightjourney',
        date: 'May 1, 2021',
    },
    {
        id: 6,
        idToShow: 6,
        category: '0',
        title: 'Who am I?',
        src: '/whoami.jpg',
        show: <Six />,
        link: 'whoami',
        date: 'Apr 30, 2021',
    },
    {
        id: 5,
        idToShow: 5,
        category: '0',
        title: '3 mentors of my life',
        src: '/mentors.jpg',
        show: <Five />,
        link: 'mymentors',
        date: 'Dec 12, 2020',
    },
    {
        id: 4,
        idToShow: 4,
        category: '0',
        title: 'Let me breathe; please set me free',
        src: '/setMeFree.jpg',
        show: <Four />,
        link: 'setmefree',
        date: 'Aug 28, 2020',
    },
    {
        id: 3,
        idToShow: 3,
        category: '0',
        title: 'Independent India : A crossword puzzle',
        src: '/indepindia.jpg',
        show: <Three />,
        link: 'independentIndiaCrosswordPuzzle',
        date: 'Aug 15, 2020',
    },
    {
        id: 2,
        idToShow: 2,
        category: '0',
        title: 'Lockdown Thoughts : Privilege of what I want over what I need',
        src: '/lockdown.jpg',
        show: <Two />,
        link: 'lockdownthoughts',
        date: 'Jun 10, 2020',
    },
    {
        id: 1,
        idToShow: 1,
        category: '0',
        title: 'क्या हम वाकई स्वतंत्र हैं',
        src: '/indepindia1.jpg',
        show: <One />,
        link: 'independentIndia',
        date: 'Aug 12, 2018',
    },
    {
        id: 0,
        idToShow: 0,
        category: '0',
        title: 'A Thought',
        src: '/thought.jpg',
        show: <Zero />,
        link: 'thought',
        date: 'Jan 6, 2017',
    },
];

export default listOfBlogs;