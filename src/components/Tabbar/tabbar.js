import React, { Component } from 'react';

import { TabbarNavigation } from '../Tabbar__navigation';

import './tabbar.css';

export class Tabbar extends Component {
    state = {
        activeTab: null,
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
            <TabbarNavigation
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
            <div className='tabbar'>
                <div className='tabbar__navigation'>
                    {this.renderTabs()}
                </div>
                <div className='tab-container'>
                    {React.Children.map(children, child => React.cloneElement(child, { activeTab }))}
                </div>
            </div>
        )
    }
} 