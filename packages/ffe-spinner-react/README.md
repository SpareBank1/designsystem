# ffe-spinner-react

## Install

```
$ npm install --save ffe-spinner-react
```

>`ffe-spinner-react` depends on `ffe-core` and `ffe-spinner` being present and imported in your project.
>More specifically, the CSS classes related to spinner in ffe-spinner should be in your CSS Object Model when using this component.
```css
@import "node_modules/ffe-spinner/less/spinner.less";
```

## Usage

The default usage exposes a centered block-level spinner:

```javascript
import Spinner from 'ffe-spinner-react';

<Spinner />
```

If you want to have a loading text you can supply that as well:

```javascript
<Spinner text="Loading..." />
```

>The text can either be a string, or a some other renderable node.

In case you prefer to use children you can also do that:

```javascript

<Spinner>
    Loading...
</Spinner>
```

>The two examples above are functionally equivalent.

If you want a left-aligned spinner, you can disable the centering:

```javascript
<Spinner center={ false } />
```

If you want a large spinner you can get that as well:

```javascript
<Spinner large={ true }/>
```

Using all of the settings:

```javascript
import Spinner from 'ffe-spinner-react';

<Spinner center={ false } large={ true } text="Loading..." />
```

### LargeSpinner

In case you want to be a bit more explicit when you use a large spinner, you can also use the `<LargeSpinner>` component:

```javascript
import { LargeSpinner } from 'ffe-spinner-react';

<LargeSpinner center={ false } text="Loading..." />
```

It works exactly like `<Spinner>`, but without the `large` property.

### InlineSpinner

In case you need a non-block level spinner you can use `<InlineSpinner>`:

```javascript
import { InlineSpinner } from 'ffe-spinner-react';

<div>
    <InlineSpinner large={ true } /> Loading...
</div>
```

The only property available here is `large`, which is defaulted to `false`. As it's an inline component, any loading text or
suchlike has to be supplied outside of the component itself.
