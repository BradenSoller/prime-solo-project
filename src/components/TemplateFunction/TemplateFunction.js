import React, { useState } from 'react';
import useReduxStore from '../../hooks/useReduxStore';

// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name TemplateFunction with the name for the new component.
function TemplateFunction(props) {
  // Using hooks we're creating local state for a "heading" variable with
  // a default value of 'Functional Component'
  const store = useReduxStore();
  const [heading, setHeading] = useState('Functional Component');

  return (
    <div>
      <h2>{heading}</h2>
    </div>
  );
}

export default TemplateFunction;
