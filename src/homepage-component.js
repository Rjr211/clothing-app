import React from 'react';

/**Functional component, no lifecycle methods or state */
const HomePage = () => (
    <div className="homepage">
       <div className="directory-menu">
            <div className="menu-item">
                <div classname="content">
                    <h1 className="title">hats</h1>
                    <span className>shop now</span>
                </div>
             </div>
             <div className="menu-item">
                <div classname="content">
                    <h1 className="title">jackets</h1>
                    <span className>shop now</span>
                </div>
             </div>
             <div className="menu-item">
                <div classname="content">
                    <h1 className="title">sneakers</h1>
                    <span className>shop now</span>
                </div>
             </div>
             <div className="menu-item">
                <div classname="content">
                    <h1 className="title">womens</h1>
                    <span className>shop now</span>
                </div>
             </div>
             <div className="menu-item">
                <div classname="content">
                    <h1 className="title">mens</h1>
                    <span className>shop now</span>
                </div>
             </div>
       </div>
    </div>
)

export default HomePage;
