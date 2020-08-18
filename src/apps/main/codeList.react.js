// @flow

import * as React from "react";
import axios from 'axios';
import { Button, Page, Card, Table, Tab } from "tabler-react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import SiteWrapper from "./SiteWrapper.react";
import ProblemNav from "./problemNav.react"
import * as Action from "../store/actions/codeList.action";

function CodeList({match}) {
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

    React.useEffect(() => {
        getCodeList()
    },[])

    return(
        <SiteWrapper>
            <Page.Content>
                <ProblemNav id={match.params.id} />
                    <h1> code </h1>
                    <Button onClick={getCodeList}>코드</Button>
                    <Card>
                        <Table>
                            <Table.Body>
                                <Table.Row>
                                    <Table.Col>
                                        {/* {codeList} */}
                                    </Table.Col>
                                    <Table.Col>
                                        2
                                    </Table.Col>
                                    <Table.Col>
                                        3
                                    </Table.Col>
                                </Table.Row>
                            </Table.Body>
                        </Table>
                    </Card>
            </Page.Content>
        </SiteWrapper>
    )
};

export default CodeList;