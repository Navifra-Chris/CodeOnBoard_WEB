// @flow

import * as React from "react";
import axios from 'axios';
import { Loader, Page } from "tabler-react";
import { useSelector } from "react-redux"
import SiteWrapper from "apps/main/SiteWrapper.react";
import ProblemNav from "apps/main/problem/problemNav.react"

export const Matchlog = ({match}) => {
    return(
        <SiteWrapper>
            <Page.Content>
                <ProblemNav id={match.params.id} />
                    <h1> matchlog </h1>
            </Page.Content>
        </SiteWrapper>
    )
};

