```js
const ButtonGroup = require('./ButtonGroup').default;
const { PlussIkon } = require('../../ffe-icons-react');

<ButtonGroup thin={true}>
    <TaskButton icon={<PlussIkon />}>Legg til bruker</TaskButton>
    <TaskButton icon={<PlussIkon />} condensed={true}>
        Legg til bruker
    </TaskButton>
</ButtonGroup>;
```
