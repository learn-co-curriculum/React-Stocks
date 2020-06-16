import React from 'react';

const SearchBar = (props) => {
  return (
    <div>

      <strong>Sort by:</strong>
      <label>
        <input type="radio" value="Alphabetically" name="sort" checked={props.sort === 'Alphabetically'} onChange={(e) => props.updateSort(e.target.value)}/>
        Alphabetically
      </label>
      <label>
        <input type="radio" value="Price" name="sort" checked={props.sort === 'Price'} onChange={(e) => props.updateSort(e.target.value)}/>
        Price
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select value={props.filter} onChange={(e)=>props.updateFilter(e.target.value)}>
          <option value="All">All</option>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>


    </div>
  );
}


export default SearchBar;
