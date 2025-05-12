import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router'

import FavoriteForm from '../../components/FavoriteForm/FavoriteForm'
import { authorizedRequest } from '../../lib/api'
import NavBar from '../../components/NavBar/NavBar'

function AddFavorits({toast}) {
    
    const [favorite, setFavorite] = useState([])
    const [name, setName] = useState('')
    const [location, setLocation] = useState('')
    const [image, setImage] = useState(null)
    
    const navigate = useNavigate()

    async function handleSubmit(event) {
        event.preventDefault()
        let cloudinaryImgUrl = ''
        const formData = new FormData()
        formData.append('file', image)
        formData.append('upload_preset', import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET)
        try {
            const cloudinaryResponse = await axios.post(
                `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDINARY_NAME}/image/upload`,
                formData
            )
            cloudinaryImgUrl = cloudinaryResponse.data.secure_url
            console.log('Image uploaded successfully:', cloudinaryImgUrl);
        } catch (err) {
            console.log(err)
            console.log(err.response.data);
        }
        console.log('Handle Submit is running')
        const payload = { name, location, img: cloudinaryImgUrl }
        const response = await authorizedRequest('post', `/favorite-place/`, payload)
        console.log(response)
        setName('')
        setLocation('')
        setFavorite(prevFavorites => [...prevFavorites, response.data]);
        toast.success('Add  successfully')
        navigate('/favorites')

    }
    return (
        <div>
            <NavBar/>
             <FavoriteForm
                name={name}
                setName={setName}
                location={location}
                setLocation={setLocation}
                image = {image}
                setImage = {setImage}
                handleSubmit={handleSubmit}
                titleVerb='Add'/>
        </div>
    )
}

export default AddFavorits
