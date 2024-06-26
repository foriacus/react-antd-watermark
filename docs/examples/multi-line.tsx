import React from 'react';
import Watermark from '../../src';

const App: React.FC = () => (
  <Watermark content={['Ant Design', 'Happy Working']} mulitiAlign="left">
    <div style={{ height: 500 }} />
  </Watermark>
);

export default App;
