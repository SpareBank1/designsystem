# ffe-button-react

## Install

```
$ npm install --save ffe-button-react
```

`ffe-button-react` has a peer dependency on `ffe-core`. Make sure `ffe-core` is also part of your build.

## Variants

You are free to pick between using the base `FFEButton` component or any of the descriptive alias components:

* `FFEActionButton`
* `FFEPrimaryButton`
* `FFESecondaryButton`
* `FFEShortcutButton`

If no type property is given to `FFEButton` it defaults to `primary`.

## Usage

The only strictly required property is the `onClick` function. Although not marked as required, you always want
to give the button some content, either as `children` or by using the `label` property.

```javascript
<FFEButton onClick={clickHandler}>
    <FFECoolIcon /> Awesome
</FFEButton>

<FFEButton label="Hello" onClick={clickHandler} />
```

There are components available for all the button types

```javascript
<FFEActionButton onClick={clickHandler}>...</FFEActionButton>
<FFEPrimaryButton onClick={clickHandler}>...</FFEPrimaryButton>
<FFESecondaryButton onClick={clickHandler}>...</FFESecondaryButton>
<FFEShortcutButton onClick={clickHandler}>...</FFEShortcutButton>
```

If you want, you can use FFEButton directly, but you must provide the type property if you want anything other than `primary`:

```javascript
<FFEButton
    onClick={clickHandler}
    type="action"
>
    <FFECoolIcon /> Awesome
</FFEButton>
```

### Loading state

For long-running operations you may want to put the button in a loading state.

```javascript
<FFEPrimaryButton isLoading onClick={clickHandler}>...</FFEPrimaryButton>

<FFEPrimaryButton onClick={clickHandler}>...</FFEPrimaryButton>
```

The loading state reveals the text "Vennligst vent" to screen readers.
If you need to change this text, override it with the `ariaLoadingMessage` property:

```javascript
<FFEPrimaryButton
    ariaLoadingMessage="Please wait"
    isLoading
    onClick={clickHandler}
>
    ...
</FFEPrimaryButton>
```


### Disabled state

Disabled buttons are not allowed in accordance to the FFE guidelines. However, in case you need
to disable a button, you can do this as well by setting the `disableButton` property:

```javascript
<FFEPrimaryButton disableButton onClick={clickHandler}>...</FFEPrimaryButton>

<FFEButton disableButton label="Hello" onClick={clickHandler} />

<FFESecondaryButton disableButton onClick={clickHandler}>...</FFESecondaryButton>
```

This works for all button types, but make sure you have a really good reason for using it!
