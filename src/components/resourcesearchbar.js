import React from 'react'
import {Redirect} from 'react-router-dom'

export default class ResourceSearchBar extends React.Component {
  state = {
    search: '',
  };

  updateSearch = event => {
    const searchval = event.target.value;
    this.setState({ search:searchval });
    console.log(searchval);
  };

  handleSubmit = event => {
    const searchval = event.target.value;
    this.setState({ search:searchval });
    console.log(searchval);
    //if(searchval.length() > 0)
    return <Redirect push to="../pages/search/" />
  }

  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="Type Here..."
          //onChange={this.updateSearch}
          //value={this.state.search}
          />
        <button onClick={this.handleSubmit} value={this.state.search}> Search </button>
      </form>
    );
  }
}
