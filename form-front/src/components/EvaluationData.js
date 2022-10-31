import React, { useState, useEffect } from 'react';
import Api from '../Api';
import {useParams} from "react-router";
// import { toast } from "react-toastify";
import toast, { Toaster } from 'react-hot-toast';

function EvaluationData() {
  const {formId} = useParams();
  const [forms, setForms] = useState([]);
  // const ShowToast = () => toast('Congratulation !!!', { hideProgressBar: true, autoClose: 2000, type: 'success' })
  const notify = () => toast.success('Data has been sent Succesfully...');
  useEffect(() => {
    // Api.get("/")
    // .then((res) => {
    //   setForms(res.data);
    // })
    // .catch(console.error);
    refreshForms(formId)
    
  }, [formId]);

  const print = () => {
    let printContents = document.getElementById('print').innerHTML;
    let originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
    window.location.href = "/"
  }

  const refreshForms = (formId) => {

    Api.get(`/${formId}/`)
    .then((res) => {
      setForms(res.data);
      
    })
    .catch(console.error);
    notify()
    // ShowToast();
    
  }

    return (
      <div className="App  ml-28">
        <div id="print">
        <p className='text-center text-2xl text-[blue] p-8 tracking-wider font-signature'> Please return this form to the IDA Tech Informal Education Department program </p>
        <div className='w-full m-auto  pt-10 grid grid-cols-3  gap-5'>
           <div className='flex flex-wrap mx-3 mb-6'>
              <div className='w-full flex md:w-3/1 px-3 mb-6 md:mb-0 '>
                 <div className='text-center text-2xl   '>Names:</div><div className='ml-4 text-xl '>{forms.Names} </div>
              </div>
              <div className='w-full flex md:w-3/1 px-3 mb-6 md:mb-0'>
                 <div className='text-center text-2xl   '>School:</div><div className='ml-4 text-xl '>{forms.School}</div>
              </div>
              <div className='w-full flex md:w-3/1 px-3 mb-6 md:mb-0'>
                 <div className='text-center text-2xl   '>Contact:</div><div className='ml-4 text-xl '>{forms.Contact}  </div>
              </div>
            </div>
            <div className='flex flex-wrap mx-3 mb-6'>
              <div className='w-full flex md:w-3/1 px-3 mb-6 md:mb-0'>
              <div className='text-center text-2xl   '>Age :</div><div className='ml-4 text-xl '>  {forms.Age}  </div>
              </div>
              <div className='w-full flex md:w-3/1 px-3 mb-6 md:mb-0'>
              <div className='text-center text-2xl   '>Level : </div><div className='ml-4 text-xl '> {forms.Level} </div>
              </div>
              <div className='w-full flex md:w-3/1 px-3 mb-6 md:mb-0'>
              <div className='text-center text-2xl   '>Email : </div><div className='ml-4 text-xl '> {forms.Email}</div>
              </div>
            </div>
            <div className='flex flex-wrap mx-3 mb-6'>
              <div className='w-full flex md:w-3/1 px-3 mb-6 md:mb-0'>
              <div className='text-center text-2xl   '>Gender:</div><div className='ml-4 text-xl '>{forms.Sex} </div>
              </div>
              <div className='w-full md:w-3/1 px-3 mb-6 md:mb-0'>
              <div className='text-center text-2xl   '> </div>
              </div>
              <div className='w-full md:w-3/1 px-3 mb-6 md:mb-0'>
              <div className='text-center text-2xl   '> </div>
              </div>
            </div>
        </div>

        <h3 className='text-center text-4xl  font-bold pt-5 font-signature'>Evaluation section </h3>
        <p className='text-center p-8 tracking-wider '><strong>Strongly Agree:1 | Agree:2 | Disagree:3 | Strongly Disagree:4</strong></p>
        <div className='max-w-lg flex flex-col p-3'>
           <div>
               1. The content was as described in shared materials : {forms.The_content_was_as_described_in_shared_materials}
           </div>
           <div>
               2. The training was applicable to my field of Education : {forms.The_training_was_applicable_to_my_field_of_Education}
           </div><div>
               3. I will recommend this learning method to other students : {forms.I_will_recommend_this_learning_method_to_other_students}
           </div><div>
               4. The program was well paced within the allotted time : {forms.The_program_was_well_paced_within_the_allotted_time}
           </div><div>
               5. The instructor was a good communicator : {forms.The_instructor_was_a_good_communicator}
           </div><div>
               6. The material was presented in an organized manner : {forms.The_material_was_presented_in_an_organized_manner}
           </div><div>
               7. The instructor was knowledgeable on the topic : {forms.The_instructor_was_knowledgeable_on_the_topic}
           </div><div>
               8. I would be interested in attending a follow up more Advanced programs on this same subject : {forms.I_would_be_interested_in_attending_a_follow_up_more_Advanced_programs_on_this_same_subject}
           </div><div>
               9. Given the topic was this program : {forms.Given_the_topic_was_this_program}
           </div><div>
           10. In your opinion was this program : {forms.In_your_opinion_was_this_program}
           </div>
           <Toaster />
        </div>
        </div>
        <button className='p-2 m-auto  w-[10%]  ' onClick={print} >Print</button>
      </div>
    );
  }



  export default EvaluationData