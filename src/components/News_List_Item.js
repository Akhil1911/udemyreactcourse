import React from 'react'

const News_List_Item = ({val}) => {
  return (
    <>
      <h6>
        {val.id} , {val.title} , {val.feed}
      </h6>
    </>
  );
}

export default News_List_Item