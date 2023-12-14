import unsplashImages from '../images/unsplash-images.png'
import jobsApi from '../images/jobs-api.png'
import guessingGame from '../images/numberGuessingGame.png'
import eCommerceApi from '../images/eCommerceApi.png'
import { nanoid } from 'nanoid' 
const projects = [
    {
        name:'Unsplashed Image Search',
        overview:'This is a react Js application build with react js and the unsplash API. users can go and search images base on keywords and view images related to those key words.',
        technologies:['@tanstack/react query','reactJS','unsplash API','axios','react-dom','react icons',],
        github:'https://github.com/KINYUI1/Unsplash-image-search',
        deployed:'https://usplash-image-search.netlify.app/',
        image:unsplashImages,
        id:nanoid()
    },
    {
        name:'jobs api',
        overview:'this is a node js app build with the Express js framework. it has routes for authentication and for jobs querying.users are able to register,login and logout. To get job information user can hit the get all jobs route and once authenticated can query jobs in which the user is the author of the job. users can also get single jobs in which they are the author, delete jobs in which they are the author and update jobs in which they are the author. there is also an admin role in which the admin has access to all the jobs in the database and can perform full CRUD on all of them',
        technologies:['becryptjs','cors','dotenv','express','jsonwebtoken','express-async-errors','express-rate-limit','helmet','http-status-codes','mongoose','swagger-ui-express','xss-clean','yamljs'],
        github:'https://github.com/KINYUI1/jobs-api',
        deployed:'https://jobs-api-8p9p.onrender.com/api-docs/',
        image:jobsApi,
        id:nanoid()
    },
    {
        name:'e commerce api',
        overview:'This application is constructed using the Express.js framework for Node.js. It incorporates authentication routes,products routes,order routes,review routes and user routes. Users can register, log in, and log out. To access products data, users can utilize the "get all products" route. Authenticated users can create products, get individual products, delete products they authored, and update products they authored.This is true for all the other routes. Additionally, an admin role grants full access to all database jobs, allowing the admin to perform complete CRUD operations on them..',
        technologies:['becryptjs','cors','dotenv','express','jsonwebtoken','express-async-errors','express-rate-limit','helmet','http-status-codes','mongoose','cookie-Parser','validator','xss-clean','yamljs','express-fileupload','express-mongo-sanitize','morgan'],
        github:'https://github.com/KINYUI1/e-commerce-api',
        image:eCommerceApi,
        deployed:"https://e-commerce-api-2.onrender.com/",
        id:nanoid()
    },
    {
        name:'Number Guessing game',
        overview:'This is a game build with HTML 5, CSS3 and vanilla JavaScript. it starts by generating a random number value between and and 50 giving you five attempts in the first level to figure the value. there is an input field for you to input your answer and check. it response with the right directive telling you if your answer is above the random value, less than or you have the correct answer. if after five attempts you cant figure out the right answer you loose a life and you have a total of three lives. if you if you get the answer correctly you get a correct value increase and having three correct values you move to the next level and the number of attempts decrease by one with the same rules applying.You loose the game if you fail three times in a single level which is 15 attempts in level 1. there are sound effects depending on what action that you take and background music.something very significant at the upper left angle of the screen',
        technologies:['HTML 5','CSS 3','JavaScript'],
        github:'https://github.com/KINYUI1/MOD1-PROJECT',
        deployed:'https://kinyui1.github.io/MOD1-PROJECT/',
        image:guessingGame,
        id:nanoid()
    },
]

export default projects