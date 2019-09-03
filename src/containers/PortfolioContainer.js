import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
          {this.props.stocks.map(stock => <Stock stock={stock} removeStock={this.props.removeStock}/> )
          }
      </div>
    );
  }

}

export default PortfolioContainer;
