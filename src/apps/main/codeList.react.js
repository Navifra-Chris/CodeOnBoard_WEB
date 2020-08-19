// @flow

import * as React from "react";
import axios from 'axios';
import { Button, Page, Card, Table, Loader } from "tabler-react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import SiteWrapper from "./SiteWrapper.react";
import ProblemNav from "./problemNav.react"
import * as Action from "../store/actions/codeList.action";
import { TableBody } from "@material-ui/core";

function CodeList({match}) {
    const dispatch = useDispatch();
    const userId = 2
    const problemId = 1
    const { codeList } = useSelector(state => ({ 
        codeList: state.codeList.codeList,
    }))

    var _list = codeList!==null?
        <TableBody>{codeList.map(code => {
            return(
            <Table.Row>
                <Table.Col>
                    {`${code.name}`}
                </Table.Col>
                <Table.Col>
                    {`${code.date.split('T')[0]} ${code.date.split('T')[1].split('.')[0]}`}
                </Table.Col>
                <Table.Col>
                    {`${code.language}`}
                </Table.Col>
                <Table.Col>
                    {code.available_game===true?`가능`:`불가능`}
                </Table.Col>
                <Table.Col>
                    <Button color="primary" RootComponent="a" href="/problem/1" onClick={()=>{
                        window.localStorage.setItem("codeMode", "update")
                        window.sessionStorage.setItem("selectedCodeId", code.id);
                        window.sessionStorage.setItem("selectedCodeLanguageId", code.language);
                    }}>
                        수정
                    </Button>
                </Table.Col>
            </Table.Row>
            )
        })}
        </TableBody>
        :<Loader></Loader>
    
    
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
                            <Table.Header>
                                <Table.ColHeader>이름</Table.ColHeader>
                                <Table.ColHeader>제출 날짜</Table.ColHeader>
                                <Table.ColHeader>언어</Table.ColHeader>
                                <Table.ColHeader>게임 가능 여부</Table.ColHeader>
                                <Table.ColHeader>수정</Table.ColHeader>
                            </Table.Header>
                            {_list}
                        </Table>
                    </Card>
            </Page.Content>
        </SiteWrapper>
    )
};

export default CodeList;