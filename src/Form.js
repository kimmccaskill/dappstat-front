import React from 'react';
import './Form.css';
import { Link } from 'react-router-dom';


class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      address: '',
      selected_cat: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  submitForm = () => {
    this.props.submitInfo(this.state)
  }

  render() {
    return (
      <form className='form'>
        <h2>Let the fun begin.</h2>
        <label className='address-section'>
          <h3>Contract Address:</h3>
          <input type="text" placeholder='Contract Address...'name='address' value={this.state.address} onChange={this.handleChange} />
        </label>
        <label className='category-section'>
          <h3>Category:</h3>
          <select name='selected_cat' className='category-select' value={this.state.selected_cat} onChange={this.handleChange}>
            <option selected value="">Select Category...</option>
            <option value="Gaming">Gaming</option>
            <option value="Exchanges">Exchanges</option>
            <option value="Marketplaces">Marketplaces</option>
            <option value="Gambling">Gambling</option>
          </select>
        </label>
        <Link className='submit-link' to={'/dashboard'}>
          <button type='button' onClick={this.submitForm} className='submit-btn'>Submit</button>
        </Link>
      </form>
    );
  }
}


export default Form