import { Document, Page, pdfjs } from "react-pdf";
import * as React from "react";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function problemViewer()  {
    console.log("===> viewer")
    return(
        <h1>viewer</h1>
    )
}

export default problemViewer;