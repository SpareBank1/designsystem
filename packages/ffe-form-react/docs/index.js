import React from 'react';
import ReactDom from 'react-dom';
import {
    ErrorExample,
    FieldMessageSuccessExample,
    GeneratedIdExample,
    InputExample,
    TextAreaExample
} from './example-components';

import './example-style.less';

ReactDom.render(
    <div>
        <h1>ffe-form-react</h1>
        <InputExample />
        <TextAreaExample />
        <ErrorExample />
        <FieldMessageSuccessExample />
        <GeneratedIdExample />
    </div>,
    document.getElementById('app')
);
