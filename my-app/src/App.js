import React, { Component } from 'react';
import './App.css';
import News from './News/News';
import Comments from './Comments/Comments';

const myNews = [
  {
    id: '1',
    author: 'Саша Печкин',
    text: 'В четверг, четвертого числа...'
  },
  {
    id: '2',
    author: 'Просто Вася',
    text: 'Считаю, что $ должен стоить 35 рублей!'
  },
  {
    id: '3',
    author: 'Max Frontend',
    text: 'Прошло 2 года с прошлых учебников, а $ так и не стоит 35'
  },
  {
    id: '4',
    author: 'Гость',
    text: 'Бесплатно. Без смс, про реакт, заходи - https://maxpfrontend.ru'
  }
];


class App extends Component {
  render() {
    return (
      <div className='container'>
        <News data={myNews} />
        <Comments />
      </div>
    );
  }
}

export default App;
