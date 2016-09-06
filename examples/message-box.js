import React from 'react';
import { render } from 'react-dom';
import { SuccessMessage, ErrorMessage, InfoMessage, TipsMessage } from '../src/index.js';

require('./example.less');

const heading = document.createElement('h1');
heading.textContent = 'Message Box';
heading.className = 'ffe-h1';
document.body.appendChild(heading);

const messageBoxDOM = document.createElement('section');
document.body.appendChild(messageBoxDOM);

render(
  <div>
      <SuccessMessage title="Success!" content="This message is here to tell you about great success!"/>
      <ErrorMessage title="Error!" content="This message is here to tell you about a horrible error!"/>
      <InfoMessage title="Information" content="This message is here to tell you something..."/>
      <TipsMessage title="Tips">
          This message is here to give you great advice!
      </TipsMessage>
  </div>
  , messageBoxDOM);
