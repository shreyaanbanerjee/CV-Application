import { v4 as uuidv4 } from "uuid";
import samplePicture from "../assets/Shreyaan.jpg"; // Update the image if needed

const CV = {
    color1: "rgb(255,255,255)", // Updated colors for a fresh look
    color2: "rgb(255,255,255)",
    fileName: "Shreyaan.jpg",
    fileSrc: samplePicture,
    info: [
        {
            name: "First Name",
            text: "Shreyaan"
        },
        {
            name: "Last Name",
            text: "Banerjee"
        },
        {
            name: "Niche: Full-Stack Developer",
            text: "Full-Stack Developer"
        },
        {
            name: "Tell something about yourself to stand out from other candidates...",
            text: `I am a passionate full-stack developer with a strong focus on building efficient, scalable, and user-friendly software. My journey into development began with curiosity and has evolved into a profession I deeply enjoy. Below, you'll find my key skills and experiences that highlight my journey in the tech world.`
        },
        {
            name: "School",
            text: "Indian Institute of Information Technology"
        },
        {
            name: "Degree",
            text: "B.Tech in Computer Science"
        },
        {
            name: "Address",
            text: "India, Mahrashtra"
        },
        {
            name: "E-Mail",
            text: "shre6745@gmail.com"
        },
        {
            name: "Phone number",
            text: "9324323207"
        },
        {
            name: "Link to portfolio",
            text: "https://github.com/shreyaanbanerjee"
        }
    ],
    skills: [
        {
            id: uuidv4(),
            text: "Django"
        },
        {
            id: uuidv4(),
            text: "Node.js"
        },
        {
            id: uuidv4(),
            text: "Next.js"
        },
        {
            id: uuidv4(),
            text: "React"
        },
        {
            id: uuidv4(),
            text: "TypeScript"
        }
    ],
    experiences: [
        {
            id: uuidv4(),
            position: "Software Engineer",
            company: "Company Name Here",
            startDate: "2023",
            endDate: "Present",
            description: "Working on building full-stack applications using modern frameworks like Next.js, Django, and React. Collaborating with teams to deliver robust and scalable solutions for clients."
        },
        {
            id: uuidv4(),
            position: "Intern",
            company: "Internship Company Here",
            startDate: "2022",
            endDate: "2023",
            description: "Contributed to the development of various web applications and gained hands-on experience in frameworks like Node.js and React. Participated in designing scalable backend systems and APIs."
        }
    ]
};

export default CV;