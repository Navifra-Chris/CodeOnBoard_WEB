import { Nav, Grid } from "tabler-react";
import * as React from "react";

function ProblemNav(props) {
    // const selectedId = window.localStorage.getItem('userName'); Change "/codes/my" to "/codes/userName"
    
    return(
            <Grid.Row justifyContent="center">
                <Grid.Col auto={true}>
                    <Nav>
                        <Nav.Item value={`${props.id}` + "번"} to={"/problem/" + `${props.id}`} />
                        <Nav.Item to={"/match/" + `${props.id}`}>대전</Nav.Item>
                        <Nav.Item to={"/replay/" + `${props.id}`}>리플레이</Nav.Item>
                        <Nav.Item to={"/code/my/" + `${props.id}`}>내코드</Nav.Item>  
                        <Nav.Item to={"/matchlog/" + `${props.id}`}>대전현황</Nav.Item>
                    </Nav>
                </Grid.Col>
            </Grid.Row>
            
    )
}

export default ProblemNav;