// @flow

import * as React from "react";
import axios from 'axios';
import { Nav, Page } from "tabler-react";
import { useSelector } from "react-redux"
import SiteWrapper from "./SiteWrapper.react";
import { Document, Page as pdf_page} from "react-pdf";

function ProblemPage() {
    const [problem, setProblem] = React.useState([])
    const selectedId = window.localStorage.getItem('selectedProblemId')
    console.log("====>", selectedId)
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