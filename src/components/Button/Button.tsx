import { Component, MouseEvent } from 'react';
import './index.scss';

type ButtonProps = {
  name: string;
  number: string;
  onClick: (e: MouseEvent) => void;
};

type ButtonState = {};

class Button extends Component<ButtonProps, ButtonState> {
  constructor(props: ButtonProps) {
    super(props);
  }

  render() {
    const { name, number, onClick } = this.props;
    return (
      <>
        <button
          id={number}
          name={name}
          className={'number-buttons'}
          onClick={onClick}>
          {number}
        </button>
      </>
    );
  }
}

export default Button;
