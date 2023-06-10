import React from 'react'
import Table from './Table'

const Form = ({setSource,setDestination,setDate,onSubmit}) => {
    
    return (
      
      <>
        {/* <div className="container"> */}
          <div className="row mt-4">
            <div className="col-5 mx-5">
              <form onSubmit={onSubmit}>
                  <p><a class="link-offset-2 link-underline link-underline-opacity-0" href="https://www.prokerala.com/travel/airports/india/">Refer this for code details</a></p>
                  <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">Enter the Source</label>
                  <input type="text" className="form-control" id="exampleInputEmail1" placeholder='Enter the source code' onChange={(e)=>setSource(e.target.value)} aria-describedby="emailHelp"/>
                  </div>
                  <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">Enter the Destination</label>
                  <input type="text" className="form-control" onChange={(e)=>setDestination(e.target.value)} placeholder='enter the destination code' id="exampleInputPassword1"/>
                  </div>
                  <div>
                  <label htmlFor="exampleInputPassword1" className="form-label">Enter the Date</label>
                  <input type="text" className="form-control" onChange={(e)=>setDate(e.target.value)} placeholder='yyyy-mm-dd' id="exampleInput"/>
                  </div>
                  <button type="submit" className="btn btn-primary mt-3">Submit</button>
              </form>
            </div>
          <div className='col-5'>
            <Table/>
          </div>

          </div>
        {/* </div> */}
          
      </>
  )
}

export default Form