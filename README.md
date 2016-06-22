# ffe-button-react

## Install

```
$ npm install --save ffe-button-react
```

`ffe-button-react` has a peer dependency on `ffe-core`. Make sure `ffe-core` is also part of your build.

## Variants

You are free to pick between using the base `Button` component or any of the descriptive alias components:

* `ActionButton`
* `PrimaryButton`
* `SecondaryButton`
* `ShortcutButton`
* `TertiaryButton`

If no type property is given to `Button` it defaults to `primary`.

## Usage

The only strictly required property is the `onClick` function. Although not marked as required, you always want
to give the button some content, either as `children` or by using the `label` property.

```javascript
<Button onClick={clickHandler}>
    <CoolIcon /> Awesome
</Button>

<Button label="Hello" onClick={clickHandler} />
```

There are components available for all the button types

```javascript
<ActionButton onClick={clickHandler}>...</ActionButton>
<PrimaryButton onClick={clickHandler}>...</PrimaryButton>
<SecondaryButton onClick={clickHandler}>...</SecondaryButton>
<ShortcutButton onClick={clickHandler}>...</ShortcutButton>
<TertiaryButton onClick={clickHandler}>...</TertiaryButton>
```

If you want, you can use Button directly, but you must provide the type property if you want anything other than `primary`:

```javascript
<Button
    onClick={clickHandler}
    type="action"
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
If you need to change this text, override it with the `ariaLoadingMessage` property:

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

Disabled buttons are not allowed in accordance to the  guidelines. However, in case you need
to disable a button, you can do this as well by setting the `disableButton` property:

```javascript
<PrimaryButton disableButton onClick={clickHandler}>...</PrimaryButton>

<Button disableButton label="Hello" onClick={clickHandler} />

<SecondaryButton disableButton onClick={clickHandler}>...</SecondaryButton>
```

This works for all button types, but make sure you have a really good reason for using it!

### Styling

Any style attributes given to a button component will be passed on to the underlying html button element.

```javascript
<Button style={{transform: 'rotate(30deg)'}}>...</Button>
```
