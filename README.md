# ffe-buttons-react

## Install

```
$ npm install --save ffe-core ffe-buttons ffe-buttons-react
```

`ffe-buttons-react` has a peer dependency on `ffe-core` and `ffe-buttons`. Make sure they are also part of your build.

## Variants

You are free to pick between using the base `Button` component or any of the
descriptive alias components:

* `ActionButton`
* `PrimaryButton`
* `SecondaryButton`
* `ShortcutButton`
* `TertiaryButton`

If no `buttonType` property is given to `Button` it defaults to `primary`.

## Usage

There are no required props. Although not marked as required, you always want
to give the button some content, either as `children` or by using the `label`
property:

```javascript
<ActionButton onClick={clickHandler}>
    <CoolIcon /> Awesome
</ActionButton>

<ActionButton label="Hello" onClick={clickHandler} />
```

There are components available for all the button types

```javascript
<ActionButton onClick={clickHandler}>...</ActionButton>
<PrimaryButton onClick={clickHandler}>...</PrimaryButton>
<SecondaryButton onClick={clickHandler}>...</SecondaryButton>
<ShortcutButton onClick={clickHandler}>...</ShortcutButton>
<TertiaryButton onClick={clickHandler}>...</TertiaryButton>
```

If you want, you can use Button directly, but you must provide the `buttonType`
property if you want anything other than `primary`. However, this is discouraged
as all other functionality is available through the more specialized button
types.

```javascript
<Button
    onClick={clickHandler}
    buttonType="action"
>
    <CoolIcon /> Awesome
</Button>
```

### Loading state

For long-running operations you may want to put the button in a loading state.

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

### Tabbable

Buttons are by default tabbable / allowed to gain keyboard focus. In the rare
occurence this is not desired, the `isTabbable` attribute can be utilized:

```javascript
<PrimaryButton isTabbable={false}>...</PrimaryButton>
```

This works for all button types, but make sure you have a really good reason for
using it! N.B. making it impossible to reach buttons with keyboard is an
accessibility violation!

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
