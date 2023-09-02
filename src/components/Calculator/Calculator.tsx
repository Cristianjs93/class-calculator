import { Component, MouseEvent } from 'react';
import NumberButton from '../NumberButton/NumberButton';
import './index.scss';

type CalculatorState = {
  value: string;
};

export default class Calculator extends Component<{}, CalculatorState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      value: '',
    };
  }

  handleClick = (e: MouseEvent<HTMLButtonElement>): void => {
    const { id: targetId } = e.currentTarget;

    this.setState(() => ({
      value: this.state.value + `${targetId}`,
    }));
  };

  handleEqual = (e: MouseEvent<HTMLButtonElement>): void => {
    const { id } = e.currentTarget;

    if (this.state.value.slice(-2) == '/0') {
      return this.setState(() => ({
        value: 'error',
      }));
    }

    id == 'equal' &&
      this.setState(() => ({ value: eval(this.state.value).toString() }));

    id == 'reset' && this.setState(() => ({ value: '' }));
  };

  handleDelete = (): void => {
    this.setState(() => ({
      value: this.state.value.slice(0, -1),
    }));
  };

  render() {
    return (
      <div className='calc-container'>
        <div className='calc-container__display'>{this.state.value}</div>

        <div className='calc-container__buttons'>
          <div className='calc-container__box'>
            <div className='calc-container__buttons__numbers'>
              {['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'].map(
                (item: string) => (
                  <div
                    key={item}
                    className='calc-container__buttons__numbers__small'>
                    <NumberButton
                      name='digit'
                      number={item}
                      handleCLick={this.handleClick}
                    />
                  </div>
                )
              )}
              <div className='calc-container__buttons__numbers__small'>
                <NumberButton
                  name='point'
                  number='.'
                  handleCLick={this.handleClick}
                />
              </div>

              <div className='calc-container__buttons__numbers__small'>
                <NumberButton
                  name='operator'
                  number='/'
                  handleCLick={this.handleClick}
                />
              </div>
            </div>

            <div className='calc-container__buttons__operators'>
              {['del', '+', '-', '*'].map((item: string, index: number) => (
                <div
                  key={index + 1}
                  className='calc-container__buttons__numbers__small--column'>
                  <button
                    name='operator'
                    id={item}
                    className={
                      item == 'del'
                        ? 'calc-container__buttons__operators__simbol--select'
                        : 'calc-container__buttons__operators__simbol'
                    }
                    onClick={index == 0 ? this.handleDelete : this.handleClick}
                    disabled={index == 0 && this.state.value == ''}>
                    {item}
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className='calc-container__buttons__results'>
            {['reset', '='].map((item: string, index: number) => (
              <button
                key={index + 1}
                id={index == 0 ? 'reset' : 'equal'}
                name='result'
                className={
                  index == 0
                    ? 'calc-container__buttons__results__wide-button--blue'
                    : 'calc-container__buttons__results__wide-button--red'
                }
                onClick={this.handleEqual}>
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
