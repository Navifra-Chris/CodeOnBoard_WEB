// @flow

import * as React from "react";
import axios from 'axios';
import { Button, Page, Card, Table, Loader } from "tabler-react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import SiteWrapper from "./SiteWrapper.react";
import ProblemNav from "./problemNav.react"
import * as Action from "../store/actions/codeList.action";
import SelfBattle from "./selfBattle/selfBattle.react"

function CodeList({match}) {
    const dispatch = useDispatch();
    const userId = 2
    const _problemId = 1
    const { codeList } = useSelector(state => ({ 
        codeList: state.codeList.codeList,
    }))

    var _list = codeList!==null?
        <Table.Body>{codeList.map(code => {
            return(
            <Table.Row key={code.id}>
                <Table.Col className="tb">
                    {`${code.name}`}
                </Table.Col>
                <Table.Col className="tb">
                    {`${code.date.split('T')[0]} ${code.date.split('T')[1].split('.')[0]}`}
                </Table.Col>
                <Table.Col className="tb">
                    {`${code.language}`}
                </Table.Col>
                <Table.Col className="tb">
                    {code.available_game===true?`가능`:`불가능`}
                </Table.Col>
                <Table.Col className="tb">
                    <Button color="primary" RootComponent="a" href="/problem/1" onClick={()=>{
                        window.localStorage.setItem("codeMode", "update")
                        window.sessionStorage.setItem("selectedCodeId", code.id);
                        window.sessionStorage.setItem("selectedCodeLanguageId", code.language);
                    }}>수정
                    </Button>
                </Table.Col>
                <Table.Col className="tb">
                    <SelfBattle available={code.available_game} problemId={_problemId} codeId={code.id}></SelfBattle>
                </Table.Col>
            </Table.Row>
            )
        })}
        </Table.Body>
        :<tbody></tbody>
    
    
    function getCodeList(){
        console.log("==> getcodelist");
        axios.get(`http://203.246.112.32:8000/api/v1/code/?author=${userId}&problem=${_problemId}`)
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
                    <Card className="mt-4">
                        <Table>
                            <Table.Header>
                                <tr>
                                <Table.ColHeader className="th">이름</Table.ColHeader>
                                <Table.ColHeader className="th">제출 날짜</Table.ColHeader>
                                <Table.ColHeader className="th">언어</Table.ColHeader>
                                <Table.ColHeader className="th">게임 가능 여부</Table.ColHeader>
                                <Table.ColHeader className="th">수정</Table.ColHeader>
                                <Table.ColHeader className="th">코드와 대전하기</Table.ColHeader>
                                </tr>
                            </Table.Header>
                            {_list}
                        </Table>
                    </Card>
            </Page.Content>
        </SiteWrapper>
    )
};

export default CodeList;