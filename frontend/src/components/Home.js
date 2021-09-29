import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

function Home() {
    return (
        <Container>
            <h1>Home ~~</h1>
            <p>
                <Link to="/login/">Login</Link>
            </p>
            <p>
                <Link to="/signup/">Signup</Link>
            </p>
            <p>
                <Link to="/dashboard/">Dashboard</Link>
            </p>                        
        </Container>
    )
}

export default Home;