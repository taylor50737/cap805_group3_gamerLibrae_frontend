export const iso8601dateToString = (dateString) => {
  return new Intl.DateTimeFormat('en-CA', {
    month: 'long',
    year: 'numeric',
    day: 'numeric',
  }).format(new Date(dateString));
};
