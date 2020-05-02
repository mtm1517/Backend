import React, { Component} from 'react';

class ProductList extends Component{
    
    render(){
        return (

            <React.Fragment>
                {   
                    this.props.product ? (
                        <h3>{this.props.product.title}</h3>
                    ) :<h3>{this.props.product.title}</h3>
                }
                
            </React.Fragment>
        )
    }
    
}

export default ProductList;

