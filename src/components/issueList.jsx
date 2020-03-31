import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Issue from './Issue';
import { loadData } from "../utils/loadData";
import Styled from 'styled-components';

const IssueItem = Styled.li`
    margin: 20px;
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
            <ul>
                {issues.map(issue => (
                    <Link to={`/issue/${issue.number}`}>
                        <IssueItem 
                            key={issue.id}
                            className="morph-active"
                        >
                            {issue.title}
                        </IssueItem>
                    </Link>
                ))}
            </ul>
        )
    }
}

export default IssueList;