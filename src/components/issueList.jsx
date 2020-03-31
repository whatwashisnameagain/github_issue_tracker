import React, { Component } from 'react';
import Issue from './Issue';
import { loadData } from "../utils/loadData";
import Styled from 'styled-components';

const List = Styled.ul`
    list-style: none;
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
            { issues.map(issue => (
                    <Issue data={issue}/>
                ))}
            </List>
        )
    }
}

export default IssueList;