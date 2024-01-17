import * as React from 'react';
import { Thumbs } from '../src/feedback-thumbs';

export { Thumbs };
export type ThumbType = typeof Thumbs.UP | typeof Thumbs.DOWN;

export type bgColors = 'hvit' | 'frost-30' | 'sand-30' | 'syrin-30' | 'vann-30';

export type bgDarkmodeColors = 'svart' | 'natt';

export interface ContactLink {
    url?: string;
    linkText?: string;
    onClick?: (e: React.MouseEvent) => void;
}

export interface FeedbackProps extends React.ComponentProps<'div'> {
    language?: 'nb' | 'nn' | 'en';
    onThumbClick: (thumb: ThumbType) => void;
    onFeedbackSend: (feedbackText: string) => void;
    bgColor?: bgColors;
    bgDarkmodeColor?: bgDarkmodeColors;
    contactLink?: ContactLink;
}

declare class Feedback extends React.Component<FeedbackProps, any> {}

export default Feedback;
