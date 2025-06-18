// Suggested additional questions for the frontend and backend:
// - Do you prefer working with visuals and design, or logic and problem-solving?
// - Are you interested in building mobile apps, websites, or something else?
// - Do you enjoy collaborating with others or working independently?
// - What motivates you more: seeing immediate results, or working on long-term projects?
// - Are you interested in user experience, data analysis, or infrastructure?

export const getRecommendation = async (req, res) => {
    try {
        const {
            name,
            age,
            gender,
            major,
            grade,
            mathTopics = [],
            problemSolving,
            programmingLanguages = [],
            otherSkills = [],
            workExperience,
            englishProficiency,
            studyTime,
            interests = [],
            completed = [],
            selfStudy,
            usesSocial,
            comfortVirtual,
            aspirations = []
        } = req.body;

        // Initialize points for each track
        const trackPoints = {
            fullStack: 0,
            mobile: 0,
            uiux: 0,
            dataAnalysis: 0,
            ai: 0,
            embedded: 0,
            gameDev: 0,
            devOps: 0,
            cyberSecurity: 0,
            iot: 0,
            cloudComputing: 0,
            bigData: 0,
            software: 0
        };

        // General problem solving points
        if (problemSolving === 'Advanced') {
            Object.keys(trackPoints).forEach(track => trackPoints[track] += 2);
        } else if (problemSolving === 'Intermediate') {
            Object.keys(trackPoints).forEach(track => trackPoints[track] += 1);
        }

        // Work experience points
        if (workExperience === '3-5 years' || workExperience === '5-10 years' || workExperience === '10+ years') {
            Object.keys(trackPoints).forEach(track => trackPoints[track] += 2);
        } else if (workExperience === '1-3 years' || workExperience === 'Entry Level') {
            Object.keys(trackPoints).forEach(track => trackPoints[track] += 1);
        }

        // English proficiency requirements
        if (englishProficiency === 'Poor') {
            trackPoints.uiux -= 2;
            trackPoints.cyberSecurity -= 1;
            trackPoints.devOps -= 1;
            trackPoints.cloudComputing -= 1;
        } else if (englishProficiency === 'Average') {
            trackPoints.uiux += 1;
            trackPoints.cyberSecurity += 1;
            trackPoints.devOps += 1;
            trackPoints.cloudComputing += 1;
        } else if (englishProficiency === 'Good') {
            trackPoints.uiux += 2;
            trackPoints.cyberSecurity += 2;
            trackPoints.devOps += 2;
            trackPoints.cloudComputing += 2;
        } else if (englishProficiency === 'Excellent') {
            trackPoints.uiux += 3;
            trackPoints.cyberSecurity += 3;
            trackPoints.devOps += 3;
            trackPoints.cloudComputing += 3;
        }

        // Game Development points
        if (interests.includes('Game Development')) trackPoints.gameDev += 3;
        if (completed.includes('Game Development Basics')) trackPoints.gameDev += 2;
        if (programmingLanguages.includes('C++')) trackPoints.gameDev += 2;
        if (programmingLanguages.includes('C#')) trackPoints.gameDev += 2;
        if (programmingLanguages.includes('Python')) trackPoints.gameDev += 1;
        if (otherSkills.includes('Game Design')) trackPoints.gameDev += 3;
        if (otherSkills.includes('3D Modeling')) trackPoints.gameDev += 2;
        if (otherSkills.includes('Animation')) trackPoints.gameDev += 2;
        if (otherSkills.includes('Sound Design')) trackPoints.gameDev += 1;

        // DevOps points
        if (interests.includes('DevOps')) trackPoints.devOps += 3;
        if (completed.includes('DevOps Basics')) trackPoints.devOps += 2;
        if (completed.includes('System Administration')) trackPoints.devOps += 2;
        if (completed.includes('Cloud Architecture')) trackPoints.devOps += 2;
        if (programmingLanguages.includes('Python')) trackPoints.devOps += 1;
        if (programmingLanguages.includes('Go')) trackPoints.devOps += 1;
        if (otherSkills.includes('System Administration')) trackPoints.devOps += 2;
        if (otherSkills.includes('Network Management')) trackPoints.devOps += 2;

        // Cybersecurity points
        if (interests.includes('Cybersecurity')) trackPoints.cyberSecurity += 3;
        if (completed.includes('Cybersecurity Basics')) trackPoints.cyberSecurity += 2;
        if (completed.includes('Network Security')) trackPoints.cyberSecurity += 2;
        if (programmingLanguages.includes('Python')) trackPoints.cyberSecurity += 1;
        if (programmingLanguages.includes('C')) trackPoints.cyberSecurity += 1;
        if (otherSkills.includes('System Administration')) trackPoints.cyberSecurity += 1;
        if (otherSkills.includes('Network Management')) trackPoints.cyberSecurity += 2;

        // IoT points
        if (interests.includes('IoT')) trackPoints.iot += 3;
        if (completed.includes('IoT Basics')) trackPoints.iot += 2;
        if (completed.includes('Embedded Systems Basics')) trackPoints.iot += 2;
        if (programmingLanguages.includes('C')) trackPoints.iot += 2;
        if (programmingLanguages.includes('C++')) trackPoints.iot += 1;
        if (programmingLanguages.includes('Python')) trackPoints.iot += 1;
        if (otherSkills.includes('Electronics')) trackPoints.iot += 2;
        if (otherSkills.includes('Hardware Repair')) trackPoints.iot += 1;

        // Cloud Computing points
        if (interests.includes('Cloud Computing')) trackPoints.cloudComputing += 3;
        if (completed.includes('Cloud Computing Basics')) trackPoints.cloudComputing += 2;
        if (completed.includes('Cloud Architecture')) trackPoints.cloudComputing += 2;
        if (programmingLanguages.includes('Python')) trackPoints.cloudComputing += 1;
        if (programmingLanguages.includes('Go')) trackPoints.cloudComputing += 1;
        if (otherSkills.includes('System Administration')) trackPoints.cloudComputing += 2;
        if (otherSkills.includes('Network Management')) trackPoints.cloudComputing += 1;

        // Big Data points
        if (interests.includes('Big Data')) trackPoints.bigData += 3;
        if (completed.includes('Big Data Basics')) trackPoints.bigData += 2;
        if (completed.includes('Data Engineering')) trackPoints.bigData += 2;
        if (programmingLanguages.includes('Python')) trackPoints.bigData += 2;
        if (programmingLanguages.includes('Java')) trackPoints.bigData += 1;
        if (programmingLanguages.includes('Scala')) trackPoints.bigData += 1;
        if (otherSkills.includes('Data Analysis')) trackPoints.bigData += 2;
        if (otherSkills.includes('Business Analysis')) trackPoints.bigData += 1;

        // Software Engineering points
        if (interests.includes('Software Engineering')) trackPoints.software += 3;
        if (completed.includes('Software Engineering Basics')) trackPoints.software += 2;
        if (completed.includes('Software Architecture')) trackPoints.software += 2;
        if (programmingLanguages.includes('Java')) trackPoints.software += 2;
        if (programmingLanguages.includes('C++')) trackPoints.software += 2;
        if (programmingLanguages.includes('Python')) trackPoints.software += 1;
        if (otherSkills.includes('Project Management')) trackPoints.software += 2;
        if (otherSkills.includes('Team Leadership')) trackPoints.software += 1;

        // Other skills points
        // Full Stack
        if (otherSkills.includes('Project Management')) trackPoints.fullStack += 2;
        if (otherSkills.includes('Team Leadership')) trackPoints.fullStack += 1;
        if (otherSkills.includes('Technical Writing')) trackPoints.fullStack += 1;
        if (otherSkills.includes('System Administration')) trackPoints.fullStack += 2;
        if (otherSkills.includes('Network Management')) trackPoints.fullStack += 2;
        if (otherSkills.includes('Quality Assurance')) trackPoints.fullStack += 1;

        // Mobile
        if (otherSkills.includes('Creative Design')) trackPoints.mobile += 2;
        if (otherSkills.includes('User Research')) trackPoints.mobile += 2;
        if (otherSkills.includes('Graphic Design')) trackPoints.mobile += 1;
        if (otherSkills.includes('Animation')) trackPoints.mobile += 1;
        if (otherSkills.includes('Game Design')) trackPoints.mobile += 2;

        // UI/UX
        if (otherSkills.includes('Creative Design')) trackPoints.uiux += 3;
        if (otherSkills.includes('User Research')) trackPoints.uiux += 3;
        if (otherSkills.includes('Graphic Design')) trackPoints.uiux += 2;
        if (otherSkills.includes('Animation')) trackPoints.uiux += 1;
        if (otherSkills.includes('3D Modeling')) trackPoints.uiux += 1;
        if (otherSkills.includes('Content Creation')) trackPoints.uiux += 1;
        if (otherSkills.includes('Marketing')) trackPoints.uiux += 1;

        // Data Analysis
        if (otherSkills.includes('Data Analysis')) trackPoints.dataAnalysis += 3;
        if (otherSkills.includes('Research')) trackPoints.dataAnalysis += 2;
        if (otherSkills.includes('Business Analysis')) trackPoints.dataAnalysis += 2;
        if (otherSkills.includes('Finance')) trackPoints.dataAnalysis += 1;
        if (otherSkills.includes('Scientific Research')) trackPoints.dataAnalysis += 2;
        if (otherSkills.includes('Healthcare')) trackPoints.dataAnalysis += 1;

        // AI
        if (otherSkills.includes('Research')) trackPoints.ai += 2;
        if (otherSkills.includes('Scientific Research')) trackPoints.ai += 2;
        if (otherSkills.includes('Mathematics')) trackPoints.ai += 2;
        if (otherSkills.includes('Physics')) trackPoints.ai += 1;
        if (otherSkills.includes('Engineering')) trackPoints.ai += 1;

        // Embedded
        if (otherSkills.includes('Electronics')) trackPoints.embedded += 3;
        if (otherSkills.includes('Hardware Repair')) trackPoints.embedded += 2;
        if (otherSkills.includes('Engineering')) trackPoints.embedded += 2;
        if (otherSkills.includes('Physics')) trackPoints.embedded += 2;
        if (otherSkills.includes('Architecture')) trackPoints.embedded += 1;
        if (otherSkills.includes('System Administration')) trackPoints.embedded += 1;

        // Full Stack Web Development points
        if (interests.includes('Web Development')) trackPoints.fullStack += 3;
        if (interests.includes('DevOps')) trackPoints.fullStack += 2;
        if (interests.includes('Cloud Computing')) trackPoints.fullStack += 2;
        if (completed.includes('Web Development Basics')) trackPoints.fullStack += 2;
        if (completed.includes('Database Systems')) trackPoints.fullStack += 2;
        if (aspirations.includes('Create impactful web applications')) trackPoints.fullStack += 3;
        if (aspirations.includes('Contribute to open source')) trackPoints.fullStack += 1;
        if (programmingLanguages.includes('JavaScript')) trackPoints.fullStack += 2;
        if (programmingLanguages.includes('TypeScript')) trackPoints.fullStack += 1;
        if (programmingLanguages.includes('Python')) trackPoints.fullStack += 1;
        if (programmingLanguages.includes('Java')) trackPoints.fullStack += 1;

        // Mobile Development points
        if (interests.includes('Mobile Development')) trackPoints.mobile += 3;
        if (interests.includes('Game Development')) trackPoints.mobile += 2;
        if (completed.includes('Mobile Development Basics')) trackPoints.mobile += 2;
        if (aspirations.includes('Develop cutting-edge mobile apps')) trackPoints.mobile += 3;
        if (aspirations.includes('Work in gaming industry')) trackPoints.mobile += 2;
        if (programmingLanguages.includes('Swift')) trackPoints.mobile += 2;
        if (programmingLanguages.includes('Kotlin')) trackPoints.mobile += 2;
        if (programmingLanguages.includes('Java')) trackPoints.mobile += 1;
        if (programmingLanguages.includes('JavaScript')) trackPoints.mobile += 1;

        // UI/UX Design points
        if (interests.includes('UI/UX Design')) trackPoints.uiux += 3;
        if (completed.includes('UI/UX Design Basics')) trackPoints.uiux += 2;
        if (aspirations.includes('Design intuitive user experiences')) trackPoints.uiux += 3;
        if (aspirations.includes('Work in healthcare tech')) trackPoints.uiux += 1;
        if (aspirations.includes('Work in fintech')) trackPoints.uiux += 1;
        if (englishProficiency === 'Excellent') trackPoints.uiux += 3;
        if (englishProficiency === 'Good') trackPoints.uiux += 2;
        if (englishProficiency === 'Average' || englishProficiency === 'Poor') trackPoints.uiux -= 2;
        if (programmingLanguages.includes('JavaScript')) trackPoints.uiux += 1;
        if (programmingLanguages.includes('TypeScript')) trackPoints.uiux += 1;

        // Data Analysis points
        if (interests.includes('Data Science')) trackPoints.dataAnalysis += 3;
        if (completed.includes('Data Structures & Algorithms')) trackPoints.dataAnalysis += 2;
        if (completed.includes('Database Systems')) trackPoints.dataAnalysis += 2;
        if (aspirations.includes('Solve complex data problems')) trackPoints.dataAnalysis += 3;
        if (mathTopics.includes('Statistics')) trackPoints.dataAnalysis += 2;
        if (mathTopics.includes('Probability')) trackPoints.dataAnalysis += 2;
        if (programmingLanguages.includes('Python')) trackPoints.dataAnalysis += 2;
        if (programmingLanguages.includes('R')) trackPoints.dataAnalysis += 2;
        if (programmingLanguages.includes('MATLAB')) trackPoints.dataAnalysis += 1;

        // AI Development points
        if (interests.includes('Artificial Intelligence')) trackPoints.ai += 3;
        if (interests.includes('Machine Learning')) trackPoints.ai += 2;
        if (interests.includes('Deep Learning')) trackPoints.ai += 2;
        if (interests.includes('Natural Language Processing')) trackPoints.ai += 2;
        if (interests.includes('Computer Vision')) trackPoints.ai += 2;
        if (completed.includes('Machine Learning Basics')) trackPoints.ai += 2;
        if (completed.includes('Deep Learning Basics')) trackPoints.ai += 2;
        if (completed.includes('NLP Basics')) trackPoints.ai += 2;
        if (completed.includes('Computer Vision Basics')) trackPoints.ai += 2;
        if (aspirations.includes('Build innovative AI solutions')) trackPoints.ai += 3;
        if (aspirations.includes('Work on autonomous systems')) trackPoints.ai += 2;
        if (aspirations.includes('Work in research')) trackPoints.ai += 2;
        if (mathTopics.includes('Linear Algebra')) trackPoints.ai += 3;
        if (mathTopics.includes('Probability')) trackPoints.ai += 2;
        if (mathTopics.includes('Statistics')) trackPoints.ai += 2;
        if (programmingLanguages.includes('Python')) trackPoints.ai += 2;
        if (programmingLanguages.includes('R')) trackPoints.ai += 1;
        if (programmingLanguages.includes('MATLAB')) trackPoints.ai += 1;

        // Embedded Systems points
        if (interests.includes('Embedded Systems')) trackPoints.embedded += 3;
        if (interests.includes('IoT')) trackPoints.embedded += 2;
        if (interests.includes('Robotics')) trackPoints.embedded += 2;
        if (interests.includes('Hardware Programming')) trackPoints.embedded += 3;
        if (completed.includes('Embedded Systems Basics')) trackPoints.embedded += 2;
        if (completed.includes('Operating Systems')) trackPoints.embedded += 2;
        if (completed.includes('Computer Architecture')) trackPoints.embedded += 2;
        if (completed.includes('Digital Electronics')) trackPoints.embedded += 2;
        if (completed.includes('Microcontrollers')) trackPoints.embedded += 2;
        if (completed.includes('Real-time Systems')) trackPoints.embedded += 2;
        if (programmingLanguages.includes('C')) trackPoints.embedded += 3;
        if (programmingLanguages.includes('C++')) trackPoints.embedded += 2;
        if (programmingLanguages.includes('Rust')) trackPoints.embedded += 2;
        if (programmingLanguages.includes('Assembly')) trackPoints.embedded += 2;
        if (mathTopics.includes('Boolean Algebra')) trackPoints.embedded += 2;
        if (mathTopics.includes('Digital Electronics')) trackPoints.embedded += 2;

        // Additional points based on learning style
        if (selfStudy === 'Yes') {
            trackPoints.fullStack += 1;
            trackPoints.mobile += 1;
            trackPoints.dataAnalysis += 1;
            trackPoints.ai += 1;
            trackPoints.embedded += 1;
        }

        // Points based on study time
        if (studyTime === '11-15 hours/week' || studyTime === '15+ hours/week') {
            trackPoints.fullStack += 1;
            trackPoints.mobile += 1;
            trackPoints.uiux += 1;
            trackPoints.dataAnalysis += 1;
            trackPoints.ai += 1;
            trackPoints.embedded += 1;
        }

        // Find the track with the highest points
        const maxPoints = Math.max(...Object.values(trackPoints));
        const recommendedTrack = Object.keys(trackPoints).find(key => trackPoints[key] === maxPoints);

        // Define track details
        const trackDetails = {
            fullStack: {
                track: "Full Stack Web Development",
                description: "This track is perfect for students interested in both frontend and backend development, covering everything from HTML/CSS to databases and APIs.",
                learningPath: [
                    "Introduction to HTML, CSS, and JavaScript",
                    "Responsive Web Design",
                    "Version Control with Git",
                    "Frontend Frameworks (React)",
                    "Backend Development (Node.js, Express)",
                    "Databases (MongoDB, SQL)",
                    "RESTful APIs",
                    "Deployment and DevOps Basics"
                ]
            },
            mobile: {
                track: "Mobile App Development",
                description: "This track is ideal for those who want to build apps for iOS and Android, focusing on mobile UI/UX, cross-platform tools, and app deployment.",
                learningPath: [
                    "Introduction to Mobile App Development",
                    "UI/UX for Mobile Apps",
                    "React Native or Flutter Basics",
                    "State Management in Mobile Apps",
                    "APIs and Data Storage",
                    "Publishing Apps to App Stores"
                ]
            },
            uiux: {
                track: "UI/UX Design",
                description: "This track is for creative individuals who enjoy designing user interfaces and experiences, focusing on design principles, prototyping, and user research.",
                learningPath: [
                    "Principles of Design",
                    "User Research and Personas",
                    "Wireframing and Prototyping",
                    "Design Tools (Figma, Adobe XD)",
                    "Usability Testing",
                    "Portfolio Development"
                ]
            },
            dataAnalysis: {
                track: "Data Analysis",
                description: "This track is for those interested in working with data, learning how to collect, analyze, and visualize information to make informed decisions.",
                learningPath: [
                    "Introduction to Data Analysis",
                    "Excel & Google Sheets",
                    "Data Visualization Tools (Tableau, Power BI)",
                    "Basic Statistics",
                    "Reporting and Dashboards"
                ]
            },
            ai: {
                track: "AI Development",
                description: "This track is for those interested in artificial intelligence, machine learning, and deep learning, focusing on building intelligent systems and models.",
                learningPath: [
                    "Advanced Mathematics (Linear Algebra, Calculus, Statistics)",
                    "Python Programming for AI",
                    "Machine Learning Fundamentals",
                    "Deep Learning and Neural Networks",
                    "Natural Language Processing",
                    "Computer Vision",
                    "AI Model Deployment",
                    "Research and Development"
                ]
            },
            embedded: {
                track: "Embedded Systems Development",
                description: "This track is for those interested in developing systems that interact with hardware, focusing on real-time systems, microcontrollers, and low-level programming.",
                learningPath: [
                    "Computer Architecture and Digital Electronics",
                    "C/C++ Programming for Embedded Systems",
                    "Microcontrollers and Real-time Systems",
                    "Operating Systems and Device Drivers",
                    "IoT and Sensor Integration",
                    "Hardware-Software Co-design",
                    "Embedded Systems Security",
                    "Project: Building a Complete Embedded System"
                ]
            },
            gameDev: {
                track: "Game Development",
                description: "This track is for those interested in creating games, focusing on game design, programming, graphics, and interactive experiences.",
                learningPath: [
                    "Game Design Fundamentals",
                    "Programming for Games (C++, C#)",
                    "Game Engines (Unity, Unreal)",
                    "3D Modeling and Animation",
                    "Game Physics and Mathematics",
                    "Game AI and Pathfinding",
                    "Multiplayer Game Development",
                    "Game Testing and Optimization"
                ]
            },
            devOps: {
                track: "DevOps Engineering",
                description: "This track is for those interested in bridging development and operations, focusing on automation, deployment, and infrastructure management.",
                learningPath: [
                    "Linux and System Administration",
                    "Networking Fundamentals",
                    "Containerization (Docker, Kubernetes)",
                    "CI/CD Pipelines",
                    "Infrastructure as Code",
                    "Cloud Platforms (AWS, Azure, GCP)",
                    "Monitoring and Logging",
                    "Security and Compliance"
                ]
            },
            cyberSecurity: {
                track: "Cybersecurity",
                description: "This track is for those interested in protecting systems and data, focusing on security analysis, ethical hacking, and defense strategies.",
                learningPath: [
                    "Network Security Fundamentals",
                    "Operating System Security",
                    "Cryptography",
                    "Ethical Hacking",
                    "Security Analysis and Testing",
                    "Incident Response",
                    "Security Compliance",
                    "Advanced Security Topics"
                ]
            },
            iot: {
                track: "Internet of Things (IoT)",
                description: "This track is for those interested in connected devices and smart systems, focusing on hardware, networking, and embedded systems.",
                learningPath: [
                    "Electronics and Hardware Basics",
                    "Embedded Systems Programming",
                    "IoT Protocols and Standards",
                    "Sensor Integration",
                    "Cloud Integration",
                    "IoT Security",
                    "Data Collection and Analysis",
                    "IoT Project Development"
                ]
            },
            cloudComputing: {
                track: "Cloud Computing",
                description: "This track is for those interested in cloud platforms and services, focusing on architecture, deployment, and cloud-native development.",
                learningPath: [
                    "Cloud Fundamentals",
                    "Cloud Platforms (AWS, Azure, GCP)",
                    "Cloud Architecture",
                    "Containerization and Orchestration",
                    "Serverless Computing",
                    "Cloud Security",
                    "DevOps for Cloud",
                    "Cloud Cost Optimization"
                ]
            },
            bigData: {
                track: "Big Data Engineering",
                description: "This track is for those interested in handling large-scale data, focusing on data processing, storage, and analysis systems.",
                learningPath: [
                    "Big Data Fundamentals",
                    "Data Processing Frameworks",
                    "Data Storage Solutions",
                    "Data Pipeline Development",
                    "Real-time Processing",
                    "Data Quality and Governance",
                    "Big Data Security",
                    "Scalable Architecture"
                ]
            },
            software: {
                track: "Software Engineering",
                description: "This track is for those interested in building robust software systems, focusing on architecture, design patterns, and best practices.",
                learningPath: [
                    "Software Design Principles",
                    "Design Patterns",
                    "Software Architecture",
                    "Testing and Quality Assurance",
                    "Performance Optimization",
                    "Software Security",
                    "Project Management",
                    "Team Collaboration"
                ]
            }
        };

        res.status(200).json({
            track: trackDetails[recommendedTrack].track,
            description: trackDetails[recommendedTrack].description,
            learningPath: trackDetails[recommendedTrack].learningPath,
            points: trackPoints
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error getting recommendations",
            error: error.message
        });
    }
}; 