import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './newStyle.css';

class New extends Component{
  state = {
    visible: false,
  };
  handleReadMoreClick = event => {
    event.preventDefault();
    this.setState({visible: true})
  };
  render() {
    const {author, text, bigText} = this.props.data;
    const {visible} = this.state;
    console.log('render', this);
    return (
      <div className='new'>
        <p className='news__author'>{author}</p>
        <p className='news__text'>{text}</p>
        {
            !visible && <a onClick={this.handleReadMoreClick} href="#" className='news__readMore'>Подробнее</a>
        }
        {
          visible && <p className='news__bigText'>{bigText}</p>
        }
      </div>
    )
  }
}

New.propTypes = {
  data: PropTypes.shape({
    author: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    bigText: PropTypes.string.isRequired
  })
};

export default New;