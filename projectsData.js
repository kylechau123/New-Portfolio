import careerCrusade from './assets/img/career-crusade.png';
import foodForEveryOne from './assets/img/food-for-everyone.png';
import techChronicles from './assets/img/tech-chronicles.png';
import dailySchedule from './assets/img/daily-schedule.png';
import notesTaker from './assets/img/notes-taker.png';

const projects = [
    {
        id: 1,
        name: 'Career Crusade',
        stack: 'Node.js | Express.js | MySQL | Sequelize | Handlebars.js | Bootstrap | Heroku',
        image: careerCrusade,
        github: 'https://github.com/bragceo/Career_Crusader',
        deploy: 'https://career-crusaders-mvp.herokuapp.com/'
    },
    {
        id: 2,
        name: 'Food For Everyone',
        stack: 'HTML | CSS | JavaScript | Bulma | Spoonacular API',
        image: foodForEveryOne,
        github: 'https://github.com/bragceo/Food-For-Everyone',
        deploy: 'https://whirlwindraven.github.io/Food-For-Everyone/'
    },
    {
        id: 3,
        name: 'Tech Chronicles',
        stack: 'Node.js | Express.js | MySQL | Sequelize | Handlebars.js | Bootstrap | Heroku',
        image: techChronicles,
        github: 'https://github.com/bragceo/Lavells-Tech-Chronicle',
        deploy: 'https://lavells-tech-chronicle.herokuapp.com/'
    },
    {
        id: 4,
        name: 'Daily Schedule',
        stack: 'HTML | CSS | JavaScript | jQuery | Moment.js',
        image: dailySchedule,
        github: 'https://github.com/bragceo/Lavell-s-Work-Day-Scheduler-',
        deploy: 'https://bragceo.github.io/Lavell-s-Work-Day-Scheduler-/'
    },
    {
        id: 5,
        name: 'Notes Taker',
        stack: 'HTML | CSS | JavaScript | Node.js | Express.js | Heroku',
        image: notesTaker,
        github: 'https://github.com/bragceo/Lavell-s-NoteNest',
        deploy: 'https://lavells-note-nest.herokuapp.com/notes'
    }
];

export default projects;


