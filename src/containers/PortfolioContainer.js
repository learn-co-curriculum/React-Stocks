import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {
  listOfPortfolio = () => {
    return this.props.portfolio.map((stock, index) => <Stock sellAStock={this.props.sellAStock} handleSellingAStock={this.props.handleSellingAStock} key={index} stockIndex={index} stock={stock} />)
  }
  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
          {
            //render your portfolio stocks here
            this.listOfPortfolio()
          }
      </div>
    );
  }

}

export default PortfolioContainer;
