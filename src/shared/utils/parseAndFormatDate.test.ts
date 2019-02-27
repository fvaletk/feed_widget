import { parseAndFormatDate } from './parseAndFormatDate';

test('parses twitter API dates', () => {
  const expected = '29/12/2017 14:15';
  const actual = parseAndFormatDate('Fri Dec 29 19:15:04 +0000 2017');

  expect(actual).toBe(expected);
});

test('parses facebook API dates', () => {
  const expected = '26/07/2014 03:11';
  const actual = parseAndFormatDate('2014-07-26T08:11:43+0000');

  expect(actual).toBe(expected);
});
