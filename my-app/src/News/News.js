import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './newsStyle.css';
import New from './New/New';


class News extends Component{
  renderNews = () => {
    const {data} =this.props;

    let newsTemplate;

    if (data.length) {
      newsTemplate = data.map((item) => {
        return <New key={item.id} data={item}/>
      })
    } else {
      newsTemplate = <p className='noNews'>К сожалению новостей нет.</p>
    }

    return newsTemplate
  };

  render() {
    const {data} = this.props;

    return (
      <div className='news'>
        <h2>Новости</h2>
        {this.renderNews()}
        {
          data.length ? <strong className='allNews'>Всего новостей: {data.length}</strong> : null
        }
      </div>
    )
  }
}

News.propTypes = {
  data: PropTypes.array.isRequired
};

export default News;