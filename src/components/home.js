import React from 'react';
import { TextField} from '@mui/material';


function Home() {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <p>This is the home page of our React app.</p>
      <TextField value={""} size='small' id="outlined-disabled" label="Axis-1 Position" style={{ width: 127 }}
           />
    </div>
  );
}

export default Home;
