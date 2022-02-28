import guess from '../../assets/img/guess.PNG';
import homeng from '../../assets/img/homeng.PNG';
import naijakids from '../../assets/img/naijakids.PNG';
import profile_image from '../../assets/img/profile.PNG';
import tictactoe from '../../assets/img/tictactoe.PNG';
import dictionary from '../../assets/img/dictionaryapp.PNG';
import displaypic from '../../assets/img/pic.png';
import justchat from '../../assets/img/justchat.PNG';


export const ProjectData = [
    {
        ProjectName: 'Real Estate App',
        PreviewImage: homeng,
        Url: 'https://homeng.vercel.app',
        Description: 'Fully responsive real estate app designed for great user-experience with NextJs, ChakraUI and Bayut API'
    },    
    {
        ProjectName: 'Video Chat App',
        PreviewImage: justchat,
        Url: 'https://justchat-app.netlify.app',
        Description: 'WebRTC video chat app made with ReactJs, socket.io and vanilla CSS'
    },
    {
        ProjectName: 'My Portfolio Website',
        PreviewImage: profile_image,
        Url: '/',
        Description: 'Modern Portfolio website adaptable to all devices, with ui components and animated interactions made with ReactJs'
    },
    {
        ProjectName: 'English Dictionary',
        PreviewImage: dictionary,
        Url: "https://dictionaryapp.vercel.app",
        Description: 'Dictionary application made with ReactJs and a restAPI from Dictionaryapi.dev'
    },
    {
        ProjectName: 'Tictactoe Game',
        PreviewImage: tictactoe,
        Url: "https://alvinpeter9.github.io/tictactoe/",
        Description: 'A simple tictactoe game designed for fun and interactivity with vanilla HTML, CSS and JavaScript'
    },
    {
        ProjectName: 'Education Catalogue',
        PreviewImage: naijakids,
        Url: "https://alvinpeter9.github.io/9jakids/",
        Description: 'Kids education catalogue made with 9jaKids API and ReactJs'
    },
    {
        ProjectName: 'Guess A Number',
        PreviewImage: guess,
        Url: "https://alvinpeter9.github.io/hotorcold/",
        Description: 'A simple game made with vanilla HTML, CSS and JavaScript'
    },
]


export const TimeLineData = [
    {
        Education: [
            {
                Name: 'Teesside University, UK',
                Major: 'Msc Computing',
                Timing: '2021 - Present'
            },
            {
                Name: 'Federal University of Petroleum Resources, Nigeria',
                Major: 'B.Eng Electrical & Electronics Engineering',
                Timing: '2014 - 2019'
            },
        ],
        Work: [
            {
                Name: 'SideHustle Ng',
                Major: 'FrontEnd (React) Developer',
                Timing: '2021'
            },
            {
                Name: 'Freelance',
                Major: 'FrontEnd Developer',
                Timing: '2019 - 2020'
            }],
    }, 


];




export const AccordionData = [
    {
        stack: 'Frontend',
        years: 'More than a year',
        icon: 'BsBraces',
        tech: [
            {
            title:'HTML',
            percent: '90%'
        },
        {
            title:'CSS',
            percent: '90%'
        },
        {
            title:'JavaScript',
            percent: '60%'
        },
        {
            title:'React/NextJs',
            percent: '70%'
        }]
    },

    {
        stack: 'Backend',
        years: 'More than a year',
        icon: 'BiServer',
        tech: [
            {
            title:'Python',
            percent: '60%'
        },
        {
            title:'PostgreSQL',
            percent: '50%'
        },
        {
            title:'Firebase',
            percent: '60%'
        },
        {
            title:'Supabase',
            percent: '50%'
        }]
    },
];

export const TestimonialData = [
    {
        img: displaypic, 
        name: 'Benedict Ejike', 
        job: 'Electrical Engineer', 
        text: 'I have worked with Alvin and he displayed exceptional'
    },
    {
        img: displaypic, 
        name: 'Victor Aienobe', 
        job: 'Software Developer', 
        text: 'Alvin delivers his work on-time and to specification, he pays attention to improve the aesthetics of the website as well as the functionality. Throughout the entire process he is responsive and willing to work through issues as they arise. It’s obvious he takes tremendous pride in his work and I wouldn’t hesitate to recommend or work with him again.'
    },
    {
        img: displaypic, 
        name: 'Chidi Okpala', 
        job: 'Software Developer', 
        text: 'The simple and intuitive design makes it easy for me use. I highly recommend Fetch to my peers.'
    },
    {
        img: displaypic, 
        name: 'Ella Ibodje', 
        job: 'UI/UX Designer', 
        text: 'The simple and intuitive design makes it easy for me use. I highly recommend Fetch to my peers.'
    },
    {
        img: displaypic, 
        name: 'Phillip Jemikahlajah', 
        job: 'Full Stack Developer', 
        text: 'The simple and intuitive design makes it easy for me use. I highly recommend Fetch to my peers.'
    }
];
