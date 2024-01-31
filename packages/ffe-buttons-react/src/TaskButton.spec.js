import React from 'react';
import { Icon } from '@sb1/ffe-icons-react';

import TaskButton from './TaskButton';

const defaultProps = { children: 'Click me', icon: 'check' };
const getWrapper = props =>
    shallow(<TaskButton {...defaultProps} {...props} />);

describe('<TaskButton />', () => {
    it('renders without exploding', () => {
        const wrapper = getWrapper();
        expect(wrapper.props()).toHaveProperty('buttonType', 'task');
    });
    it('passes on any prop', () => {
        const wrapper = getWrapper({ 'aria-label': 'some label' });
        expect(wrapper.props()).toHaveProperty('aria-label', 'some label');
    });
    it('sends icon prop on as leftIcon prop', () => {
        const wrapper = getWrapper({
            icon: (
                <Icon
                    fileUrl="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgLTk2MCA5NjAgOTYwIiB3aWR0aD0iMjQiPjxwYXRoIGQ9Ik01MTcuODQ3LTQ4MCAzNTQuOTI0LTY0Mi45MjRxLTguMzA4LTguMzA3LTguNS0yMC44ODQtLjE5My0xMi41NzYgOC41LTIxLjI2OCA4LjY5Mi04LjY5MyAyMS4wNzYtOC42OTN0MjEuMDc2IDguNjkzbDE3OS43NjkgMTc5Ljc2OXE1LjYxNiA1LjYxNSA3LjkyMyAxMS44NDYgMi4zMDggNi4yMyAyLjMwOCAxMy40NjF0LTIuMzA4IDEzLjQ2MXEtMi4zMDcgNi4yMzEtNy45MjMgMTEuODQ2TDM5Ny4wNzYtMjc0LjkyNHEtOC4zMDcgOC4zMDgtMjAuODg0IDguNS0xMi41NzYuMTkzLTIxLjI2OC04LjUtOC42OTMtOC42OTItOC42OTMtMjEuMDc2dDguNjkzLTIxLjA3Nkw1MTcuODQ3LTQ4MFoiLz48L3N2Zz4="
                    size="md"
                />
            ),
        });
        expect(wrapper.props()).toHaveProperty(
            'leftIcon',
            <div aria-hidden="true">
                <Icon
                    fileUrl="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgLTk2MCA5NjAgOTYwIiB3aWR0aD0iMjQiPjxwYXRoIGQ9Ik01MTcuODQ3LTQ4MCAzNTQuOTI0LTY0Mi45MjRxLTguMzA4LTguMzA3LTguNS0yMC44ODQtLjE5My0xMi41NzYgOC41LTIxLjI2OCA4LjY5Mi04LjY5MyAyMS4wNzYtOC42OTN0MjEuMDc2IDguNjkzbDE3OS43NjkgMTc5Ljc2OXE1LjYxNiA1LjYxNSA3LjkyMyAxMS44NDYgMi4zMDggNi4yMyAyLjMwOCAxMy40NjF0LTIuMzA4IDEzLjQ2MXEtMi4zMDcgNi4yMzEtNy45MjMgMTEuODQ2TDM5Ny4wNzYtMjc0LjkyNHEtOC4zMDcgOC4zMDgtMjAuODg0IDguNS0xMi41NzYuMTkzLTIxLjI2OC04LjUtOC42OTMtOC42OTItOC42OTMtMjEuMDc2dDguNjkzLTIxLjA3Nkw1MTcuODQ3LTQ4MFoiLz48L3N2Zz4="
                    size="md"
                />
            </div>,
        );
    });
});
