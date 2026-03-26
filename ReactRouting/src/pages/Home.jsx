import {Link, useNavigate } from "react-router-dom";
const Home = () => {
    const navigate = useNavigate(); 
    return (
        <div>
            <h1>This is Home Page</h1>
            <button onClick={()=>{navigate('/about')}}>About Page</button><br/>
            <button onClick={()=>{navigate('/contact')}}>Contact Page</button><br/>
        </div>
    )
}

export default Home;