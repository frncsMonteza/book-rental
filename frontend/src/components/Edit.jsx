import React from 'react'
import { NavLink } from "react-router-dom";

const Edit = () => {

    const [inpval, setINP] = React.useState({
        name: "",
        email: "",
        name: "",
        age: "",
        mobile: "",
        work: "",
        address: "",
        desc: "",
    
    })
    
      const setdata = (e) => {
        console.log(e.target.value);
        const {name,value} = e.target;
        setINP((preval)=>{
          return {
            ...preval,
            [name]:value
          }
        })
      }


  return (
    <div className="container">
      <NavLink to="/">Home2</NavLink>

      <form className="mt-5">
          <div className="row">
              <div class="mb-3 col-lg-6 col-md-6 col-12">
                  <label for="exampleInputEmail1" class="form-label">Name</label>
                  <input type="text" value={inpval.name} onChange={setdata} class="form-control" name="name" id="name"/>
              </div>
              <div class="mb-3 col-lg-6 col-md-6 col-12">
                  <label for="exampleInputPassword1" class="form-label">email</label>
                  <input type="email" value={inpval.email} onChange={setdata} class="form-control" name="email" id="email" aria-describedby="emailHelp"/>
              </div>
              <div class="mb-3 col-lg-6 col-md-6 col-12">
                  <label for="exampleInputPassword1" class="form-label">age</label>
                  <input type="number" value={inpval.age} onChange={setdata} class="form-control" name="age" id="age"/>
              </div>
              <div class="mb-3 col-lg-6 col-md-6 col-12">
                  <label for="exampleInputPassword1" class="form-label">Mobile #</label>
                  <input type="number" value={inpval.mobile} onChange={setdata} class="form-control" name="mobile" id="mobile"/>
              </div>
              <div class="mb-3 col-lg-6 col-md-6 col-12">
                  <label for="exampleInputPassword1" class="form-label">Work</label>
                  <input type="text" value={inpval.work} onChange={setdata} class="form-control" name="work" id="work"/>
              </div>
              <div class="mb-3 col-lg-6 col-md-6 col-12">
                  <label for="exampleInputPassword1" class="form-label">Address</label>
                  <input type="text" value={inpval.address} onChange={setdata} class="form-control" name="address" id="address"/>
              </div>
              <div class="mb-3 col-lg-12 col-md-12 col-12">
                  <label for="exampleInputPassword1" class="form-label">Description</label>
                  <textarea name="desc" value={inpval.desc} onChange={setdata} className="form-control" id="desc" cols="30" rows="5"></textarea>
              </div>
                <button type="submit" class="btn btn-primary">Submit</button>
          </div>
      </form>
    </div>
  )
}

export default Edit