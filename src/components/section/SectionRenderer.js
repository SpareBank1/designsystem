import React from 'react';
import PropTypes from 'prop-types';
import SectionHeading from 'rsg-components/SectionHeading';
import Markdown from 'rsg-components/Markdown';
import classNames from 'classnames';

export function SectionRenderer(allProps) {
    const {
        name,
        slug,
        content,
        components,
        sections,
        depth,
        description,
    } = allProps;

    return (
        <section className="sb1ds-section" id={`section-${slug}`}>
            {name && (
                <SectionHeading
                    depth={depth}
                    id={slug}
                    slotName="sectionToolbar"
                    slotProps={allProps}
                >
                    {name}
                </SectionHeading>
            )}
            {description && <Markdown text={description} />}
            {content}
            {components}
            {sections}
        </section>
    );
}

SectionRenderer.propTypes = {
    name: PropTypes.string,
    description: PropTypes.string,
    slug: PropTypes.string,
    content: PropTypes.node,
    components: PropTypes.node,
    sections: PropTypes.node,
    isolated: PropTypes.bool,
    depth: PropTypes.number.isRequired,
};

export default SectionRenderer;
