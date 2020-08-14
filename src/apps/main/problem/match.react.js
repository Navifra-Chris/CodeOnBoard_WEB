// @flow

import * as React from "react";
import axios from 'axios';
import { Card, Page, Grid, Avatar, Text } from "tabler-react";
import { useSelector } from "react-redux"
import SiteWrapper from "apps/main/SiteWrapper.react";
import ProblemNav from "apps/main/problem/problemNav.react"

export const match = ({match}) => {
    return(
        <SiteWrapper>
            <Page.Content>
                <ProblemNav id={match.params.id} />
                    <Grid.Row>
                        <Grid.Col>
                            <Card xl={4} className="mt-8 modal-dialog-centered" title="user 1">
                                <Avatar className= "mt-2" icon="users" size="xxl"/>
                                <Text className="mt-1" size="h2">user1</Text>
                            </Card>
                            
                        </Grid.Col>
                        <Grid.Col>
                            <Card xl={4} body="대전"></Card>
                        </Grid.Col>
                        <Grid.Col>
                            <Card xl={4} className="mt-8 modal-dialog-centered" title="user 2">
                                <Avatar className= "mt-2" icon="users" size="xxl"/>
                                <Text className="mt-1" size="h2">user2</Text>
                            </Card>
                        </Grid.Col>
                    </Grid.Row>
            </Page.Content>
        </SiteWrapper>
    )
};

