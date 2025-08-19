import type { StoryObj, Meta } from '@storybook/react';
import { SearchableDropdown } from './single/SearchableDropdown';
import { SearchableDropdownMultiSelect } from './multi/SearchableDropdownMultiSelect';
import { createLiveCodeStory } from '../../../.storybook/shared/LiveCodeEditor';

const meta: Meta<typeof SearchableDropdown> = {
    title: 'Komponenter/SearchableDropdown/Live Code Editor',
    component: SearchableDropdown,
    parameters: {
        docs: {
            description: {
                component: 'Comprehensive live code editor for all searchable dropdown components. Explore SearchableDropdown and SearchableDropdownMultiSelect with interactive examples for filtering, selection, and multi-selection scenarios.',
            },
        },
    },
};

export default meta;

type Story = StoryObj<typeof SearchableDropdown>;

// Define comprehensive templates for all searchable dropdown components
const searchableDropdownTemplates = {
    simple: {
        name: 'Enkelt',
        icon: '🔍',
        code: `function SimpleSearchableDropdown() {
    const [selectedValue, setSelectedValue] = useState(null);
    
    const options = [
        { value: 'oslo', text: 'Oslo' },
        { value: 'bergen', text: 'Bergen' },
        { value: 'trondheim', text: 'Trondheim' },
        { value: 'stavanger', text: 'Stavanger' },
        { value: 'kristiansand', text: 'Kristiansand' }
    ];
    
    return (
        <div style={{ maxWidth: '300px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>
                Velg by
            </label>
            <SearchableDropdown
                id="city-dropdown"
                labelledById="city-label"
                placeholder="Søk etter by..."
                noMatch={{ text: 'Ingen treff' }}
                options={options}
                selectedValue={selectedValue}
                onChange={setSelectedValue}
            />
            
            {selectedValue && (
                <div style={{ 
                    marginTop: '16px', 
                    padding: '12px', 
                    backgroundColor: 'var(--ffe-color-background-subtle)', 
                    borderRadius: '4px' 
                }}>
                    <strong>Valgt:</strong> {selectedValue.text}
                </div>
            )}
        </div>
    );
}

<SimpleSearchableDropdown />`
    },
    multiSelect: {
        name: 'Flervalg',
        icon: '☑️',
        code: `function MultiSelectDropdown() {
    const [selectedValues, setSelectedValues] = useState([]);
    
    const options = [
        { value: 'javascript', text: 'JavaScript' },
        { value: 'typescript', text: 'TypeScript' },
        { value: 'react', text: 'React' },
        { value: 'vue', text: 'Vue.js' },
        { value: 'angular', text: 'Angular' },
        { value: 'svelte', text: 'Svelte' },
        { value: 'nodejs', text: 'Node.js' },
        { value: 'python', text: 'Python' },
        { value: 'java', text: 'Java' },
        { value: 'csharp', text: 'C#' }
    ];
    
    return (
        <div style={{ maxWidth: '400px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>
                Velg programmeringsspråk ({selectedValues.length} valgt)
            </label>
            <SearchableDropdownMultiSelect
                id="languages-dropdown"
                labelledById="languages-label"
                placeholder="Søk etter språk..."
                noMatch={{ text: 'Ingen treff funnet' }}
                options={options}
                selectedValues={selectedValues}
                onChange={setSelectedValues}
            />
            
            {selectedValues.length > 0 && (
                <div style={{ 
                    marginTop: '16px', 
                    padding: '12px', 
                    backgroundColor: 'var(--ffe-color-background-subtle)', 
                    borderRadius: '4px' 
                }}>
                    <strong>Valgte språk:</strong>
                    <div style={{ marginTop: '8px', display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
                        {selectedValues.map(item => (
                            <span
                                key={item.value}
                                style={{
                                    padding: '4px 8px',
                                    backgroundColor: 'var(--ffe-color-background-primary)',
                                    color: 'white',
                                    borderRadius: '12px',
                                    fontSize: '12px'
                                }}
                            >
                                {item.text}
                            </span>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

<MultiSelectDropdown />`
    },
    categories: {
        name: 'Kategorier',
        icon: '📂',
        code: `function CategorizedDropdown() {
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [selectedCities, setSelectedCities] = useState([]);
    
    const countries = [
        { value: 'norway', text: 'Norge' },
        { value: 'sweden', text: 'Sverige' },
        { value: 'denmark', text: 'Danmark' },
        { value: 'finland', text: 'Finland' }
    ];
    
    const cities = [
        { value: 'oslo', text: 'Oslo', country: 'norway' },
        { value: 'bergen', text: 'Bergen', country: 'norway' },
        { value: 'trondheim', text: 'Trondheim', country: 'norway' },
        { value: 'stockholm', text: 'Stockholm', country: 'sweden' },
        { value: 'gothenburg', text: 'Göteborg', country: 'sweden' },
        { value: 'copenhagen', text: 'København', country: 'denmark' },
        { value: 'aarhus', text: 'Aarhus', country: 'denmark' },
        { value: 'helsinki', text: 'Helsinki', country: 'finland' },
        { value: 'tampere', text: 'Tampere', country: 'finland' }
    ];
    
    const availableCities = selectedCountry 
        ? cities.filter(city => city.country === selectedCountry.value)
        : cities;
    
    return (
        <div style={{ maxWidth: '400px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>
                    Velg land
                </label>
                <SearchableDropdown
                    id="country-dropdown"
                    labelledById="country-label"
                    placeholder="Søk etter land..."
                    noMatch={{ text: 'Ingen land funnet' }}
                    options={countries}
                    selectedValue={selectedCountry}
                    onChange={(value) => {
                        setSelectedCountry(value);
                        setSelectedCities([]); // Reset cities when country changes
                    }}
                />
            </div>
            
            <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>
                    Velg byer {selectedCountry && \`i \${selectedCountry.text}\`}
                </label>
                <SearchableDropdownMultiSelect
                    id="cities-dropdown"
                    labelledById="cities-label"
                    placeholder={selectedCountry ? "Søk etter byer..." : "Velg et land først"}
                    noMatch={{ text: 'Ingen byer funnet' }}
                    options={availableCities}
                    selectedValues={selectedCities}
                    onChange={setSelectedCities}
                    disabled={!selectedCountry}
                />
            </div>
            
            {(selectedCountry || selectedCities.length > 0) && (
                <div style={{ 
                    padding: '16px', 
                    backgroundColor: 'var(--ffe-color-background-subtle)', 
                    borderRadius: '8px' 
                }}>
                    <h4 style={{ margin: '0 0 12px 0' }}>Valg sammendrag</h4>
                    {selectedCountry && (
                        <p><strong>Land:</strong> {selectedCountry.text}</p>
                    )}
                    {selectedCities.length > 0 && (
                        <p><strong>Byer:</strong> {selectedCities.map(city => city.text).join(', ')}</p>
                    )}
                </div>
            )}
        </div>
    );
}

<CategorizedDropdown />`
    },
    interactive: {
        name: 'Interaktiv',
        icon: '⚡',
        code: `function InteractiveDropdowns() {
    const [searchHistory, setSearchHistory] = useState([]);
    const [selectedSkills, setSelectedSkills] = useState([]);
    const [selectedExperience, setSelectedExperience] = useState(null);
    const [isFormValid, setIsFormValid] = useState(false);
    
    const skills = [
        { value: 'frontend', text: 'Frontend Development' },
        { value: 'backend', text: 'Backend Development' },
        { value: 'fullstack', text: 'Full Stack Development' },
        { value: 'mobile', text: 'Mobile Development' },
        { value: 'devops', text: 'DevOps' },
        { value: 'testing', text: 'Testing & QA' },
        { value: 'design', text: 'UI/UX Design' },
        { value: 'data', text: 'Data Science' },
        { value: 'ml', text: 'Machine Learning' },
        { value: 'security', text: 'Cybersecurity' }
    ];
    
    const experienceLevels = [
        { value: 'junior', text: 'Junior (0-2 år)' },
        { value: 'mid', text: 'Mid-level (2-5 år)' },
        { value: 'senior', text: 'Senior (5+ år)' },
        { value: 'lead', text: 'Tech Lead' },
        { value: 'architect', text: 'Solution Architect' }
    ];
    
    const addToHistory = (searchTerm) => {
        if (searchTerm && !searchHistory.includes(searchTerm)) {
            setSearchHistory(prev => [searchTerm, ...prev.slice(0, 4)]); // Keep last 5 searches
        }
    };
    
    const clearHistory = () => {
        setSearchHistory([]);
    };
    
    useEffect(() => {
        setIsFormValid(selectedSkills.length > 0 && selectedExperience !== null);
    }, [selectedSkills, selectedExperience]);
    
    const handleSubmit = () => {
        if (isFormValid) {
            alert(\`Profil lagret!\\nFerdigheter: \${selectedSkills.map(s => s.text).join(', ')}\\nErfaring: \${selectedExperience.text}\`);
        }
    };
    
    return (
        <div style={{ maxWidth: '500px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div style={{ 
                padding: '16px', 
                backgroundColor: 'var(--ffe-color-background-info-subtle)', 
                borderRadius: '8px' 
            }}>
                <h4 style={{ margin: '0 0 12px 0' }}>Opprett din profesjonelle profil</h4>
                <p style={{ margin: 0, fontSize: '14px' }}>
                    Fyll ut informasjonen nedenfor for å lage din profil.
                </p>
            </div>
            
            <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>
                    Dine ferdigheter * ({selectedSkills.length} valgt)
                </label>
                <SearchableDropdownMultiSelect
                    id="skills-dropdown"
                    labelledById="skills-label"
                    placeholder="Søk og velg dine ferdigheter..."
                    noMatch={{ text: 'Ingen ferdigheter funnet' }}
                    options={skills}
                    selectedValues={selectedSkills}
                    onChange={setSelectedSkills}
                    onInputChange={(value) => addToHistory(value)}
                />
                <small style={{ color: 'var(--ffe-color-text-subtle)' }}>
                    Velg minst én ferdighet
                </small>
            </div>
            
            <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>
                    Erfaringsnivå *
                </label>
                <SearchableDropdown
                    id="experience-dropdown"
                    labelledById="experience-label"
                    placeholder="Velg ditt erfaringsnivå..."
                    noMatch={{ text: 'Ingen treff' }}
                    options={experienceLevels}
                    selectedValue={selectedExperience}
                    onChange={setSelectedExperience}
                />
            </div>
            
            {searchHistory.length > 0 && (
                <div style={{ 
                    padding: '12px', 
                    backgroundColor: 'var(--ffe-color-background-subtle)', 
                    borderRadius: '4px' 
                }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                        <strong style={{ fontSize: '14px' }}>Søkehistorikk</strong>
                        <button
                            onClick={clearHistory}
                            style={{
                                background: 'none',
                                border: 'none',
                                color: 'var(--ffe-color-text-action)',
                                cursor: 'pointer',
                                fontSize: '12px',
                                textDecoration: 'underline'
                            }}
                        >
                            Tøm
                        </button>
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
                        {searchHistory.map((term, index) => (
                            <span
                                key={index}
                                style={{
                                    padding: '2px 6px',
                                    backgroundColor: 'white',
                                    border: '1px solid var(--ffe-color-border-subtle)',
                                    borderRadius: '8px',
                                    fontSize: '12px'
                                }}
                            >
                                {term}
                            </span>
                        ))}
                    </div>
                </div>
            )}
            
            <div style={{ 
                padding: '16px', 
                backgroundColor: 'var(--ffe-color-background-subtle)', 
                borderRadius: '8px' 
            }}>
                <h4 style={{ margin: '0 0 12px 0' }}>Profil forhåndsvisning</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <div>
                        <strong>Ferdigheter:</strong> {selectedSkills.length > 0 ? selectedSkills.map(s => s.text).join(', ') : 'Ingen valgt'}
                    </div>
                    <div>
                        <strong>Erfaring:</strong> {selectedExperience ? selectedExperience.text : 'Ikke valgt'}
                    </div>
                    <div>
                        <strong>Status:</strong> 
                        <span style={{ 
                            color: isFormValid ? 'var(--ffe-color-text-success)' : 'var(--ffe-color-text-error)',
                            marginLeft: '8px'
                        }}>
                            {isFormValid ? '✓ Komplett' : '⚠ Ufullstendig'}
                        </span>
                    </div>
                </div>
                
                <button
                    onClick={handleSubmit}
                    disabled={!isFormValid}
                    style={{
                        marginTop: '16px',
                        padding: '10px 20px',
                        backgroundColor: isFormValid ? 'var(--ffe-color-background-primary)' : 'var(--ffe-color-background-disabled)',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: isFormValid ? 'pointer' : 'not-allowed',
                        width: '100%'
                    }}
                >
                    {isFormValid ? 'Lagre profil' : 'Fyll ut alle påkrevde felt'}
                </button>
            </div>
        </div>
    );
}

<InteractiveDropdowns />`
    },
    showcase: {
        name: 'Showcase',
        icon: '🏆',
        code: `function SearchableDropdownShowcase() {
    const [jobSearch, setJobSearch] = useState({
        location: null,
        skills: [],
        experience: null,
        jobType: []
    });
    
    const locations = [
        { value: 'oslo', text: 'Oslo' },
        { value: 'bergen', text: 'Bergen' },
        { value: 'trondheim', text: 'Trondheim' },
        { value: 'stavanger', text: 'Stavanger' },
        { value: 'remote', text: 'Hjemmekontor' }
    ];
    
    const skills = [
        { value: 'react', text: 'React' },
        { value: 'vue', text: 'Vue.js' },
        { value: 'angular', text: 'Angular' },
        { value: 'nodejs', text: 'Node.js' },
        { value: 'python', text: 'Python' },
        { value: 'java', text: 'Java' },
        { value: 'csharp', text: 'C#' },
        { value: 'php', text: 'PHP' }
    ];
    
    const experienceLevels = [
        { value: 'entry', text: 'Nyutdannet' },
        { value: 'junior', text: 'Junior (1-3 år)' },
        { value: 'mid', text: 'Erfaren (3-7 år)' },
        { value: 'senior', text: 'Senior (7+ år)' }
    ];
    
    const jobTypes = [
        { value: 'fulltime', text: 'Heltid' },
        { value: 'parttime', text: 'Deltid' },
        { value: 'contract', text: 'Konsulent' },
        { value: 'internship', text: 'Praksis' }
    ];
    
    const getJobCount = () => {
        // Simulate job count based on criteria
        let baseCount = 150;
        if (jobSearch.location) baseCount *= 0.6;
        if (jobSearch.skills.length > 0) baseCount *= (0.8 - jobSearch.skills.length * 0.1);
        if (jobSearch.experience) baseCount *= 0.7;
        if (jobSearch.jobType.length > 0) baseCount *= 0.8;
        return Math.max(1, Math.floor(baseCount));
    };
    
    const resetSearch = () => {
        setJobSearch({
            location: null,
            skills: [],
            experience: null,
            jobType: []
        });
    };
    
    return (
        <div style={{ 
            padding: '24px', 
            backgroundColor: 'var(--ffe-color-background-subtle)', 
            borderRadius: '8px',
            maxWidth: '700px'
        }}>
            <div style={{ textAlign: 'center', marginBottom: '32px' }}>
                <h2 style={{ margin: '0 0 8px 0' }}>🔍 Jobbsøk Portal</h2>
                <p style={{ margin: 0, color: 'var(--ffe-color-text-subtle)' }}>
                    Finn din drømmejobb med avanserte søkefiltre
                </p>
            </div>
            
            <div style={{ 
                backgroundColor: 'white', 
                borderRadius: '8px', 
                padding: '24px'
            }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
                    <div>
                        <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>
                            📍 Lokasjon
                        </label>
                        <SearchableDropdown
                            id="location-search"
                            placeholder="Hvor vil du jobbe?"
                            noMatch={{ text: 'Ingen lokasjoner funnet' }}
                            options={locations}
                            selectedValue={jobSearch.location}
                            onChange={(value) => setJobSearch(prev => ({ ...prev, location: value }))}
                        />
                    </div>
                    
                    <div>
                        <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>
                            💼 Erfaringsnivå
                        </label>
                        <SearchableDropdown
                            id="experience-search"
                            placeholder="Velg erfaringsnivå"
                            noMatch={{ text: 'Ingen treff' }}
                            options={experienceLevels}
                            selectedValue={jobSearch.experience}
                            onChange={(value) => setJobSearch(prev => ({ ...prev, experience: value }))}
                        />
                    </div>
                </div>
                
                <div style={{ marginTop: '20px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
                    <div>
                        <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>
                            🛠️ Ferdigheter ({jobSearch.skills.length} valgt)
                        </label>
                        <SearchableDropdownMultiSelect
                            id="skills-search"
                            placeholder="Velg relevante ferdigheter"
                            noMatch={{ text: 'Ingen ferdigheter funnet' }}
                            options={skills}
                            selectedValues={jobSearch.skills}
                            onChange={(values) => setJobSearch(prev => ({ ...prev, skills: values }))}
                        />
                    </div>
                    
                    <div>
                        <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>
                            ⏰ Stillingstype ({jobSearch.jobType.length} valgt)
                        </label>
                        <SearchableDropdownMultiSelect
                            id="jobtype-search"
                            placeholder="Velg stillingstype"
                            noMatch={{ text: 'Ingen stillingstyper funnet' }}
                            options={jobTypes}
                            selectedValues={jobSearch.jobType}
                            onChange={(values) => setJobSearch(prev => ({ ...prev, jobType: values }))}
                        />
                    </div>
                </div>
                
                <div style={{ 
                    marginTop: '24px', 
                    padding: '16px', 
                    backgroundColor: 'var(--ffe-color-background-primary)', 
                    color: 'white',
                    borderRadius: '8px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    <div>
                        <h4 style={{ margin: '0 0 4px 0' }}>🎯 Søkeresultater</h4>
                        <p style={{ margin: 0 }}>
                            {getJobCount()} stillinger funnet
                        </p>
                    </div>
                    <div style={{ display: 'flex', gap: '12px' }}>
                        <button
                            onClick={resetSearch}
                            style={{
                                padding: '8px 16px',
                                backgroundColor: 'rgba(255,255,255,0.2)',
                                color: 'white',
                                border: '1px solid rgba(255,255,255,0.3)',
                                borderRadius: '4px',
                                cursor: 'pointer'
                            }}
                        >
                            Nullstill
                        </button>
                        <button
                            style={{
                                padding: '8px 16px',
                                backgroundColor: 'white',
                                color: 'var(--ffe-color-text-primary)',
                                border: 'none',
                                borderRadius: '4px',
                                cursor: 'pointer',
                                fontWeight: '500'
                            }}
                            onClick={() => alert('Søker etter jobber...')}
                        >
                            Søk jobber
                        </button>
                    </div>
                </div>
                
                {(jobSearch.location || jobSearch.skills.length > 0 || jobSearch.experience || jobSearch.jobType.length > 0) && (
                    <div style={{ 
                        marginTop: '16px', 
                        padding: '12px', 
                        backgroundColor: 'var(--ffe-color-background-subtle)', 
                        borderRadius: '4px' 
                    }}>
                        <strong style={{ fontSize: '14px' }}>Aktive filtre:</strong>
                        <div style={{ marginTop: '8px', display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
                            {jobSearch.location && (
                                <span style={{ padding: '2px 6px', backgroundColor: 'var(--ffe-color-background-info)', color: 'white', borderRadius: '8px', fontSize: '12px' }}>
                                    📍 {jobSearch.location.text}
                                </span>
                            )}
                            {jobSearch.experience && (
                                <span style={{ padding: '2px 6px', backgroundColor: 'var(--ffe-color-background-warning)', color: 'white', borderRadius: '8px', fontSize: '12px' }}>
                                    💼 {jobSearch.experience.text}
                                </span>
                            )}
                            {jobSearch.skills.map(skill => (
                                <span key={skill.value} style={{ padding: '2px 6px', backgroundColor: 'var(--ffe-color-background-success)', color: 'white', borderRadius: '8px', fontSize: '12px' }}>
                                    🛠️ {skill.text}
                                </span>
                            ))}
                            {jobSearch.jobType.map(type => (
                                <span key={type.value} style={{ padding: '2px 6px', backgroundColor: 'var(--ffe-color-background-primary)', color: 'white', borderRadius: '8px', fontSize: '12px' }}>
                                    ⏰ {type.text}
                                </span>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

<SearchableDropdownShowcase />`
    }
};

export const LiveCodeEditor: Story = createLiveCodeStory(SearchableDropdown, {
    templates: searchableDropdownTemplates,
    additionalComponents: {
        SearchableDropdownMultiSelect
    },
    defaultTemplate: 'simple',
    title: 'SearchableDropdown Live Code Editor',
    description: 'Comprehensive live code editor for all searchable dropdown components. Explore SearchableDropdown and SearchableDropdownMultiSelect with interactive examples for filtering, selection, and multi-selection scenarios.'
});
