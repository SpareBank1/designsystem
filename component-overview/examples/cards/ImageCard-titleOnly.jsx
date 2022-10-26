import { ImageCard } from '@sb1/ffe-cards-react';

<ImageCard
    href="https://design.sparebank1.no"
    image={
        <img
            src="https://www.sparebank1.no/content/dam/SB1/foto/profilbilder-liggende/ung-i-sofa.jpg.thumb.1280.1280.jpg"
            alt=""
            style={{ position: 'relative', bottom: '50px' }}
        />
    }
>
    {({ Title }) => <Title>Tittel</Title>}
</ImageCard>
