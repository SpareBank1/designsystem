# ffe-buttons-react

## Install

```
$ npm install --save ffe-core ffe-buttons ffe-buttons-react
```

`ffe-buttons-react` has a peer dependency on `ffe-core` and `ffe-buttons`. 

## Usage

There are no required props. Although not marked as required, you always want
to give the button some content, either as `children` or by using the `label`
property:

```javascript
import { ActionButton } from 'ffe-buttons-react';

<ActionButton onClick={clickHandler}>
    <CoolIcon /> Awesome
</ActionButton>

<ActionButton label="Hello" onClick={clickHandler} />
```

There are components available for all the button types:

```javascript
<ActionButton>, <BackButton>, <PrimaryButton>, <SecondaryButton>, <ShortcutButton>, <TertiaryButton>
```

### Supported props

```
action: string,
ariaLoadingMessage: string, (default: 'Vennligst vent')
children: node,
className: string,
disableButton: bool,
id: string,
isLoading: bool,
isTabbable: bool,
autoFocus: bool,
label: string,
leftIcon: node,
onClick: func,
rightIcon: node,
simpleContent: bool, (default: false)
style: object,
type: 'button' | 'submit' | 'reset' (default: 'submit')
```

### Loading state

For long-running operations you may want to put the button in a loading state.
While in this state, the button will be disabled and given the attribute `aria-busy=true`

```javascript
<PrimaryButton isLoading onClick={clickHandler}>...</PrimaryButton>

<PrimaryButton onClick={clickHandler}>...</PrimaryButton>
```

The loading state reveals the text "Vennligst vent" to screen readers.
If you need to change this text, override it with the `ariaLoadingMessage`
property:

```javascript
<PrimaryButton
    ariaLoadingMessage="Please wait"
    isLoading
    onClick={clickHandler}
>
    ...
</PrimaryButton>
```


### Disabled state

Disabled buttons are not allowed in accordance to the  guidelines. However, in
case you need to disable a button, you can do this as well by setting the
`disableButton` property:

```javascript
<PrimaryButton disableButton onClick={clickHandler}>...</PrimaryButton>

<TertiaryButton disableButton label="Hello" onClick={clickHandler} />

<SecondaryButton disableButton onClick={clickHandler}>...</SecondaryButton>
```

This works for all button types, but make sure you have a really good reason for
using it!

### Tabbing and focus

##### Tabbing

Buttons are by default tabbable / allowed to gain keyboard focus. In the rare
occurence this is not desired, the `isTabbable` attribute can be utilized:

```javascript
<PrimaryButton isTabbable={false}>...</PrimaryButton>
```

This works for all button types, but make sure you have a really good reason for
using it! N.B. making it impossible to reach buttons with keyboard is an
accessibility violation!

##### Focus

In some situations where you remove a part of the DOM that contains the focused element (e.g after clicking a button), you might want to automatically set focus to a specific element.

The `autoFocus`-prop may be used for this purpose. It will automatically focus the element after mounting. Please note that this only works on one element!

```javascript
<PrimaryButton autoFocus>...</PrimaryButton>
```


### Styling

Any style attributes given to a button component will be passed on to the
underlying html button element.

```javascript
<Button style={{transform: 'rotate(30deg)'}}>...</Button>
```

Optionally, pass `className` to set a custom class on the button.

```javascript
<Button className="testClass">...</Button>
```

### Icons

`<Button>` has support for icons, `leftIcon` and `rightIcon`
`leftIcon` will be placed to the left of the label text, and `rightIcon` to the right of the label text.

`<SecondaryButton>` and `<TertiaryButton>` support `leftIcon`


```javascript
<Button leftIcon={<MyLeftIcon />}>...</Button>
```
```javascript
<Button rightIcon={<MyRightIcon />}>...</Button>
```
```javascript
<SecondaryButton leftIcon={<MyLeftIcon />}>...</SecondaryButton>
```
```javascript
<TertiaryButton leftIcon={<MyLeftIcon />}>...</TertiaryButton>
```


### Type and onClick-handlers

The default button type is `type="submit"`, as with regular HTML buttons. If
you want to use this component without triggering a `submit` event on clicking
it, you can change the type to either `button` or `reset`:

```javascript
<ActionButton type="button" onClick={clickHandler}>
    Buy now
</ActionButton>
```

In the case of specifying `type="button"` it is important that you also
specify an `onClick` handler - so that the button triggers some kind of
reaction.
