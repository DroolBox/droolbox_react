
import React, { PureComponent } from 'react';
import { string } from 'prop-types';
import { css } from 'aphrodite';

import styles from '../styles';

export default class Chat extends PureComponent {
  static propTypes = {
    colour: string.isRequired
  }

  static defaultProps = {
    colour: '#000'
  }

  render() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="10"
        height="10"
        viewBox="0 0 8 8"
        className={css(styles.svg)}
        style={{
          color: this.props.colour
        }}
      >
        <path d="M0 0v5l1-1h1v-3h3v-1h-5zm3 2v4h4l1 1v-5h-5z" />
      </svg>
    );
  }
}
