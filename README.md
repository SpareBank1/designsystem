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

Supported list-types are `BulletList`, `CheckList`, `NumberList`, `StylizedNumberList`, `DescriptionListFlex` and `DescriptionListMultiCol`.

To render a list, use `<li>` as children:

```
<BulletList>
  <li>List element</li>
  <li>Another list element</li>
</BulletList>
```

To render a description list (i.e. `DescriptionListFlex` or `DescriptionListMultiCol`) make sure both `dt` and `dd` are present as children.

```
<DescriptionListFlex>
  <dt>Term</dt>
  <dd>Description</dd>

  <dt>Another term</dt>
  <dd>Another description</dd>
</DescriptionListFlex>
```

## Examples

To view live example lists, run `npm start`