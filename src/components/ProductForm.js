import React, {Component} from 'react';

class ProductForm extends Component {
  state = {
    newProduct: {}
  }

  handleNewProductChange = (e) => {
    const attributeName = e.target.name;
    const attributeValue = e.target.value;

    const newProduct = {...this.state.newProduct};
    newProduct[attributeName] = attributeValue;

    this.setState({newProduct})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    
    this.props.addNewProductToProductList(this.state.newProduct)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div><input name="productName" type="text" placeholder="Name" onChange={this.handleNewProductChange}/></div>
          <div><input name="description" type="text" placeholder="Description" onChange={this.handleNewProductChange}/></div>
          <div><input name="price" type="number" min="0.00" step="0.01" placeholder="Price" onChange={this.handleNewProductChange}/></div>
          <div><input type="submit" value="Create New Product"/></div>
        </form>
      </div>
    );
  }
}

export default ProductForm;