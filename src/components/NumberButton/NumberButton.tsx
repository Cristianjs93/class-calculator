import { Component, MouseEvent } from 'react';
import './index.scss';

type NumberButtonProps = {
  name: string;
  number: string;
  handleCLick: (e: MouseEvent<HTMLButtonElement>) => void;
};
type NumberButtonState = {
  count: number;
};

class NumberButton extends Component<NumberButtonProps, NumberButtonState> {
  constructor(props: NumberButtonProps) {
    super(props);
  }

  render() {
    const { name, number, handleCLick } = this.props;
    return (
      <>
        <button
          id={number}
          name={name}
          className={'number-buttons'}
          onClick={handleCLick}>
          {number}
        </button>
      </>
    );
  }
}

export default NumberButton;
