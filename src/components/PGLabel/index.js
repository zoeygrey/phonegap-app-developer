import React from 'react';
import classNames from 'classnames';

import './index.less';

export default React.createClass({

  displayName: 'PGLabel',

  propTypes: {
    children: React.PropTypes.any,
    style: React.PropTypes.object,
  },

  render() {
    const cx = classNames({
      pglabel: true,
    });
    const { style } = this.props;
    return (
      <div className={ cx } style={ style }>
        { this.props.children }
      </div>
    );
  },
});
