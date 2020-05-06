import React from 'react';

const SearchBox = ({onSearchFieldChange}) => {
    return(
        <div className="">
          <input 
            type="text" 
            placeholder="search robots"
            className=" pa3 br3 f3 ba bw1"
            onChange={onSearchFieldChange}
            />
        </div>
    );
}

export default SearchBox;