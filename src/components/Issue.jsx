import React, { Component, useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { loadData } from '../utils/loadData';
import Styled from 'styled-components';

const Issue = () => {
    const [issue, setIssue] = useState(null);

    useEffect(() => {
        const getIssue = async () => {
            const { issue_number } = this.props.match.params;
            const url = `https://api.github.com/repos/facebook/create-react-app/issues/${issue_number}`
            const issue = await loadData(url);
            setIssue(issue)
        }

        getIssue()
    }, []);

    return (
        <IssueWrapper>
            <h1 className="title">{issue.title}</h1>
            <div className="morph">
                <ReactMarkdown
                    source={issue.body}
                    escapeHtml={false}
                />
            </div>
        </IssueWrapper>
    )
}

const IssueWrapper = Styled.div`
    max-width: 900px;
    margin: 25px;
`

export default Issue;