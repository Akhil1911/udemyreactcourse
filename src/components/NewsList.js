import React from 'react'
import News_List_Item from './News_List_Item'

const NewsList = (props) => {

    const newsData = props.news.map((val,ind) => (
      <News_List_Item key={ind} val={val} />
    ));
    
  return (
      <>
          {newsData}
      </>
  )
}

export default NewsList