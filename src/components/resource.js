import React from 'react';
import { Link } from 'gatsby';

const Resource = ({resource}) =>{
    const dateObj = new Date(resource._ts /1000);
    let dateString = `${dateObj.toLocaleString('default', {weekday: 'long'})}, ${dateObj.toLocaleString('default', { month: 'long' })} ${dateObj.getDate()} at ${dateObj.toLocaleTimeString('default', {hour: '2-digit',minute: '2-digit', hour12: false})}`

    console.log(resource)
    return (
        <article className="resource_box">
            <h3 className="resource_headline"> {resource.name} - {dateString}</h3>
            <p className="resource_description">
                {resource.description}
            </p>
            <Link to={resource.link}>Link</Link>
        </article>
    )
};

export default Resource;