# ffe-core-react

React implementation of the components found in `ffe-core`.

## Install

```
$ npm install --save ffe-core-react
```

## Usage

Here you'll find documentation for the different components. Note that they all will apply any non-specified
parameters (like aria or style) to the element as is.

### Layout components

#### `<SectionWrapper />`

Outermost component to wrap your content in.

```javascript
import SectionWrapper from 'ffe-core-react/lib/layout/SectionWrapper';
```

Property | Type | Required | Description
:--- | :--- | :--- | :---
bgBlue|bool|no|Blue background
bgBlueFlat|bool|no|Flat blue background
bgGrey|bool|no|Grey background
bgSand|bool|no|Sand background
children|node|yes|
className|string|no|Extra class names to apply

#### `<ContentContainer />`

Wraps your content and centers it on the page. Should be inside of a `<SectionWrapper />`.

```javascript
import ContentContainer from 'ffe-core-react/lib/layout/ContentContainer';
```

Property | Type | Required | Description
:--- | :--- | :--- | :---
bgGrey|bool|no|Grey background
bgSand|bool|no|Sand background
children|node|yes|
className|string|no|Extra class names to apply
large|bool|no|Wider than normal
noSpace|bool|no|No vertical margins
small|bool|no|Narrower than normal
textLeft|bool|no|Left-align content

### Typography components

#### `<DividerLine />`

A horizontal rule to divide up the page between sections etc.

```javascript
import DividerLine from 'ffe-core-react/lib/typography/DividerLine';
```

Property | Type | Required | Description
:--- | :--- | :--- | :---
className|string|no|Extra class names to apply

#### `<Heading1 />` - `<Heading6 />`

Text headings. Comes in 6 different sizes.

```javascript
import { Heading1 } from 'ffe-core-react/lib/typography/Heading';
import { Heading2 } from 'ffe-core-react/lib/typography/Heading';
import { Heading3 } from 'ffe-core-react/lib/typography/Heading';
import { Heading4 } from 'ffe-core-react/lib/typography/Heading';
import { Heading5 } from 'ffe-core-react/lib/typography/Heading';
import { Heading6 } from 'ffe-core-react/lib/typography/Heading';
```

Property | Type | Required | Description
:--- | :--- | :--- | :---
children|node|yes|
className|string|no|Extra class names to apply
error|bool|no|Add error style (red),
lookLike|number (1-6)|no|Sets the visual size of heading, while retaining semantics
noMargin|bool|no|Remove margins,
withBorder|bool|no|Adds silver border,

#### `<EmphasizedText />`

Inline emphasized (italic) text.

```javascript
import EmphasizedText from 'ffe-core-react/lib/typography/EmphasizedText';
```

Property | Type | Required | Description
:--- | :--- | :--- | :---
children|node|yes|
className|string|no|Extra class names to apply

#### `<MicroText />`

Very small text.

```javascript
import MicroText from 'ffe-core-react/lib/typography/MicroText';
```

Property | Type | Required | Description
:--- | :--- | :--- | :---
children|node|yes|
className|string|no|

#### `<Paragraph />`

Paragraphs for placing your text content in. Comes in regular, lead and sub-lead varieties!

```javascript
import Paragraph from 'ffe-core-react/lib/typography/Paragraph';
```

Property | Type | Required | Description
:--- | :--- | :--- | :---
children|node|yes|
className|string|no|Extra class names to apply
lead|bool|no|Lead paragraph
subLead|bool|no|Sub lead paragraph
textCenter|bool|no|Center-align the text
textLeft|bool|no|Left-align the text

#### `<PreformattedText />`

Use for preformatted text.

```javascript
import PreformattedText from 'ffe-core-react/lib/typography/PreformattedText';
```

Property | Type | Required | Description
:--- | :--- | :--- | :---
children|node|yes|
className|string|no|Extra class names to apply

#### `<SmallText />`

Small text.

```javascript
import SmallText from 'ffe-core-react/lib/typography/SmallText';
```

Property | Type | Required | Description
:--- | :--- | :--- | :---
children|node|yes|
className|string|no|Extra class names to apply

#### `<StrongText />`

Strong text.

```javascript
import StrongText from 'ffe-core-react/lib/typography/StrongText';
```

Property | Type | Required | Description
:--- | :--- | :--- | :---
children|node|yes|
className|string|no|Extra class names to apply

## Test

The components come with a full test suite to ensure everything is working correctly. Here's how you
trigger it:

```bash
npm test            # Run all tests including coverage
npm run test:watch  # Run tests in watch-mode
```
