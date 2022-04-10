import React from 'react';
import { useNavigate, Link} from 'react-router-dom';

function LoginDemo() {
  let navigate= useNavigate();
  return (
    <div>
       <input type="text"></input><br/><br/>
       <button onClick={() => navigate("../dashboard") }>submit</button>
       
    </div>
  )
}

export default LoginDemo