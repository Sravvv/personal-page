import React, { useState } from "react";
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import './Main.css'

function Resume(props) {
    return (
        <div className={(props.current === 'Resume') ? 'divActive' : 'divInactive'} debug="true"> 
            <Document file="./draft1dot5.pdf">
                <Page pageNumber={1} className="resumeText" />
            </Document>
        </div>
    );
}

export default Resume;



