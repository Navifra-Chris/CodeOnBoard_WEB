import { UnControlled as CodeMirror } from 'react-codemirror2';
import * as React from "react";
import './CodeMirror.css';
import "./CodeEditor.css";
import { Grid, Button } from 'tabler-react';
import axios from "axios";
import * as Action from "apps/store/actions/problem.action";
import { useDispatch, useSelector, shallowEqual } from "react-redux";


// var header = {
//   'Authorization' : 'jwt ' + window.localStorage.getItem('jwt_access_token')
// }

 
function CodeEditor(props)  {
    const dispatch = useDispatch();
    const tmp = document.location.href.split("match/")
    var problemId = window.localStorage.getItem("selectedProblemId")
    if(tmp[1] !== problemId){
        problemId = tmp[1]
    }
    //const userId = window.localStorage.getItem("userId")
    const userId = 1
    const mode = props.mode;
    const { code, codeName, languageId } = useSelector(
      state => ({
        code: state.problem.code,
        codeName: state.problem.codeName,
        languageId: state.problem.languageId,
      }),
      shallowEqual
    );
    
    {console.log("===> Editor", code, codeName)}

    let button;
    if(mode === "post"){
      button = <Button onClick={codePost}>제출</Button>
    }
    else if(mode === "edit"){
      button = <Button onClick={codePatch}>수정</Button>
    }

    function codePost(){
      var data = {
        author: userId,
        code : code,
        language : languageId,
        problem: problemId,
        name : codeName
      }
      console.log("Post data==>", data)
      axios
      .post("https://cors-anywhere.herokuapp.com/http://203.246.112.32:8000/api/v1/code/", data) // TODO: header 추가
      .then(response =>{
        dispatch(Action.submit(true))
      })
      .catch(error => {
        alert("제출 실패")
      })
    }

    function codePatch(){
      var data = {
        author: userId,
        code : code,
        language : languageId,
        problem: problemId,
        name : codeName
      }
      alert("수정 완료")
    }

    return(
        <React.Fragment >
          <Grid.Row justifyContent="center">
            <Grid.Col className="offsetSelect">
              <select value={languageId} padding-bottom="10px" 
              onChange={(e) => {
                dispatch(Action.setLanguage(e.target.value))
              }}>
                <option value="" selected disabled>Language</option>
                <option value={1}>Python</option>
                <option value={2}>C</option>
                <option value={3}>C++</option>
              </select>
            </Grid.Col>
            <Grid.Col>
              <CodeMirror
              autoCursor={false}
              value={code}
              options={{
                mode: window.localStorage.getItem('editor_type'),
                theme: "material",
                lineNumbers: true
              }}
              onChange={(editor, data, value) => {
                dispatch(Action.writeCode(value));
              }}
              />
            </Grid.Col>
            <Grid.Row className="pt-2">
              <Grid>
                <textarea 
                  placeholder="Code Name" 
                  value={codeName} 
                  onChange={(e) => {
                  dispatch(Action.writeCodeName(e.target.value));
                }}/>
              </Grid>
              <Grid.Col className="pt-2">
                {button}
              </Grid.Col>
            </Grid.Row>
          </Grid.Row>
        </React.Fragment>   
    )
}

export default CodeEditor;