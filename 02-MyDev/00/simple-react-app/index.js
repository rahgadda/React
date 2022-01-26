
//Using Strings
//const SampleH1 = "Hello, Everyone!";
//ReactDOM.render(SampleH1, document.getElementById("root"))

//Using functions
//const SampleH1 = (<h1>Hello, Everyone!</h1>);
//Wrong way
// ReactDOM.render(SampleH1(), document.getElementById("root"))
//Right way
// ReactDOM.render(SampleH1, document.getElementById("root"))

//Creating functions as Elements
function SampleH1(){
   return (<h1>Hello, Everyone!</h1>);
}   
ReactDOM.render(<SampleH1 />, document.getElementById("root"))         