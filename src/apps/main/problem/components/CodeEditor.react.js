import { UnControlled as CodeMirror } from 'react-codemirror2';
import * as React from "react";
import './CodeMirror.css';
import { Grid, Button, Text } from 'tabler-react';
import "./CodeEditor.css";
import axios from "axios";

var header = {
  'Authorization' : 'jwt ' + window.localStorage.getItem('jwt_access_token')
}





 
function CodeEditor(props)  {
    {console.log("===> Editor", props)}
    const mode = props.mode;
    const [code, setCode] = React.useState(null)
    const [codeName, setCodeName] = React.useState(null)
    const [userId, setUserId] = React.useState(1)
    const [languageId, setLanguageId] = React.useState(1)
    const [problemId, setProblemId] = React.useState(1)

    let button;
    if(mode == "post"){
      button = <Button onClick={codePost}>제출</Button>
    }
    else if(mode == "edit"){
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
      alert("post")
      console.log("Post data==>", data)
      axios
      .post("https://cors-anywhere.herokuapp.com/http://203.246.112.32:8000/api/v1/code/", data) // TODO: header 추가
      .then(response =>{
        console.log("complete", response)
        alert("제출 완료")
      })
      .catch(error => {
        alert("error!")
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
              <select padding-bottom="10px">
                <option value="" selected disabled>Language</option>
                <option value="python">Python</option>
                <option value="cpp">C++</option>
                <option value="c">C</option>
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
                setCode(value);
              }}
              />
            </Grid.Col>
            <Grid.Row className="pt-2">
              <Grid>
                <textarea 
                  placeholder="Code Name" 
                  value={codeName} 
                  onChange={(e) => {
                  setCodeName(e.target.value)
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