// @flow

import * as React from "react";
import axios from 'axios';
import { Nav, Page } from "tabler-react";
import { useSelector } from "react-redux"
import SiteWrapper from "../SiteWrapper.react";
import { Document, Page as pdf_page} from "react-pdf";
import ProblemNav from "apps/main/problem/problemNav.react"
import ProblemViewer from "apps/main/problem/components/ProblemViewer.react"

function Problem( {match} ) {
    // const selectedId = window.localStorage.getItem('userName'); Change "/codes/my" to "/codes/userName"
    const selectedProblemId = window.localStorage.getItem("selectedProblemId")
    const selectedNavId = useSelector(state => state.problem.selected_nav_id, []);
    console.log("===> selected nav id", selectedNavId);
    
    return(
        <SiteWrapper>
            <Page.Content>
                <ProblemNav id={match.params.id}/>
                    <ProblemViewer />
            </Page.Content>
            
        </SiteWrapper>
    )
}

export default Problem;