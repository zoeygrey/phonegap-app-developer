import React from 'react';
import Tappable from 'react-tappable';
import classNames from 'classnames';

import './index.less';

export default React.createClass({

  displayName: 'PGButton',

  propTypes: {
    children: React.PropTypes.any,
    onClick: React.PropTypes.func.isRequired,
    style: React.PropTypes.object,
  },

  onClickHandler(e) {
    e.preventDefault();
  },

  render() {
    const { children, onClick, style } = this.props;
    const cx = classNames({
      pgbutton: true,
    });
    return (
      <Tappable component="a" classBase="pgbutton" style={ style }
        className={ cx } onClick={ onClick }
      >
        { children }
      </Tappable>
    );
  },
});
