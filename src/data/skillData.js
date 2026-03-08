import express from '../images/ExpressJS.png'
import git from '../images/git.png'
import github from '../images/github.png'
import node from '../images/nodejs.png'
import react from '../images/reactjs.png'
import reduxjs from '../images/redux.png'
import selenium from '../images/selenium.png'
import postgresql from '../images/postgresql.png'
import springboot from '../images/spring-boot.png'
import mongodb from '../images/mongodb.jpg'
import mongoose from '../images/mongoosejs.png'
import html from '../images/html5.png'
import css from '../images/css3.png'

// Categorized skills matching resume structure
export const skillCategories = [
    {
        category: 'Languages & Databases',
        icon: '💻',
        description: 'Core programming languages and database technologies',
        skills: [
            { name: 'Java', image: '/Java.png' },
            { name: 'Python', image: '/Python.png' },
            { name: 'JavaScript', image: '/Javascript.png' },
            { name: 'TypeScript', image: '/Typescript.png' },
            { name: 'Oracle DB', image: postgresql },
            { name: 'PostgreSQL', image: postgresql },
            { name: 'MongoDB', image: mongodb },
            { name: 'SQL', image: postgresql },
            { name: 'Linux .ksh', image: '/Linux.png' },
        ]
    },
    {
        category: 'Frameworks & Libraries',
        icon: '⚡',
        description: 'Backend and frontend frameworks for scalable applications',
        skills: [
            { name: 'Spring Boot', image: springboot },
            { name: 'Spring Security', image: springboot },
            { name: 'Spring Data JPA', image: springboot },
            { name: 'Spring MVC', image: springboot },
            { name: 'Hibernate', image: springboot },
            { name: 'React.js', image: react },
            { name: 'Node.js', image: node },
            { name: 'Express.js', image: express },
            { name: 'Redux', image: reduxjs },
            { name: 'Apache Kafka', image: '/Kafka.png' },
            { name: 'Docker', image: '/Docker.png' },
            { name: 'Microservices', image: '/Microservices.png' },
        ]
    },
    {
        category: 'Frontend & UI',
        icon: '🎨',
        description: 'Frontend technologies for beautiful user interfaces',
        skills: [
            { name: 'HTML5', image: html },
            { name: 'CSS3', image: css },
            { name: 'JavaScript', image: '/Javascript.png' },
            { name: 'React.js', image: react },
            { name: 'Redux', image: reduxjs },
            { name: 'JSON', image: '/Json.png' },
        ]
    },
    {
        category: 'Tools & Technologies',
        icon: '🛠️',
        description: 'Development tools and collaboration platforms',
        skills: [
            { name: 'Git', image: git },
            { name: 'GitHub', image: github },
            { name: 'GitLab', image: github },
            { name: 'Jira', image: '/Jira.png' },
            { name: 'VS Code', image: '/VSCode.png' },
            { name: 'IntelliJ', image: '/IntelliJ.png' },
            { name: 'Linux', image: '/Linux.png' },
            { name: 'Maven', image: '/Maven.png' },
            { name: 'JUnit', image: '/JUnit.png' },
            { name: 'Apache Tomcat', image: '/Tomcat.png' },
        ]
    },
    {
        category: 'Certifications',
        icon: '🏆',
        description: 'Professional certifications and credentials',
        skills: [
            { name: 'Professional Scrum Master I', image: '/Scrum.png' },
            { name: 'Professional Scrum Master II', image: '/Scrum.png' },
            { name: 'Professional Agile Leadership', image: '/Agile.png' },
            { name: 'SAFe Scrum Master', image: '/SAFe.png' },
        ]
    },
]

// Flat skills array for backward compatibility
export const skills = [
    { name: 'Java', image: '/Java.png' },
    { name: 'Python', image: '/Python.png' },
    { name: 'JavaScript', image: '/Javascript.png' },
    { name: 'TypeScript', image: '/Typescript.png' },
    { name: 'Spring Boot', image: springboot },
    { name: 'React.js', image: react },
    { name: 'Node.js', image: node },
    { name: 'Express.js', image: express },
    { name: 'Oracle DB', image: postgresql },
    { name: 'PostgreSQL', image: postgresql },
    { name: 'MongoDB', image: mongodb },
    { name: 'Apache Kafka', image: '/Kafka.png' },
    { name: 'Docker', image: '/Docker.png' },
    { name: 'Git', image: git },
    { name: 'Linux', image: '/Linux.png' },
    { name: 'HTML5', image: html },
    { name: 'CSS3', image: css },
    { name: 'Redux', image: reduxjs },
]