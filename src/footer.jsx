const Footer=()=>{
    const date=new Date();
    return (
        <footer className="container">
            <div className="row justify-content-center text-center">
                <div className="col-8">
                <h6 >Team member allocation app - {date.getFullYear()}</h6>
                </div>
            </div>
        </footer>
    )
}

export default Footer;