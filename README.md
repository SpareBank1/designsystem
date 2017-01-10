# ffe-lists-react

## Install

```
$ npm install --save ffe-core ffe-lists ffe-lists-react
```

`ffe-lists-react` has peer dependencies on `ffe-core` and `ffe-lists`.


## Usage

```
import BulletList from 'ffe-lists-react';
```


Supported list-types are `BulletList`, `CheckList`, `NumberList`, `StylizedNumberList`, `DescriptionList` and `DescriptionListMultiCol`.


To render a list, use `<li>` as children:

```
<BulletList>
  <li>List element</li>
  <li>Another list element</li>
</BulletList>
```


`bg-sand` is a modifier of `CheckList` and can be used by passing the correct className:

```
<CheckList className="ffe-check-list--bg-sand">
  ...
</CheckList>
```


To render a description list (i.e. `DescriptionList` or `DescriptionListMultiCol`) make sure both `dt` and `dd` are present as children.

```
<DescriptionList>
  <dt>Term</dt>
  <dd>Description</dd>

  <dt>Another term</dt>
  <dd>Another description</dd>
</DescriptionList>
```


To adjust the spatial relationship between terms and descriptions in a `DescriptionList`, add the `medium` or `large` attribute.

```
<DescriptionList medium={true}>
	...
</DescriptionList>
```


## Examples

To view live example lists, run `npm start`