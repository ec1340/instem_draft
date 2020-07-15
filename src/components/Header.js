import React from 'react'

class Header extends React.Component {
    render() {
        return (
            <section id="header">
                <div className="inner">
                    <span className="icon major fa-cloud"></span>
                    <h1>Hi, I'm <strong>Photon</strong>, another fine<br />
                    little freebie from <a href="http://html5up.net">HTML5 UP</a>.</h1>
                    <p>Accumsan feugiat mi commodo erat lorem ipsum, sed magna<br />
                    lobortis feugiat sapien sed etiam volutpat accumsan.</p>
                    <ul className="actions">
                        <li><a href="/search" className="button scrolly">Start</a></li>
                        <li><a href="#one" className="button scrolly">Discover</a></li>
                        <li><a href="/about" className="button scrolly">About</a></li>
                    </ul>
                </div>
            </section>
        )
    }
}

export default Header
