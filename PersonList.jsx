import { employees } from "./personsData"
import PersonCard from "./PersonCard"

const PersonList = () => {

    return (
<>
        <h2>Persons</h2>
        <div className ="box"></div>
        {employees.map((employee) => (


            <PersonCard 
            key={employee.id} {...employee}
            
            />

        ))}
       
       
       
       
        </>

    )
}

export default PersonList;