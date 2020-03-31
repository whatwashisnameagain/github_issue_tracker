import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import { Title } from 'bloomer';
import Styled from 'styled-components';
import { loadData } from '../utils/loadData';

const Details = Styled.div`
    width: 100%;
`

class Issue extends Component {
    state = {
        issue: []
    }

    async componentDidMount() {
        const { issue_number } = this.props.match.params;
        const url = `https://api.github.com/repos/facebook/create-react-app/issues/${issue_number}`
        const issue = await loadData(url);

        this.setState({
            issue
        })
    }

    render() { 
        const { issue } = this.state;
        return (
            <Details>
                <Title
                    isSize={2}
                    tag="h1"
                >
                    {issue.title}
                </Title>
                <ReactMarkdown
                    source={issue.body}
                    escapeHtml={false}
                />
            </Details>
        )
    }
}

export default Issue;