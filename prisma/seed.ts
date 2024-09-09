import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
    console.time("Seeding complete 🌱");

    await prisma.experience.createMany({
        skipDuplicates: true,
        data: [
            {
                title: "Managing Sustainable Growth at Netlight",
                timeframe: "October 2014 - August 2024 [9 years 11 months]",
                description: "Netlight is a company built and owned by its employees, fostering motivation for everyone to shape the company's future in " +
                    "alignment with their own needs, vision, and values. I was part of this journey for almost ten years, joining the German branch " +
                    "of Netlight when it had around 60 employees, to today, with over 700 active employees in Germany alone.\n" +
                    "\n" +
                    "During this time, I contributed significantly to the growth of Hamburg from 10 employees in 2016 to 170 employees in 2024. " +
                    "Major aspects of my work that was part of driving this growth can be summarized as follows: \n" +
                    "\n" +
                    "* Creating a culture of knowledge sharing by establishing various formats for consultants and other functions within Netlight " +
                    "to exchange thoughts and ideas, challenge each other, and learn through hands-on experience, listening, or observation. \n" +
                    "* Hiring and developing new talent within Netlight, both in consulting and sales and as a disciplinary leader of the company " +
                    "for over six years. This involved creating development plans and goals for employees, aligning them with their personal and " +
                    "Netlight's needs, and coaching colleagues to reach their full potential.\n" +
                    "* Allowing for more diverse talent to be seen in IT by establishing and supporting FINTA-related initiatives and " +
                    "projects together with non-profit and social organizations in Hamburg.\n" +
                    "* Aligning business needs with talent and engagement management, fostering an environment where people and business can grow " +
                    "together regardless of the company's stage.\n" +
                    "* Navigating challenging times with impacts on hiring, people development, and the type of employer Netlight needed to be. This " +
                    "included adjusting hiring strategies, finding ways to onboard and further develop talented colleagues, and identifying business " +
                    "opportunities in less-than-ideal market conditions."
            },
            {
                title: "Architect",
                timeframe: "February 2024 - August 2024 [7 months]",
                description: "Being embedded in a team of three architects, I was responsible for aligning the Macro-Architecture with the teams and " +
                    "collecting both business and technical needs for it. This helped me define guidelines for the teams to follow and implement " +
                    "their services against, creating a unified vision for all products. To effectively steer those efforts, I created formats to " +
                    "share, discuss and align team-needs and help them to take ownership of their own implementation-details."
            },
            {
                title: "Product Architect",
                timeframe: "January 2023 - January 2024 [1 year 1 month]",
                description: "As a Product Architect, I provided guidance for five application teams, aligning product architectures with the " +
                    "macro-architecture. I facilitated product-related and technical formats to understand needs and coordinate implementation " +
                    "efforts. Being part of the teams allowed me to maintain proximity and ensure alignment between micro and macro architectures. " +
                    "My approach facilitated swift decision-making and effective development coordination, fostering a culture of knowledge sharing " +
                    "across teams."
            },
            {
                title: "Team and Tech Lead",
                timeframe: "July 2022 - December 2022 [6 months]",
                description: "Leading a cloud migration project, I orchestrated the technical roadmap and communication with stakeholders. I crafted " +
                    "a modern, event-driven architecture leveraging both on-premise and Google Cloud capabilities. Through Infrastructure-as-Code, " +
                    "I ensured repeatability and accountability in infrastructure changes. My leadership fostered a culture of knowledge sharing, " +
                    "driving community practices and supporting team onboarding in new technologies."
            },
            {
                title: "Site Reliability Engineer",
                timeframe: "August 2021 - December 2021 [5 months]",
                description: "Responsible for creating reusable components, I automated infrastructure in Terraform, facilitating fast onboarding " +
                    "and deployment for teams. I started an internal open-source initiative, fostering knowledge and code sharing across teams. I " +
                    "connected development teams to share best practices, driving knowledge sharing through various channels and supporting site " +
                    "reliability efforts."
            },
            {
                title: "Solution Architect",
                timeframe: "January 2021 - July 2021 [7 months]",
                description: "I played a crucial role in defining technical infrastructure and architectural guidelines, enabling scalable and " +
                    "maintainable application landscapes. My focus on implementation speed without sacrificing quality ensured rapid end user " +
                    "acceptance. Facilitating technical discussions and embracing a cloud-native approach, I helped create a low-maintenance " +
                    "infrastructure and drove development with a pragmatic approach."
            },
            {
                title: "Solution Architect",
                timeframe: "June 2020 - December 2020 [7 months]",
                description: "Coordinating the architecture for an IoT platform across different subsidiaries, I led discussions towards a unified " +
                    "system. My collaboration with product leads ensured alignment with market needs and integration of diverse solutions. My " +
                    "expertise facilitated the development of a flexible and scalable platform capable of meeting various market demands."
            },
            {
                title: "Technical Lead",
                timeframe: "June 2019 - April 2020 [11 months]",
                description: "As the Solution Architect and Lead Developer, I established infrastructural guidelines and best practices for " +
                    "development. My focus on creating fast and reliable workflows drove the project towards establishing an MVP quickly. My " +
                    "leadership in technical discussions and adoption of cloud-native principles enabled the team to create a scalable and " +
                    "maintainable infrastructure."
            },
            {
                title: "Full Stack Developer",
                timeframe: "January 2018 - May 2019 [1 year 5 months]",
                description: "I evaluated and implemented an external marketing software, focusing on scalability and response times. My involvement " +
                    "in cross-functional teams ensured alignment with various stakeholders and teams. By driving automation and " +
                    "infrastructure-as-code principles, I facilitated continuous integration and deployment processes, enhancing the project's " +
                    "maintainability and stability."
            },
            {
                title: "Technical Product Owner",
                timeframe: "May 2017 - December 2017 [8 months]",
                description: "Managing the infrastructure of a digital transformation project, I bridged communication between IT providers and " +
                    "development teams. My role involved creating a vision for the future infrastructure, optimizing scalability and maintainability."
            },
            {
                title: "Platform Engineer",
                timeframe: "August 2016 - April 2017 [9 months]",
                description: "I contributed to the digital transformation of the company's core product, focusing on infrastructure maintenance and " +
                    "automation. My efforts ensured a high degree of automation in infrastructure changes and execution, enabling efficient " +
                    "development cycles and runtime monitoring."
            },
            {
                title: "Full Stack Developer",
                timeframe: "October 2014 - July 2016 [1 year 10 months]",
                description: "Leading front-end engineering, I drove feature development and maintenance, collaborating with cross-functional teams. " +
                    "I played a crucial role in advancing the architecture towards a scalable microservice infrastructure, emphasizing common " +
                    "workflows and technical improvements."
            }
        ]
        ,
    });

    console.timeEnd("Seeding complete 🌱");
};

main()
    .then(() => {
        console.log("Process completed");
    })
    .catch((e) => console.log(e));