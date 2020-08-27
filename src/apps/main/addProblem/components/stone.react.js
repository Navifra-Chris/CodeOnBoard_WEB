import * as React from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import * as Action from "../../../store/actions/addProblem.action"
import { Text, Grid, Form, Button} from "tabler-react";
import "../../Home.css"

function Stone(props){
    const dispatch = useDispatch();

    const { placementRule, placementDir, length1, length2 } = useSelector(state => ({
        placementRule:state.addProblem.rules[props.selectedStone].placementRule,
        endingRule:state.addProblem.endingRule,
        length1:state.addProblem.rules[props.selectedStone].length1,
        length2:state.addProblem.rules[props.selectedStone].length2,
    }));

    var placementDircomp = null

    if(placementRule === 0){
        placementDircomp = <React.Fragment>
                            <Form.Group label="착수 방향" className="mr-4">
                                <Grid.Row className="pl-12">
                                    <Form.Radio label="4방" name="dir" onChange={()=> {dispatch(Action.selectPlacementDir(props.selectedStone,0))}}/>
                                    {placementDir === 0 ?
                                        <React.Fragment>
                                            <Form.Input placeholder="최소" className="input-sm ml-2" value={length1}
                                                onChange={(e)=> {dispatch(Action.setLength1(props.selectedStone, e.target.value))}}/>
                                            <Form.Input placeholder="최대" className="input-sm ml-2" value={length2}
                                                onChange={(e)=> {dispatch(Action.setLength2(props.selectedStone, e.target.value))}}/>
                                        </React.Fragment>
                                    :""} 
                                </Grid.Row>
                                <Grid.Row className="pl-12">
                                    <Form.Radio label="대각선" name="dir" onChange={()=> {dispatch(Action.selectPlacementDir(props.selectedStone,1))}}/>
                                    {placementDir === 1 ?
                                        <React.Fragment>
                                            <Form.Input disabled={true} placeholder="최소" className="input-sm ml-2" value={length1}
                                                onChange={(e)=> {dispatch(Action.setLength1(props.selectedStone, e.target.value))}}/>
                                            <Form.Input placeholder="최대" className="input-sm ml-2" value={length2}
                                                onChange={(e)=> {dispatch(Action.setLength2(props.selectedStone, e.target.value))}}/>
                                        </React.Fragment>
                                    :""}
                                </Grid.Row>
                                <Grid.Row className="pl-12">
                                    <Form.Radio label="8방" name="dir" onChange={()=> {dispatch(Action.selectPlacementDir(props.selectedStone,2))}}/>
                                    {placementDir === 2 ?
                                        <React.Fragment>
                                            <Form.Input placeholder="최소" className="input-sm ml-2" value={length1}
                                                onChange={(e)=> {dispatch(Action.setLength1(props.selectedStone, e.target.value))}}/>
                                            <Form.Input placeholder="최대" className="input-sm ml-2" value={length2}
                                                onChange={(e)=> {dispatch(Action.setLength2(props.selectedStone, e.target.value))}}/>
                                    </React.Fragment>
                                    :""}
                                </Grid.Row>
                                <Grid.Row className="pl-12">
                                    <Form.Radio label="커스텀" name="dir" onChange={()=> {dispatch(Action.selectPlacementDir(props.selectedStone,3))}}/>
                                    {placementDir === 3 ?
                                        <React.Fragment>
                                            <Form.Input placeholder="x" className="input-sm ml-2" value={length1}
                                                onChange={(e)=> {dispatch(Action.setLength1(props.selectedStone, e.target.value))}}/>
                                            <Form.Input placeholder="y" className="input-sm ml-2" value={length2}
                                                onChange={(e)=> {dispatch(Action.setLength2(props.selectedStone, e.target.value))}}/>
                                        </React.Fragment>
                                    :""}
                                </Grid.Row>
                            </Form.Group>
                        </React.Fragment>
    
    }
    else if(placementRule === 1){
        placementDircomp = <React.Fragment>
                            <Form.Group label="착수 방향" className="mr-4">
                                <Form.Radio label="4방" name="dir"/>
                                <Form.Radio label="대각선" name="dir"/>
                                <Form.Radio label="8방" name="dir"/>
                            </Form.Group>
                        </React.Fragment>
    }   
    else{
        placementDircomp = 
                        <React.Fragment>
                            <Form.Group label="착수 방향" className="mr-4">
                                <Grid.Row className="pl-12">
                                    <Form.Radio label="4방" name="dir" onChange={()=> {dispatch(Action.selectPlacementDir(props.selectedStone,0))}}/>
                                    {placementDir === 0 ?
                                        <React.Fragment>
                                            <Form.Input placeholder="최소" className="input-sm ml-2" value={length1}
                                                onChange={(e)=> {dispatch(Action.setLength1(props.selectedStone, e.target.value))}}/>
                                            <Form.Input placeholder="최대" className="input-sm ml-2" value={length2}
                                                onChange={(e)=> {dispatch(Action.setLength2(props.selectedStone, e.target.value))}}/>
                                        </React.Fragment>
                                    :""} 
                                </Grid.Row>
                                <Grid.Row className="pl-12">
                                    <Form.Radio label="대각선" name="dir" onChange={()=> {dispatch(Action.selectPlacementDir(props.selectedStone,1))}}/>
                                    {placementDir === 1 ?
                                        <React.Fragment>
                                            <Form.Input disabled={true} placeholder="최소" className="input-sm ml-2" value={length1}
                                                onChange={(e)=> {dispatch(Action.setLength1(props.selectedStone, e.target.value))}}/>
                                            <Form.Input placeholder="최대" className="input-sm ml-2" value={length2}
                                                onChange={(e)=> {dispatch(Action.setLength2(props.selectedStone, e.target.value))}}/>
                                        </React.Fragment>
                                    :""}
                                </Grid.Row>
                                <Grid.Row className="pl-12">
                                    <Form.Radio label="8방" name="dir" onChange={()=> {dispatch(Action.selectPlacementDir(props.selectedStone,2))}}/>
                                    {placementDir === 2 ?
                                        <React.Fragment>
                                            <Form.Input placeholder="최소" className="input-sm ml-2" value={length1}
                                                onChange={(e)=> {dispatch(Action.setLength1(props.selectedStone, e.target.value))}}/>
                                            <Form.Input placeholder="최대" className="input-sm ml-2" value={length2}
                                                onChange={(e)=> {dispatch(Action.setLength2(props.selectedStone, e.target.value))}}/>
                                    </React.Fragment>
                                    :""}
                                </Grid.Row>
                                <Grid.Row className="pl-12">
                                    <Form.Radio label="커스텀" name="dir" onChange={()=> {dispatch(Action.selectPlacementDir(props.selectedStone,3))}}/>
                                    {placementDir === 3 ?
                                        <React.Fragment>
                                            <Form.Input placeholder="x" className="input-sm ml-2" value={length1}
                                                onChange={(e)=> {dispatch(Action.setLength1(props.selectedStone, e.target.value))}}/>
                                            <Form.Input placeholder="y" className="input-sm ml-2" value={length2}
                                                onChange={(e)=> {dispatch(Action.setLength2(props.selectedStone, e.target.value))}}/>
                                        </React.Fragment>
                                    :""}
                                </Grid.Row>
                            </Form.Group>
                            <Form.Group label="착수 방향(추가)">
                                <Form.Radio label="4방" name="dir"/>
                                <Form.Radio label="대각선" name="dir"/>
                                <Form.Radio label="8방" name="dir"/>
                            </Form.Group>
                        </React.Fragment>
    }
                                            
    
    return(
        <React.Fragment>
            {/* <h1>Stone : {props.selectedStone}</h1> */}
            <Grid.Row>
                <Grid.Col>
                    <Text size="h2" className="mt-5">착수 규칙</Text>
                    <Form.Group label="착수 종류" className="mr-4">
                        <Form.Radio label="이동" value="option1" name="kind" onChange={()=> {dispatch(Action.selectPlacementRule(props.selectedStone,0))}}/>
                        <Form.Radio label="추가" value="option2" name="kind" onChange={()=> {dispatch(Action.selectPlacementRule(props.selectedStone,1))}}/>
                        <Form.Radio label="둘다" value="option3" name="kind" onChange={()=> {dispatch(Action.selectPlacementRule(props.selectedStone,2))}}/>
                    </Form.Group>
                    {placementDircomp}
                </Grid.Col>
                <Grid.Col>
                    <Text size="h2" className="mt-5">액션 규칙</Text>
                    <Form.Group label="액션 조건">
                        <Form.Radio label="없음" name="condition" onChange={()=> {dispatch(Action.selectActionCondition(props.selectedStone,0))}}/>
                        <Form.Radio label="인접한 곳" name="condition" onChange={()=> {dispatch(Action.selectActionCondition(props.selectedStone,1))}}/>
                    </Form.Group>
                    <Form.Group label="액션 방향">
                        <Form.Radio label="없음" name="direction" onChange={()=> {dispatch(Action.selectActionDir(props.selectedStone,0))}}/>
                        <Form.Radio label="양 옆" name="direction" onChange={()=> {dispatch(Action.selectActionDir(props.selectedStone,1))}}/>
                        <Form.Radio label="위 아래" name="direction" onChange={()=> {dispatch(Action.selectActionDir(props.selectedStone,2))}}/>
                        <Form.Radio label="4방" name="direction" onChange={()=> {dispatch(Action.selectActionDir(props.selectedStone,3))}}/>
                        <Form.Radio label="대각선" name="direction" onChange={()=> {dispatch(Action.selectActionDir(props.selectedStone,4))}}/>
                        <Form.Radio label="8방" name="direction" onChange={()=> {dispatch(Action.selectActionDir(props.selectedStone,5))}}/>
                    </Form.Group>
                    <Form.Group label="액션 방법">
                        <Form.Radio label="없음" name="method" onChange={()=> {dispatch(Action.selectActionMethod(props.selectedStone,0))}}/>
                        <Form.Radio label="뒤집기" name="method" onChange={()=> {dispatch(Action.selectActionMethod(props.selectedStone,1))}}/>
                    </Form.Group>
                </Grid.Col>
                {/* <Grid.Col>
                <Text size="h2">엔딩 규칙</Text>
                    <Form.Group>
                        <Form.Radio label="보드판이 가득 찼을 경우" name="ending"/>
                        <Form.Radio label="한쪽 유저의 돌만 남았을 경우" name="ending"/>
                    </Form.Group>
                </Grid.Col> */}
            </Grid.Row>
            <Button className="mt-4" color="primary">문제 만들기</Button>
        </React.Fragment>
    )
    
}

export default Stone;