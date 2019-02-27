import {
  parseURL,
  parseFacebookHashtag,
  parseTwitterHashtag,
  parseTwitterUsername
} from './EntityContent';

describe('<EntityContent />', () => {
  it('parses embbeded URLs', () => {
    const expected = `Some URL <a href=\"http://sfa.st/1200YRJ\">http://sfa.st/1200YRJ</a>`;
    const actual = parseURL(`Some URL http://sfa.st/1200YRJ`);

    expect(actual).toBe(expected);
  });

  describe('Twitter Utils', () => {
    it('parses a twitter hashtags', () => {
      const expected =
        'Test <a href="https://twitter.com/hashtag/lol?src=hash">#lol</a>';
      const actual = parseTwitterHashtag('Test #lol');

      expect(actual).toBe(expected);
    });

    it('parses a twitter tags', () => {
      const expected = 'Test <a href="http://twitter.com/johndoe">@johndoe</a>';
      const actual = parseTwitterUsername('Test @johndoe');

      expect(actual).toBe(expected);
    });
  });

  describe('Facebook Utils', () => {
    it('parses a facebook hashtags', () => {
      const expected =
        'Test <a href="https://www.facebook.com/hashtag/lol">#lol</a>';
      const actual = parseFacebookHashtag('Test #lol');

      expect(actual).toBe(expected);
    });
  });
});
