import React, { useState } from "react";
import { graphql, useStaticQuery } from 'gatsby';

import Resources from "../components/resources"

const Search = ( filter ) => {
    const data = useStaticQuery(
        graphql`
            query GetResources {
                allResources {
                    nodes {
                        name
                        entrydate
                        description
                        link
                        _ts
                        _id
                    }
                }
            }`
    );
    
    const [resData, setResData] = useState(data.allResources.nodes);

    return (
        <div>
            <Resources resData={resData}></Resources>
        </div>
    );
}

export default Search;