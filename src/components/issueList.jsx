import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Issue from './Issue';
import { loadData } from "../utils/loadData";
import Styled from 'styled-components';

const List = Styled.ul`
    list-style: none;
`

const IssueItem = Styled.li`
    background: #eee;
    box-shadow: 2px 2px 5px #ccc;
    margin: 15px;
    padding: 25px;
`

class IssueList extends Component {
    state = {
        issues: []
    };

    async componentDidMount() {
        const url = `https://api.github.com/repos/facebook/create-react-app/issues`;
        const issues = await loadData(url);

        this.setState({
            issues
        });
    }

    render() { 

        const { issues } = this.state;

        return (
            <List>
                {issues.map(issue => (
                    <IssueItem key={issue.id}>
                        {issue.title}
                        <br />
                        <Link to={`/issue/${issue.number}`}>
                            See Details
                        </Link>
                    </IssueItem>
                ))}
            </List>
        )
    }
}

export default IssueList;