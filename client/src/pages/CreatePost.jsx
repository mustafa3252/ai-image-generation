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

  const handleSubmit = (e) => {}
  
  return (
    <section className="max-w-7xl mx-auto">

    <div>
    <h1 className="font-extrabold text-[#222328] text-32">
          Create
        </h1>

        <p className="mt-2 text-[#66  6e75] text-[16px] max-w[500px]">Create imaginative and visually stunning images through DALL-E AI and share them with the community</p>
    </div>

    <form className="mt-16 max-w-3xl" onSubmit={handleSubmit}>
    
    </form>

    </section>
  )
}

export default CreatePost