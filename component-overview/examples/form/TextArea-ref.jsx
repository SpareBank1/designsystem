import { TextArea, InputGroup } from '@sb1/ffe-form-react';
import { PrimaryButton } from '@sb1/ffe-buttons-react';

class Example extends React.Component {
    constructor() {
        super();
        this.inputRef = React.createRef();
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.inputRef.current.focus();
    }
    render() {
        return (
            <>
                <InputGroup label="Trykk på knappen for fokus">
                    <TextArea ref={this.inputRef} />
                </InputGroup>
                <PrimaryButton onClick={this.handleClick}>
                    Klikk for å fokusere input
                </PrimaryButton>
            </>
        );
    }
}
