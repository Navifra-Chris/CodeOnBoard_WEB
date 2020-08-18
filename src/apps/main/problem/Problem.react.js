// @flow

import * as React from "react";
import axios from 'axios';
import { Alert, Page, Grid } from "tabler-react";
import SiteWrapper from "../SiteWrapper.react";
import ProblemNav from "../../main/problemNav.react"
import ProblemViewer from "../../main/problem/components/ProblemViewer.react"
import CodeEditor from "../../main/problem/components/CodeEditor.react"
import { useSelector, useDispatch } from "react-redux"
import * as Action from "../../store/actions/problem.action";
import "../Home.css"
function Problem( {match} ) {
    // const selectedId = window.localStorage.getItem('userName'); Change "/codes/my" to "/codes/userName"
    const problemId = document.location.href.split("problem/")[1]

    const dispatch = useDispatch();
    const problemIsSubmit = useSelector(state => state.problem.isSubmit, []);
    const problemDesc = useSelector(state => state.problem.desc, []);
    
    let _alert;
    if(problemIsSubmit === true){
        console.log("ALERT")
        _alert = <Alert type="success" icon="check">제출 완료</Alert>
    }

    React.useEffect(() => {
        axios
        .get(`https://cors-anywhere.herokuapp.com/http://203.246.112.32:8000/api/v1/problem/${problemId}`,{})
        .then(response =>{
            dispatch(Action.getDescription(response.data.description))
        })
    },[]);
    
    return(
        <SiteWrapper>
            <Page.Content className="min-width">
            <ProblemNav id={match.params.id}/>
            {_alert}
                <Grid.Row>
                    <Grid.Col sm={6} lg={6} className="problem">
                        <ProblemViewer desc={problemDesc} />
                    </Grid.Col>
                    <Grid.Col sm={6} lg={6} className="problem">
                        <CodeEditor mode="post"></CodeEditor>                        
                    </Grid.Col>
                </Grid.Row>
            </Page.Content>
            
        </SiteWrapper>
    )
}

export default Problem;