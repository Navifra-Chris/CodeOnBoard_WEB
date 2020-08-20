// @flow

import * as React from "react";
import axios from 'axios';
import { Button, Page, Card, Table, Loader } from "tabler-react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import SiteWrapper from "../SiteWrapper.react"
import ProblemNav from "../problemNav.react"

function RankingProblem({match}) {
    const problemId = document.location.href.split("rankingProblem/")[1]

    React.useEffect(()=>{
        axios.get(`http://203.246.112.32:8000/api/v1/rank/?problem=${problemId}`)
          .then((response)=>{
              console.log(response.data);
          })
          .catch((error)=>{
              console.log(error);
          });
    },[]);

    return(
        <SiteWrapper>
            <Page.Content>
                <ProblemNav id={match.params.id} />
                    <Card className="mt-4">
                        <Table>
                            <Table.Header className="th">
                                <tr>
                                <Table.ColHeader className="cth">순위</Table.ColHeader>
                                <Table.ColHeader className="cth">티어</Table.ColHeader>
                                <Table.ColHeader className="cth">이름</Table.ColHeader>
                                <Table.ColHeader className="cth">점수</Table.ColHeader>
                                </tr>
                            </Table.Header>
                        </Table>
                    </Card>
            </Page.Content>
        </SiteWrapper>
    )
};

export default RankingProblem;