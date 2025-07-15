import { InputGroup } from '@sb1/ffe-form-react';
import { SearchableDropdown } from '@sb1/ffe-searchable-dropdown-react';
import {
    Tag
} from '@sb1/ffe-tags-react';
import React from 'react';

const tags: { variant: 'success' | 'warning' | 'critical' | 'neutral' | 'tip' | 'info'; label: string }[] = [
    { variant: 'success', label: 'Vellykket' },
    { variant: 'warning', label: 'Advarsel' },
    { variant: 'critical', label: 'Kritisk' },
    { variant: 'neutral', label: 'Nøytral' },
    { variant: 'tip', label: 'Tips' },
    { variant: 'info', label: 'Info' },
];

const ProfileView: React.FC = () => (
    <div>
        <div className='flex flex-wrap gap-1 mb-2'>
            {tags.map(({ variant, label }) => (
                <Tag variant={variant}>{label}</Tag>
            ))}
        </div>
        <div className='flex flex-wrap gap-1'>
            {tags.map(({ variant, label }) => (
                <Tag variant={variant} type='subtle'>{label}</Tag>
            ))}
        </div>
        <InputGroup
            label="Velg hvilken tag du liker best"
            inputId="tag-velger"
            className='mt-4'>
            <SearchableDropdown
                labelledById='labelled-by-id'
                id='id'
                dropdownList={tags.map(tag => ({
                    value: tag.label,
                    label: tag.label,
                    variant: tag.variant
                }))}
                dropdownAttributes={['value', 'variant']}
                searchAttributes={['value', 'label', 'variant']}
                noMatch={{
                    text: 'Søket ga ingen treff'
                }}
                inputProps={{
                    placeholder: 'Velg'
                }}
                postListElement='none'
            />
        </InputGroup>
    </div>
);

export default ProfileView;