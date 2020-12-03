import React from 'react';

export default Component =>
    class WithToggle extends React.Component {
        state = {
            openId: false,
            showSection: false
        }

        toggleId = id => {
            this.setState(({ openId }) => ({
                openId: openId === id ? null : id
            }))
            this.setState({ showSection: false })
        }

        toggleSection = () => this.setState({ showSection: !this.state.showSection })

        render() {
            return <Component
                {...this.props}
                {...this.state}
                toggleId={this.toggleId}
                toggleSection={this.toggleSection} />
        }
    }
