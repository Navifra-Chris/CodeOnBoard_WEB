// @flow

import * as React from "react";
import axios from 'axios';
import { Nav, Page } from "tabler-react";
import { useSelector } from "react-redux"
import SiteWrapper from "./SiteWrapper.react";
import { Document, Page as pdf_page} from "react-pdf";
import problem from "../store/reducers/problem.reducer"

function ProblemPage() {
    const selectedId = window.localStorage.getItem('selectedProblemId');
    console.log("====>", selectedId);

    const selected_nav_id = useSelector(state => state.problem.selected_nav_id, []);
    console.log("===> selected nav id", selected_nav_id);
    debugger;
    return(
        <SiteWrapper>
            <Page.Content>
                <Nav>
                    <Nav.Item value={selectedId + "번"} />
                    <Nav.Item to="http://www.example.com">제출</Nav.Item>
                    <Nav.Item value="대전" />
                    <Nav.Item value="리플레이"/>
                    <Nav.Item value="내코드"/>
                    <Nav.Item value="대전현황"/>
                </Nav>
            </Page.Content>
        </SiteWrapper>
    )
}

export default ProblemPage;