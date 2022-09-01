import format from 'date-fns/format';

const formatDate = (date: string) => format(new Date(date), 'MMM d yyy');

export default formatDate;
