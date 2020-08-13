// @flow

import * as React from "react";
import axios from 'axios';
import { Card, Page, Grid } from "tabler-react";
import { useSelector } from "react-redux"
import SiteWrapper from "../SiteWrapper.react";
import { Document, Page as pdf_page} from "react-pdf";
import ProblemNav from "apps/main/problem/problemNav.react"
import ProblemViewer from "apps/main/problem/components/ProblemViewer.react"
import CodeEditor from "apps/main/problem/components/CodeEditor.react"

function Problem( {match} ) {
    // const selectedId = window.localStorage.getItem('userName'); Change "/codes/my" to "/codes/userName"
    const selectedProblemId = window.localStorage.getItem("selectedProblemId")
    const selectedNavId = useSelector(state => state.problem.selected_nav_id, []);
    console.log("===> selected nav id", selectedNavId);
    
    const [problem, setProblem] = React.useState([]);

    React.useEffect(() => {
        axios
        .get(`https://cors-anywhere.herokuapp.com/http://203.246.112.32:8000/api/v1/problem/${selectedProblemId}`,{})
        .then(response =>
            // {_desc = response.data.description
            {setProblem(response.data);
        })
    },[]);
    
    return(
        <SiteWrapper>
            <Page.Content>
                {console.log("problem ==>",problem)}
                <ProblemNav id={match.params.id}/>
                <Grid.Row>
                    <Grid.Col sm={6} lg={6}>
                        <ProblemViewer desc={problem.description} />
                    </Grid.Col>
                    <Grid.Col sm={6} lg={6}>
                        <CodeEditor mode="post"></CodeEditor>                        
                    </Grid.Col>
                </Grid.Row>



            </Page.Content>
            
        </SiteWrapper>
    )
}

export default Problem;