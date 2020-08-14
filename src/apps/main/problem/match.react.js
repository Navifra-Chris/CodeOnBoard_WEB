// @flow

import * as React from "react";
import axios from 'axios';
import { Card, Page, Grid, Avatar, Text, GalleryCard, Loader, Dropdown, Button } from "tabler-react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import SiteWrapper from "apps/main/SiteWrapper.react";
import ProblemNav from "apps/main/problem/problemNav.react"
import * as Action from "apps/store/actions/match.action";
import "../../../../node_modules/tabler-react/dist/Tabler.css"
import "../Home.css"

export const Match = ({match}) => {
    const dispatch = useDispatch();
    const tmp = document.location.href.split("match/")
    var problemId = window.localStorage.getItem("selectedProblemId")
    if(tmp[1] !== problemId){
        problemId = tmp[1]
    }
    // const userId = window.localStorage.getItem("userId")
    const userId = 2
    var challengerInfo = {}
    var challengerInfoInProblem = {}
    var problem = {}

    const { tier, score, language, thumbnail, codeList } = useSelector(
        state => ({
            tier: state.match.tier,
            score: state.match.score,
            language: state.match.language,
            thumbnail: state.match.thumbnail,
            codeList: state.match.codeList,
        }),
        shallowEqual
      );

    function getProblem(problemId){
        axios
        .get(`https://cors-anywhere.herokuapp.com/http://203.246.112.32:8000/api/v1/problem/${problemId}`,{})
        .then(response =>{
            problem = response.data
            dispatch(Action.setThumbnail(problem.thumbnail))
        })
        .catch( () =>{

        })
    }

    function getUserInfo(userId){
        axios.get(`https://cors-anywhere.herokuapp.com/http://203.246.112.32:8000/api/v1/userfullInfo/${userId}`, {})
        .then(response => {
        //    getUserTier(userid,problemid,type,response.data.username, language);
            challengerInfo = response.data.userInfo
            dispatch(Action.setLanguage(challengerInfo.language))
        })
        .catch(error => {
           // console.log(error);
        })
  
    }

    function getUserInfoInProblem(userId, problemId){
        axios.get(`http://203.246.112.32:8000/api/v1/userInformationInProblem/?user=${userId}&problem=${problemId}`, {})
        .then(response => {
        //    getUserTier(userid,problemid,type,response.data.username, language);
            challengerInfoInProblem = response.data.results[0]
            dispatch(Action.setTier(challengerInfoInProblem.tier))
            dispatch(Action.setScore(challengerInfoInProblem.score))
        })
        .catch(error => {
           // console.log(error);
        })
  
    }

    function getCodeList(userId, problemId){
        axios.get(`http://203.246.112.32:8000/api/v1/code/?author=${userId}&problem=${problemId}&available_game=true`)
        .then(response => {
            dispatch({ type : "GET_CODELIST", payload :response.data.results})
            // if(codeList.length > 10){
            //     dispatch(Action.getCodeList(codeList.slice(codeList.length-10, codeList.length)))
            // }
            console.log("Code List ==>", codeList)
        })
    }
    // function matching(useriD, problemId, codeId){
    //     if (isMatched){
    //        return;
    //     }
    //     const config = {
    //        'method' : 'POST',
    //        'url': 'http://203.246.112.32:8000/api/v1/match/',
    //        'headers': {
    //           'Authorization' : 'jwt ' + window.localStorage.getItem('jwt_access_token')
    //         },
    //        'data': {
    //           'userid': userid,
    //           'problemid': problemid,
    //           'codeid': codeid
    //        } 
    //     }
        
    //     axios(config)
    //     .then(response => {
  
    //        var data = response.data;
    //        // console.log(data.error);
    //        if(data.error === undefined){
    //           getUserInfo(data.challenger, data.problem, "challenger",data.challenger_language);
    //           getUserInfo(data.opposite, data.problem, "opposite", data.opposite_language);
              
    //           setGameid(data.match_id);
    //           setIsMatched(true);
    //           setGameStatus('playing...');
    //        }
    //        else{
    //           setGameStatus(`${data.error}`);
    //        }
  
          
    
    //     })
    //     .catch(error => {
    //        // console.log(`match error : ${error.data}`);
    //        setGameStatus('matching error...!');
    //     })
    //  }

    React.useEffect(() => {
        getUserInfo(userId);
        getUserInfoInProblem(userId, problemId)
        getProblem(problemId)
        getCodeList(userId, problemId)
        console.log("asdasd",codeList)
     },[]);
    

    return(
        <SiteWrapper>
            
            <Page.Content>
                <ProblemNav id={match.params.id} />
                    <Grid.Row>
                        <Grid.Col>
                            <Card xl={4} className="mt-8 modal-dialog-centered" title="user 1">
                                <Avatar className= "mt-2" icon="users" size="xxl"/>
                                <Text className="mt-1 " size="h2">User1</Text>
                                <Text className="mt-1" size="h4">Tier : {tier}</Text>
                                <Text className="mt-1" size="h4">Score : {score}</Text>
                                <Text className="mt-1" size="h4">Language : {language}</Text>
                                <Text className="mt-1" size="h4">Win : 20</Text>
                                <Text className="mt-1" size="h4">Lose : 10</Text>
                            </Card>
                        </Grid.Col>
                        <Grid.Col>
                            <Card xl={4} className="modal-dialog-centered">대전
                                <GalleryCard className="p-0">
                                    <GalleryCard.Image
                                        src={thumbnail}>       
                                    </GalleryCard.Image>
                                </GalleryCard>
                                <Loader className="mb-4"></Loader>
                                <Dropdown
                                    type="button"
                                    toggle={false}
                                    color="primary"
                                    triggerContent="Select your code"
                                    itemsObject={[
                                        {
                                        value: "Profile",
                                        },
                                        { isDivider: true },
                                        { value: "Logout" },
                                    ]}
                                >
                                </Dropdown>
                                <Button className="mt-5" >매칭 시작</Button>
                            </Card>
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

