import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Avatar, Card } from '../src';

const App = () => {
  return (
    <div>
      <Avatar/>
      <Card children={undefined} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
