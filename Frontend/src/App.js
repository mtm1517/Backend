import React, { Component } from 'react';
import './App.css';
import CategoryList from'./components/category';
import ProductList from'./components/product';
import Menu from'./components/menu';


class App extends Component {
  state = {
    categories: [],
    product: 3
  }
  

  componentDidMount(){
    // fetch data
    fetch('http://127.0.0.1:8000/api/product/', 
    {
      method: 'GET',
      header:{

      }
    }).then( resp => resp.json())
    .then( res => this.setState({categories: res}))
    .catch( error => console.log(error))
  }

 categoryClicked = categories => {
   this.setState({product: categories});
 }
 
  render(){
    return (
      <div className="App">
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <a className="navbar-brand layout menu-layout" href="# ">HomeCook</a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                  <a className="nav-item nav-link" >Home <span className="sr-only">(current)</span></a>
                  <a className="nav-item nav-link" href="# ">Seafood</a>
                  <a className="nav-item nav-link" href="# ">Beef</a>
                  <a className="nav-item nav-link" href="# ">Chicken</a>
                  <a className="nav-item nav-link" href="# ">Pork</a>
                  <a className="nav-item nav-link" href="# ">Combos</a>
                </div>
                <form className="form-inline my-2 my-lg-0" >
                  <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
                  <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
              </div>
           </nav>
        </div>
        <header className="App-header">
          <h1>HomeCook</h1>
        </header>
        <div>
          <CategoryList  categories={this.state.categories} categoryClicked={this.categoryClicked}  />
        </div>
        <div>
          <ProductList  product={this.state.product}/>
        </div>
      </div>
    );
  }
}

export default App;
