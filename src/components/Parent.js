import React, { useState } from 'react';
import Child from './Child';
const Parent = () => {
    const [isLoggedIn,setLoggedIn] = useState(false);
    
  return (
    <div>
        <h1>Parent Component</h1>
      <Child isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn} />
    </div>
  );
}

export default Parent;
