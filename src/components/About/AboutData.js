import avatarImg from "../../assets/img/avatar.jpg";

export const personalData = {
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
  imgSrc: avatarImg,
  linkCV:
    "https://drive.google.com/file/d/1cdTAq9HU4KXp5awNpA5CgJdyN-pIqJO6/view?usp=sharing",
};

export const EducationData = [
  {
    id: 1,
    iconName: "school-outline",
    timeline: "2018 - Present",
    title: "Thang Long University",
    subTitle: "Computer Science",
  },
];

export const skillData = [
  {
    id: 1,
    topic: "Frontend",
    skills: [
      {
        id: 1,
        skill: "HTML",
      },
      {
        id: 2,
        skill: "CSS",
      },
      {
        id: 3,
        skill: "Javascript",
      },
      {
        id: 4,
        skill: "ReactJS",
      },
    ],
  },
  {
    id: 2,
    topic: "Backend",
    skills: [
      {
        id: 1,
        skill: "NodeJS",
      },
      {
        id: 2,
        skill: "PHP",
      },
    ],
  },
  {
    id: 3,
    topic: "Database",
    skills: [
      {
        id: 1,
        skill: "MySQL",
      },
      {
        id: 2,
        skill: "SQL Server",
      },
      {
        id: 3,
        skill: "MongoDB",
      },
    ],
  },
];
