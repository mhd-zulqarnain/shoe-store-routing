import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export const PRODUCTS = {
    "shoe1": {
        "name": "shoe1",
        "image": "https://styles.redditmedia.com/t5_h6drn/styles/communityIcon_qrrthyodef771.png"
    },
    "shoe1-2": {
        "name": "shoe2",
        "image": "https://styles.redditmedia.com/t5_47uiik/styles/profileIcon_snoob4b2e682-d547-49f5-8c1a-6745f47daeb4-headshot.png?width=256&height=256&crop=256:256,smart&s=a521ca812c4f11c073a8f794d7843f9b3adc74ab"
    }
}


export default function Products() {



    return (

        <div>
            <h2>Products</h2>
            <ul>
                {
                    Object.entries(PRODUCTS).map(([id, { name, image }]) => {
                        return (<li key={id}>
                            <Link to={id}>
                                <p>{name}</p>
                            </Link>
                        </li>)
                    })
                }
            </ul>
            <Outlet />

        </div>

    )

}