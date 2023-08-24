import {useState} from 'react';
import femaleProfile from './images/femaleProfile.jpg';
import maleProfile from "./images/maleProfile.jpg"

const Employees =()=>{
    const [selectedTeam,setSelectedTeam]=useState("TeamA");

    const [employees,setEmployees]=useState([
        {
            id:1,
            fullName:"Bob jones",
            designation:"Javascript Developer",
            gender:"male",
            testName:"TeamA"
        },
        {
            id:2,
            fullName:"Jill Bailey",
            designation:"Node Developer",
            gender:"female",
            testName:"TeamA"
        },
        {
            id:3,
            fullName:"Gail Shepherd",
            designation:"Java Developer",
            gender:"female",
            testName:"TeamA"
        },
        {
            id:4,
            fullName:"Sam Reynolds",
            designation:"React Developer",
            gender:"male",
            testName:"TeamB"
        },
        {
            id:5,
            fullName:"David Henry",
            designation:"DotNet Developer",
            gender:"male",
            testName:"TeamB"
        },
        {
            id:6,
            fullName:"Sarah Blake",
            designation:"Sql Server DBA",
            gender:"female",
            testName:"TeamB"
        },
        {
            id:7,
            fullName:"James Bennet",
            designation:"Angular Developer",
            gender:"male",
            testName:"TeamC"
        },
        {
            id:7,
            fullName:"James Bennet",
            designation:"Angular Developer",
            gender:"male",
            testName:"TeamC"
        },
        {
            id:8,
            fullName:"Jessica Faye",
            designation:"Api Developer",
            gender:"female",
            testName:"TeamC"
        },
        {
            id:9,
            fullName:"Lita Stone",
            designation:"C++ Developer",
            gender:"female",
            testName:"TeamC"
        },
        {
            id:10,
            fullName:"Dainel Young",
            designation:"Python Developer",
            gender:"male",
            testName:"TeamD"
        },
        {
            id:11,
            fullName:"Adrian Jacobs",
            designation:"Vue Developer",
            gender:"male",
            testName:"TeamD"
        },
        {
            id:12,
            fullName:"Devin Monroe",
            designation:"Graphic Developer",
            gender:"male",
            testName:"TeamD"
        }
    ])

    function handleTeamSelectChange(event){
        console.log(event.target.value)
        setSelectedTeam(event.target.value)
        
    } 

    function handleEmployeeCardClick(event){

       const transformedEmployees =  employees.map((employee)=>(
                                 (employee.id===event.currentTarget.id)? 
                                 (employee.testName===selectedTeam)? {...employee,testName:''} : {...employee,testName:selectedTeam}
                                 : employee
                            ));
          setEmployees(transformedEmployees);
    }
 

    return (
        <main  className='container'>

            <div className="row justify-content-center mt-3 mb-3">
                <div className='col-6'>
                <select className='form-select form-select-lg' onChange={handleTeamSelectChange}>
                    <option value="TeamA">TeamA</option>
                    <option value="TeamB">TeamB</option>
                    <option value="TeamC">TeamC</option>
                    <option value="TeamD">TeamD</option>
                </select>
                </div>
            </div>

             <div className ="row justify-content-center mb-3 mt-3">
            <div className="col-8">
                <div className='card-collection'>
             {
                employees.map((employee)=>(
              
                        <div id={employee.id} className={(employee.testName===selectedTeam)? "card m-2 standout": "card m-2" } onClick={handleEmployeeCardClick} style={{cursor:"pointer"}}>
                        {
                            (employee.gender==="male")? <img src={maleProfile}  className="card-img-top"/>
                            : <img src={femaleProfile}  className="card-img-top"/>

                        }
                            <div className='card-body'>
                                <h5 className='card-title'>Full Name : {employee.fullName}</h5>
                                <p className='card-text'><b>Designation: </b> {employee.designation}</p>
                                <p className='card-text'><b>Team: </b> {employee.testName}</p>
                            </div>
                        </div>
                 
                ))
             }
             </div>
                </div>
            </div>           
        </main>
    )
}

export default Employees  ;