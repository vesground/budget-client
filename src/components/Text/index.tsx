import React from 'react';

//Styles
import './index.css';

const Text = ({ children, ...props }: { children: string, props: any }) => {
  return (
    <p className='tr-paragraph'>
      {children}
    </p>
  );
};

export default Text;
