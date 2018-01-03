import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import MainExample from './example-component';

const example = (
<div>
    <div className="component-intro">
        <h2 className="component-intro__header">Accordion</h2>
        <div className="lozenge lozenge--success">I PRODUKSJON</div>
        <p className="ffe-micro-text">
            HENTET FRA <a href="https://stash.intern.sparebank1.no/projects/FFE/repos/ffe-accordion-react">STASH</a>
        </p>
        <p>Brukt til prisliste, arkiv (nyheter, presse- og børsmeldinger).Hele raden med overskrifter (på lyseblå) er klikkbar.</p>
        <p>Siden denne komponenten også inkluderer oppførsel, klarer vi foreløpig ikke å vise en interaktiv versjon av den her i stilguiden på grunn av tekniske begrensninger. 
        Det foreligger planer om å forbedre stilguiden med denne funksjonaliteten.</p>
    </div>
    <h3 className="ffe-h4">Eksempler</h3>

    <div className="example-container">
        <p className="example-container__header">Blå</p>

        <ul className="ffe-accordion">
            <li style={{ listStyle: 'none' }} className="ffe-accordion-item ffe-accordion-item--blue" aria-expanded="false">
                <a href="javascript:;" className="ffe-accordion-item__toggler ffe-accordion-item__toggler--blue">
                    <svg className="ffe-accordion-item__icon ffe-accordion-item__icon--blue" viewBox="0 0 200 200" width="150" height="150" x="150" y="600">
                        <path d="M16.171 42c-4.143 0-8.285 1.575-11.427 4.706-6.325 6.284-6.325 16.5 0 22.804l84.028 83.762c6.305 6.304 16.55 6.304 22.875 0l83.61-83.264c6.324-6.283 6.324-16.5 0-22.803-6.306-6.303-16.556-6.303-22.881 0L100.238 119.1 27.624 46.725C24.482 43.573 20.334 42 16.19 42h-.019z">
                        </path>
                    </svg>
                    <span>
                        What is Lorem Ipsum?
                    </span>
                </a>
            </li>
            <li style={{ listStyle: 'none' }} className="ffe-accordion-item ffe-accordion-item--blue" aria-expanded="false">
                <a href="javascript:;" className="ffe-accordion-item__toggler ffe-accordion-item__toggler--blue">
                    <svg className="ffe-accordion-item__icon ffe-accordion-item__icon--blue" viewBox="0 0 200 200" width="150" height="150" x="150" y="600">
                        <path d="M16.171 42c-4.143 0-8.285 1.575-11.427 4.706-6.325 6.284-6.325 16.5 0 22.804l84.028 83.762c6.305 6.304 16.55 6.304 22.875 0l83.61-83.264c6.324-6.283 6.324-16.5 0-22.803-6.306-6.303-16.556-6.303-22.881 0L100.238 119.1 27.624 46.725C24.482 43.573 20.334 42 16.19 42h-.019z">
                        </path>
                    </svg>
                    <span>
                        Why do we use it?
                    </span>
                </a>
            </li>
            <li style={{ listStyle: 'none' }} className="ffe-accordion-item ffe-accordion-item--blue" aria-expanded="false">
                <a href="javascript:;" className="ffe-accordion-item__toggler ffe-accordion-item__toggler--blue">
                    <svg className="ffe-accordion-item__icon ffe-accordion-item__icon--blue" viewBox="0 0 200 200" width="150" height="150" x="150" y="600">
                        <path d="M16.171 42c-4.143 0-8.285 1.575-11.427 4.706-6.325 6.284-6.325 16.5 0 22.804l84.028 83.762c6.305 6.304 16.55 6.304 22.875 0l83.61-83.264c6.324-6.283 6.324-16.5 0-22.803-6.306-6.303-16.556-6.303-22.881 0L100.238 119.1 27.624 46.725C24.482 43.573 20.334 42 16.19 42h-.019z">
                        </path>
                    </svg>
                    <span>
                        Where does it come from?
                    </span>
                </a>
                <div>
                    <span>
                    </span>
                    <div>
                        <div>
                            <div className="ffe-accordion-item__content ffe-accordion-item__content--blue">
                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                            </div>
                        </div>
                    </div>
                </div>
            </li>
            <li style={{ listStyle: 'none' }} className="ffe-accordion-item ffe-accordion-item--blue" aria-expanded="false">
                <a href="javascript:;" className="ffe-accordion-item__toggler ffe-accordion-item__toggler--blue">
                    <svg className="ffe-accordion-item__icon ffe-accordion-item__icon--blue" viewBox="0 0 200 200" width="150" height="150" x="150" y="600">
                        <path d="M16.171 42c-4.143 0-8.285 1.575-11.427 4.706-6.325 6.284-6.325 16.5 0 22.804l84.028 83.762c6.305 6.304 16.55 6.304 22.875 0l83.61-83.264c6.324-6.283 6.324-16.5 0-22.803-6.306-6.303-16.556-6.303-22.881 0L100.238 119.1 27.624 46.725C24.482 43.573 20.334 42 16.19 42h-.019z">
                        </path>
                    </svg>
                    <span>
                        Where can I get some?
                    </span>
                </a>
            </li>
        </ul>
    </div>


    <div className="example-container">
        <p className="example-container__header">Hvit</p>
        <ul className="ffe-accordion">
            <li style={{ listStyle: 'none' }} className="ffe-accordion-item ffe-accordion-item--white" aria-expanded="false">
                <a href="javascript:;" className="ffe-accordion-item__toggler ffe-accordion-item__toggler--white">
                    <svg className="ffe-accordion-item__icon ffe-accordion-item__icon--white" viewBox="0 0 200 200" width="150" height="150" x="150" y="600">
                        <path d="M16.171 42c-4.143 0-8.285 1.575-11.427 4.706-6.325 6.284-6.325 16.5 0 22.804l84.028 83.762c6.305 6.304 16.55 6.304 22.875 0l83.61-83.264c6.324-6.283 6.324-16.5 0-22.803-6.306-6.303-16.556-6.303-22.881 0L100.238 119.1 27.624 46.725C24.482 43.573 20.334 42 16.19 42h-.019z">
                        </path>
                    </svg>
                    <span>
                        What is Lorem Ipsum?
                    </span>
                </a>
            </li>
            <li style={{ listStyle: 'none' }} className="ffe-accordion-item ffe-accordion-item--white" aria-expanded="false">
                <a href="javascript:;" className="ffe-accordion-item__toggler ffe-accordion-item__toggler--white">
                    <svg className="ffe-accordion-item__icon ffe-accordion-item__icon--white" viewBox="0 0 200 200" width="150" height="150" x="150" y="600">
                        <path d="M16.171 42c-4.143 0-8.285 1.575-11.427 4.706-6.325 6.284-6.325 16.5 0 22.804l84.028 83.762c6.305 6.304 16.55 6.304 22.875 0l83.61-83.264c6.324-6.283 6.324-16.5 0-22.803-6.306-6.303-16.556-6.303-22.881 0L100.238 119.1 27.624 46.725C24.482 43.573 20.334 42 16.19 42h-.019z">
                        </path>
                    </svg>
                    <span>
                        Why do we use it?
                    </span>
                </a>
            </li>
            <li style={{ listStyle: 'none' }} className="ffe-accordion-item ffe-accordion-item--white" aria-expanded="false">
                <a href="javascript:;" className="ffe-accordion-item__toggler ffe-accordion-item__toggler--white">
                    <svg className="ffe-accordion-item__icon ffe-accordion-item__icon--white" viewBox="0 0 200 200" width="150" height="150" x="150" y="600">
                        <path d="M16.171 42c-4.143 0-8.285 1.575-11.427 4.706-6.325 6.284-6.325 16.5 0 22.804l84.028 83.762c6.305 6.304 16.55 6.304 22.875 0l83.61-83.264c6.324-6.283 6.324-16.5 0-22.803-6.306-6.303-16.556-6.303-22.881 0L100.238 119.1 27.624 46.725C24.482 43.573 20.334 42 16.19 42h-.019z">
                        </path>
                    </svg>
                    <span>
                        Where does it come from?
                    </span>
                </a>
                <div>
                    <span>
                    </span>
                    <div>
                        <div>
                            <div className="ffe-accordion-item__content ffe-accordion-item__content--white">
                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                            </div>
                        </div>
                    </div>
                </div>
            </li>
            <li style={{ listStyle: 'none' }} className="ffe-accordion-item ffe-accordion-item--white" aria-expanded="false">
                <a href="javascript:;" className="ffe-accordion-item__toggler ffe-accordion-item__toggler--white">
                    <svg className="ffe-accordion-item__icon ffe-accordion-item__icon--white" viewBox="0 0 200 200" width="150" height="150" x="150" y="600">
                        <path d="M16.171 42c-4.143 0-8.285 1.575-11.427 4.706-6.325 6.284-6.325 16.5 0 22.804l84.028 83.762c6.305 6.304 16.55 6.304 22.875 0l83.61-83.264c6.324-6.283 6.324-16.5 0-22.803-6.306-6.303-16.556-6.303-22.881 0L100.238 119.1 27.624 46.725C24.482 43.573 20.334 42 16.19 42h-.019z">
                        </path>
                    </svg>
                    <span>
                        Where can I get some?
                    </span>
                </a>
            </li>
        </ul>
        
    </div>



    <div className="expanding-field">
        <button className="expanding-field__toggle">Vis kode</button>
        <span className="expanding-field__icon"></span>
        <div className="expanding-field__content">
                <pre><code className="html hljs xml">
                    { renderToStaticMarkup(MainExample) }
                </code></pre>
            </div>
    </div>

    <div className="expanding-field">
        <button className="expanding-field__toggle">Vis API for React-komponent</button>
        <span className="expanding-field__icon"></span>
        <div className="expanding-field__content">
                <pre>
<code className="html hljs js">{
`<WhiteAccordion>
    <AccordionItem 
                key={ Math.random() } 
                expandedContent="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.">
        What is Lorem Ipsum?
        </AccordionItem>

    <AccordionItem 
                key={ Math.random() } 
                expandedContent="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).">
        Why do we use it?

        </AccordionItem>

    <AccordionItem 
                key={ Math.random() } 
                expandedContent="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).">
        Where does it come from?

        </AccordionItem>

    <AccordionItem 
                key={ Math.random() } 
                expandedContent="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).">
        Where can I get some?

        </AccordionItem>
</WhiteAccordion>`}</code></pre>
            </div>
    </div>
</div>

);


export default renderToStaticMarkup(example);
