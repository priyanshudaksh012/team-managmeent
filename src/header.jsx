const Header=(props)=>{
    
    return (
        <header className="container">
            <div className="row justify-content-center">
                <div className="col-8">
                <h1>Team Member Allocation App</h1>
                <h1>{props.selectedTeam} has  {props.teamMemberCount} members</h1>
                </div>
            </div>
        </header>
    )
}
 
export default Header;