"use strict";(self.webpackChunk_sb1_designsystem_cms=self.webpackChunk_sb1_designsystem_cms||[]).push([[677],{35997:function(e,s,n){n.r(s),n.d(s,{_frontmatter:function(){return m},default:function(){return g}});var t,l=n(63366),r=(n(67294),n(63497)),a=n(15617),i=["components"],m={},k=(t="DSExample",function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)}),o={_frontmatter:m},d=a.Z;function g(e){var s=e.components,n=(0,l.Z)(e,i);return(0,r.kt)(d,Object.assign({},o,n,{components:s,mdxType:"MDXLayout"}),(0,r.kt)("h2",null,"Bruk av meldinger"),(0,r.kt)("p",null,"I designsystemet finnes det 3 forskjellige meldingskomponenter, og hvilken som skal brukes kommer an på hva slags type informasjon du ønsker å gi brukeren. Felles for alle er at de bør holdes korte og konsise, og inneholde relevante tips eller informasjon som brukeren trenger å vite. Eksempler på situasjoner der meldinger kan brukes er når systemet er nede, betaling er gjennomført eller at det kommer en eller flere endringer på en tjeneste."),(0,r.kt)("p",null,"Målet med meldinger er å bekrefte og skape trygghet hos brukerne slik at de opplever kontroll over situasjonen."),(0,r.kt)("p",null,"Noen prinsipper som bør følges:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Meldingene skal være relevante og informative"),(0,r.kt)("li",{parentName:"ul"},"Selve meldingsboksen skal være responsiv, tilpasses innholdets lengde og skaleres etter flaten den vises (f.eks. full bredde på mobil)"),(0,r.kt)("li",{parentName:"ul"},"Teksten skal følge retningslinjene nevnt i ",(0,r.kt)("a",{parentName:"li",href:"/visuell-identitet/stil-og-tone/"},"Stil og tone"))),(0,r.kt)("h2",null,"Valg av farge"),(0,r.kt)("p",null,"Alle meldingskomponentene kommer i 4 farge-varianter."),(0,r.kt)("p",null,"Hvilken av disse du skal bruke, avhenger av hva slags informasjon du prøver å formidle. Er det ren informasjon, som brukeren bør få med seg, er info-varianten god å bruke."),(0,r.kt)("h4",null,"Tips / News"),(0,r.kt)("p",null,"Tips kan brukes når du vil tipse brukeren om alternativer, eller andre valg. Dette kan også være informasjon som brukere ikke må forholde seg til. F.eks. tips til andre tjenester, forenkling av prosesser etc."),(0,r.kt)("h4",null,"Info"),(0,r.kt)("p",null,"Info brukes der du vil informere om noe som ikke er kritisk. Det kan for eksempel være planlagt vedlikehold, endring av tjenester eller ønske om at brukerne bekrefter kontaktinformasjon."),(0,r.kt)("h4",null,"Suksess"),(0,r.kt)("p",null,"Suksess-varianten brukes til å formidle «gode nyheter», eller når ønsket respons på en handling skjer. Dette kan f.eks. være om en tjeneste blir tilgjengelig igjen, eller om betaling er gjennomført."),(0,r.kt)("h4",null,"Error"),(0,r.kt)("p",null,"Error-varianten brukes bare i sammenhenger der det har skjedd en feil, eller hvis det er en pågående feil. Det kan f.eks. være at en tjeneste er nede akkurat nå, eller at en betaling ikke gikk igjennom."),(0,r.kt)("p",null,"Vær oppmerksom på at alle feilmeldinger automatisk får ",(0,r.kt)("code",{parentName:"p",className:"language-text"},'role="alert"'),", dette gjør at en skjermleser automatisk vil lese opp innholdet i meldingen med en gang den vises.\nHvis meldingen er tilstede ved initiell sidelasting leses den opp like etter sidetittel. Dette kan slås av, se eksempelet under:"),(0,r.kt)(k,{name:"message_box_ErrorMessage_alertFalse",mdxType:"DSExample"}),(0,r.kt)("h2",null,"MessageBox"),(0,r.kt)("p",null,"Meldingsbokser inneholder reelle tips eller informasjon til brukerne. Disse holdes konsise, og skal ikke brukes til å forklare ting «man ikke finner noe annet sted til»."),(0,r.kt)("p",null,"Bruk Meldingsbokser når:"),(0,r.kt)("ul",{className:"ffe-check-list"},(0,r.kt)("li",{className:"ffe-check-list__item"},"Du trenger å informere kort om ett tema"),(0,r.kt)("li",{className:"ffe-check-list__item"},"Du trenger å utheve noe informasjon fra enn større sammenheng"),(0,r.kt)("li",{className:"ffe-check-list__item"},"Du har innhold som skal utheves, men som er selvforklarende uten kontekst")),(0,r.kt)(k,{name:"message_box_TipsMessage",mdxType:"DSExample"}),(0,r.kt)(k,{name:"message_box_InfoMessage",mdxType:"DSExample"}),(0,r.kt)(k,{name:"message_box_SuccessMessage",mdxType:"DSExample"}),(0,r.kt)(k,{name:"message_box_ErrorMessage",mdxType:"DSExample"}),(0,r.kt)("h3",null,"Med liste"),(0,r.kt)(k,{name:"message_box_InfoMessageList",mdxType:"DSExample"}),(0,r.kt)("h2",null,"SystemMessage"),(0,r.kt)("p",null,"Systemmeldinger skal bare brukes til viktige, men midlertidige meldinger. Disse meldingene plasseres direkte under headeren, og det skal helst bare brukes 1 per side."),(0,r.kt)("p",null,"Bruk systemmelding:"),(0,r.kt)("ul",{className:"ffe-check-list"},(0,r.kt)("li",{className:"ffe-check-list__item"},"Der meldingen skal vises i en gitt tidsperiode"),(0,r.kt)("li",{className:"ffe-check-list__item"},"Når det skal brukes til informasjon, som ikke krever en handling fra bruker"),(0,r.kt)("li",{className:"ffe-check-list__item ffe-check-list__item--cross"},"Der det ikke gir mening at meldingen er rett under header"),(0,r.kt)("li",{className:"ffe-check-list__item ffe-check-list__item--cross"},"Der det skal vises mange meldinger samtidig")),(0,r.kt)(k,{name:"system_message_SystemInfoMessage",mdxType:"DSExample"}),(0,r.kt)(k,{name:"system_message_SystemNewsMessage",mdxType:"DSExample"}),(0,r.kt)(k,{name:"system_message_SystemSuccessMessage",mdxType:"DSExample"}),(0,r.kt)(k,{name:"system_message_SystemErrorMessage",mdxType:"DSExample"}),(0,r.kt)("h2",null,"ContextMessage"),(0,r.kt)("p",null,"Kontekstuelle meldinger er informasjon som skal gis i en kontekst. Dette er meldinger som skal utheves, men som bare gir mening i konteksten den er plassert. I motsetning til systemmeldinger, kan disse meldingene plasseres midt i innholdet på siden."),(0,r.kt)("p",null,"Bruk kontekstuelle meldinger når:"),(0,r.kt)("ul",{className:"ffe-check-list"},(0,r.kt)("li",{className:"ffe-check-list__item"},"Du vil gi ekstra informasjon i en gitt situasjon"),(0,r.kt)("li",{className:"ffe-check-list__item ffe-check-list__item--cross"},"Hvis du egentlig bare trenger en brødtekst")),(0,r.kt)("p",null,"Alle variantene som kompakt, icon, etc. finnes i alle fargevariantene."),(0,r.kt)(k,{name:"context_message_ContextInfoMessage",mdxType:"DSExample"}),"Kompakt versjon med mindre padding:",(0,r.kt)(k,{name:"context_message_ContextInfoMessage_compact",mdxType:"DSExample"}),"Med tittel:",(0,r.kt)(k,{name:"context_message_ContextSuccessMessage_header",mdxType:"DSExample"}),"Med ikon",(0,r.kt)(k,{name:"context_message_ContextTipMessage_icon",mdxType:"DSExample"}),"Kan lukkes",(0,r.kt)(k,{name:"context_message_ContextErrorMessage_showCloseButton",mdxType:"DSExample"}))}g.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-komponenter-meldinger-md-c6ec865f820ecc12884f.js.map