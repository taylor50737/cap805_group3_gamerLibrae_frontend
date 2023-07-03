export default [
  {
    key: 1,
    id: 'channelUrl',
    label: 'Channel URL (e.g. https://www.youtube.com/@gamerlibrae)',
    type: 'text',
    value: 'channelUrl',
    defaultValue: 'https://',
    errorText: 'Please enter a valid YouTube/Twitch channel URL',
  },
  {
    key: 2,
    id: 'email',
    label: 'Email Address',
    type: 'email',
    value: 'email',
    defaultValue: '',
    errorText: 'Please enter a valid email address',
  },
];
