import React, { useState } from 'react'

const Question = () => {
    const [Question, setQuestion] = useState({
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
        short: false,
        long: false,
        right:false,
        short_1: false,
        long_1: false,
        right_1:false,
    })
const handleChange = (e) => {
    const {name, value} = e.target === 'checkbox' ? e.target.checked : e.target.value
    setQuestion({
        ...Question,
        [name]:value
    })
}
const handleClick = () => {
    alert(Question)
    console.log(Question);
  }


  return (
    <div className='w-full m-auto max-w-2xl pt-10 grid grid-cols'>
        <div className='flex flex-wrap mx-3 mb-6'>
        <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
            <div>1. The content was as described in shared materials</div>
            <div className="relative">
              <select name='first' value={Question.first} onChange={handleChange} className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none ml-3 focus:bg-white focus:border-gray-500" id="grid-state">
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
              <select name='two' value={Question.two} onChange={handleChange} className="block appearance-none w-full ml-3 bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
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
              <select name='three' value={Question.three} onChange={handleChange} className="block appearance-none w-full ml-3 bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
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
              <select name='four' value={Question.four} onChange={handleChange} className="block appearance-none w-full ml-3 bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
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
              <select name='five' value={Question.five} onChange={handleChange} className="block appearance-none w-full ml-3 bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
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
              <select name='six' value={Question.six} onChange={handleChange} className="block appearance-none w-full ml-3 bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
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
              <select name='seven' value={Question.seven} onChange={handleChange} className="block appearance-none w-full ml-3 bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
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
              <select name='eight' value={Question.eight} onChange={handleChange} className="block appearance-none w-full ml-3 bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
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
          checked={Question.short}
          onChange={handleChange}
          className="m-2"
        />
      </label>
      <label>
        Right length
        <input
          type="checkbox"
          name="right"
           checked={Question.right}
          onChange={handleChange}
          className="m-2"
        />
      </label>
      <label>
        Too long
        <input
          type="checkbox"
          name="long"
           checked={Question.long}
          onChange={handleChange}
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
          checked={Question.short_1}
          onChange={handleChange}
          className="m-2"
        />
      </label>
      <label>
        Right length
        <input
          type="checkbox"
          name="right_1"
          checked={Question.right_1}
          onChange={handleChange}
          className="m-2"
        />
      </label>
      <label>
        Too long
        <input
          type="checkbox"
          name="long_1"
          checked={Question.long_1}
          onChange={handleChange}
          className="m-2"
        />
      </label>
    </form>
           </div>
        </div>
        </div>
        
    </div>
  )
}

export default Question