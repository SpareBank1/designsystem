import type { StoryObj, Meta } from '@storybook/react';
import { Datepicker } from './datepicker';
import { DateInput } from './input';
import { Calendar } from './calendar';
import { createLiveCodeStory } from '../../../.storybook/shared/LiveCodeEditor';

const meta: Meta<typeof Datepicker> = {
    title: 'Komponenter/Datepicker/Live Code Editor',
    component: Datepicker,
    parameters: {
        docs: {
            description: {
                component: 'Comprehensive live code editor for all datepicker components in the FFE Datepicker package. Explore Datepicker, DateInput, and Calendar with interactive examples for date selection, validation, and real-world scenarios.',
            },
        },
    },
};

export default meta;

type Story = StoryObj<typeof Datepicker>;

// Define comprehensive templates for all datepicker components
const datepickerTemplates = {
    simple: {
        name: 'Enkelt',
        icon: '📅',
        code: `function SimpleDatepicker() {
    const [selectedDate, setSelectedDate] = useState(null);
    
    return (
        <div style={{ maxWidth: '300px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>
                Velg dato
            </label>
            <Datepicker
                id="simple-datepicker"
                value={selectedDate}
                onChange={setSelectedDate}
                placeholder="dd.mm.åååå"
            />
            
            {selectedDate && (
                <div style={{ 
                    marginTop: '16px', 
                    padding: '12px', 
                    backgroundColor: 'var(--ffe-color-background-subtle)', 
                    borderRadius: '4px' 
                }}>
                    <strong>Valgt dato:</strong> {selectedDate}
                </div>
            )}
        </div>
    );
}

render(<SimpleDatepicker />);`
    },
    validation: {
        name: 'Validering',
        icon: '✅',
        code: `function ValidationDatepicker() {
    const [formData, setFormData] = useState({
        birthDate: '',
        startDate: '',
        endDate: ''
    });
    const [errors, setErrors] = useState({});
    
    const validateDate = (field, value) => {
        const newErrors = { ...errors };
        
        if (field === 'birthDate' && value) {
            const birthYear = new Date(value.split('.').reverse().join('-')).getFullYear();
            const currentYear = new Date().getFullYear();
            if (currentYear - birthYear < 18) {
                newErrors.birthDate = 'Du må være minst 18 år gammel';
            } else {
                delete newErrors.birthDate;
            }
        }
        
        if (field === 'endDate' && formData.startDate && value) {
            const start = new Date(formData.startDate.split('.').reverse().join('-'));
            const end = new Date(value.split('.').reverse().join('-'));
            if (end <= start) {
                newErrors.endDate = 'Sluttdato må være etter startdato';
            } else {
                delete newErrors.endDate;
            }
        }
        
        setErrors(newErrors);
    };
    
    const handleDateChange = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }));
        validateDate(field, value);
    };
    
    return (
        <div style={{ maxWidth: '400px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>
                    Fødselsdato *
                </label>
                <Datepicker
                    id="birth-date"
                    value={formData.birthDate}
                    onChange={(value) => handleDateChange('birthDate', value)}
                    placeholder="dd.mm.åååå"
                />
                {errors.birthDate && (
                    <div style={{ color: 'var(--ffe-color-text-error)', fontSize: '14px', marginTop: '4px' }}>
                        {errors.birthDate}
                    </div>
                )}
            </div>
            
            <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>
                    Startdato *
                </label>
                <Datepicker
                    id="start-date"
                    value={formData.startDate}
                    onChange={(value) => handleDateChange('startDate', value)}
                    placeholder="dd.mm.åååå"
                />
            </div>
            
            <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>
                    Sluttdato
                </label>
                <Datepicker
                    id="end-date"
                    value={formData.endDate}
                    onChange={(value) => handleDateChange('endDate', value)}
                    placeholder="dd.mm.åååå"
                    disabled={!formData.startDate}
                />
                {errors.endDate && (
                    <div style={{ color: 'var(--ffe-color-text-error)', fontSize: '14px', marginTop: '4px' }}>
                        {errors.endDate}
                    </div>
                )}
            </div>
            
            <div style={{ 
                padding: '16px', 
                backgroundColor: Object.keys(errors).length === 0 ? 'var(--ffe-color-background-success-subtle)' : 'var(--ffe-color-background-error-subtle)', 
                borderRadius: '8px' 
            }}>
                <h4 style={{ margin: '0 0 8px 0' }}>Validering status</h4>
                <p style={{ margin: 0 }}>
                    {Object.keys(errors).length === 0 
                        ? '✅ Alle datoer er gyldige' 
                        : \`❌ \${Object.keys(errors).length} feil må rettes\`
                    }
                </p>
            </div>
        </div>
    );
}

render(<ValidationDatepicker />);`
    },
    interactive: {
        name: 'Interaktiv',
        icon: '⚡',
        code: `function InteractiveDatepicker() {
    const [bookingData, setBookingData] = useState({
        checkIn: '',
        checkOut: '',
        guests: 1,
        roomType: 'standard'
    });
    const [totalNights, setTotalNights] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    
    const roomPrices = {
        standard: 1200,
        deluxe: 1800,
        suite: 2500
    };
    
    const calculateStay = () => {
        if (bookingData.checkIn && bookingData.checkOut) {
            const checkIn = new Date(bookingData.checkIn.split('.').reverse().join('-'));
            const checkOut = new Date(bookingData.checkOut.split('.').reverse().join('-'));
            const nights = Math.ceil((checkOut - checkIn) / (1000 * 60 * 60 * 24));
            
            if (nights > 0) {
                setTotalNights(nights);
                setTotalPrice(nights * roomPrices[bookingData.roomType]);
            }
        }
    };
    
    useEffect(() => {
        calculateStay();
    }, [bookingData.checkIn, bookingData.checkOut, bookingData.roomType]);
    
    const isValidBooking = bookingData.checkIn && bookingData.checkOut && totalNights > 0;
    
    return (
        <div style={{ maxWidth: '500px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div style={{ 
                padding: '20px', 
                backgroundColor: 'var(--ffe-color-background-primary)', 
                color: 'white',
                borderRadius: '8px',
                textAlign: 'center'
            }}>
                <h3 style={{ margin: '0 0 8px 0' }}>🏨 Hotellbooking</h3>
                <p style={{ margin: 0 }}>Book ditt opphold hos oss</p>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div>
                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>
                        Innsjekk *
                    </label>
                    <Datepicker
                        id="checkin-date"
                        value={bookingData.checkIn}
                        onChange={(value) => setBookingData(prev => ({ ...prev, checkIn: value }))}
                        placeholder="dd.mm.åååå"
                    />
                </div>
                
                <div>
                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>
                        Utsjekk *
                    </label>
                    <Datepicker
                        id="checkout-date"
                        value={bookingData.checkOut}
                        onChange={(value) => setBookingData(prev => ({ ...prev, checkOut: value }))}
                        placeholder="dd.mm.åååå"
                        disabled={!bookingData.checkIn}
                    />
                </div>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div>
                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>
                        Antall gjester
                    </label>
                    <select
                        value={bookingData.guests}
                        onChange={(e) => setBookingData(prev => ({ ...prev, guests: parseInt(e.target.value) }))}
                        style={{
                            width: '100%',
                            padding: '8px 12px',
                            border: '1px solid var(--ffe-color-border-subtle)',
                            borderRadius: '4px'
                        }}
                    >
                        {[1, 2, 3, 4].map(num => (
                            <option key={num} value={num}>{num} gjest{num > 1 ? 'er' : ''}</option>
                        ))}
                    </select>
                </div>
                
                <div>
                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>
                        Romtype
                    </label>
                    <select
                        value={bookingData.roomType}
                        onChange={(e) => setBookingData(prev => ({ ...prev, roomType: e.target.value }))}
                        style={{
                            width: '100%',
                            padding: '8px 12px',
                            border: '1px solid var(--ffe-color-border-subtle)',
                            borderRadius: '4px'
                        }}
                    >
                        <option value="standard">Standard (1 200 kr/natt)</option>
                        <option value="deluxe">Deluxe (1 800 kr/natt)</option>
                        <option value="suite">Suite (2 500 kr/natt)</option>
                    </select>
                </div>
            </div>
            
            <div style={{ 
                padding: '16px', 
                backgroundColor: 'var(--ffe-color-background-subtle)', 
                borderRadius: '8px' 
            }}>
                <h4 style={{ margin: '0 0 12px 0' }}>Booking sammendrag</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <div><strong>Innsjekk:</strong> {bookingData.checkIn || 'Ikke valgt'}</div>
                    <div><strong>Utsjekk:</strong> {bookingData.checkOut || 'Ikke valgt'}</div>
                    <div><strong>Antall netter:</strong> {totalNights}</div>
                    <div><strong>Gjester:</strong> {bookingData.guests}</div>
                    <div style={{ marginTop: '8px', fontSize: '18px' }}>
                        <strong>Totalpris: {totalPrice.toLocaleString()} kr</strong>
                    </div>
                </div>
            </div>
            
            <button
                onClick={() => alert('Booking bekreftet!')}
                disabled={!isValidBooking}
                style={{
                    padding: '16px 24px',
                    backgroundColor: isValidBooking ? 'var(--ffe-color-background-success)' : 'var(--ffe-color-background-disabled)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: isValidBooking ? 'pointer' : 'not-allowed',
                    fontSize: '16px'
                }}
            >
                {isValidBooking ? 'Book nå' : 'Fyll ut alle felt'}
            </button>
        </div>
    );
}

render(<InteractiveDatepicker />);`
    },
    showcase: {
        name: 'Showcase',
        icon: '🏆',
        code: `function DatepickerShowcase() {
    const [events, setEvents] = useState([
        { id: 1, title: 'Prosjektmøte', date: '15.12.2024', category: 'work' },
        { id: 2, title: 'Ferie', date: '20.12.2024', category: 'personal' }
    ]);
    const [newEvent, setNewEvent] = useState({ title: '', date: '', category: 'work' });
    
    const addEvent = () => {
        if (newEvent.title && newEvent.date) {
            setEvents(prev => [...prev, { ...newEvent, id: Date.now() }]);
            setNewEvent({ title: '', date: '', category: 'work' });
        }
    };
    
    return (
        <div style={{ 
            padding: '24px', 
            backgroundColor: 'var(--ffe-color-background-subtle)', 
            borderRadius: '8px',
            maxWidth: '600px'
        }}>
            <div style={{ textAlign: 'center', marginBottom: '32px' }}>
                <h2 style={{ margin: '0 0 8px 0' }}>📅 Kalender Showcase</h2>
                <p style={{ margin: 0, color: 'var(--ffe-color-text-subtle)' }}>
                    Administrer dine arrangementer og viktige datoer
                </p>
            </div>
            
            <div style={{ 
                backgroundColor: 'white', 
                borderRadius: '8px', 
                padding: '20px',
                marginBottom: '20px'
            }}>
                <h3 style={{ margin: '0 0 16px 0' }}>Legg til arrangement</h3>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <input
                        type="text"
                        value={newEvent.title}
                        onChange={(e) => setNewEvent(prev => ({ ...prev, title: e.target.value }))}
                        placeholder="Arrangementstittel"
                        style={{
                            padding: '8px 12px',
                            border: '1px solid var(--ffe-color-border-subtle)',
                            borderRadius: '4px'
                        }}
                    />
                    
                    <Datepicker
                        id="event-date"
                        value={newEvent.date}
                        onChange={(value) => setNewEvent(prev => ({ ...prev, date: value }))}
                        placeholder="Velg dato"
                    />
                    
                    <select
                        value={newEvent.category}
                        onChange={(e) => setNewEvent(prev => ({ ...prev, category: e.target.value }))}
                        style={{
                            padding: '8px 12px',
                            border: '1px solid var(--ffe-color-border-subtle)',
                            borderRadius: '4px'
                        }}
                    >
                        <option value="work">Arbeid</option>
                        <option value="personal">Personlig</option>
                    </select>
                    
                    <button
                        onClick={addEvent}
                        disabled={!newEvent.title || !newEvent.date}
                        style={{
                            padding: '10px 16px',
                            backgroundColor: newEvent.title && newEvent.date ? 'var(--ffe-color-background-primary)' : 'var(--ffe-color-background-disabled)',
                            color: 'white',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: newEvent.title && newEvent.date ? 'pointer' : 'not-allowed'
                        }}
                    >
                        Legg til
                    </button>
                </div>
            </div>
            
            <div style={{ 
                backgroundColor: 'white', 
                borderRadius: '8px', 
                padding: '20px'
            }}>
                <h3 style={{ margin: '0 0 16px 0' }}>Mine arrangementer ({events.length})</h3>
                
                {events.length === 0 ? (
                    <p style={{ color: 'var(--ffe-color-text-subtle)', textAlign: 'center' }}>
                        Ingen arrangementer lagt til
                    </p>
                ) : (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        {events.map(event => (
                            <div
                                key={event.id}
                                style={{
                                    padding: '12px',
                                    border: '1px solid var(--ffe-color-border-subtle)',
                                    borderRadius: '4px',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center'
                                }}
                            >
                                <div>
                                    <strong>{event.title}</strong>
                                    <div style={{ fontSize: '14px', color: 'var(--ffe-color-text-subtle)' }}>
                                        📅 {event.date} • {event.category === 'work' ? 'Arbeid' : 'Personlig'}
                                    </div>
                                </div>
                                <button
                                    onClick={() => setEvents(prev => prev.filter(e => e.id !== event.id))}
                                    style={{
                                        background: 'none',
                                        border: 'none',
                                        color: 'var(--ffe-color-text-error)',
                                        cursor: 'pointer'
                                    }}
                                >
                                    Slett
                                </button>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

render(<DatepickerShowcase />);`
    }
};

export const LiveCodeEditor: Story = createLiveCodeStory(Datepicker, {
    templates: datepickerTemplates,
    additionalComponents: {
        DateInput,
        Calendar
    },
    defaultTemplate: 'simple',
    title: 'Datepicker Live Code Editor',
    description: 'Comprehensive live code editor for all datepicker components in the FFE Datepicker package. Explore Datepicker, DateInput, and Calendar with interactive examples for date selection, validation, and real-world scenarios.'
});
