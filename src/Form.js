import React from 'react';
import './Form.css';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      address: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({address: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.address);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className='form'>
        <label className='address-section'>
          Address:
          <input type="text" value={this.state.address} onChange={this.handleChange} />
        </label>
        <label className='category-section'>
          Category:
          <select className='category-select' value={this.state.value} onChange={this.handleChange}>
            <option value="Gaming">Gaming</option>
            <option value="Exchanges">Exchanges</option>
            <option value="Marketplaces">Marketplaces</option>
          </select>
        </label>
        <button className='submit-btn'>Submit</button>
      </form>
    );
  }
}


export default Form