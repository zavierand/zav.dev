// import pictures for experiences
import { pwc, school } from "../assets/img";

// import icons for skills
import {
    ai,
    c,
    contact,
    cpp,
    css,
    discord,
    express,
    fashion,
    flask,
    git,
    github,
    html,
    javascript,
    latex,
    linkedin,
    mongodb,
    nodejs,
    portfolio,
    python,
    pytorch,
    react,
    sql,
    tailwindcss,
    tensorflow,
    vim
} from "../assets/icons";

// functions to be used in data
export const mergeSort = (arr, l, r) => {
    if (l >= r) {
      return;
    }
  
    const m = l + Math.floor((r - l) / 2);
  
    mergeSort(arr, l, m);
    mergeSort(arr, m + 1, r);
    merge(arr, l, m, r);
  };
  
  export const merge = (arr, l, m, r) => {
    let n1 = m - l + 1;
    let n2 = r - m;
  
    // Create temporary arrays
    let left = new Array(n1);
    let right = new Array(n2);
  
    // Copy data to temporary arrays left[] and right[]
    for (let i = 0; i < n1; i++) {
      left[i] = arr[l + i];
    }
    for (let j = 0; j < n2; j++) {
      right[j] = arr[m + 1 + j];
    }
  
    // Merge the temporary arrays back into arr[l..r]
    let i = 0; // Initial index of first subarray
    let j = 0; // Initial index of second subarray
    let k = l; // Initial index of merged subarray
    while (i < n1 && j < n2) {
      if (left[i].name <= right[j].name) {
        arr[k] = left[i];
        i++;
      } else {
        arr[k] = right[j];
        j++;
      }
      k++;
    }
  
    // Copy the remaining elements of left[], if any
    while (i < n1) {
      arr[k] = left[i];
      i++;
      k++;
    }
  
    // Copy the remaining elements of right[], if any
    while (j < n2) {
      arr[k] = right[j];
      j++;
      k++;
    }
  };

  export const mergeSortExperiences = (arr, l, r) => {
    if (l >= r) {
      return;
    }
  
    const m = l + Math.floor((r - l) / 2);
  
    mergeSortExperiences(arr, l, m);
    mergeSortExperiences(arr, m + 1, r);
    mergeExperiences(arr, l, m, r);
  };
  
  export const mergeExperiences = (arr, l, m, r) => {
    let n1 = m - l + 1;
    let n2 = r - m;
  
    // Create temporary arrays
    let left = new Array(n1);
    let right = new Array(n2);
  
    // Copy data to temporary arrays left[] and right[]
    for (let i = 0; i < n1; i++) {
      left[i] = arr[l + i];
    }
    for (let j = 0; j < n2; j++) {
      right[j] = arr[m + 1 + j];
    }
  
    // Merge the temporary arrays back into arr[l..r]
    let i = 0; // Initial index of first subarray
    let j = 0; // Initial index of second subarray
    let k = l; // Initial index of merged subarray
    while (i < n1 && j < n2) {
      if (left[i].id <= right[j].id) {
        arr[k] = left[i];
        i++;
      } else {
        arr[k] = right[j];
        j++;
      }
      k++;
    }
  
    // Copy the remaining elements of left[], if any
    while (i < n1) {
      arr[k] = left[i];
      i++;
      k++;
    }
  
    // Copy the remaining elements of right[], if any
    while (j < n2) {
      arr[k] = right[j];
      j++;
      k++;
    }
  };

// function to add a new skill and maintain sorted order
export const addSkill = (newSkill) => {
    skills.push(newSkill);
    mergeSort(skills, 0, skills.length - 1);
  };
  

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend, Backend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: tensorflow,
        name: "TensorFlow",
        type: 'ML Library'
    },
    {
        imageUrl: pytorch,
        name: "PyTorch",
        type: 'ML Library'
    },
    {
        imageUrl: python,
        name: 'Python',
        type: 'Backend'
    },
    {
        imageUrl: cpp,
        name: 'C++',
        type: 'Language'
    },
    {
        imageUrl: c,
        name: 'C',
        type: 'Language'
    },
    {
        imageUrl: sql,
        name: 'SQL',
        type: 'Database'
    },
    {
        imageUrl: flask,
        name: 'Flask',
        type: 'Backend',
    },
    {
        imageUrl: latex,
        name: 'LaTeX',
        type: 'Markdown',
    },
    {
        imageUrl: vim,
        name: 'ViM',
        type: 'Editor'
    }
];

