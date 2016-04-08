import React from 'react';
import CSSTransitionGroup from 'react-addons-css-transition-group';

import PGLabel from 'components/PGLabel';

const App = React.createClass({

  displayName: 'App',

  propTypes: {
    children: React.PropTypes.object,
    location: React.PropTypes.object.isRequired,
  },

  render() {
    const {
      location: { pathname: key },
    } = this.props;
    const props = {
      key,
    };
    const emptyState = <PGLabel>PhoneGap Developer App</PGLabel>;
    return (
      <CSSTransitionGroup
        transitionEnterTimeout={ 300 }
        transitionLeaveTimeout={ 300 }
        transitionName="routetransition"
      >
        { React.cloneElement(this.props.children || emptyState, props) }
      </CSSTransitionGroup>
    );
  },
});

export default App;
