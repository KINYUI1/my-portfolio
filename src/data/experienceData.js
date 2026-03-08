import { nanoid } from "nanoid"

const experience = [
    {
        name:'Software Engineer',
        organization:'Verizon',
        location:'Irving, TX',
        duration:'June 2024 - December 2025',
        highlights: [
            'Engineered a Kafka Consumer application using Java Spring Boot to integrate with EPC team data streams, isolating vendor add-on subscriptions from high-volume traffic and synchronizing to billing database',
            'Developed Python-driven catalogue replication optimization for RBM interface, reducing execution time by 80% (60 to 8 minutes) while processing 17.2M records across 94 Oracle tables',
            'Implemented robust backend solutions using Java, Spring Boot, Express.js, and Node.js, designing RESTful APIs that reduced application load times by 20%',
            'Built Python automation script to periodically sanitize data across 180 duplication-check tables, reclaiming thousands of GBs of storage',
            'Architected and deployed Oracle Wallet security strategy on Linux-hosted RBM servers (SDC, TDC, TPA, B2B) ensuring secure credential management',
            'Designed end-to-end Python pipeline to generate and publish Enterprise Product Catalogues (EPC) to RBM servers',
            'Implemented high-volume usage tracking system using Oracle and Python for predictive trend analysis',
        ],
        description:`Engineered a Python-driven catalogue replication optimization for the Rating and Billing Manager (RBM) Interface, reducing execution time by 80% (from 60 minutes to 8 minutes) to process a load of 17.2 million records across 94 Oracle tables, significantly boosting system reliability and exceeding Billing Service Level Agreements (SLAs). Built Kafka Consumer applications with Java Spring Boot for high-volume data stream integration. Architected Oracle Wallet security strategies on Linux-hosted servers ensuring secure credential management while maintaining seamless application connectivity.`,
        id:nanoid()
    },
    {
        name:'Software Engineer',
        organization:'Per Scholas, Inc',
        location:'Dallas, TX',
        duration:'June 2023 - September 2023',
        highlights: [
            'Developed responsive, scalable full-stack web applications using Java, Spring Boot, Node.js, and React in an Agile sprint-driven environment',
            'Designed and implemented RESTful APIs with Spring Boot, Express.js, and Node.js, optimizing performance and reducing application load times',
            'Built authentication and authorization workflows following software engineering best practices with CI/CD pipeline integration',
            'Utilized MongoDB and PostgreSQL for data modeling, storage, and retrieval across dynamic multi-user applications',
            'Integrated third-party libraries including Redux for state management, enhancing application stability and scalability',
        ],
        description:`Developed and maintained responsive, scalable full-stack web applications as part of an intensive, project-based bootcamp using Java, Spring Boot, Node.js, and React, working in an Agile, sprint-driven environment. Designed and implemented RESTful APIs with Spring Boot, Express.js, and Node.js, applying backend best practices to optimize performance. Built authentication and authorization workflows with CI/CD pipeline integration and utilized MongoDB and PostgreSQL for efficient data handling.`,
        id:nanoid()
    },
]

export default experience