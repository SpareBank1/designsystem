import { useId, useState } from 'react';
import { Grid, GridRow, GridCol } from '@sb1/ffe-grid-react';
import { Dropdown } from '@sb1/ffe-dropdown-react';
import { Label } from '@sb1/ffe-form-react';

() => {
    const backgroundColors = [
        undefined,
        'frost-30',
        'sand',
        'sand-70',
        'sand-30',
        'syrin-70',
        'syrin-30',
        'vann',
        'vann-30',
        'fjell',
        'hvit',
    ];
    const backgroundDarkColors = [undefined, 'svart', 'natt', 'koksgraa'];
    const [bgColor, setBgColor] = useState(backgroundColors[0]);
    const [bgDarkColor, setBgDarkColor] = useState(backgroundDarkColors[0]);
    const selectGridRowBgId = useId();
    const selectGridRowBgDarkId = useId();
    return (
        <Grid>
            <GridRow>
                <GridCol sm={12} lg={{ cols: 6, offset: 3 }}>
                    <Label htmlFor={selectGridRowBgId}>
                        Du kan velge bakgrunnsfarge på grid-raden under her:
                    </Label>
                    <Dropdown
                        id={selectGridRowBgId}
                        onChange={e => setBgColor(e.target.value)}
                        value={bgColor}
                    >
                        {backgroundColors.map(name => (
                            <option key={name} value={name}>
                                {name || 'Ingen farge'}
                            </option>
                        ))}
                    </Dropdown>
                </GridCol>
            </GridRow>
            <GridRow padding="sm">
                <GridCol sm={12} lg={{ cols: 6, offset: 3 }}>
                    <Label htmlFor={selectGridRowBgDarkId}>
                        Du kan velge bakgrunnsfarge for mørk fargemodus på
                        grid-raden under her:
                    </Label>
                    <Dropdown
                        id={selectGridRowBgDarkId}
                        onChange={e => setBgDarkColor(e.target.value)}
                        value={bgDarkColor}
                    >
                        {backgroundDarkColors.map(name => (
                            <option key={name} value={name}>
                                {name || 'Ingen farge'}
                            </option>
                        ))}
                    </Dropdown>
                </GridCol>
            </GridRow>
            <GridRow background={bgColor} backgroundDark={bgDarkColor}>
                <GridCol sm={12} lg={{ cols: 6, offset: 3 }}>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Mauris sed est sit amet enim pretium finibus in id nibh.
                        In orci massa, ultricies imperdiet laoreet et, rhoncus
                        ut est.
                    </p>
                </GridCol>
            </GridRow>
        </Grid>
    );
};
