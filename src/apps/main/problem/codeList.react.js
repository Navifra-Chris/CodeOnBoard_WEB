// @flow

import * as React from "react";
import axios from 'axios';
import { Button, Page } from "tabler-react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import SiteWrapper from "apps/main/SiteWrapper.react";
import ProblemNav from "apps/main/problem/problemNav.react"
import * as Action from "apps/store/actions/codeList.action";

export const CodeList = ({match}) => {
    const dispatch = useDispatch();
    const userId = 2
    const problemId = 1
    const { codeList } = useSelector(state => ({ 
        codeList: state.codeList.codeList,
    }))


    function getCodeList(){
        console.log("==> getcodelist");
        axios.get(`http://203.246.112.32:8000/api/v1/code/?author=${userId}&problem=${problemId}`)
        .then(response => {
            dispatch(Action.setCodeList(response.data.results))
            // console.log(Object.keys(codeList).length);
            console.log(codeList)
    
        })
    }

    return(
        <SiteWrapper>
            <Page.Content>
                <ProblemNav id={match.params.id} />
                    <h1> code </h1>
                    <Button onClick={getCodeList}></Button>
            </Page.Content>
        </SiteWrapper>
    )
};

