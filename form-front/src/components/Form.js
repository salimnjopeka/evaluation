import axios from 'axios';
import React, { useState } from 'react'




const Form = () => {
  const [Values, setValues] = useState({
    name_1: "",
  email: "",
  school:"",
  age:"",
  contact:"",
  sexe: "",
  level: true,
  first: "",
        two: "",
        three: "",
        four: "",
        five: "",
        six: "",
        seven:"",
        eight:"",
        nine:"",
        ten:"",
  })
  const changeHandler = (e) =>{
    const {name ,value} = e.target;
    setValues({
      ...Values,
      [name]: value
    });
  }
 
  const handleClick = (e) => {
    // alert(Values)
    // console.log(Values);
    e.preventDefault();
    axios.post("/api/forms")
  }
  return (
    <>
{/* form  */}
<div>
      <h2 className='text-center text-2xl font-bold pt-5 font-signature'>Trainees Satistifaction Evaluation Form </h2>
      <p className='text-center p-8 tracking-wider'>Your feedback is very critical for Ida Technology to ensure we are meeting your needs, 
        and our informal education programs' purpose. This Satisfaction Survey is designed to gather 
        feedback on a period and content you earned at iDA. It does not predict your behavior in every instance, 
        but it is a clear indication of your overall satisfaction towards your better preferences. For each item, 
        circle the response that represents your right answer. Complete all items of this survey. 
        When you read the statements, try to think about what was your intention before you join this program and 
        reflect on packedge you have for now. It generally takes about 20 minutes to complete the survey. 
        Do not spend too much time on any item – indicate your immediate feeling and move on to the next item.</p>

        <div>
          <p className='text-center text-blue-700 text-lg font-bold pb-5 border-spacing-2 para'>Please return this form to the iDA TECH Informal Education Department program.</p>
        </div>
        <div>
          <p className='text-md font-bold text-center pb-8 border-spacing-2 para'>Program title: Junior Programmers _October 1st, 2021.</p>
        </div>
        <form className="w-full m-auto max-w-lg" >
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
         Name
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" value={Values.name_1} onChange={changeHandler} id="grid-first-name" type="text" name='name_1' placeholder=" your name"/>
      
    </div>
    <div className="w-full md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
        Email
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" value={Values.email} onChange={changeHandler} id="grid-last-name" type="email" name='email' placeholder=" your email"/>
    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
        School
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" value={Values.school} onChange={changeHandler} id="grid-first-name" type="text" name='school' placeholder="School"/>
      
    </div>
    <div className="w-full md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
        Age
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" value={Values.age} onChange={changeHandler} id="grid-last-name" type="number" name='age' placeholder="Your age"/>
    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-2">
  <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
        Contact
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" value={Values.contact} onChange={changeHandler} id="grid-city" type="number" name='contact' placeholder="your contact"/>
    </div>
    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
        Sexe
      </label>
      <div className="relative">
        <select name='sexe' value={Values.sexe} onChange={changeHandler} className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
          <option>Male</option>
          <option>Female</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
    </div>
    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
        Level
      </label>
      <div className="relative">
        <select name='level' value={Values.level} onChange={changeHandler} className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
          <option>Beginner</option>
          <option>Intermedier</option>
          <option>Advanced</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
    </div>
  </div>   
{/* Question of this form */}

<div className='w-full m-auto max-w-2xl pt-10 grid grid-cols'>
        <div className='flex flex-wrap mx-3 mb-6'>
        <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
            <div>1. The content was as described in shared materials</div>
            <div className="relative">
              <select name='first' value={Values.first} onChange={changeHandler} className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none ml-3 focus:bg-white focus:border-gray-500" id="grid-state">
                 <option>Strongly Agree</option>
                 <option>Agree</option>
                 <option>Strongly Disagree</option>
                 <option>Disagree</option>
              </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
           </div>
        </div>

        <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
            <div>2.	The training was applicable to my field of Education</div>
            <div className="relative">
              <select name='two' value={Values.two} onChange={changeHandler} className="block appearance-none w-full ml-3 bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                 <option>Strongly Agree</option>
                 <option>Agree</option>
                 <option>Strongly Disagree</option>
                 <option>Disagree</option>
              </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
           </div>
          </div>
        </div>

       <div className='flex flex-wrap mx-3 mb-6'>
       <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
            <div>3.	I will recommend this learning method to other students</div>
            <div className="relative">
              <select name='three' value={Values.three} onChange={changeHandler} className="block appearance-none w-full ml-3 bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                 <option>Strongly Agree</option>
                 <option>Agree</option>
                 <option>Strongly Disagree</option>
                 <option>Disagree</option>
              </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
           </div>
        </div><div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
            <div>4.	The program was well paced within the allotted time</div>
            <div className="relative">
              <select name='four' value={Values.four} onChange={changeHandler} className="block appearance-none w-full ml-3 bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                 <option>Strongly Agree</option>
                 <option>Agree</option>
                 <option>Strongly Disagree</option>
                 <option>Disagree</option>
              </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
           </div>
        </div>
       </div>

        <div className='flex flex-wrap mx-3 mb-6'>
        <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
            <div>5.	The instructor was a good communicator</div>
            <div className="relative">
              <select name='five' value={Values.five} onChange={changeHandler} className="block appearance-none w-full ml-3 bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                 <option>Strongly Agree</option>
                 <option>Agree</option>
                 <option>Strongly Disagree</option>
                 <option>Disagree</option>
              </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
           </div>
        </div>
        <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
            <div>6.	The material was presented in an organized manner</div>
            <div className="relative">
              <select name='six' value={Values.six} onChange={changeHandler} className="block appearance-none w-full ml-3 bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                 <option>Strongly Agree</option>
                 <option>Agree</option>
                 <option>Strongly Disagree</option>
                 <option>Disagree</option>
              </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
           </div>
        </div>
        </div>
        
        <div className='flex flex-wrap mx-3 px-5 mb-6'>
        <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
            <div>7.	The instructor was knowledgeable on the topic</div>
            <div className="relative">
              <select name='seven' value={Values.seven} onChange={changeHandler} className="block appearance-none w-full ml-3 bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                 <option>Strongly Agree</option>
                 <option>Agree</option>
                 <option>Strongly Disagree</option>
                 <option>Disagree</option>
              </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
           </div>
        </div>
        <div className='w-full md:w-1/2 px-3  mb-6 md:mb-0'>
            <div>8. I would be interested in attending a follow-up, more Advanced programs on this same subject</div>
            <div className="relative">
              <select name='eight' value={Values.eight} onChange={changeHandler} className="block appearance-none w-full ml-3 bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                 <option>Strongly Agree</option>
                 <option>Agree</option>
                 <option>Strongly Disagree</option>
                 <option>Disagree</option>
              </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
           </div>
        </div>
        </div>
        <div className='flex flex-wrap mx-3 px-5 mb-6'>
        <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
            <div>9.Given the topic, was this program: </div>
            <div className="relative">
            <form className='flex flex-col p-2 m-2'>
         <label>
        Too short
        <input
          type="checkbox"
          name="short"
         
          className="m-2"
        />
      </label>
      <label>
        Right length
        <input
          type="checkbox"
          name="right"
           
          className="m-2"
        />
      </label>
      <label>
        Too long
        <input
          type="checkbox"
          name="long"
           
          className="m-2"
        />
      </label>
    </form>
           </div>
        </div>
        <div className='w-full md:w-1/2 px-3  mb-6 md:mb-0'>
            <div>10.In your opinion, was this program:</div>
            <div className="relative">
            <form className='flex flex-col p-2 m-2'>
         <label>
        Too short
        <input
          type="checkbox"
          name="short_1"
          
          className="m-2"
        />
      </label>
      <label>
        Right length
        <input
          type="checkbox"
          name="right_1"
          
          className="m-2"
        />
      </label>
      <label>
        Too long
        <input
          type="checkbox"
          name="long_1"
          
          className="m-2"
        />
      </label>
    </form>
           </div>
        </div>
        </div>
        
    </div>
</form>
    </div>
{/* button */}
       <div className='m-auto'>
        <button className='p-2  w-[30%]  mx-52 my-5' onClick={handleClick} >Submit</button>
      </div>
    </>
  )
}

export default Form


