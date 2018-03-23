import React, {Component} from 'react';

class Product extends Component {
  render() {
    const productName = this.props.productName;
    const description = this.props.description;
    const price = this.props.price;

    return (

      <div>
        <h3>{productName}</h3>
        <div>{description}</div>
        <div>{price}</div>
        {console.log(this.props.adminView)}
        {
          this.props.adminView ?
          <button
            onClick={() => this.props.deleteItem(this.props.index)}>
            Delete
          </button>
          : null
        }
        
      </div>
    );
  }
}

export default Product;