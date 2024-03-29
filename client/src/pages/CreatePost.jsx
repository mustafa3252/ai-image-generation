import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'

import {preview} from '../assets';
import {getRandomPrompt} from '../utils';
import {FormFeild, Loader} from '../components'; 

const CreatePost = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    prompt: "",
  });
  const [generatingImg, setGeneratingImg] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {}

  const handleChange = (e) => {}

  const handleSurpriseMe = () => {}
  
  return (
    <section className="max-w-7xl mx-auto">

    <div>
    <h1 className="font-extrabold text-[#222328] text-32">
          Create
        </h1>

        <p className="mt-2 text-[#66  6e75] text-[16px] max-w[500px]">Create imaginative and visually stunning images through DALL-E AI and share them with the community</p>
    </div>

    <form className="mt-16 max-w-3xl" onSubmit={handleSubmit}>
      <div className="flex flex-col gap-5">

    <FormFeild labelName="Your name" type="text" name="name" placeholder="John Doe" value={form.name} handleChange={handleChange}/>

    <FormFeild labelName="Promt" type="text" name="prompt" placeholder="An astronaut lounging in a tropical resort in space, vaporwave" value={form.prompt} handleChange={handleChange} isSurpriseMe handleSurprise={handleSurpriseMe}/>

    <div className="relative bg-gray-50 border border-grey-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-64 p-3 h-64 flex justify-center items-center">

      {form.photo ? (<img scr={form.photo} alt={form.prompt} className="w-full h-full object-contain"/>):(<img src={preview} alt="preview" className="w-9/12 h-9/12 object-contain opacity-40"/>)}
        </div>
        </div>
      </form>
    </section>
  )
}

export default CreatePost