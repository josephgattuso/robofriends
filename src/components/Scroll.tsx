import * as React from 'react';

type Props = {
  children?: JSX.Element
}

const Scroll = (props: Props) => {
  return (
    <div style={{
      overflow: 'scroll', borderTop: '5px solid deepPink', height: "80vh",
      margin: "5vh 0",
      padding: "5vh 0",
    }}>
      {props.children}
    </div>
  );
};

export default Scroll;
