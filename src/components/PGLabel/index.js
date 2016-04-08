import React from 'react';
import classNames from 'classnames';

import './index.less';

export default React.createClass({

  displayName: 'PGLabel',

  propTypes: {
    children: React.PropTypes.any,
  },

  render() {
    const cx = classNames({
      pglabel: true,
    });
    return (
      <div className={ cx }>{ this.props.children }</div>
    );
  },
});
