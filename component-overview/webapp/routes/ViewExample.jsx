import React from 'react';
import { LiveProvider, LivePreview, LiveError } from 'react-live';
import { Link } from 'react-router-dom';
import { DokumentMedTekstIkon, HusIkon } from '@sb1/ffe-icons-react';
import PageLayout from '../components/PageLayout';

export default function ViewExample({ match, exampleId, example }) {
    return (
        <PageLayout title={example.sourceFileName}>
            <LiveProvider code={example.code} scope={example.scope}>
                <LivePreview className="sb1ex-live__preview" />
                <LiveError className="sb1ex-live__error" />
            </LiveProvider>
            <div className="sb1ex-aside">
                <Link
                    to={'/'}
                    className="sb1ex-aside__link"
                    aria-label="Tilbake til oversikten"
                >
                    <HusIkon className="sb1ex-aside__icon" />
                </Link>
                <Link
                    to={`${match.url}/edit`}
                    className="sb1ex-aside__link"
                    aria-label="Rediger dette eksempel"
                >
                    <DokumentMedTekstIkon className="sb1ex-aside__icon" />
                </Link>
                <div className="sb1ex-aside__example-id">id: {exampleId}</div>
            </div>
        </PageLayout>
    );
}
