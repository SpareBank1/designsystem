import React from 'react';
import hash from 'nfe-hash';

const DescriptionListMultiCol = ({ children }) => {
  const pairs = [];

  React.Children.forEach(children, (child, i) => {
    const j = i % 2;
    if (j === 0) { pairs.push([]); }
    pairs[Math.floor(i/2)][j] = child;
  });

  return (
    <dl className="ffe-description-list ffe-description-list--multicolumn">
      {
        pairs.map(pair => (
          <div className="ffe-description-list--multicolumn__avoid-break" key={hash(pairs)}>
            { pair[0] }
            { pair[1] }
          </div>
        ))
      }
    </dl>
  );
};

DescriptionListMultiCol.propTypes = {
  children: React.PropTypes.node.isRequired,
};

export default DescriptionListMultiCol;