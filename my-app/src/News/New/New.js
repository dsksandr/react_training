import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './newStyle.css';

class New extends Component{
  render() {
    const {author, text} = this.props.data
    return (
      <div className='new'>
        <p className='news__author'>{author}</p>
        <p className='news__text'>{text}</p>
      </div>
    )
  }
}

New.propTypes = {
  data: PropTypes.shape({
    author: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  })
};

export default New;