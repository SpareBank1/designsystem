import React from 'react';
const exports = module.exports = {};

exports.companies = [
    {
        organizationName: "Bedriften",
        organizationNumber: "912602370",
        quantityUnprocessedMessages: 5,
    },
    {
        organizationName: "Sønn & co",
        organizationNumber: "812602372",
        quantityUnprocessedMessages: 3,
    },
    {
        organizationName: "Beslag skytter",
        organizationNumber: "812602552",
        quantityUnprocessedMessages: 1,
    },
    {
        organizationName: "Rør og sånt",
        organizationNumber: "812602399",
        quantityUnprocessedMessages: 7,
    },
    {
        organizationName: "Kaffekoppen",
        organizationNumber: "812602222",
        quantityUnprocessedMessages: 8,
    },
    {
        organizationName: "Sats",
        organizationNumber: "809602772",
        quantityUnprocessedMessages: 2,
    }
];

exports.renderItem = unreadLabel => company => (
    <div style={{cursor:"pointer"}}>
        <a className="ffe-searchable-dropdown__item--header">{company.organizationName}</a>
        <div className="ffe-searchable-dropdown__item--details">
            {company.organizationNumber}
            {unreadLabel && company.quantityUnprocessedMessages >= 1 &&
            <span style={{float:'right'}}> {company.quantityUnprocessedMessages} {unreadLabel}</span>
            }
        </div>
    </div>
);



