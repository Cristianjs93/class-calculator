import { Component } from 'react';
import './index.scss';

type ScreenProps = {
  value: any;
};

type ScreenState = {};

class Screen extends Component<ScreenProps, ScreenState> {
  constructor(props: ScreenProps) {
    super(props);
  }

  render() {
    const { value } = this.props;

    return <div className='screen'>{value}</div>;
  }
}

export default Screen;
