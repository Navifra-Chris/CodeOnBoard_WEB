import * as React from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import * as Action from "../../../store/actions/addProblem.action"
import { Text, Grid, Form} from "tabler-react";

function Stone(props){
    const dispatch = useDispatch();

    const { placementRule, actionRule } = useSelector(state => ({
        placementRule:state.addProblem.rules[props.selectedStone].placementRule,
        actionRule:state.addProblem.rules[props.selectedStone].actionRule
    }));

    var placementDir = null

    if(placementRule === 0){
        placementDir = <React.Fragment>
                            <Form.Group label="착수 방향" className="mr-4">
                                <Form.Radio label="4방"/>
                                <Form.Radio label="대각선"/>
                                <Form.Radio label="8방"/>
                                <Form.Radio label="커스텀"/>
                            </Form.Group>
                        </React.Fragment>
    
    }
    else if(placementRule === 1){
        placementDir = <React.Fragment>
                            <Form.Group label="착수 방향" className="mr-4">
                                <Form.Radio label="4방"/>
                                <Form.Radio label="대각선"/>
                                <Form.Radio label="8방"/>
                            </Form.Group>
                        </React.Fragment>
    }   
    else{
        placementDir = 
                        <React.Fragment>
                        <Form.Group label="착수 방향(이동)" className="mr-4">
                            <Form.Radio label="4방"/>
                            <Form.Radio label="대각선"/>
                            <Form.Radio label="8방"/>
                            <Form.Radio label="커스텀"/>
                        </Form.Group>
                        <Form.Group label="착수 방향(추가)">
                            <Form.Radio label="4방"/>
                            <Form.Radio label="대각선"/>
                            <Form.Radio label="8방"/>
                        </Form.Group>
                        </React.Fragment>
    }
                                            
    
    return(
        <React.Fragment>
            <h1>Stone : {props.selectedStone}</h1>
            <Grid.Row className="mb-4">
            <Text size="h2">착수 규칙</Text>
            </Grid.Row>
            <Grid.Row>
                <Grid.Col></Grid.Col>
                <Form.Group label="착수 종류" className="mr-4">
                    <Form.Radio label="이동" value="option1" name="kind" onChange={()=> {dispatch(Action.selectPlacementRule(props.selectedStone,0))}}/>
                    <Form.Radio label="추가" value="option2" name="kind" onChange={()=> {dispatch(Action.selectPlacementRule(props.selectedStone,1))}}/>
                    <Form.Radio label="둘다" value="option3" name="kind" onChange={()=> {dispatch(Action.selectPlacementRule(props.selectedStone,2))}}/>
                </Form.Group>
                {placementDir}
            </Grid.Row>
        </React.Fragment>
    )
    
}

export default Stone;