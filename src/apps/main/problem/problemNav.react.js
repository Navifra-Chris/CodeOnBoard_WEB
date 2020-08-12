import { Nav } from "tabler-react";
import { useSelector } from "react-redux"
import * as React from "react";

function ProblemNav(props) {
    // const selectedId = window.localStorage.getItem('userName'); Change "/codes/my" to "/codes/userName"

    const selected_nav_id = useSelector(state => state.problem.selected_nav_id, []);
    // console.log("===> selected nav id", selected_nav_id);
    
    return(
            <Nav>
                <Nav.Item value={`${props.id}` + "번"} to={"/problem/" + `${props.id}`} />
                <Nav.Item to={"/submit/" + `${props.id}`}>제출</Nav.Item>
                <Nav.Item to={"/match/" + `${props.id}`}>대전</Nav.Item>
                <Nav.Item to={"/replay/" + `${props.id}`}>리플레이</Nav.Item>
                <Nav.Item to={"/code/my/" + `${props.id}`}>내코드</Nav.Item>  
                <Nav.Item to={"/matchlog/" + `${props.id}`}>대전현황</Nav.Item>
            </Nav>
            
    )
}

export default ProblemNav;