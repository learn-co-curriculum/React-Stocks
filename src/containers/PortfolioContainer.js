import React, { Component } from 'react';
import Stock from '../components/Stock'

const PortfolioContainer = props => {
    return (
      <div>
        <h2>My Portfolio</h2>
          {props.stocks.map(stock => <Stock key={stock.id} stock={stock} stockAction={props.removeStock}/> )}
      </div>
    );
}

export default PortfolioContainer;
