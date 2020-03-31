import React from 'react';
import Styled from 'styled-components';

const IssueItem = Styled.li`
    background: #ddd;
    margin: 10px;
    padding: 10px;
`

const Issue = props => {

    const issue = props.data;

    return (
        <IssueItem key={ issue.id }>
            <h2>{ issue.title }</h2>
            <p>
                <a href={issue.url}>{issue.url}</a>
            </p>
            <p>{ issue.body }</p>
        </IssueItem>
    )
}

export default Issue;