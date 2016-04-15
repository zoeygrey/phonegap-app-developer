import React from 'react';
import classNames from 'classnames';

import './index.less';

export default React.createClass({

  displayName: 'PGButton',

  propTypes: {
    children: React.PropTypes.any,
    style: React.PropTypes.object,
  },

  onClickHandler(e) {
    e.preventDefault();
  },

  render() {
    const { children, style } = this.props;
    const cx = classNames({
      pgbutton: true,
    });
    return (
      <a style={ style } className={ cx } href="#" onClick={ this.onClickHandler }>
        { children }
      </a>
    );
  },
});
