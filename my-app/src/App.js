import React, { Component } from 'react';
import './App.css';
import News from './News/News';
import Comments from './Comments/Comments';

const myNews = [
  {
    id: 1,
    author: 'Саша Печкин',
    text: 'В четверг, четвертого числа...',
    bigText: 'В четыре с четвертью часа четыре чёрненьких чумазеньких чертёнка чертили чёрными чернилами чертёж.'
  },
  {
    id: 2,
    author: 'Просто Вася',
    text: 'Считаю, что $ должен стоить 35 рублей!',
    bigText: 'А евро 42!'
  },
  {
    id: 3,
    author: 'Max Frontend',
    text: 'Прошло 2 года с прошлых учебников, а $ так и не стоит 35',
    bigText: 'А евро опять выше 70.'
  },
  {
    id: 4,
    author: 'Гость',
    text: 'Бесплатно. Без смс, про реакт, заходи - https://maxpfrontend.ru',
    bigText: 'Еще есть группа VK, telegram и канал на youtube! Вся инфа на сайте, не реклама!'
  }
];
class TestInput extends Component{
  constructor(props){
    super(props);
    this.input = React.createRef()
  }
  componentDidMount(){
    this.input.current.focus();
  }
  onChangeHandler = event => {
    this.setState({myValue: event.currentTarget.value})
  };
  showState = event => {
    alert(this.input.current.value);
  };

  render() {
    return (
      <div>
        <input
          className='testInput'
          onChange={this.onChangeHandler}
          defaultValue=''
          placeholder='Введите значение'
          ref={this.input}/>
        <button onClick={this.showState}>Отправить</button>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className='container'>
        <TestInput />
        <News data={myNews} />
        <Comments />
      </div>
    );
  }
}

export default App;