export const experiences = [
    {
        title: "Computer Science, BA",
        name: "NYU",
        icon: school,
        iconBg: "#accbe1",
        date: "Aug 2023 - Present",
        points: [
            "1/5 recipients of the POISE Scholarship",
            "Currently a rising senior, taking a few more CS related classes",
            "Classes I've already taken include \"Full-Stack Development\", \"Data Structures\", \"Algorithms\", and \"Linear Algebra\".",
            "Classes I plan to take my last two semesters include \"Introduction to Robotics\", \"Artificial Intelligence\", \"Introduciton to Machine Learning\", and \"Operating Systems\".",
            "During the Spring 2024 semester, I was part of a cohort called \"Tech Treks\"! Met some amazing people where we all built some amazing stuff!... which can be seen in my projects section!",
        ],
        id: 5,
    },
    {
        title: "Undergraduate Research Assistant",
        name: "Borough of Manhattan Community College",
        icon: school,
        iconBg: "#fbc3bc",
        date: "Sept 2022 - Dec 2022",
        points: [
            "Worked with Professor Muhammed Azhar in developing an AR-based video game for dementia patients",
            "Though the project never came to fruition, the skills learned were invaluable",
            "Learned how IADLs and ADLs are severely affected by all forms of dementia",
            "The workload was tough at first, but I managed to be able to present some findings at the end of the semester. It was a very fun experience!",
            "Maintaining my grades while working full-time also led to other opportunities as well..."
        ],
        id: 4
    },
    {
        title: "Computer Science, A.S",
        name: "Borough of Manhattan Community College",
        icon: school,
        iconBg: "#b7e4c7",
        date: "Jan 2021 - Aug 2023",
        points: [
            "My first introduction to programming.",
            "Initially an Economics major.",
            "However, writing scripts at work to automate tasks and clean up spreadsheets, made me interested in coding... where I ended up taking my first CS class.",
            "Took \"Intro to Programming in Python\" and absolutely loved the class!",
            "... this led to my first \"unofficial\" experience related to coding."
        ],
        id: 3, 
    },
    {
        title: "Client Services Administrator",
        name: "Exela/PricewaterhouseCcoopers",
        icon: pwc,
        iconBg: "#a2d2ff",
        date: "Dec 2019 - Aug 2023",
        points: [
            "My first true job!",
            "Worked here for four years",
            "My first office job - was exciting seeing how fast-paced the corporate world was!",
            "Managed package logistics, overseeing receipt, processing, and delivery of roughly 800 packages daily.",
            "Maintained relationships with clients, resulting in a not only a vast network, but also a significant satisfaction rate relating to my work!",
            "As much as I loved it, I had to leave at some point to pursue more..."
        ],
        id: 2,
    },
    {
        title: "Photography, A.A",
        name: "Tompkins Cortland Community College (TC3)",
        icon: school,
        iconBg: "#a2d2ff",
        date: "Aug 2016 - May 2017",
        points: [
            "My first college",
            "I was initially a sports management major!",
            "I played one season of college baseball at TC3... but I also tore my UCL warming up, so I had to cut my college career very short.",
            "Met some of my closest friends here, whom I'm still in contact with today!",
            "Majority of my classes included some relation to fine arts, from photography, drawing, digital design, to many more.",
            "I enjoyed working with the software, and thought it would be cool somehow if I could ever build something too!"
        ],
        id: 1,
    }
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
        color: '#9CDAF1'
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/zavierand',
        color: '#333333'
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/zavierand',
        color: '#0077B5'
    }
];

export const projectsIcons = {
    "d'Éclat - AI": ai,
    "ZZENSE - SSENSE Clone": fashion,
    "My Portfolio Website!": portfolio,
    "SAMMY - Discord Bot": discord,
}