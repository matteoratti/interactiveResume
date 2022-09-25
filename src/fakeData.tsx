import { nanoid } from 'nanoid'

export const resumeData = {
  contactInformation: {
    username: "john doe",
    email: "johndoe@gmail.com",
    phone: "+45 383838",
    location: "aarhus",
  },
  intro: "lorem ipusum dolor",
  experiences: [
    {
      id: nanoid(),
      companyName: "apple",
      jobLocation: "Berlin",
      role: "frontend developer",
      timePeriod: "2016-2018",
      jobDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
    }
  ],
  projects: [
    {
      id: nanoid(),
      projectName: "cryptoverse",
      projectDescription: "lorem ipsum dolor sit amet",
    }
  ],
  education: [
    {
      id: nanoid(),
      title: "master degree",
      university: "university name",
      time: "2016-2018"
    },
    {
      id: nanoid(),
      title: "degree",
      university: "university name",
      time: "2016-2018"
    }
  ],
  skills: [
    "css",
    "react",
    "ruby"
  ],
  languages:[
    "danish",
    "english",
    "italian"
  ]
}