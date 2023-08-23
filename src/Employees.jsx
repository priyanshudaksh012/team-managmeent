import {useState} from 'react';
import femaleProfile from './images/femaleProfile.jpg';
import maleProfile from "./images/maleProfile.jpg"

const Employees =()=>{
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
            testName:"Teamc"
        },
        {
            id:9,
            fullName:"Lita Stone",
            designation:"C++ Developer",
            gender:"female",
            testName:"Teamc"
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
        },
        
        
        


    ])
    return (
        <main  className='container'>
             <div className ="row justify-content-center mb-3 mt-3">
            <div className="col-8">
                <div className='card-collection'>
             {
                employees.map((employee)=>(
              
                        <div id={employee.id} className="card m-2" style={{cursor:"pointer"}}>
                        {
                            (employee.gender==="male")? <img src={maleProfile}  className="card-img-top"/>
                            : <img src={femaleProfile}  className="card-img-top"/>

                        }
                            <div className='card-body'>
                                <h5 className='card-title'>Full Name : {employee.fullName}</h5>
                                <p className='card-text'><b>Designation: </b> {employee.designation}</p>
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