import React from "react";
import "../assets/scss/main.scss";

import Helmet from 'react-helmet';
import Header from "./Header";
import Footer from "./Footer";
import Midsection from "./midsection";

class Template extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        loading: 'is-loading'
      }
    }

    componentDidMount () {
      this.timeoutId = setTimeout(() => {
          this.setState({loading: ''});
      }, 100);
    }

    componentWillUnmount () {
      if (this.timeoutId) {
          clearTimeout(this.timeoutId);
      }
    }

    render() {
        const { children } = this.props;
        const siteTitle = "Gatsby Starter - Photon";

        return (
            <div className={`body ${this.state.loading}`}>
                <Helmet title={siteTitle} />
                <Header />
                <Midsection />
                {children}
                <Footer />
            </div>
        );
    }
}

export default Template;
