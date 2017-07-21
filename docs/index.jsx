import React from 'react';
import ReactDom from 'react-dom';
import FileUpload from '../src/file-upload.jsx';
import { getFileContent } from '../src/file-content';
import './index.less';

class Example extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedFiles: []
        };
        this.onFilesSelected = this.onFilesSelected.bind(this);
        this.onFileDeleted = this.onFileDeleted.bind(this);
    }

    async onFilesSelected(files) {
        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            if (file.type !== 'application/pdf') {
                this.setState({
                    ...this.state,
                    errorMessage: `"${file.name}" har feil filtype. PDF er påkrevd!`
                });
                return;
            }

            const content = await getFileContent(file);
            this.setState({
                ...this.state,
                errorMessage: undefined,
                selectedFiles: [
                    ...this.state.selectedFiles,
                    {
                        name: file.name,
                        type: file.type,
                        size: file.size,
                        content: content
                    }
                ]
            });
        }
    }

    onFileDeleted(file) {
        this.setState({
            ...this.state,
            selectedFiles: [
                ...this.state.selectedFiles.filter(currentFile => currentFile.name !== file.name)
            ]
        });
    }

    render() {
        return (
            <div>
                <h1 className="ffe-h1">ffe-file-upload-react</h1>
                <FileUpload
                    label="Velg fil"
                    multiple={ true }
                    accept=".pdf"
                    selectedFiles={this.state.selectedFiles}
                    onFilesSelected={ this.onFilesSelected }
                    onFileDeleted={ this.onFileDeleted }
                    selectedFilesHeaderLabel="Du har lastet opp:"
                    errorMessage={this.state.errorMessage}
                />
            </div>
        );
    }
}


ReactDom.render(
    <Example/>,
    document.getElementById('app')
);
