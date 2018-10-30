import React, {Component} from 'react';
import './App.css';
import News from './News/News';
import Comments from './Comments/Comments';
import Add from './Add/Add';
import  dataNews from './public/data/newsData';

class App extends Component {
    state = {
    news: null,
    isLoading: false,
  };

  componentDidMount() {
    this.setState({ isLoading: true });
    let result = dataNews;
    console.log(result)

    setTimeout(() => {
      this.setState({ isLoading: false, news: result })
    }, 3000)

    //console.log(dataNews);
    // fetch('http://localhost:3000/data/newsData.json')
    //   .then(response => {
    //     return response.json()
    //   })
    //   .then(data => {
    //     console.log(this);
    //     console.log('приехали данные ', data);
    //   })
  }

  handleAddNews = (data) => {
    const nextNews = [data, ...this.state.news];

    console.log(nextNews);

    this.setState({news: nextNews});
  };


  render() {
    const { news, isLoading } = this.state;
    return (
      <div className='container'>
        <Add onAddNews={this.handleAddNews}/>
        <h2>Новости</h2>
        { isLoading && <p>Заружаю...</p> }
        {  Array.isArray(news) &&  <News data={news}/>}
        {/*<Comments/>*/}
      </div>
    );
  }
}

export default App;
