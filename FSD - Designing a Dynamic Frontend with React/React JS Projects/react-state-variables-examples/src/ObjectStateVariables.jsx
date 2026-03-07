import { useState } from "react"

function ObjectStateVariables() {
    const [employee, setEmployee] = useState({
        id:1,
        name:"John Doe",
        department:"Engineering",
        salary:50000,
        address: {
            street: "123 Main St",
            city: "Anytown",
            state: "CA",
            zip: "12345"
        }
    })
    let updateObjectValue = ()=> {
        //alert("Event fired")
        //setEmployee(2); // it consider as primitive type and replace the entire object with 2
        //setEmployee({id:2});    // new object created with only one property as id 
    //     setEmployee({
    //     id:2,
    //     name:"John Doe",
    //     department:"Engineering",
    //     salary:55000,
    //     address: {
    //         street: "123 Main St",
    //         city: "Anytown",
    //         state: "CA",
    //         zip: "12345"
    //     }
    // })
    // ... employees hold all existing property details using spread operator and then we can update the specific property by providing the property name as key and new value. In this case we are updating id property with new value 2.
    // 2nd property name and 3rd new value. 
    //setEmployee({...employee, id:2})
        setEmployee({...employee, id:3,salary:55000})
    }
    return(
        <div>
            <input type="button" value="Update Object Value"
            onClick={updateObjectValue} />
            <h2>Employee Information</h2>
            <p>ID: {employee.id}</p>
            <p>Name: {employee.name}</p>
            <p>Department: {employee.department}</p>
            <p>Salary: ${employee.salary}</p>
            <p>Address: {employee.address.street}, {employee.address.city}, {employee.address.state} {employee.address.zip}</p>
        </div>
    )
}
export default ObjectStateVariables;