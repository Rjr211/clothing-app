import React from 'react';
import "./homepage-styles.scss";
import Directory from "../../componenets/directory/directory-component";



/**Functional component, no lifecycle methods or state */
const HomePage = () => (
    <div className="homepage">
       <Directory/>
    </div>
)

export default HomePage;
