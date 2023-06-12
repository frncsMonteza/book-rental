import React from "react";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const Home = () => {
  return (
    <div className="mt-5">
      <div className="container">
        <div className="add_btn mt-2 mb-2">
          <button className="btn btn-primary">Add Data</button>
        </div>

        <table class="table">
          <thead>
            <tr className="table-dark">
              <th scope="col">ID</th>
              <th scope="col">Username</th>
              <th scope="col">Email</th>
              <th scope="col">Job</th>
              <th scope="col">Number</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>godzlupet</td>
              <td>godzlupet@gmail,com</td>
              <td>SoftEng</td>
              <td>092323232</td>
              <td className="d-flex justify-content-between">
                <button className="btn btn-success">
                 <RemoveRedEyeIcon />
                </button>
                <button className="btn btn-warning">
                  <EditIcon />
                </button>
                <button className="btn btn-danger">
                <DeleteIcon />
                </button>
              </td>
            </tr>
            <tr>
              <th scope="row">1</th>
              <td>godzlupet</td>
              <td>godzlupet@gmail,com</td>
              <td>SoftEng</td>
              <td>092323232</td>
              <td className="d-flex justify-content-between">
              <button className="btn btn-success">
                 <RemoveRedEyeIcon />
                </button>
                <button className="btn btn-warning">
                  <EditIcon />
                </button>
                <button className="btn btn-danger">
                <DeleteIcon />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
