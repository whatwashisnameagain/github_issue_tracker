import React from 'react';
import Styled from 'styled-components';

const IssueItem = Styled.li`
    background: #ddd;
    margin: 10px;
    padding: 10px;
`

const Issue = props => {
    const { data } = props;

    return (
        <IssueItem key={ data.id }>
            <h2>{ data.title }</h2>
            <p>
                <a href={data.url}>{data.url}</a>
            </p>
            <p>{ data.body }</p>
        </IssueItem>
    )
}

export default Issue;