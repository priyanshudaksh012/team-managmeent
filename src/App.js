
import './App.css'
import Header  from './header';
import Footer from './footer';
import Employees from './Employees';
import { useState } from 'react';

function App() {

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
          id:8,
          fullName:"James Bennet",
          designation:"Angular Developer",
          gender:"male",
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
                               (employee.id==event.currentTarget.id)? 
                               (employee.testName==selectedTeam)?  {...employee,testName:''} : {...employee,testName:selectedTeam}
                               : employee
                          ));
        
        setEmployees(transformedEmployees);
  }


  return (
     <div>
      <Header teamMemberCount={employees.filter((employee)=> employee.testName==selectedTeam).length}/>
     <Employees  handleTeamSelectChange={handleTeamSelectChange} 
                 handleEmployeeCardClick={handleEmployeeCardClick}  
                 employees={employees} 
                 selectedTeam={selectedTeam}/>
     <Footer/>     
     </div>
  );
} 

export default App;
