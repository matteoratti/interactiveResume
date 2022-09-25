import React from 'react'
import { useSelector } from 'react-redux';
import { Container, Grid, Paper, Divider, Typography } from '@mui/material';
import Contacts from '../Contacts/Contacts';
import InfoBox from '../InfoBox/InfoBox';
import styles from './Resume.module.css'
import Education from '../Education/Education';
import EducationForm from '../UI/Form/EducationForm';
import SkillsForm from '../UI/Form/SkillsForm';
import LanguagesForm from '../UI/Form/LanguagesForm';
import Experiences from '../Experiences/Experiences';
import ExperiencesForm from '../UI/Form/ExperiencesForm';
import Projects from '../Projects/Projects';
import ProjectsForm from '../UI/Form/ProjectsForm';
import { nanoid } from 'nanoid'

function Resume() {
  const resume = useSelector((state:any) => state.resume.value)

  return (
    <Container className={styles.resumeContainer}>
      <Paper elevation={3}>
        <Grid container spacing={2} p={4}>
          <Grid item lg={4}>
            <Contacts />

            <Divider />

            <Typography variant='h4' py={2}> Education 
              <EducationForm title='new education' variant="new" education={{title:'',university:'',time:''}}/>
            </Typography>
            <Education />

            <Typography variant='h4' py={2}>Skills
              <SkillsForm title="add skill"/>
            </Typography>

            <InfoBox model="skills" data={resume.skills} />

            <Typography variant='h4' py={2}>Languages
              <LanguagesForm title="add language"/>
            </Typography>
            <InfoBox model="languages" data={resume.languages} />

          </Grid>
          <Grid item lg={8}>
            <Typography variant='h4' py={2}>About Me</Typography>
            <Typography variant='body1' py={2}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
            </Typography>

            <Typography variant='h4' py={2}>Experiences
              <ExperiencesForm title='new experience' variant="new" experience={{companyName:'',jobLocation:'',role:'',timePeriod:'',jobDescription:''}}/>
            </Typography>
            <Experiences />

            <Typography variant='h4' py={2}>Projects
              <ProjectsForm title='new project' variant="new" project={{id: nanoid(), projectName:'',projectDescription:''}}/>
            </Typography>
            <Projects />
          </Grid>
        </Grid>
      </Paper>
    </Container>
  )
}

export default Resume