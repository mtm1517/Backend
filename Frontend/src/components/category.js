import React from 'react';

function CategoryList(props){

    const categoryClicked = category => evt => {
        props.categoryClicked(category);
    };
    return (
        <div className="row">
           {
               props.categories.map( category =>{
                   return (
                       <div className="card  mb-3 col-6 col-md-4" key = {category.id} onClick={categoryClicked(category)}>
                           <img className="card-img-top" alt = "seafood" src={category.image} height ="100" weight = "100"/>
                            <div className ="card-body">
                                <h5 className="card-title">{category.title}</h5>
                                <p className="card-text"> ${category.price}</p>
                                <a href="#" className="btn btn-primary">Add To Cart</a>
                            </div>
                        </div>
                   )
                })
           }
      </div>
    )
}

export default CategoryList