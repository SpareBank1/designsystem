import React from 'react';
import { render } from 'react-dom';
import './buttons.less';
import {
  ActionButton,
  BackButton,
  PrimaryButton,
  SecondaryButton,
  ShortcutButton,
  TertiaryButton,
} from '../src/index';

const container = document.createElement('section');
document.body.appendChild(container);

function ButtonsExample() {
  return (
    <div>
      <div className="ffe-content-container ffe-content-container--with-border">
        <h1 className="ffe-h1">FFE Buttons</h1>
      </div>
      <div className="ffe-content-container">
        <ActionButton>I'm an action button</ActionButton>
      </div>
      <div className="ffe-content-container">
        <ActionButton condensed>Condensed action button</ActionButton>
      </div>
      <div className="ffe-content-container">
        <PrimaryButton>I'm a primary button</PrimaryButton>
      </div>
      <div className="ffe-content-container">
        <PrimaryButton condensed>Condensed primary button</PrimaryButton>
      </div>
      <div className="ffe-content-container">
        <SecondaryButton>I'm a secondary button</SecondaryButton>
      </div>
      <div className="ffe-content-container">
        <SecondaryButton condensed>Condensed secondary button</SecondaryButton>
      </div>
      <div className="ffe-content-container">
        <ShortcutButton>I'm a shortcut button</ShortcutButton>
      </div>
      <div className="ffe-content-container">
        <ShortcutButton condensed>Condensed shortcut button</ShortcutButton>
      </div>
      <div className="ffe-content-container">
        <TertiaryButton>I'm a tertiary button</TertiaryButton>
      </div>
      <div className="ffe-content-container">
        <TertiaryButton condensed>Condensed tertiary button</TertiaryButton>
      </div>
      <div className="ffe-content-container">
        <BackButton>I'm a back button</BackButton>
      </div>
    </div>
  );
}

render(<ButtonsExample />, container);
