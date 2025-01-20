import { useState } from 'react';
import { clsx } from 'clsx';
import { Grid, GridRow, GridCol } from '@sb1/ffe-grid-react';
import { Paragraph, Wave } from '@sb1/ffe-core-react';
import { ContextMessage } from '@sb1/ffe-messages-react';
import { Accordion, AccordionItem } from '@sb1/ffe-accordion-react';
import { Menu, X } from 'lucide-react';
import { SidebarMenu } from './components/sidebar-menu/SidebarMenu';
import { ButtonPair } from '@components/button-pair.tsx/ButtonPair.tsx';

export const SbankyWave = () => (
    <div className="relative z-0 mb-xl">
        <Wave
            className="absolute w-full pt-[200px] sm:pt-[310px] lg:pt-[410px]"
            color="frost-30"
            darkmodeColor="svart"
            bgColor="vann"
            bgDarkmodeColor="svart"
        />
    </div>
);

const MobileMenuButton = ({
    isOpen,
    onClick,
}: {
    isOpen: boolean;
    onClick: () => void;
}) => (
    <button
        className={clsx(
            'fixed top-4 right-4 z-50 p-2 rounded-full',
            'bg-white dark:bg-gray-800',
            'md:hidden',
        )}
        onClick={onClick}
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
    >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
    </button>
);

const App = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <>
            <MobileMenuButton
                isOpen={isMobileMenuOpen}
                onClick={toggleMobileMenu}
            />

            <Grid
                gap="lg"
                className={clsx(
                    'h-auto min-h-0 p-md md:p-2xl md:min-h-[1000px]',
                    'transition-all duration-300',
                )}
            >
                <GridRow>
                    {/* Sidebar/Mobile Menu */}
                    <GridCol
                        sm={12}
                        md={3}
                        lg={4}
                        className={clsx(
                            'fixed inset-0 z-40 bg-white dark:bg-gray-900',
                            'transform transition-transform duration-300 ease-in-out',
                            'md:relative md:transform-none',
                            {
                                'translate-x-0': isMobileMenuOpen,
                                '-translate-x-full': !isMobileMenuOpen,
                            },
                        )}
                    >
                        <div className="h-full overflow-y-auto pt-16 md:pt-0">
                            <SidebarMenu />
                        </div>
                    </GridCol>

                    {/* Main Content */}
                    <GridCol
                        sm={12}
                        md={6}
                        lg={8}
                        className={clsx('transition-all duration-300', {
                            'opacity-50 pointer-events-none':
                                isMobileMenuOpen && window.innerWidth < 768,
                        })}
                    >
                        <GridRow>
                            <GridCol md={12} lg={12}>
                                <Paragraph className="p-xs">
                                    Paragraph component, er fonten med?
                                </Paragraph>
                            </GridCol>
                            <GridCol md={12} lg={12}>
                                <ContextMessage
                                    closeButton={true}
                                    header="Meldingstittel"
                                    type="info"
                                >
                                    Kontekstuelle meldinger er informasjon som
                                    skal gis i en kontekst
                                </ContextMessage>
                            </GridCol>
                            <GridCol md={12} lg={12}>
                                <ButtonPair
                                    onPrimaryClick={() =>
                                        console.log('Primary clicked')
                                    }
                                    onSecondaryClick={() =>
                                        console.log('Secondary clicked')
                                    }
                                />
                            </GridCol>
                            <GridCol md={12} lg={12}>
                                <Accordion headingLevel={2}>
                                    <AccordionItem heading="Tittel">
                                        Skjult innhold
                                    </AccordionItem>
                                    <AccordionItem
                                        heading={<span>Enda en tittel</span>}
                                    >
                                        Mer skjult innhold
                                    </AccordionItem>
                                    <AccordionItem heading="En siste tittel">
                                        Enda mer innhold
                                    </AccordionItem>
                                </Accordion>
                            </GridCol>
                        </GridRow>
                    </GridCol>
                </GridRow>
            </Grid>

            {/* Overlay for mobile menu */}
            {isMobileMenuOpen && (
                <div
                    className={clsx(
                        'fixed inset-0 z-30 bg-black bg-opacity-50',
                        'md:hidden',
                    )}
                    onClick={() => setIsMobileMenuOpen(false)}
                />
            )}
        </>
    );
};

export default App;
