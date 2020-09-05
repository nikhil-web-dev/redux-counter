import React from 'react';
import './App.css';
import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement} from './actions'
function App() {

 const counter = useSelector(state => state.count);
 const islog = useSelector(state => state.log);
 const dispatch = useDispatch();

  return (
   
    <body>
      <div className="wrapper">
        <div data-reactroot>
          <div class="container">
            <div>
            
              <div className="counter">
                <h2>{counter}</h2>
              </div>

              <div>
                <button class="btn" onClick={()=>dispatch(increment())}>+</button>
                <button class="btn" onClick={()=>dispatch(decrement())}>-</button>
              </div>
             
            </div>
          </div>
        </div>
      </div>
    </body>

      
  );
}

export default App;
