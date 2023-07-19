import birthdaybuddy from './assets/img/birthdaybuddy.png'
import foodForEveryOne from './assets/img/FoodForEveryone.png';
import startup from './assets/img/startup.png';

const projects = [
    {
        id: 1,
        name: 'Startup Matchmaker',
        image: startup,
        github: 'https://github.com/bragceo/reacting-with-lavell',
        deploy: 'https://lfks-startupmatchmaker-71ece92dd41c.herokuapp.com/'
    },
    {
        id: 2,
        name: 'Birthday Buddy',
        image: birthdaybuddy,
        github: 'https://github.com/juliaghany/BirthdayBuddy',
        deploy: 'https://birthday-buddy.herokuapp.com/'
    },
    {
        id: 3,
        name: 'Food For Everyone',
        stack: 'HTML | CSS | JavaScript | Bulma | Spoonacular API',
        image: foodForEveryOne,
        github: 'https://github.com/bragceo/Food-For-Everyone',
        deploy: 'https://whirlwindraven.github.io/Food-For-Everyone/'
    },
];

export default projects;


