
import React, { PureComponent } from 'react';

export default function delayUnmounting(Component) {
  return class extends PureComponent {
    state = {
      shouldRender: this.props.isMounted
    }

    componentWillReceiveProps(nextProps) {
      if (this.props.isMounted && !nextProps.isMounted) {
        setTimeout(() => this.setState({ shouldRender: false }), this.props.delayTime);
      } else if (!this.props.isMounted && nextProps.isMounted) {
        this.setState({ shouldRender: true });
      }
    }

    render() {
      return this.state.shouldRender ? <Component {...this.props} /> : null;
    }
  };
}
