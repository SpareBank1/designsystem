import Table from '@sb1/ffe-tables-react';
import { TertiaryButton } from '@sb1/ffe-buttons-react';
import { Icon } from '@sb1/ffe-icons-react';
import { formatNumber } from '@sb1/ffe-formatters';

() => {

    const checkIcon = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgLTk2MCA5NjAgOTYwIiB3aWR0aD0iMjQiPjxwYXRoIGQ9Im0zODItMzM5LjM4NCAzNDUuNTM5LTM0NS41MzhxOC45MjMtOC45MjMgMjEuMTkyLTkuMTE2IDEyLjI2OS0uMTkyIDIxLjU3NiA5LjExNiA5LjMwOCA5LjMwNyA5LjMwOCAyMS4zODQgMCAxMi4wNzYtOS4zMDggMjEuMzg0bC0zNjMgMzYyLjk5OVEzOTYuNDYxLTI2OC4zMDkgMzgyLTI2OC4zMDlxLTE0LjQ2MSAwLTI1LjMwNy0xMC44NDZsLTE2Ny0xNjYuOTk5cS04LjkyMy04LjkyMy04LjgwOC0yMS4xOTIuMTE2LTEyLjI2OSA5LjQyMy0yMS41NzYgOS4zMDgtOS4zMDggMjEuMzg0LTkuMzA4IDEyLjA3NyAwIDIxLjM4NCA5LjMwOEwzODItMzM5LjM4NFoiLz48L3N2Zz4="

    const closeIcon = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgLTk2MCA5NjAgOTYwIiB3aWR0aD0iMjQiPjxwYXRoIGQ9Ik00ODAtNDM3Ljg0NyAyNzcuMDc2LTIzNC45MjRxLTguMzA3IDguMzA4LTIwLjg4NCA4LjUtMTIuNTc2LjE5My0yMS4yNjgtOC41LTguNjkzLTguNjkyLTguNjkzLTIxLjA3NnQ4LjY5My0yMS4wNzZMNDM3Ljg0Ny00ODAgMjM0LjkyNC02ODIuOTI0cS04LjMwOC04LjMwNy04LjUtMjAuODg0LS4xOTMtMTIuNTc2IDguNS0yMS4yNjggOC42OTItOC42OTMgMjEuMDc2LTguNjkzdDIxLjA3NiA4LjY5M0w0ODAtNTIyLjE1M2wyMDIuOTI0LTIwMi45MjNxOC4zMDctOC4zMDggMjAuODg0LTguNSAxMi41NzYtLjE5MyAyMS4yNjggOC41IDguNjkzIDguNjkyIDguNjkzIDIxLjA3NnQtOC42OTMgMjEuMDc2TDUyMi4xNTMtNDgwbDIwMi45MjMgMjAyLjkyNHE4LjMwOCA4LjMwNyA4LjUgMjAuODg0LjE5MyAxMi41NzYtOC41IDIxLjI2OC04LjY5MiA4LjY5My0yMS4wNzYgOC42OTN0LTIxLjA3Ni04LjY5M0w0ODAtNDM3Ljg0N1oiLz48L3N2Zz4="


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

    const data = [
        {
            id: 0,
            name: 'Ola Normann',
            email: 'ola@normann.no',
            address: 'Gateveien 2',
            age: 23,
            networth: 12693005.93,
            button: <Button>poke</Button>,
        },
        {
            id: 1,
            name: 'Sivert Svenska',
            email: 'sivert@svenska.se',
            age: 45,
            networth: 9005.93,
            button: <Button>poke</Button>,
        },
        {
            id: 2,
            name: 'Daniel Dansk',
            email: 'daniel@dansk.dk',
            address: <Button>legg til adresse</Button>,
            age: 39,
            networth: 8693005.93,
            button: <Button>poke</Button>,
        },
        {
            id: 3,
            name: 'Lille Ole',
            email: 'lilleole@gmail.com',
            address: <Button>legg til adresse</Button>,
            age: 9,
            networth: 23.12,
            button: <Button>poke</Button>,
        },
    ].map(d => ({
        syntetic: d.age > 18 && d.networth > 10000,
        ...d,
    }));

    const currencyCompare = (a, b) => a - b;

    const ageSum = data
        .map(e => e.age)
        .reduce((total, num) => total + num);

    const networthSum = data
        .map(e => e.networth)
        .reduce((total, num) => total + num);

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
                        props.cells.networth > 10000
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
            footer: 5348760.23,
            alignRight: true,
            compare: currencyCompare,
            cellRender: (value, col, props) => {
                return (
                    <>
                        {formatNumber(value, { decimals: 2 })}
                    </>
                );
            },
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
                            {formatNumber(networthSum / data.length, { decimals: 2 })}
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
                                    {formatNumber(networthSum, { decimals: 2 })}
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
