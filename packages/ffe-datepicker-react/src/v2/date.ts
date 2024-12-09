import { parse as parseFNS } from 'date-fns';
export const NS_ISO_8601_DATE_FORMAT = 'dd.MM.yyyy';

export const parseNsISO8601 = (date: string): Date =>
    parseFNS(date, NS_ISO_8601_DATE_FORMAT, new Date());
