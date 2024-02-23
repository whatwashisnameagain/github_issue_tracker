import React, { Component, useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import Styled from 'styled-components';
import { loadData } from '../utils/loadData'

const IssueList = () => {
    const [issues, setIssues] = useState([]);

    useEffect(() => {
        const getIssues = async () => {
            const url = `https://api.github.com/repos/facebook/create-react-app/issues`;
            const issues = await loadData(url);
            setIssues(issues)
        };

        getIssues();
    }, [])

    return (
        <div className="flex-center">
            <h1 className="title">All Issues</h1>
            <ul>
                {issues.map(issue => (
                    // <Link to={`/issue/${issue.number}`}>
                        <IssueItem 
                            key={issue.id}
                            itemId={issue.id}
                            className="morph-active"
                        >
                            {issue.title}
                        </IssueItem>
                    // </Link>
                ))}
            </ul>
        </div>
    )
}

export default IssueList;

const IssueItem = Styled.li`
    margin: 25px;
    font-size: 1.2em;
    text-align:center;
    font-weight: 575;
    font-family: 'Rubik', sans-serif;
    padding: 15px;
`