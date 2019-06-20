import React, { Component } from 'react';
import './App.css';
import TaskForm from './component/TaskForm';
import Control from './component/Control';
import List from './component/List';



class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="text-center">
          <h1>Quản Lý Công Việc</h1>
          <hr />
        </div>
        <div className="row">
          <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            {/* form */}
            <TaskForm />
          </div>
          <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
            <button type="button" className="btn btn-primary">
              <span className="fa fa-plus mr-5"></span>Thêm Công Việc
                </button>

            {/* search-sort */}

              <Control />

            <List />
          </div>
        </div>
      </div>
    );

  }
}

export default App;
