import React from "react";

import pic01 from '../assets/images/pic01.jpg'

const About = () => {
    return (
        <div>
            <section id="one" className="main style1">
                <div className="grid-wrapper">
                    <div className="col-6">
                        <header className="major">
                            <h2>About STEMbase</h2>
                        </header>
                        <p>Adipiscing a commodo ante nunc accumsan et interdum mi ante adipiscing. A nunc lobortis non nisl amet vis sed volutpat aclacus nascetur ac non. Lorem curae et ante amet sapien sed tempus adipiscing id accumsan.</p>
                    </div>
                    <div className="col-6">
                        <span className="image fit"><img src={pic01} alt="" /></span>
                    </div>
                </div>
            </section>

        </div>
    );
}

export default About;