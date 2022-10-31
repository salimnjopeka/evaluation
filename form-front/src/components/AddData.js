import { useState, useEffect } from "react";
import Api from '../Api';
import { useNavigate } from "react-router-dom";
import { ToastContainer,toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
//import axios from 'axios';

const AddData = ({ onAdd }) => {
  const [Names, setNames] = useState("");
  const [Sex, setSex] = useState("");
  const [Age, setAge] = useState(null);
  const [School, setSchool] = useState("");
  const [Level, setLevel] = useState("");
  const [Contact, setContact] = useState(null);
  const [Email, setEmail] = useState("");
  const [The_content_was_as_described_in_shared_materials, setThe_content_was_as_described_in_shared_materials] = useState(null);
  const [The_training_was_applicable_to_my_field_of_Education, setThe_training_was_applicable_to_my_field_of_Education] = useState(null);
  const [I_will_recommend_this_learning_method_to_other_students, setI_will_recommend_this_learning_method_to_other_students] = useState(null);
  const [The_program_was_well_paced_within_the_allotted_time, setThe_program_was_well_paced_within_the_allotted_time] = useState(null);
  const [The_instructor_was_a_good_communicator, setThe_instructor_was_a_good_communicator] = useState(null);
  const [The_material_was_presented_in_an_organized_manner, setThe_material_was_presented_in_an_organized_manner] = useState(null);
  const [The_instructor_was_knowledgeable_on_the_topic, setThe_instructor_was_knowledgeable_on_the_topic] = useState(null);
  const [I_would_be_interested_in_attending_a_follow_up_more_Advanced_programs_on_this_same_subject, setI_would_be_interested_in_attending_a_follow_up_more_Advanced_programs_on_this_same_subject] = useState(null);
  const [Given_the_topic_was_this_program, setGiven_the_topic_was_this_program] = useState(null);
  const [In_your_opinion_was_this_program, setIn_your_opinion_was_this_program] = useState(null);
  const [forms, setForms] = useState([]);
  const navigate = useNavigate();
  

   useEffect(() => {
     refreshForm();
   }, []);

   const refreshForm = () => {
     Api.get("/")
       .then((res) => {
         setForms(res.data);
       })
       .catch(console.error);
   };

   const onSubmit = (e) => {
     e.preventDefault();
     let item = { Names, Email, School, Age, Contact, Sex, Level, 
        The_content_was_as_described_in_shared_materials, 
        The_training_was_applicable_to_my_field_of_Education, 
        I_will_recommend_this_learning_method_to_other_students, 
        The_program_was_well_paced_within_the_allotted_time, 
        The_instructor_was_a_good_communicator, 
        The_material_was_presented_in_an_organized_manner, 
        The_instructor_was_knowledgeable_on_the_topic, 
        I_would_be_interested_in_attending_a_follow_up_more_Advanced_programs_on_this_same_subject, 
        Given_the_topic_was_this_program, 
        In_your_opinion_was_this_program };

        Api.post("/", item).then((res) => {
            
            console.log("success");
            console.log(res.data.id);
            navigate("/"+res.data.id);
            
        })
        
            // Api.post("/", item).then(() => refreshForm())
            // // navigate('/EvaluationData')
            //  .then(res => {
            //      if(res === ""){
            //           return navigate('/')
            //       }
            //       else{
            //          navigate('/EvaluationData')
            //      }
            //  }
            //  )
            // .catch(err => console.log(err))
         
   };

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
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" value={Names} onChange={(e) => setNames(e.target.value)} id="grid-first-name" type="text" name='name_1' placeholder=" your name"/>
      
    </div>
    <div className="w-full md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
        Email
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" value={Email} onChange={(e) => setEmail(e.target.value)} id="grid-last-name" type="email" name='email' placeholder=" your email"/>
    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
        School
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" value={School} onChange={(e) => setSchool(e.target.value)} id="grid-first-name" type="text" name='school' placeholder="School"/>
      
    </div>
    <div className="w-full md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
        Age
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" value={Age} onChange={(e) => setAge(e.target.value)} id="grid-last-name" type="number" name='age' placeholder="Your age"/>
    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-2">
  <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
        Contact
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" value={Contact} onChange={(e) => setContact(e.target.value)} id="grid-city" type="number" name='contact' placeholder="your contact"/>
    </div>
    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
        Sexe
      </label>
      <div className="relative">
        <select name='sex' value={Sex} onChange={(e) => setSex(e.target.value)} className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
        <option>Choose</option>
          <option value="M">Male</option>
          <option value="F">Female</option>
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
        <select name='level' value={Level} onChange={(e) => setLevel(e.target.value)} className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
        <option>Choose</option>
          <option value="A">Beginner</option>
          <option value="B">Intermedier</option>
          <option value="C">Advanced</option>
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
              <select name='first' value={The_content_was_as_described_in_shared_materials} onChange={(e) => setThe_content_was_as_described_in_shared_materials(e.target.value)} className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none ml-3 focus:bg-white focus:border-gray-500" id="grid-state">
              <option>Choose</option>
                 <option value="1">Strongly Agree</option>
                 <option value="2">Agree</option>
                 <option value="3">Strongly Disagree</option>
                 <option value="4">Disagree</option>
              </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
           </div>
        </div>

        <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
            <div>2.	The training was applicable to my field of Education</div>
            <div className="relative">
              <select name='two' value={The_training_was_applicable_to_my_field_of_Education} onChange={(e) => setThe_training_was_applicable_to_my_field_of_Education(e.target.value)} className="block appearance-none w-full ml-3 bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
              <option>Choose</option>
                 <option value="1">Strongly Agree</option>
                 <option value="2">Agree</option>
                 <option value="3">Strongly Disagree</option>
                 <option value="4">Disagree</option>
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
              <select name='three' value={I_will_recommend_this_learning_method_to_other_students} onChange={(e) => setI_will_recommend_this_learning_method_to_other_students(e.target.value)} className="block appearance-none w-full ml-3 bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
              <option>Choose</option>
                 <option value="1">Strongly Agree</option>
                 <option value="2">Agree</option>
                 <option value="3">Strongly Disagree</option>
                 <option value="4">Disagree</option>
              </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
           </div>
        </div><div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
            <div>4.	The program was well paced within the allotted time</div>
            <div className="relative">
              <select name='four' value={The_program_was_well_paced_within_the_allotted_time} onChange={(e) => setThe_program_was_well_paced_within_the_allotted_time(e.target.value)} className="block appearance-none w-full ml-3 bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
              <option>Choose</option>
                 <option value="1">Strongly Agree</option>
                 <option value="2">Agree</option>
                 <option value="3">Strongly Disagree</option>
                 <option value="4">Disagree</option>
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
              <select name='five' value={The_instructor_was_a_good_communicator} onChange={(e) => setThe_instructor_was_a_good_communicator(e.target.value)} className="block appearance-none w-full ml-3 bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
              <option>Choose</option>
                 <option value="1">Strongly Agree</option>
                 <option value="2">Agree</option>
                 <option value="3">Strongly Disagree</option>
                 <option value="4">Disagree</option>
              </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
           </div>
        </div>
        <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
            <div>6.	The material was presented in an organized manner</div>
            <div className="relative">
              <select name='six' value={The_material_was_presented_in_an_organized_manner} onChange={(e) => setThe_material_was_presented_in_an_organized_manner(e.target.value)} className="block appearance-none w-full ml-3 bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
              <option>Choose</option>
                 <option value="1">Strongly Agree</option>
                 <option value="2">Agree</option>
                 <option value="3">Strongly Disagree</option>
                 <option value="4">Disagree</option>
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
              <select name='seven' value={The_instructor_was_knowledgeable_on_the_topic} onChange={(e) => setThe_instructor_was_knowledgeable_on_the_topic(e.target.value)} className="block appearance-none w-full ml-3 bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
              <option>Choose</option>
                 <option value="1">Strongly Agree</option>
                 <option value="2">Agree</option>
                 <option value="3">Strongly Disagree</option>
                 <option value="4">Disagree</option>
              </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
           </div>
        </div>
        <div className='w-full md:w-1/2 px-3  mb-6 md:mb-0'>
            <div>8. I would be interested in attending a follow-up, more Advanced programs on this same subject</div>
            <div className="relative">
              <select name='eight' value={I_would_be_interested_in_attending_a_follow_up_more_Advanced_programs_on_this_same_subject} onChange={(e) => setI_would_be_interested_in_attending_a_follow_up_more_Advanced_programs_on_this_same_subject(e.target.value)} className="block appearance-none w-full ml-3 bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
              <option>Choose</option>
                 <option value="1">Strongly Agree</option>
                 <option value="2">Agree</option>
                 <option value="3">Strongly Disagree</option>
                 <option value="4">Disagree</option>
              </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
           </div>
        </div>
        </div>


        {/* start Q9 */}

        <div className='w-full md:w-1/2 px-3  mb-6 md:mb-0'>
            <div>9.Given the topic, was this program:</div>
             <div className="relative">
              <select name='nine' value={Given_the_topic_was_this_program} onChange={(e) => setGiven_the_topic_was_this_program(e.target.value)} className="block appearance-none w-full ml-3 bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
              <option>Choose</option>
                 <option value="A">Too Short</option>
                 <option value="B">Right Length</option>
                 <option value="C">Too Long</option>
              </select>
             <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
           </div>
        </div>
        </div>

        <div className='w-full md:w-1/2 px-3  mb-6 md:mb-0'>
            <div>10.In your opinion, was this program:</div>
            <div className="relative">
              <select name='ten' value={In_your_opinion_was_this_program} onChange={(e) => setIn_your_opinion_was_this_program(e.target.value)} className="block appearance-none w-full ml-3 bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
              <option>Choose</option>
                 <option value="A">Too Short</option>
                 <option value="B">Right Length</option>
                 <option value="C">Too Long</option>
              </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
           </div>
        </div>
        
      

        {/* End Q9 */}

</form>
    <div className='item-center justify-center mx-[40%] my-5'>
        <button className='p-2 m-auto  w-[30%]  ' onClick={onSubmit} >Submit</button>
        <ToastContainer />
    </div>
{/* button */} 
      </div>
    </>
  )
}

export default AddData;