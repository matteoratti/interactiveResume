import { createSlice } from "@reduxjs/toolkit";
import { resumeData } from "../fakeData";

export const resumeSlice = createSlice({
  name: "resume",
  initialState: {value: resumeData},
  reducers: {
    updateContactInformation: (state, action) => {
      state.value.contactInformation = action.payload.contactInformation
    },
    addEducation: (state, action) =>{
      state.value.education.push(action.payload.data)
    },
    updateEducation: (state, action) => {
      state.value.education.map((element:any) => {
        if(element.id === action.payload.id){
          element.title = action.payload.data.title
          element.university = action.payload.data.university
          element.time = action.payload.data.time
        }
      })
    },
    addExperience: (state, action) =>{
      state.value.experiences.push(action.payload.data)
    },
    updateExperience: (state, action) => {
      state.value.experiences.map((element:any) => {
        if(element.id === action.payload.id){
          element.companyName = action.payload.data.companyName
          element.jobLocation = action.payload.data.jobLocation
          element.role = action.payload.data.role
          element.timePeriod = action.payload.data.timePeriod
          element.jobDescription = action.payload.data.jobDescription
        }
      })
    },
    addProject: (state, action) =>{
      state.value.projects.push(action.payload.data)
    },
    updateProject: (state, action) => {
      state.value.projects.map((element:any) => {
        if(element.id === action.payload.id){
          element.projectName = action.payload.data.projectName
          element.projectDescription = action.payload.data.projectDescription
        }
      })
    },
    addSkill: (state, action) =>{
      state.value.skills.push(action.payload.data)
    },
    addLanguage: (state, action) =>{
      state.value.languages.push(action.payload.data)
    },
    removeEntity: (state:any, action) =>{
      switch(action.payload.model) {
        case 'contactInformation':
          break;
        case 'education':
        case 'projects':
        case 'experiences':
          state.value[action.payload.model] = state.value[action.payload.model].filter((element:any) =>
            element.id !== action.payload.id
          )
          break;
        case 'skills':
        case 'languages':
          state.value[action.payload.model] = state.value[action.payload.model].filter((element:any) =>
            element !== action.payload.data
          )
          break;
        default:
          // code block
      }

    },
  }
})

export const {updateContactInformation, updateEducation, addEducation, removeEntity, addSkill, addLanguage, addExperience, updateExperience, addProject, updateProject} = resumeSlice.actions
export default resumeSlice.reducer;