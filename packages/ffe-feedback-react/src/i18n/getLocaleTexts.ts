import { txt } from './texts';

type Locale = keyof typeof txt;

/**
 * Inne i en hybrid app passer ikke ordet «side», så da bytter vi til tekstene
 * som omtaler appen i stedet.
 */
export const getLocaleTexts = (locale: Locale, isNative: boolean) => {
    const texts = txt[locale];

    if (!isNative) {
        return texts;
    }

    return {
        ...texts,
        FEEDBACK_NOT_SENT_HEADING: texts.FEEDBACK_NOT_SENT_HEADING_NATIVE,
        FEEDBACK_ANSWER: texts.FEEDBACK_ANSWER_NATIVE,
        FEEDBACK_ANSWER_INCLUDE_CONSENT:
            texts.FEEDBACK_ANSWER_INCLUDE_CONSENT_NATIVE,
    };
};
