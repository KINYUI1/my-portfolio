import { nanoid } from "nanoid"

const experience = [
    {
        name:'Software Engineer',
        organization:'Verizon',
        location:'Irving, TX',
        duration:'June 2024 - Present',
        description:`Engineered a Python-driven catalogue replication optimization for the Rating and Billing Manager (RBM) Interface, reducing execution time by 87% (from 60 minutes to 8 minutes) to process a load of 17.2 million records across 94 Oracle tables, significantly boosting system reliability and exceeding Billing Service Level Agreements (SLAs). Implemented robust backend solutions with Java, Spring Boot, Express.js and Node.js, kept attention to details while designing RESTful APIs that facilitated a 20% reduction in load times, enhancing overall performance and user experience. Developed a Python automation script to periodically sanitize data across 180 duplication check tables, successfully reclaiming thousands of GBs of storage space and streamlining the rating process. Architected and deployed an Oracle Wallet security strategy on Linux-hosted RBM servers (SDC, TDC, TPA, B2B), ensuring secure database credential management while maintaining seamless application connectivity. Designed an end-to-end Python pipeline to generate and publish Enterprise Product Catalogues (EPC) to RBM servers, automatically synchronizing the latest data into Usage Broker (UBSR) transaction map tables. Implemented a high-volume usage tracking system to identify MDNs exceeding specified thresholds, enabling predictive trend analysis and deeper customer usage insights using Oracle and Python. Collaborated with the Tools and Automation team to integrate "On-Demand Billing Status" updates into the MAGNA platform, improving operational visibility. Collaborated with cross-functional teams, including designers, developers, product owners, and product managers, to understand project requirements and deliver high-quality features on time, contributing to the success of Per Scholas' digital initiatives while improving commitment and communication skills among team members.`,
        id:nanoid()
    },
    {
        name:'Software Engineer',
        organization:'Per Scholas',
        location:'Dallas, TX',
        duration:'2023-2024',
        description:`Spearheaded the development of responsive and scalable web applications with Java and the MERN stack in an agile environment, achieving a 25% improvement in user engagement. Implemented robust backend solutions utilizing Java, Spring Boot, Express.js, and Node.js, focusing on detail-oriented design of RESTful APIs, resulting in a 20% reduction in load times and enhancing overall performance. Successfully implemented authentication and authorization features using software engineering best practices, increasing user data security by 30% while maintaining CI/CD pipeline integrity. Utilized MongoDB and PostgreSQL databases to optimize data storage and processing, resulting in a 15% improvement in data handling efficiency. Integrated third-party packages and libraries, along with tools such as Redux for state management in React applications, enhancing the overall stability and maintainability of the web ecosystem by 20%. Collaborated with cross-functional teams including designers, developers, trainers, and assistant trainers to ensure timely delivery of high-quality features, contributing to the success of training at Per Scholas and improving commitment and communication skills among scrum team members.`,
        id:nanoid()
    },
    {
        name:'full-stack Software Engineer',
        organization:'INDEPENDENT',
        location:'Dallas, TX',
        duration:'2021-2023',
        description:`Achieving proficiency in Java, Python, HTML, CSS, and JavaScript through self-directed learning led to a 20% acceleration in code implementation and a 15% increase in project delivery efficiency. Implementing responsive web applications with React.js resulted in a 25% improvement in user engagement and a 20% enhancement in overall user satisfaction. Additionally, applying Java programming skills reduced server response time by 30% and improved web application scalability by 25%. Leveraging a tech stack including @tanstack/react query, ReactJS, and Axios, I created a dynamic image search platform integrating seamlessly with the Unsplash API. Constructing a secure API foundation with Bcrypt.js, CORS, and Express, integrating JsonWebToken for authentication, Helmet for enhanced security, and Express-Rate-Limiter to prevent abuse, ensured robust data validation and protection against cross-site scripting in the e-commerce API.`,
        id:nanoid()
    },
    {
        name:'java and selenium java fanatic and self-taught',
        organization:'independent',
        location:'Dallas, TX',
        duration:'2021-PRESENT',
        description:'I independently mastered Java and Selenium over a year, developing comprehensive skills in creating efficient test scripts. Through hands-on projects and community engagement, I confidently design and implement automation solutions, reflecting a commitment to continuous learning and enthusiasm for software development and quality assurance.',
        id:nanoid()
    },
]

export default experience