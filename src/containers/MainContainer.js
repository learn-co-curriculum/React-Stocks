import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  constructor(){
    super()
    this.state = {
      stocks: [],
      portfolioStock: [],
      displayStocks: [],
      displayPortfolioStock: []
    }
  }

  componentDidMount(){
    fetch('http://localhost:3000/stocks')
    .then(res =>  res.json())
    .then(data => {
      this.setState({
        stocks: data,
        displayStocks: data
      })
    })
  }

  addStock = (stock) => {
    let arr = this.state.displayStocks.filter(s => s.id !== stock.id)

    let pArr = this.state.displayPortfolioStock
    pArr.push(stock)

    this.setState({
      displayStocks: arr,
      displayPortfolioStock: pArr
    })

  }

  removeStock = (removeStock) => {
    
    let arr = this.state.displayPortfolioStock.filter(stock => stock.id !== removeStock.id)

    let sArr = this.state.displayStocks
    sArr.push(removeStock)
    sArr.sort((a,b) => a.id<b.id ? -1 : 1) //sorting so that we can get the stocks in the original order
      
    this.setState({
      displayStocks: sArr,
      displayPortfolioStock: arr
    })
  }

  sortStocks = (e) => {
      let resultSArr
      let resultPArr
      switch(e.target.value){
        case 'Alphabetically':
            resultSArr = this.state.displayStocks.sort((a,b) => a.name<b.name ? -1 : 1 )
            resultPArr = this.state.displayPortfolioStock.sort((a,b) => a.name<b.name ? -1 : 1 )
            break;
        case 'Price':
            resultSArr = this.state.displayStocks.sort((a,b) => a.price<b.price ? -1 : 1 )
            resultPArr = this.state.displayPortfolioStock.sort((a,b) => a.price<b.price ? -1 : 1 )
            break;

        // case 'Tech':
        //     resultSArr = this.state.stocks.filter(stock => stock.type === e.target.value )
        //     resultPArr = this.state.portfolioStock.filter(stock => stock.type === e.target.value )
        //     break;
        // case 'Sportswear':
        //     resultSArr = this.state.stocks.filter(stock => stock.type === e.target.value )
        //     resultPArr = this.state.portfolioStock.filter(stock => stock.type === e.target.value )
        //     break;
        // case 'Finance':
        //     resultSArr = this.state.stocks.filter(stock => stock.type === e.target.value )
        //     resultPArr = this.state.portfolioStock.filter(stock => stock.type === e.target.value )
        //     break;
        
        default:
          debugger
            resultSArr = this.state.stocks.filter(stock => stock.type === e.target.value )
            resultPArr = this.state.portfolioStock.filter(stock => stock.type === e.target.value )
          
      }

      this.setState({
        displayStocks: resultSArr,
        displayPortfolioStock: resultPArr

      })
    
  }


  render() {
    return (
      <div>
        <SearchBar sortStocks = {this.sortStocks}/>

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={this.state.displayStocks} addStock = {this.addStock}/>

            </div>
            <div className="col-4">

              <PortfolioContainer stocks={this.state.displayPortfolioStock} removeStock={this.removeStock}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
