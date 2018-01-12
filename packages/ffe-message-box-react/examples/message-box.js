import React from 'react';
import { render } from 'react-dom';
import { SuccessMessage, ErrorMessage, InfoMessage, TipsMessage, InfoMessageList, InfoMessageListItem } from '../src/index.js';

require('./example.less');

const heading = document.createElement('h1');
heading.textContent = 'Message Box';
heading.className = 'ffe-h1';
document.body.appendChild(heading);

const messageBoxDOM = document.createElement('section');
document.body.appendChild(messageBoxDOM);

render(
  <div>
      <SuccessMessage title="Success!" className="custom-class" content="This message is here to tell you about great success!"/>
      <ErrorMessage title="Error!" content="This message is here to tell you about a horrible error!"/>
      <ErrorMessage title="Feil">
          <InfoMessageList>
              <InfoMessageListItem>
                  Please fill out form
              </InfoMessageListItem>
              <InfoMessageListItem href="#email">
                  Add valid email address
              </InfoMessageListItem>
              <InfoMessageListItem href="#phone">
                  Add valid phone number, 8 characters
              </InfoMessageListItem>
          </InfoMessageList>
      </ErrorMessage>
      <InfoMessage title="Information" content="This message is here to tell you something..."/>
      <TipsMessage title="Tips">
          This message is here to give you great advice!
      </TipsMessage>
      <TipsMessage title="Tips">
          <InfoMessageList>
              <InfoMessageListItem>
                  This is a great tip
              </InfoMessageListItem>
              <InfoMessageListItem>
                  To save money you should follow this advice
              </InfoMessageListItem>
              <InfoMessageListItem>
                  If you follow these advices you are clever!
              </InfoMessageListItem>
          </InfoMessageList>
      </TipsMessage>
  </div>
  , messageBoxDOM);
