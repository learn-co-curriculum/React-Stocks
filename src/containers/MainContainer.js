import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {
  state = {
    sellingAStock: true
  }
  render() {
    return (
      <div>
        <SearchBar 
          filterByType={this.props.filterByType} 
          sortStockBy={this.props.sortStockBy}
          isChecked={this.props.isChecked}/>

          <div className="row">
            <div className="col-8">

              <StockContainer handleBuyingAStock={this.props.handleBuyingAStock} stocks={this.props.stocks}/>

            </div>
            <div className="col-4">

              <PortfolioContainer sellAStock ={this.state.sellingAStock} handleSellingAStock={this.props.handleSellingAStock} portfolio={this.props.portfolio}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
