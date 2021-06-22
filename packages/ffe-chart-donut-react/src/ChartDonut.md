```javascript
<ChartDonut
    firstLabel="First label"
    lastLabel="Last label"
    name="Name"
    percentage={42}
/>
```

Ønskes full kontroll over label-teksten sender man bare inn `label` i stedet for `firstLabel` og `lastLabel`

```javascript
<ChartDonut
    label={
        <div
            style={{
                marginTop: 10,
                textAlign: 'center',
                width: '100%',
            }}
        >
            Du har selv ansvar
            <strong>for all styling</strong>
        </div>
    }
    name="Name"
    percentage={42}
/>
```
