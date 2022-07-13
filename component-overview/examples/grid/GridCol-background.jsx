import { useState } from 'react';
import { Grid, GridRow, GridCol } from '@sb1/ffe-grid-react';
import Dropdown from '@sb1/ffe-dropdown-react';
import { Label } from '@sb1/ffe-form-react';

() => {
    const backgroundColors = [
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
    const [bgColor, setBgColor] = useState(backgroundColors[0]);

    return (
        <Grid>
            <GridRow>
                <GridCol sm={12} lg={{ cols: 6, offset: 3 }}>
                    <Label htmlFor="select-gridrow-bg">
                        Du kan velge bakgrunnsfarge på grid-kolonnen under her:
                    </Label>
                    <Dropdown
                        id="select-gridrow-bg"
                        onChange={e => setBgColor(e.target.value)}
                        value={bgColor}
                    >
                        {backgroundColors.map(name => (
                            <option key={name} value={name}>
                                {name}
                            </option>
                        ))}
                    </Dropdown>
                </GridCol>
            </GridRow>
            <GridRow>
                <GridCol
                    sm={12}
                    lg={{ cols: 6, offset: 3 }}
                    background={bgColor}
                    bottomPadding={false}
                >
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Mauris sed est sit amet enim pretium finibus in id nibh.
                        In orci massa, ultricies imperdiet laoreet et, rhoncus
                        ut est. Integer nec magna ultricies, commodo urna ut,
                        bibendum turpis. Curabitur nec ex sed lacus bibendum
                        sollicitudin.
                    </p>
                </GridCol>
            </GridRow>
            <GridRow>
                <GridCol sm={12} lg={{ cols: 6, offset: 3 }}>
                    Merk at innholdet både over og under er i linje med grid-et.
                </GridCol>
            </GridRow>
        </Grid>
    );
}
