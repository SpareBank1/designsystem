# @sb1/ffe-pagination-react

## Description

Pagination component for navigating through pages of content.

Pagineringskomponent for å navigere gjennom sider med innhold.

## Install

```
npm install --save @sb1/ffe-modals-react
```

## Usage

Full documentation on lists usage is available at https://design.sparebank1.no/komponenter/paginering/.

This package depends on `@sb1/ffe-buttons-react`, `@sb1/ffe-dropdown-react` and `@sb1/ffe-icons-react`.
Make sure you import the less-files.

## Examples

```tsx
import { Pagination } from '@sb1/ffe-pagination-react';
import { useState } from 'react';

function MyComponent() {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 10;

    return (
        <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={page => setCurrentPage(page)}
        />
    );
}
```

## Development

To start a local development server, run the following from the designsystem root folder:

```bash
npm install
npm run build
npm start
```

A local instance of `Storybook` with live reloading will run at http://localhost:6006/.

Example implementations using the latest versions of all components are also available at https://sparebank1.github.io/designsystem.
