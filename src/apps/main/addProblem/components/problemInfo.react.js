import * as React from "react";
import {Form} from "tabler-react";
import "../../Home.css"

function ProblemInfo(){
    
    return(
        <React.Fragment>
            <Form.Group label="문제 이름">
                <Form.Input 
                    placeholder="문제 이름"
                    className="input"
                />
            </Form.Group>
            <Form.Group label="제한 시간">
                <Form.Input
                    placeholder="0(ms)"
                    className="input"
                />
            </Form.Group>
            <Form.Group label="제한 메모리">
                <Form.Input
                    placeholder="0"
                    className="input"
                />
            </Form.Group>
        </React.Fragment>
    )
}

export default ProblemInfo;