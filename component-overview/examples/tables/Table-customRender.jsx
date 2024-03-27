import Table from '@sb1/ffe-tables-react';
import { TertiaryButton } from '@sb1/ffe-buttons-react';
import { Icon } from '@sb1/ffe-icons-react';
import checkIcon from '@sb1/ffe-icons/icons/300/open/md/check.svg';
import closeIcon from '@sb1/ffe-icons/icons/300/open/md/close.svg';

() => {
        const generateCheckbox = value => {
        return (
            <div style={{ width: '100%', textAlign: 'center' }}>
                {value ? (
                    <Icon
                        fileUrl={checkIcon}
                        size="md"
                        className="ffe-table__expand-icon"
                    />
                ) : (
                    <Icon
                        fileUrl={closeIcon}
                        size="md"
                        className="ffe-table__expand-icon"
                    />
                )}
            </div>
        );
    };

    const Button = ({ children }) => (
        // stopPropagation hindrer at raden ekspanderer/kollapser når vi trykker på knappen
        <TertiaryButton onClick={e => e.stopPropagation()}>
            {children}
        </TertiaryButton>
    );

    const formatNumber = num =>
        Number(
            num
                .toString()
                .replace(/\s/g, '')
                .replace(/,/g, '.'),
        );

    const data = [
        {
            id: 0,
            name: 'Ola Normann',
            email: 'ola@normann.no',
            address: 'Gateveien 2',
            age: 23,
            networth: '12 693 005,93',
            button: <Button>poke</Button>,
        },
        {
            id: 1,
            name: 'Sivert Svenska',
            email: 'sivert@svenska.se',
            age: 45,
            networth: '9 005,93',
            button: <Button>poke</Button>,
        },
        {
            id: 2,
            name: 'Daniel Dansk',
            email: 'daniel@dansk.dk',
            address: <Button>legg til adresse</Button>,
            age: 39,
            networth: '8 693 005,93',
            button: <Button>poke</Button>,
        },
        {
            id: 3,
            name: 'Lille Ole',
            email: 'lilleole@gmail.com',
            address: <Button>legg til adresse</Button>,
            age: 9,
            networth: '23,12',
            button: <Button>poke</Button>,
        },
    ].map(d => ({
        syntetic: d.age > 18 && formatNumber(d.networth) > 10000,
        ...d,
    }));

    const currencyCompare = (a, b) => formatNumber(a) - formatNumber(b);

    const ageSum = data
        .map(e => e.age)
        .reduce((total, num) => {
            return total + num;
        });

    const networthSum = data
        .map(e => formatNumber(e.networth))
        .reduce((total, num) => {
            return total + num;
        });

    const columnsAdvanced = [
        { key: 'name', header: 'Navn', footer: 'Gjennomsnitt' },
        {
            key: 'email',
            header: 'E-post',
            hideOnTablet: true,
            hideOnMobile: true,
        },
        {
            key: 'age',
            header: 'Alder',
            footer: ageSum / data.length,
            alignRight: true,
            cellRender: (value, col, props) => {
                return (
                    <>
                        {value} {value > 18 ? ' (voksen)' : ''}
                    </>
                );
            },
        },
        {
            key: 'syntetic',
            header: 'Syntetisk felt',
            alignRight: true,
            notSortable: true,
            cellRender: (value, col, props) => {
                return (
                    <>
                        {props.cells.age > 18 &&
                        formatNumber(props.cells.networth) > 10000
                            ? 'voksen, formue > 10000'
                            : ''}
                    </>
                );
            },
        },
        {
            key: 'syntetic',
            header: 'Sparing',
            alignRight: true,
            columnHeaderRender: (
                value,
                dataWindow,
                spanProps,
                thProps,
                columns,
            ) => {
                const dataWindowSum = dataWindow
                    .map(e => (e.syntetic ? 1 : 0))
                    .reduce((total, num) => {
                        return total + num;
                    });
                return (
                    <th key={thProps.key} {...thProps}>
                        <span {...spanProps}>
                            {value} ({dataWindowSum})
                        </span>
                    </th>
                );
            },
            cellRender: (value, col, props) => {
                return (
                    <>
                        {' '}
                        {value
                            ? generateCheckbox(value)
                            : generateCheckbox(false)}
                    </>
                );
            },
        },
        {
            key: 'networth',
            header: 'Formue',
            footer: '5 348 760,23',
            alignRight: true,
            compare: currencyCompare,

            columnFooterRender: (
                value,
                dataWindow,
                tdPorps,
                spanProps,
                columns,
                index,
            ) => {
                return (
                    <th key={tdPorps.key} {...tdPorps}>
                        <span {...spanProps}>
                            {Number(networthSum / 4).toFixed(2)}
                        </span>
                    </th>
                );
            },
        },
        { key: 'button', header: 'Poke', notSortable: true },
    ];

    // Rader uten address vil ikke kunne ekspanderes fordi funksjonen returnerer falsy
    const expandedContentMapper = row =>
        row.address && <span>Adresse: {row.address}</span>;

    // function is called when table sorting changes.
    const onSort = ({ sortBy, descending, tableData }) => {};

    return (
        <Table
            columns={columnsAdvanced}
            data={data}
            expandedContentMapper={expandedContentMapper}
            sortable={true}
            sortBy={'age'}
            descending={true}
            condensed={true}
            smallHeader={true}
            columnLayoutMobile={true}
            breakpoint={'none'}
            caption="Masse spennende data"
            onSort={onSort}
            headerRender={(trprops, columns) => {
                return (
                    <>
                        <tr {...trprops}>
                            <th
                                colSpan={3}
                                className="ffe-table__heading"
                                style={{ textAlign: 'center' }}
                            >
                                Personlig
                            </th>
                            <th colSpan={2} className="ffe-table__heading" />
                            <th colSpan={3} className="ffe-table__heading">
                                Overskrift
                            </th>
                        </tr>
                        <tr {...trprops} />
                    </>
                );
            }}
            footerRender={(trprops, columns) => {
                return (
                    <>
                        <tr {...trprops} />
                        <tr {...trprops}>
                            <td className="ffe-table__cell" data-th="Navn">
                                <span className="ffe-table__content">
                                    Total
                                </span>
                            </td>
                            <td className="ffe-table__cell" data-th="E-post">
                                <span className="ffe-table__content" />
                            </td>
                            <td className="ffe-table__cell" data-th="Alder">
                                <span className="ffe-table__content ffe-table__content--text-right" />
                            </td>
                            <td
                                className="ffe-table__cell"
                                data-th="Syntetisk felt"
                            >
                                <span className="ffe-table__content ffe-table__content--text-right" />
                            </td>
                            <td className="ffe-table__cell" />
                            <th className="ffe-table__cell" data-th="Formue">
                                <span className="ffe-table__content ffe-table__content--text-right">
                                    {networthSum}
                                </span>
                            </th>
                            <td className="ffe-table__cell" data-th="Poke">
                                <span className="ffe-table__content" />
                            </td>
                            <td className="ffe-table__cell" data-th="">
                                <span className="ffe-table__content ffe-table__content--text-right" />
                            </td>
                        </tr>
                    </>
                );
            }}
            rowRender={(trprops, props, index) => {
                const oddEvenClassName = index % 2 === 1 ? 'is-odd' : 'is-even';
                return (
                    <tr
                        {...trprops}
                        className={`${trprops.className} ffe-table__row-expandable ${oddEvenClassName}`}
                        onClick={event => {
                            console.log('rowRenderClick!', index);
                            trprops.onClick && trprops.onClick(event);
                        }}
                        title={props.cells.name}
                    >
                        {trprops.children}
                    </tr>
                );
            }}
        />
    );
}
