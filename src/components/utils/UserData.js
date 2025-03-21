import guess from '../../assets/img/guess.PNG';
import homeng from '../../assets/img/homeng.PNG';
import naijakids from '../../assets/img/naijakids.PNG';
import profile_image from '../../assets/img/profile.PNG';
import tictactoe from '../../assets/img/tictactoe.PNG';
import dictionary from '../../assets/img/dictionaryapp.PNG';
import maleIcon from '../../assets/img/male.png';
import femaleIcon from '../../assets/img/female.png';
import justchat from '../../assets/img/justchat.PNG';
import photoshare from '../../assets/img/photoshare.PNG';


export const ProjectData = [
        {
        ProjectName: 'PhotoShare App',
        PreviewImage: photoshare,
        Url: 'https://photoshareapp.netlify.app',
        Description: 'Full stack social media application made with ReactJs, Firebase and Sanity'
    },
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
                Name: 'Teesside University, Middlesbrough, UK',
                Major: 'MSc Computing',
                Timing: 'January 2022 - January 2024'
            },
            {
                Name: 'Federal University of Petroleum Resources, Nigeria',
                Major: 'B.Eng Electrical & Electronics Engineering',
                Timing: '2014 - 2019'
            },
        ],
        Work: [
            {
                Name: 'Parcel2go Ltd',
                Major: 'SEO Developer',
                Timing: 'August 2024 - Present'
            },
            {
                Name: 'Gotahia',
                Major: 'FrontEnd (React) Developer',
                Timing: '2021 - 2022'
            },
            {
                Name: 'Freelance',
                Major: 'FrontEnd Developer',
                Timing: '2020 - 2021'
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
            percent: '70%'
        },
                        {
            title:'TypeScript',
            percent: '60%'
        },
        {
            title:'React/NextJs',
            percent: '70%'
        },
        {
            title:'D3Js',
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
        img: maleIcon, 
        name: 'Benedict Ejike', 
        job: 'Electrical Engineer', 
        text: 'Apart from being a good developer, Alvin is also a good teamplayer and a fast learner. I have known him for over 7years and without any compromise, he is the go-to guy for web development.'
    },
    {
        img: maleIcon, 
        name: 'Victor Aienobe', 
        job: 'Software Developer', 
        text: 'Alvin delivers his work on-time and to specification, he pays attention to improve the aesthetics of the website as well as the functionality. Throughout the entire process he is responsive and willing to work through issues as they arise. It’s obvious he takes tremendous pride in his work and I wouldn’t hesitate to recommend or work with him again.'
    },
    {
        img: maleIcon, 
        name: 'Chidi Okpala', 
        job: 'Software Developer', 
        text: 'Working with Alvin was better than expected, He is an incredibly talented developer but what really makes him stand out is his work ethic and steady approach. He is always ready to improve on his work.'
    },
    {
        img: femaleIcon, 
        name: 'Ella Ibodje', 
        job: 'UI/UX Designer', 
        text: 'It`s his ability to adapt to new technologies that makes him stand out, you can see the passion and dedication in his work.'
    },
    {
        img: maleIcon, 
        name: 'Phillip Jemikahlajah', 
        job: 'Full Stack Developer', 
        text: 'Without any doubt, I highly recommend Alvin for frontend development roles. He has shown me repeatedly that he is committed to deliver at the utmost form of professionalism'
    }
];
