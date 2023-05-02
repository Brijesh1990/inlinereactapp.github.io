import React from "react"; //import react module
import ReactDOM  from "react-dom/client";//import reactDOM module
import reportWebVital from './reportWebVitals'; //import reportWebVital its used to load speed optimizations

// const root=ReactDOM.createRoot(document.getElementById("inline-app-demo"));
// root.render(<h1>Hello i am brijesh</h1>);

const backimg="assets/images/back.jpg";
const root=ReactDOM.createRoot(document.getElementById("inline-app-demo"));
root.render(
<React.Fragment>

<div style={{width:"50%",height:"auto",margin:"auto",padding:"25px",backgroundColor:"aqua"}}>
<h1>Hello i am brijesh</h1>
<hr align='left' style={{width:"30%",height:"auto"}}/>
<p> hi i am load paragraph</p>
<img src={backimg} alt="img-01" title="i am images" style={{width:"300px",height:"300px",borderRadius:"50%"}} />
</div>


<div style={{width:"50%",height:"auto",margin:"auto",padding:"25px",backgroundColor:"aqua",marginTop:"5%"}}>
<h1>Hello i am brijesh</h1>
<hr align='left' style={{width:"30%",height:"auto"}}/>

<p> hi i am load paragraph</p>
</div>

</React.Fragment>

);

reportWebVital();

