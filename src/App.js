import React, { Component } from 'react';
import Header from './components/Header'
import MainContainer from './containers/MainContainer'

class App extends Component {
  
  state = {
    stocks: [], 
    portfolio: [], 
    stocksCopy: [],
    isChecked: true
  }
  sortStockBy = (priceOrAlphabet) => {
    let stocks
    if(priceOrAlphabet === "Alphabetically"){
      stocks = this.state.stocksCopy.sort((stockA, stockB) => {
        const stockNameA = stockA.name 
        const stockNameB = stockB.name
        if (stockNameA > stockNameB){
          return 1
        }
        if (stockNameA < stockNameB){
          return -1
        }
        return 0
      })
    } else {
      stocks = this.state.stocksCopy.sort((stock1, stock2) => stock1.price - stock2.price)
    }
    
    this.setState({stocks: stocks, isChecked: !this.state.isChecked})
  }
  filterByType = (type) => {
    const stocks = this.state.stocksCopy.filter(stock => stock.type == type)
    this.setState({stocks})
  }
  handleBuyingAStock = (index) => {
    this.setState({
      portfolio: this.state.portfolio.concat(this.state.stocks[index])
    })
  }

  handleSellingAStock = (index) => {
    let portfolioCopy = [...this.state.portfolio]
    portfolioCopy.splice(index,1)
    this.setState({
      portfolio: portfolioCopy
    })
  }
  componentDidMount() {
    fetch("http://localhost:3000/stocks")
      .then(resp => resp.json())
      .then(stocks => this.setState({stocks: stocks, stocksCopy: stocks}))
  }
  render() {
    
    return (
      <div>
        <Header/>
        <MainContainer 
          handleSellingAStock = {this.handleSellingAStock} 
          handleBuyingAStock={this.handleBuyingAStock} 
          stocks={this.state.stocks} 
          portfolio={this.state.portfolio}
          filterByType={this.filterByType}
          sortStockBy={this.sortStockBy}
          isChecked ={this.state.isChecked}/>
      </div>
    );
  }
}

export default App;
