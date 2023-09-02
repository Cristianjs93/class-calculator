import { Component } from 'react';
import './index.scss';

type ScreenProps = {
  value: any;
};

class Screen extends Component<ScreenProps> {
  constructor(props: ScreenProps) {
    super(props);
  }

  render() {
    const { value } = this.props;
    console.log(typeof value);

    return <div className='screen'>{value}</div>;
  }
}

export default Screen;
