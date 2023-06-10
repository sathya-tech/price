import React from 'react'

const Prices = ({keys,index,data}) => {
  return (
      <>
        <div className="row">
            <div className="col-4">
                <ul class="list-group">
                    <li class="list-group-item" key={index}>{keys} : {data[keys]}</li>
                </ul>
            </div>      
        </div>
      </>
  )
}

export default Prices