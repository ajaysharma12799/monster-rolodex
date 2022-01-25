import React from 'react';

const SearchBox = ({placeholder, onChange, value}) => {
  return(
    <div>
        <input 
            type="text" 
            placeholder={placeholder}
            value={value}
            onChange={onChange}
          />
    </div>
  );
};

export default SearchBox;
