import { TextArea } from '@sb1/ffe-form-react';
import { ButtonGroup, PrimaryButton } from '@sb1/ffe-buttons-react';

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
                <TextArea
                    ref={this.inputRef}
                    placeholder="Trykk på knappen for fokus"
                />
                <ButtonGroup>
                    <PrimaryButton onClick={this.handleClick}>
                        Klikk for å fokusere input
                    </PrimaryButton>
                </ButtonGroup>
            </>
        );
    }
}
