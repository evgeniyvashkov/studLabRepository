import React, { Component } from 'react';

import { TabPanelList } from '../TabPanelList';

import './tabPanel.scss';

export class TabPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: null,
        }
    }

    componentDidMount() {
        const { children = [] } = this.props;

        const activeTab = this.getChildrenLabels(children)[0];

        this.setActiveTab(activeTab)
    }

    getChildrenLabels = (children) => {
        return children.map(({ props }) => props.label);
    }

    setActiveTab = (activeTab) => {
        const { activeTab: currenTab } = this.state;

        if (currenTab !== activeTab) {
            this.setState({
                activeTab
            })
        }
    }

    renderTabs = () => {
        const { children = [] } = this.props;
        const { activeTab } = this.state;

        return this.getChildrenLabels(children).map((navLabel) => (
            <TabPanelList
                key={navLabel}
                className={activeTab === navLabel ? 'active' : ''}
                navLabel={navLabel}
                onChangeActiveTab={this.setActiveTab}
            />
        ))
    }

    render() {
        const { activeTab } = this.state;
        const { children } = this.props;

        return (
            <div className="tab-panel">
                <div className="tab-panel__list">
                    {this.renderTabs()}
                </div>
                <div className="tab-panel__container">
                    {React.Children.map(children, child => React.cloneElement(child, { activeTab }))}
                </div>
            </div>
        )
    }
} 