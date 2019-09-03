import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {
  

  render() {
    let stocks = this.props.stocks
    return (
      <div>
        <h2>Stocks</h2>
        {stocks.map(stock => <Stock stock={stock} addPortfolio={this.props.addPortfolio} /> )}
      </div>
    );
  }

}

export default StockContainer;
