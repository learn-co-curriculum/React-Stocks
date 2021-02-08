import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {
  
  listOfStocks = () => {
    return this.props.stocks.map((eachStock, index) => <Stock key={index} stockIndex={index} stock={eachStock} handleBuyingAStock={this.props.handleBuyingAStock}/>)
  }
  render() {
    
    return (
      <div>
        <h2>Stocks</h2>
        {
          //render the list of stocks here
          this.listOfStocks()
        }
      </div>
    );
  }

}

export default StockContainer;
