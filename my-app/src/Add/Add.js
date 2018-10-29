import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './addStyle.css';

class Add extends Component {
  state = {
    name: '',
    text: '',
    agree: false,
  };

  onBtnClickHandler = event => {
    event.preventDefault();
    const { name, text, bigText } = this.state;
    console.log(this.state);
    this.props.onAddNews({
      id: +new Date(),
      author: name,
      text,
      bigText
    });
  };

  handleChange = event => {
    const { id } = event.currentTarget;
    this.setState({ [id]: event.currentTarget.value });
  };

  handleCheckboxChange = event => this.setState({ agree: event.currentTarget.checked });

  validate = () => {
    const { name, text, agree } = this.state;
    return !!(name.trim() && text.trim() && agree);
  };

  render() {
    const { name, text, bigText } = this.state;
    return (
      <form className='add'>
        <label htmlFor='addName'>Введите имя</label>
        <input
          id='name'
          className='add__name'
          type='text'
          onChange={ this.handleChange }
          placeholder='Имя Фамилия'
          value={ name }/>
        <div className='textAreaWrap'>
          <textarea
            id='text'
            className='add__text'
            placeholder='О чем ты хочешь сообщить?'
            onChange={ this.handleChange }
            value={ text }>
          </textarea>
          <textarea
            id='bigText'
            onChange={this.handleChange}
            className='add__text'
            placeholder='Текст новости подробно'
            value={ bigText }>
          </textarea>
        </div>
        <div>
          <input
            id='iAgree'
            type='checkbox'
            onChange={ this.handleCheckboxChange }/>
          <label htmlFor='iAgree'>Я согласен с правилами</label>
        </div>
        <button onClick={ this.onBtnClickHandler }
                disabled={ !this.validate() }>
                Отправить
        </button>
      </form>
    );
  }
}

Add.propTypes = {
  onAddNews: PropTypes.func.isRequired,
};

export default Add;