import Feedback from '@sb1/ffe-feedback-react';
import { Wave } from '@sb1/ffe-core-react';
import { Grid, GridCol, GridRow } from '@sb1/ffe-grid-react';

<>
  <Wave color="frost-30" darkmodeColor="natt" />
  <Grid>
    <GridRow background="frost-30" >
      <GridCol sm={{cols: 12}} >
        <Feedback
          language="nb"
          onThumbClick={console.log}
          onFeedbackSend={console.log}
        />
      </GridCol>
    </GridRow>
  </Grid>
</>
