import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert"
import Button from "./components/Button"


function App() {
    const items=["Delhi","punjab","UP","maharashtra","madhyapradesh","haryana"];

       const handleSelectitem= (item:string)=>{
        console.log(item);
   }
  return <div>
    <ListGroup items={items} heading="cities" onSelectitem={handleSelectitem}/>
    
    <Alert>
        hello <span>World</span> 
    </Alert>
    <Button  onClick={()=> console.log("clicked")}> button</Button>
  
  
    </div>
 


  // return( <div>
      
  //     <Alert>
  //       hello <span>World</span> 
  //     </Alert>
  //     <Button  onClick={()=> console.log("clicked")}> button</Button>
  //   </div>

  // );
}
export default App;
