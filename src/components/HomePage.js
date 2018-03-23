import React, {Component} from 'react'

import AdminView from './AdminView'
import ShopView from './ShopView'

class HomePage extends Component {

	state = {
		itemCurrentlyOnSale: 'hammer',
		editSaleItem: false,
		productList: [
      {
        productName: 'Hammer',
        description: 'Itsa hammer',
        price: 12.3,
      },
      {
        productName: 'Nail',
        description: 'Itsa nail',
        price: 0.12,
      }
    ]
	}

	addNewProductToProductList = (newProduct) => {
		// we're taking the new, changed product list as an array and assiging it
    const productList = [...this.state.productList]
    // push new product into the array of products
    productList.push(newProduct)
    //update the state of product list with the new list with new product
    this.setState({productList})
  }

	toggleEditSaleItem = () => {
		// Here we update the entire object
		// const newState = {...this.state}
		// newState.editSaleItem = !this.state.editSaleItem

		const editSaleItem = !this.state.editSaleItem
		this.setState({ editSaleItem })
	}

	handleItemCurrentlyOnSaleChange = (e) => {
    const itemCurrentlyOnSale = e.target.value;
    this.setState({ itemCurrentlyOnSale });
  }

  deleteItem = (index) => {
    const updatedProductList = [...this.state.productList]
    updatedProductList.splice(index, 1)
    this.setState({productList: updatedProductList})
  }

  render() {

    return (
      <div>
      	<h1>My Hardware Store</h1>
      	<h2>Currently on sale: a {this.state.itemCurrentlyOnSale}!</h2>
      	<span><button onClick={this.toggleEditSaleItem}>
      		{ this.state.editSaleItem ? 'Hide' : 'Edit Sale Item' }
      	</button></span>

        { 
        	this.state.editSaleItem ? 
        	<div>
        		<input type="text" value={this.state.itemCurrentlyOnSale} onChange={this.handleItemCurrentlyOnSaleChange}/>
      		</div> 
      		: null 
      	}
      	
      	<AdminView 
            productList={this.state.productList} 
            addNewProductToProductList={this.addNewProductToProductList} 
            deleteItem={this.deleteItem} />
        <ShopView productList={this.state.productList} />
      </div>
    );
  }
}


export default HomePage;

