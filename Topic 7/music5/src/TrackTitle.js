import React from 'react';
import { Link } from 'react-router-dom';

//get track title to add to view
const TrackTitle = (props)=>{
    return (
        <li><Link to={'/show/'+props.albumId+'/'+props.id}>{props.title}</Link></li>
    );
};

export default TrackTitle;