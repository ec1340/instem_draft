import React from 'react';
import Resource from './resource';

const Resources = (props) => {
    const ResourcesMarkup = () => {
        return props.resData.map((resource, index)=>{
            return (
                <Resource key={index} resource={resource}></Resource>
            )
        }).reverse()
    }

    return (
        <ResourcesMarkup></ResourcesMarkup>
    )
};

export default Resources;