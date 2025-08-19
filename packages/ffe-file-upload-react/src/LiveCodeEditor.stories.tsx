import type { StoryObj, Meta } from '@storybook/react';
import { FileUpload } from './FileUpload';
import { getFileContent } from './getFileContent';
import { getUniqueFileName } from './getUniqueFileName';
import { createLiveCodeStory } from '../../../.storybook/shared/LiveCodeEditor';

const meta: Meta<typeof FileUpload> = {
    title: 'Komponenter/FileUpload/Live Code Editor',
    component: FileUpload,
    parameters: {
        docs: {
            description: {
                component: 'Comprehensive live code editor for all file upload components in the FFE FileUpload package. Explore FileUpload with interactive examples for single/multiple file uploads, validation, progress tracking, and real-world scenarios.',
            },
        },
    },
};

export default meta;

type Story = StoryObj<typeof FileUpload>;

// Define comprehensive templates for all file upload components
const fileUploadTemplates = {
    simple: {
        name: 'Enkelt',
        icon: '📁',
        code: `function SimpleFileUpload() {
    const [uploadedFiles, setUploadedFiles] = useState([]);
    
    const handleFileSelect = (files) => {
        setUploadedFiles(files);
    };
    
    const handleFileRemove = (fileToRemove) => {
        setUploadedFiles(prev => prev.filter(file => file !== fileToRemove));
    };
    
    return (
        <div style={{ maxWidth: '600px' }}>
            <h4 style={{ margin: '0 0 16px 0' }}>📁 Enkel filopplasting</h4>
            
            <FileUpload
                id="simple-upload"
                title="Last opp filer"
                infoText="Dra og slipp filer her eller klikk for å velge"
                onFilesSelected={handleFileSelect}
                onFileDeleted={handleFileRemove}
                uploadedFiles={uploadedFiles}
            />
            
            {uploadedFiles.length > 0 && (
                <div style={{ 
                    marginTop: '20px', 
                    padding: '16px', 
                    backgroundColor: 'var(--ffe-color-background-success-subtle)', 
                    borderRadius: '8px' 
                }}>
                    <h5 style={{ margin: '0 0 8px 0' }}>✅ Opplastede filer ({uploadedFiles.length})</h5>
                    <ul style={{ margin: 0, paddingLeft: '20px' }}>
                        {uploadedFiles.map((file, index) => (
                            <li key={index}>
                                <strong>{file.name}</strong> ({Math.round(file.size / 1024)} KB)
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

render(<SimpleFileUpload />);`
    },
    validation: {
        name: 'Validering',
        icon: '✅',
        code: `function ValidationFileUpload() {
    const [uploadedFiles, setUploadedFiles] = useState([]);
    const [errors, setErrors] = useState([]);
    
    const maxFileSize = 5 * 1024 * 1024; // 5MB
    const allowedTypes = ['image/jpeg', 'image/png', 'application/pdf'];
    const maxFiles = 3;
    
    const validateFiles = (files) => {
        const newErrors = [];
        const validFiles = [];
        
        if (files.length + uploadedFiles.length > maxFiles) {
            newErrors.push(\`Du kan maksimalt laste opp \${maxFiles} filer totalt\`);
            return { validFiles: [], errors: newErrors };
        }
        
        files.forEach(file => {
            if (file.size > maxFileSize) {
                newErrors.push(\`\${file.name} er for stor (maks 5MB)\`);
            } else if (!allowedTypes.includes(file.type)) {
                newErrors.push(\`\${file.name} har ugyldig filtype\`);
            } else {
                validFiles.push(file);
            }
        });
        
        return { validFiles, errors: newErrors };
    };
    
    const handleFileSelect = (files) => {
        const { validFiles, errors: validationErrors } = validateFiles(files);
        setErrors(validationErrors);
        
        if (validFiles.length > 0) {
            setUploadedFiles(prev => [...prev, ...validFiles]);
        }
    };
    
    const handleFileRemove = (fileToRemove) => {
        setUploadedFiles(prev => prev.filter(file => file !== fileToRemove));
        setErrors([]);
    };
    
    return (
        <div style={{ maxWidth: '700px' }}>
            <div style={{ 
                padding: '20px', 
                backgroundColor: 'var(--ffe-color-background-warning-subtle)', 
                borderRadius: '8px',
                textAlign: 'center',
                marginBottom: '24px'
            }}>
                <h3 style={{ margin: '0 0 8px 0' }}>✅ Filopplasting med validering</h3>
                <p style={{ margin: 0 }}>Maks {maxFiles} filer, 5MB per fil. Tillatte typer: JPEG, PNG, PDF</p>
            </div>
            
            <FileUpload
                id="validation-upload"
                title="Last opp dokumenter"
                infoText={\`Velg opptil \${maxFiles} filer (maks 5MB hver)\`}
                onFilesSelected={handleFileSelect}
                onFileDeleted={handleFileRemove}
                uploadedFiles={uploadedFiles}
                accept=".jpg,.jpeg,.png,.pdf"
                multiple={true}
            />
            
            {errors.length > 0 && (
                <div style={{ 
                    marginTop: '16px', 
                    padding: '16px', 
                    backgroundColor: 'var(--ffe-color-background-error-subtle)', 
                    borderRadius: '8px'
                }}>
                    <h5 style={{ margin: '0 0 8px 0', color: 'var(--ffe-color-text-error)' }}>❌ Valideringsfeil</h5>
                    <ul style={{ margin: 0, paddingLeft: '20px', color: 'var(--ffe-color-text-error)' }}>
                        {errors.map((error, index) => (
                            <li key={index}>{error}</li>
                        ))}
                    </ul>
                </div>
            )}
            
            {uploadedFiles.length > 0 && (
                <div style={{ 
                    marginTop: '20px', 
                    padding: '16px', 
                    backgroundColor: 'var(--ffe-color-background-subtle)', 
                    borderRadius: '8px' 
                }}>
                    <h5 style={{ margin: '0 0 12px 0' }}>📋 Opplastede filer ({uploadedFiles.length}/{maxFiles})</h5>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        {uploadedFiles.map((file, index) => (
                            <div 
                                key={index}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    padding: '12px',
                                    backgroundColor: 'white',
                                    borderRadius: '6px'
                                }}
                            >
                                <span style={{ fontSize: '20px', marginRight: '12px' }}>
                                    {file.type.startsWith('image/') ? '🖼️' : '📄'}
                                </span>
                                <div style={{ flex: 1 }}>
                                    <div style={{ fontWeight: '500' }}>{file.name}</div>
                                    <div style={{ fontSize: '14px', color: 'var(--ffe-color-text-subtle)' }}>
                                        {Math.round(file.size / 1024)} KB
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

render(<ValidationFileUpload />);`
    },
    interactive: {
        name: 'Interaktiv',
        icon: '⚡',
        code: `function InteractiveFileUpload() {
    const [uploadedFiles, setUploadedFiles] = useState([]);
    const [uploadProgress, setUploadProgress] = useState({});
    const [uploadStatus, setUploadStatus] = useState({});
    
    const simulateUpload = async (file) => {
        const fileId = file.name + file.size;
        setUploadStatus(prev => ({ ...prev, [fileId]: 'uploading' }));
        setUploadProgress(prev => ({ ...prev, [fileId]: 0 }));
        
        // Simulate upload progress
        for (let progress = 0; progress <= 100; progress += Math.random() * 20) {
            await new Promise(resolve => setTimeout(resolve, 100));
            setUploadProgress(prev => ({ ...prev, [fileId]: Math.min(progress, 100) }));
        }
        
        // Simulate success/failure
        const success = Math.random() > 0.2;
        setUploadStatus(prev => ({ 
            ...prev, 
            [fileId]: success ? 'success' : 'error' 
        }));
    };
    
    const handleFileSelect = (files) => {
        setUploadedFiles(prev => [...prev, ...files]);
        files.forEach(file => simulateUpload(file));
    };
    
    const handleFileRemove = (fileToRemove) => {
        const fileId = fileToRemove.name + fileToRemove.size;
        setUploadedFiles(prev => prev.filter(file => file !== fileToRemove));
        setUploadProgress(prev => {
            const newProgress = { ...prev };
            delete newProgress[fileId];
            return newProgress;
        });
        setUploadStatus(prev => {
            const newStatus = { ...prev };
            delete newStatus[fileId];
            return newStatus;
        });
    };
    
    const getStatusIcon = (status) => {
        switch (status) {
            case 'uploading': return '⏳';
            case 'success': return '✅';
            case 'error': return '❌';
            default: return '📁';
        }
    };
    
    const successfulUploads = Object.values(uploadStatus).filter(status => status === 'success').length;
    const failedUploads = Object.values(uploadStatus).filter(status => status === 'error').length;
    
    return (
        <div style={{ maxWidth: '800px' }}>
            <div style={{ 
                padding: '20px', 
                backgroundColor: 'var(--ffe-color-background-primary)', 
                color: 'white',
                borderRadius: '8px',
                textAlign: 'center',
                marginBottom: '24px'
            }}>
                <h3 style={{ margin: '0 0 8px 0' }}>⚡ Interaktiv filopplasting</h3>
                <p style={{ margin: 0 }}>Simulerer realistisk opplasting med fremgang</p>
            </div>
            
            <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))', 
                gap: '16px',
                marginBottom: '24px'
            }}>
                <div style={{ 
                    padding: '12px', 
                    backgroundColor: 'var(--ffe-color-background-success-subtle)', 
                    borderRadius: '8px',
                    textAlign: 'center'
                }}>
                    <div style={{ fontSize: '18px', fontWeight: 'bold' }}>{successfulUploads}</div>
                    <div style={{ fontSize: '12px' }}>Vellykkede</div>
                </div>
                <div style={{ 
                    padding: '12px', 
                    backgroundColor: 'var(--ffe-color-background-error-subtle)', 
                    borderRadius: '8px',
                    textAlign: 'center'
                }}>
                    <div style={{ fontSize: '18px', fontWeight: 'bold' }}>{failedUploads}</div>
                    <div style={{ fontSize: '12px' }}>Feilet</div>
                </div>
            </div>
            
            <FileUpload
                id="interactive-upload"
                title="Last opp filer med fremgang"
                infoText="Opplasting starter automatisk"
                onFilesSelected={handleFileSelect}
                onFileDeleted={handleFileRemove}
                uploadedFiles={uploadedFiles}
                multiple={true}
            />
            
            {uploadedFiles.length > 0 && (
                <div style={{ 
                    marginTop: '20px', 
                    padding: '16px', 
                    backgroundColor: 'var(--ffe-color-background-subtle)', 
                    borderRadius: '8px' 
                }}>
                    <h5 style={{ margin: '0 0 12px 0' }}>📋 Opplastingsstatus</h5>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        {uploadedFiles.map((file, index) => {
                            const fileId = file.name + file.size;
                            const progress = uploadProgress[fileId] || 0;
                            const status = uploadStatus[fileId] || 'pending';
                            
                            return (
                                <div 
                                    key={index}
                                    style={{
                                        padding: '16px',
                                        backgroundColor: 'white',
                                        borderRadius: '8px'
                                    }}
                                >
                                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
                                        <span style={{ fontSize: '20px', marginRight: '12px' }}>
                                            {getStatusIcon(status)}
                                        </span>
                                        <div style={{ flex: 1 }}>
                                            <div style={{ fontWeight: '500' }}>{file.name}</div>
                                            <div style={{ fontSize: '14px', color: 'var(--ffe-color-text-subtle)' }}>
                                                {Math.round(file.size / 1024)} KB
                                            </div>
                                        </div>
                                    </div>
                                    
                                    {status === 'uploading' && (
                                        <div>
                                            <div style={{ 
                                                display: 'flex', 
                                                justifyContent: 'space-between', 
                                                marginBottom: '4px',
                                                fontSize: '12px'
                                            }}>
                                                <span>Fremgang</span>
                                                <span>{Math.round(progress)}%</span>
                                            </div>
                                            <div style={{
                                                width: '100%',
                                                height: '6px',
                                                backgroundColor: 'var(--ffe-color-background-disabled)',
                                                borderRadius: '3px',
                                                overflow: 'hidden'
                                            }}>
                                                <div style={{
                                                    width: \`\${progress}%\`,
                                                    height: '100%',
                                                    backgroundColor: 'var(--ffe-color-background-primary)',
                                                    transition: 'width 0.3s ease'
                                                }} />
                                            </div>
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            )}
        </div>
    );
}

render(<InteractiveFileUpload />);`
    },
    showcase: {
        name: 'Showcase',
        icon: '🏆',
        code: `function FileUploadShowcase() {
    const [documents, setDocuments] = useState([]);
    const [images, setImages] = useState([]);
    const [activeTab, setActiveTab] = useState('documents');
    
    const handleDocumentUpload = (files) => {
        setDocuments(prev => [...prev, ...files.map(file => ({
            ...file,
            uploadDate: new Date().toLocaleDateString('no-NO')
        }))]);
    };
    
    const handleImageUpload = (files) => {
        setImages(prev => [...prev, ...files.map(file => ({
            ...file,
            uploadDate: new Date().toLocaleDateString('no-NO')
        }))]);
    };
    
    const totalFiles = documents.length + images.length;
    const totalSize = [...documents, ...images].reduce((sum, file) => sum + file.size, 0);
    
    return (
        <div style={{ 
            padding: '24px', 
            backgroundColor: 'var(--ffe-color-background-subtle)', 
            borderRadius: '8px',
            maxWidth: '800px'
        }}>
            <div style={{ textAlign: 'center', marginBottom: '32px' }}>
                <h2 style={{ margin: '0 0 8px 0' }}>🏆 Dokumenthåndtering</h2>
                <p style={{ margin: 0, color: 'var(--ffe-color-text-subtle)' }}>
                    Komplett løsning for opplasting av filer
                </p>
            </div>
            
            <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))', 
                gap: '16px',
                marginBottom: '24px'
            }}>
                <div style={{ 
                    padding: '16px', 
                    backgroundColor: 'var(--ffe-color-background-info-subtle)', 
                    borderRadius: '8px',
                    textAlign: 'center'
                }}>
                    <div style={{ fontSize: '20px', fontWeight: 'bold' }}>{totalFiles}</div>
                    <div style={{ fontSize: '14px' }}>Totale filer</div>
                </div>
                <div style={{ 
                    padding: '16px', 
                    backgroundColor: 'var(--ffe-color-background-success-subtle)', 
                    borderRadius: '8px',
                    textAlign: 'center'
                }}>
                    <div style={{ fontSize: '20px', fontWeight: 'bold' }}>{documents.length}</div>
                    <div style={{ fontSize: '14px' }}>Dokumenter</div>
                </div>
                <div style={{ 
                    padding: '16px', 
                    backgroundColor: 'var(--ffe-color-background-warning-subtle)', 
                    borderRadius: '8px',
                    textAlign: 'center'
                }}>
                    <div style={{ fontSize: '20px', fontWeight: 'bold' }}>{images.length}</div>
                    <div style={{ fontSize: '14px' }}>Bilder</div>
                </div>
            </div>
            
            <div style={{ 
                display: 'flex', 
                gap: '8px', 
                marginBottom: '24px'
            }}>
                <button
                    onClick={() => setActiveTab('documents')}
                    style={{
                        padding: '8px 16px',
                        border: 'none',
                        backgroundColor: activeTab === 'documents' ? 'var(--ffe-color-background-primary)' : 'transparent',
                        color: activeTab === 'documents' ? 'white' : 'var(--ffe-color-text-subtle)',
                        borderRadius: '4px',
                        cursor: 'pointer'
                    }}
                >
                    📄 Dokumenter
                </button>
                <button
                    onClick={() => setActiveTab('images')}
                    style={{
                        padding: '8px 16px',
                        border: 'none',
                        backgroundColor: activeTab === 'images' ? 'var(--ffe-color-background-primary)' : 'transparent',
                        color: activeTab === 'images' ? 'white' : 'var(--ffe-color-text-subtle)',
                        borderRadius: '4px',
                        cursor: 'pointer'
                    }}
                >
                    🖼️ Bilder
                </button>
            </div>
            
            <div style={{ 
                backgroundColor: 'white', 
                borderRadius: '8px', 
                padding: '20px'
            }}>
                {activeTab === 'documents' && (
                    <div>
                        <h3 style={{ margin: '0 0 16px 0' }}>📄 Dokumentopplasting</h3>
                        <FileUpload
                            id="document-upload"
                            title="Last opp dokumenter"
                            infoText="PDF, Word og tekstfiler"
                            onFilesSelected={handleDocumentUpload}
                            onFileDeleted={(file) => setDocuments(prev => prev.filter(f => f !== file))}
                            uploadedFiles={documents}
                            accept=".pdf,.doc,.docx,.txt"
                            multiple={true}
                        />
                    </div>
                )}
                
                {activeTab === 'images' && (
                    <div>
                        <h3 style={{ margin: '0 0 16px 0' }}>🖼️ Bildeopplasting</h3>
                        <FileUpload
                            id="image-upload"
                            title="Last opp bilder"
                            infoText="JPEG, PNG og GIF filer"
                            onFilesSelected={handleImageUpload}
                            onFileDeleted={(file) => setImages(prev => prev.filter(f => f !== file))}
                            uploadedFiles={images}
                            accept=".jpg,.jpeg,.png,.gif"
                            multiple={true}
                        />
                    </div>
                )}
            </div>
        </div>
    );
}

render(<FileUploadShowcase />);`
    }
};

export const LiveCodeEditor: Story = createLiveCodeStory(FileUpload, {
    templates: fileUploadTemplates,
    additionalComponents: {
        getFileContent,
        getUniqueFileName
    },
    defaultTemplate: 'simple',
    title: 'FileUpload Live Code Editor',
    description: 'Comprehensive live code editor for all file upload components in the FFE FileUpload package. Explore FileUpload with interactive examples for single/multiple file uploads, validation, progress tracking, and real-world scenarios.'
});
