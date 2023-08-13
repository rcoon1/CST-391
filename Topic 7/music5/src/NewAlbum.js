import React, { useState } from "react";
import datasource from "./datasource";
import { useNavigate } from 'react-router-dom';

const NewAlbum = (props) => {
    const [title, setTitle] = useState('');
    const [artist, setArtist] = useState('');
    const [description, setDescription] = useState('');
    const [year, setYear] = useState('');
    const [image, setImage] = useState('');
    const navigate = useNavigate();

    const handleFormSubmit = (event) => {
        event.preventDefault();

        console.log("submit");
        const album = {
            title: title,
            artist: artist,
            description: description,
            year: year,
            image: image,
            tracks: [],
        };
        console.log(album)

        saveAlbum(album);
    };
    const saveAlbum = async (album) => {
        const response = await datasource.post('/albums', album);
        console.log(response);
        console.log(response.data);
        props.onNewAlbum(navigate);
    };

    const handleCancel = () => {
        navigate("/");
    }
    const updateTitle = (event) => {
        setTitle(event.target.value);
    };
    const updateArtist = (event) => {
        setArtist(event.target.value);
    };
    const updateDescription = (event) => {
        setDescription(event.target.value);
    };
    const updateYear = (event) => {
        setYear(event.target.value);
    };
    const updateImage = (event) => {
        setImage(event.target.value);
    };

    return (
        <div className='container'>
            <form onSubmit={handleFormSubmit}>
                <h1>Create Album</h1>
                <div align='center' className='form-group' >
                    <label htmlFor='albumTitle'>Album Title: </label>
                    <input type='text' className='form-control' id='title' placeholder='Enter Album Title' value={title} onChange={updateTitle} />
                    <br />
                    <label htmlFor="albumArtist">Artist: </label>
                    <input type='text' className='form-control' id='albumArtist' placeholder='Enter Album Artist' value={artist} onChange={updateArtist} />
                    <br />
                    <label htmlFor='albumDescription'>Description: </label>
                    <input type='text' className='form-control' id='albumDescription' placeholder='Enter Album Description' value={description} onChange={updateDescription} />
                    <br />
                    <label htmlFor='albumYear'>Year: </label> 
                    <input type='text' className='form-control' id='albumYear' placeholder='Enter Album Year' value={year} onChange={updateYear} />
                    <br />
                    <label htmlFor='albumImage'>Image: </label>
                    <input type='text' className='form-control' id='albumImage' placeholder='Enter Album Image' value={image} onChange={updateImage} />
                    <br />
                </div>
                <div align='center'>
                    <button type='button' className='btn btn-light' onClick={handleCancel}>Cancel</button>
                    <button type='submit' className='btn btn-primary'>Submit</button>
                </div>
            </form>
        </div>
    );
};

export default NewAlbum;