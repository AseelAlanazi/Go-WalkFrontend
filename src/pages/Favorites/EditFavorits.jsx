import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router'
import axios from 'axios'

import FavoriteForm from '../../components/FavoriteForm/FavoriteForm'
import { authorizedRequest } from '../../lib/api'
import NavBar from '../../components/NavBar/NavBar'

function EditFavorits({toast}) {
    const { id } = useParams()
    const navigate = useNavigate()

    const [name, setName] = useState('')
    const [location, setLocation] = useState('')
    const [image, setImage] = useState(null)


    async function getEditPlace() {
        const response = await authorizedRequest('get', `/favorite-place/${id}`)
        setName(response.data.name)
        setLocation(response.data.location)
        setImage(response.data.img)
    }
    useEffect(() => {
        getEditPlace()
    }, [])
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
        const response = await authorizedRequest('patch', `/favorite-place/${id}/`, payload)
        console.log(response)
        setName('')
        setLocation('')
        toast.success('Edit successfully')
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
                image={image}
                setImage={setImage}
                handleSubmit={handleSubmit}
                titleVerb='Edit'
            />
        </div>
    )
}

export default EditFavorits
