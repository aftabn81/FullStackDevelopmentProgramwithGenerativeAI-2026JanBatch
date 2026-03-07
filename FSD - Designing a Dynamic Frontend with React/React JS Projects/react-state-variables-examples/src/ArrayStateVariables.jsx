import { useState } from "react";
function ArrayStateVariables() {
let [names,setNames]=useState(["John","Doe","Smith","Bob","Alice","Charlie","John"]); // type of array variable which hold more values of string type
let [fname,setFName]=useState("");    // hold single value of string type 

let addNames=()=>{
    console.log("Name is ",fname);// fname hold single value
    console.log("Names is ",names); // names hold more values in array format
       // names.push(fname); // push method is used to add new value in array variable
       // it doesn't re-render on browser. 
      
       // setNames(fname);// single value replace whole array 

    // let tempNames = names.slice(); // create copy of array variable it copy only values not reference. 
    // tempNames.push(fname); // add new value in copy of array variable
    // setNames(tempNames); // update array variable with copy of array variable which hold new value in it
    
    // let tempNames = [...names]; // it copy all value from names to tempNames and create new array variable with new reference.
    // tempNames.push(fname); // add new value in copy of array variable
    // setNames(tempNames); // update array variable with copy of array variable which hold new value in it
    

    setNames([...names,fname]); // it copy all value from names to new array variable and add new value in it and update array variable with new array variable which hold new value in it

    console.log("Names is ",names); // names hold more values in array format after adding new value in array variable

    setFName("");           // we re-set fname name after added in names array variable. 
}
return(
        <div>
            <h2>Array State Variables with Dynamic Value</h2>
            <input type="text" placeholder="Enter the name" name="fname"
            onChange={(event)=>setFName(event.target.value)} value={fname}/>
            <input type="button" value="Add Name"
            onClick={addNames}/>
            <hr/>
            <p>Names is {names} output as whole string format</p>
            <p>Names is {names.join(", ")} separated by , operator</p>
            <p>Names is {names[0]} first element of array</p>
            <hr/>
            <h2>All Student names new paragraph</h2>
            {
                names.map((value,index)=><p key={index}>{value}</p>)
            }
            <hr/>
            <h3>All Student names in un order list format</h3>
            <ul>
                {names.map((name,index)=><li key={index}>{name}</li>)}
            </ul>
            <hr/>
            <h3>All Student names in order list format</h3>
            <ol>
                {names.map((name,index)=><li key={index}>{name}</li>)}
            </ol>
        </div>
    )

}

export default ArrayStateVariables;