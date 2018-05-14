
import React, { PureComponent } from 'react';

export default class Circle extends PureComponent {
  bindElement = element => {
    this.props.bindElement(this.props.id, element);
  }

  render() {
    const { id, cx, cy, r } = this.props;
    return (
      <circle
        ref={this.bindElement}
        id={id}
        cx={cx}
        cy={cy}
        r={r}
        fill="url(#linear)"
      />
    );
  }
}
