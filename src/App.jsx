import { useState,useRef } from 'react'
import './App.css'
import HeaderBox from './components/HeaderBox'
import PersonalDataForm from './components/PersonalDataForm'
import ExperienceForm from './components/ExperienceForm'
import EducationForm from './components/EducationForm'
import ContactForm from './components/ContactForm'
import SkillsSection from './components/SkillsSection'
import { v4 as uuidv4 } from 'uuid'
import CV from './components/SampleCV'
import ResumePreview from './components/ResumePreview'
import { useReactToPrint } from 'react-to-print'
import Gradient from './components/Gradient'

console.log

function App() {
  const [data,setData] = useState({color1: "white",
                                   color2: "white",
                                   fileName: "",
                                   fileSrc: "",
                                   info:[
                                      {
                                        name: "First Name",
                                        text: ""
                                      },
                                      {
                                        name: "Last Name",
                                        text: ""
                                      },
                                      {
                                        name: "Role you wish to apply to",
                                        text: ""
                                      },
                                      {
                                        name: "Your acheivements in brief",
                                        text: ""
                                      },
                                      {
                                        name: "School",
                                        text: ""
                                      },
                                      {
                                        name: "Degree",
                                        text: ""
                                      },
                                      {
                                        name: "Address",
                                        text: ""
                                      },
                                      {
                                        name: "E-Mail",
                                        text: ""
                                      },
                                      {
                                        name: "Phone number",
                                        text: ""
                                      },
                                      {
                                        name: "Link to portfolio",
                                        text: ""
                                      }
                                    ],
                                   experiences:[
                                      {
                                        id: uuidv4(),
                                        position: "",
                                        company: "",
                                        startDate: "",
                                        endDate: "",
                                        description: ""
                                      }
                                    ], 
                                   skills:[
                                      {
                                        id: uuidv4(),
                                        text: ""
                                      }
                                    ]
                                  })
  
  const pictureUpload = (e) =>{
    setData({...data,
            fileName:e.target.files[0].name,
            fileSrc: URL.createObjectURL(e.target.files[0])
          })
    e.target.value = ""
  }

  const handleData = (e) =>{
    setData({...data,
              info:data.info.map(element =>{
                  if(element.name === e.target.placeholder)
                    element.text = e.target.value
                    return element
                })
    })
  }

  const addSkill = () =>{
    setData({...data,skills : [...data.skills ,{id: uuidv4(),text: ""}]})
  }

  const removeSkill = (id) =>{
    setData({...data,skills : data.skills.filter(skill => skill.id !== id)})
  }

  const handleSkill = (e) =>{
    setData({...data,
              skills: data.skills.map(skill =>{
                if(skill.id === e.target.id)
                  skill.text = e.target.value
                return skill
              })
    })
  }

  const addExperience = () =>{
    setData({...data,experiences: [...data.experiences , {
                                        id: uuidv4(),
                                        position: "",
                                        company: "",
                                        startDate: "",
                                        endDate: "",
                                        description: ""}]})
  }

  const removeExperience = (id) =>{
    setData({...data,experiences: data.experiences.filter(experience => experience.id !== id)})
  }

  const handleExperience = (e,id) =>{
    setData({...data,
              experiences: data.experiences.map(experience =>{
                if(experience.id === id)
                  experience[e.target.name] = e.target.value
                return experience
              })})
  }

  const loadSampleCV = (e) =>{
    setData(CV)
    e = ""
  }

  const getColor1 = (e) =>{
    setData({...data,color1:e.target.value})
  }

  const getColor2 = (e) =>{
    setData({...data,color2:e.target.value})
  }

  const componentRef = useRef()
  const handlePrint = useReactToPrint({ content: () => componentRef.current,
                                        documentTitle: `${data.info[0].text}'s Resume`})

  return (
    <div className='App'>
      <div className='fields'>
        <HeaderBox
            loadSampleCV={loadSampleCV}
            handlePrint={handlePrint}/>
        <Gradient
            data={data}
            getColor1={getColor1}
            getColor2={getColor2}/>
        <PersonalDataForm
            data={data}
            pictureUpload={pictureUpload}
            handleData={handleData}/>
        <ExperienceForm 
            data={data}
            addExperience={addExperience}
            removeExperience={removeExperience}
            handleExperience={handleExperience}/>
        <EducationForm
            data={data}
            handleData={handleData}/>
        <SkillsSection
            data={data}
            addSkill={addSkill}
            removeSkill={removeSkill}
            handleSkill={handleSkill}/>
        <ContactForm
            data={data}
            handleData={handleData}/>
      </div>
      <div className='resume' id="resume">
        <ResumePreview
            data={data}
            reference={componentRef}/>
      </div>
    </div>
  )
}

export default App
