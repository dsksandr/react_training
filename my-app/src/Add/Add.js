import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './addStyle.css';

class Add extends Component {
  state = {
    id: 0,
    name: '',
    text: '',
    bigText: '',
    agree: false,
  };

  onBtnClickHandler = event => {
    event.preventDefault();
    const {name, text, bigText} = this.state;
    console.log(this.state);
    this.props.onAddNews({
      id: +new Date(),
      author: name,
      text,
      bigText
    });

    //Очищаем поля ввода.

    this.setState({name: '', text: '', bigText: ''});

    let checkbox = document.querySelector("input[type='checkbox']");
    //console.log(checkbox.checked);
    checkbox.checked = false;
  };

  handleChange = event => {
    const {id, value} = event.currentTarget;
    this.setState({[id]: value});
  };

  handleCheckboxChange = event => this.setState({agree: event.currentTarget.checked});

  validate = () => {
    const {name, text, agree} = this.state;
    return !!(name.trim() && text.trim() && agree);
  };

  render() {
    const {name, text, bigText} = this.state;
    return (
      <form className='add'>
        <label htmlFor='addName'>Введите имя</label>
        <input
          id='name'
          className='add__name'
          type='text'
          onChange={this.handleChange}
          placeholder='Имя Фамилия'
          value={name}/>
        <div className='textAreaWrap'>
          <textarea
            id='text'
            className='add__text'
            placeholder='О чем ты хочешь сообщить?'
            onChange={this.handleChange}
            value={text}>
          </textarea>
          <textarea
            id='bigText'
            onChange={this.handleChange}
            className='add__text'
            placeholder='Текст новости подробно'
            value={bigText}>
          </textarea>
        </div>
        <div>
          <input
            id='iAgree'
            type='checkbox'
            onChange={this.handleCheckboxChange}/>
          <label htmlFor='iAgree'>Я согласен с правилами</label>
        </div>
        <div className='btnBlock'>
          <button onClick={this.onBtnClickHandler}
                  disabled={!this.validate()}>
            Отправить
          </button>
        </div>
      </form>
    );
  }
}

Add.propTypes = {
  onAddNews: PropTypes.func.isRequired,
};

export default Add;