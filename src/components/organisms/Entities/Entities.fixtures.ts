export function getEntitiesFixtures() {
  return {
    url: 'fake URL',
    limit: 50,
    interval: 2000
  };
}

export const extraHappyPathResponse = {
  created_at: 'Fri Dec 29 19:01:00 +0000 2017',
  id: 946818350285328384,
  id_str: '946818350285328384',
  text:
    "Hi new tweeps &amp; old.\nHope you're having fun\nLove the SO, RTs, and likes.\nVisit my #kindle #author website:… https://t.co/VZpaywm8eg",
  truncated: true,
  entities: {
    hashtags: [
      { text: 'kindle', indices: [86, 93] },
      { text: 'author', indices: [94, 101] }
    ],
    symbols: [],
    user_mentions: [],
    urls: [
      {
        url: 'https://t.co/VZpaywm8eg',
        expanded_url: 'https://twitter.com/i/web/status/946818350285328384',
        display_url: 'twitter.com/i/web/status/9…',
        indices: [112, 135]
      }
    ]
  },
  source:
    '<a href="https://about.twitter.com/products/tweetdeck" rel="nofollow">TweetDeck</a>',
  in_reply_to_status_id: null,
  in_reply_to_status_id_str: null,
  in_reply_to_user_id: null,
  in_reply_to_user_id_str: null,
  in_reply_to_screen_name: null,
  user: {
    id: 930126626968428546,
    id_str: '930126626968428546',
    name: 'M. K. Theodoratus',
    screen_name: 'DemonsplusElves',
    location: '',
    description:
      'Promo for grumpy #fantasy #writer & #blogger. #read my #book #reviews - https://t.co/I14Cocayva Like my #author page on Facebook https://t.co/k5Au9WZryw',
    url: 'https://t.co/iTui5BbsZf',
    entities: {
      url: {
        urls: [
          {
            url: 'https://t.co/iTui5BbsZf',
            expanded_url: 'http://www.mktheodoratus.com',
            display_url: 'mktheodoratus.com',
            indices: [0, 23]
          }
        ]
      },
      description: {
        urls: [
          {
            url: 'https://t.co/I14Cocayva',
            expanded_url: 'http://kaytheod.blogspot.com',
            display_url: 'kaytheod.blogspot.com',
            indices: [72, 95]
          },
          {
            url: 'https://t.co/k5Au9WZryw',
            expanded_url: 'http://ow.ly/PiqO30gy6FgP',
            display_url: 'ow.ly/PiqO30gy6FgP',
            indices: [129, 152]
          }
        ]
      }
    },
    protected: false,
    followers_count: 1074,
    friends_count: 1173,
    listed_count: 21,
    created_at: 'Mon Nov 13 17:34:03 +0000 2017',
    favourites_count: 364,
    utc_offset: null,
    time_zone: null,
    geo_enabled: false,
    verified: false,
    statuses_count: 4341,
    lang: 'en',
    contributors_enabled: false,
    is_translator: false,
    is_translation_enabled: false,
    profile_background_color: '000000',
    profile_background_image_url:
      'http://abs.twimg.com/images/themes/theme1/bg.png',
    profile_background_image_url_https:
      'https://abs.twimg.com/images/themes/theme1/bg.png',
    profile_background_tile: false,
    profile_image_url:
      'http://pbs.twimg.com/profile_images/930129746205204482/-Ezi_qfj_normal.jpg',
    profile_image_url_https:
      'https://pbs.twimg.com/profile_images/930129746205204482/-Ezi_qfj_normal.jpg',
    profile_banner_url:
      'https://pbs.twimg.com/profile_banners/930126626968428546/1510595498',
    profile_link_color: '1B95E0',
    profile_sidebar_border_color: '000000',
    profile_sidebar_fill_color: '000000',
    profile_text_color: '000000',
    profile_use_background_image: false,
    has_extended_profile: false,
    default_profile: false,
    default_profile_image: false,
    following: false,
    follow_request_sent: false,
    notifications: false,
    translator_type: 'none'
  },
  geo: null,
  coordinates: null,
  place: null,
  contributors: null,
  is_quote_status: false,
  retweet_count: 0,
  favorite_count: 0,
  favorited: false,
  retweeted: false,
  possibly_sensitive: false,
  lang: 'en',
  network: 'twitter',
  entity_id: 'twitter:946818350285328384',
  queued_at: 1514574062609,
  timeline_id: '9d623a16-ecca-11e7-8d44-4cedfceb6227'
};

export const happyPathResponse = [
  {
    created_at: 'Fri Dec 29 19:15:04 +0000 2017',
    id: 946821889648979968,
    id_str: '946821889648979968',
    text:
      'The battle is life or death, but that doesn’t mean love plays no part. \n#shifters #menage #paranormal #ebook… https://t.co/61xUthkXFN',
    truncated: true,
    entities: {
      hashtags: [
        { text: 'shifters', indices: [72, 81] },
        { text: 'menage', indices: [82, 89] },
        { text: 'paranormal', indices: [90, 101] },
        { text: 'ebook', indices: [102, 108] }
      ],
      symbols: [],
      user_mentions: [],
      urls: [
        {
          url: 'https://t.co/61xUthkXFN',
          expanded_url: 'https://twitter.com/i/web/status/946821889648979968',
          display_url: 'twitter.com/i/web/status/9…',
          indices: [110, 133]
        }
      ]
    },
    source: '<a href="http://www.hootsuite.com" rel="nofollow">Hootsuite</a>',
    in_reply_to_status_id: null,
    in_reply_to_status_id_str: null,
    in_reply_to_user_id: null,
    in_reply_to_user_id_str: null,
    in_reply_to_screen_name: null,
    user: {
      id: 723462589,
      id_str: '723462589',
      name: 'Lori King',
      screen_name: 'LoriKingBooks',
      location: 'Kansas',
      description:
        "Dirtyminded girl with a romantic twist. #BestSelling #Author of #eroticromance. I'm seducing the world, one book at a time. #supermom #rockstar #spaz",
      url: 'https://t.co/VzANn1eKtc',
      entities: {
        url: {
          urls: [
            {
              url: 'https://t.co/VzANn1eKtc',
              expanded_url: 'https://lorikingbooks.wordpress.com/',
              display_url: 'lorikingbooks.wordpress.com',
              indices: [0, 23]
            }
          ]
        },
        description: { urls: [] }
      },
      protected: false,
      followers_count: 3261,
      friends_count: 1143,
      listed_count: 305,
      created_at: 'Sun Jul 29 05:49:23 +0000 2012',
      favourites_count: 6823,
      utc_offset: null,
      time_zone: null,
      geo_enabled: false,
      verified: false,
      statuses_count: 36008,
      lang: 'en',
      contributors_enabled: false,
      is_translator: false,
      is_translation_enabled: false,
      profile_background_color: '131516',
      profile_background_image_url:
        'http://abs.twimg.com/images/themes/theme14/bg.gif',
      profile_background_image_url_https:
        'https://abs.twimg.com/images/themes/theme14/bg.gif',
      profile_background_tile: true,
      profile_image_url:
        'http://pbs.twimg.com/profile_images/968300336610820096/QbpGz2wR_normal.jpg',
      profile_image_url_https:
        'https://pbs.twimg.com/profile_images/968300336610820096/QbpGz2wR_normal.jpg',
      profile_banner_url:
        'https://pbs.twimg.com/profile_banners/723462589/1519695722',
      profile_link_color: '009999',
      profile_sidebar_border_color: 'EEEEEE',
      profile_sidebar_fill_color: 'EFEFEF',
      profile_text_color: '333333',
      profile_use_background_image: true,
      has_extended_profile: false,
      default_profile: false,
      default_profile_image: false,
      following: false,
      follow_request_sent: false,
      notifications: false,
      translator_type: 'none'
    },
    geo: null,
    coordinates: null,
    place: null,
    contributors: null,
    is_quote_status: false,
    retweet_count: 0,
    favorite_count: 0,
    favorited: false,
    retweeted: false,
    possibly_sensitive: false,
    lang: 'en',
    network: 'twitter',
    entity_id: 'twitter:946821889648979968',
    queued_at: 1514574905414,
    timeline_id: '93bbfe14-eccc-11e7-83cb-d2baae171399'
  },
  {
    created_at: 'Fri Dec 29 19:11:09 +0000 2017',
    id: 946820903286972416,
    id_str: '946820903286972416',
    text:
      '*Little Computer People https://t.co/nfjYauzFMS  #ScienceFiction #Deals #Sponsor #Humor A Love Story… https://t.co/f0ETvfRcMP',
    truncated: true,
    entities: {
      hashtags: [
        { text: 'ScienceFiction', indices: [49, 64] },
        { text: 'Deals', indices: [65, 71] },
        { text: 'Sponsor', indices: [72, 80] },
        { text: 'Humor', indices: [81, 87] }
      ],
      symbols: [],
      user_mentions: [],
      urls: [
        {
          url: 'https://t.co/nfjYauzFMS',
          expanded_url: 'https://www.amazon.com/dp/B01MS9E18K',
          display_url: 'amazon.com/dp/B01MS9E18K',
          indices: [24, 47]
        },
        {
          url: 'https://t.co/f0ETvfRcMP',
          expanded_url: 'https://twitter.com/i/web/status/946820903286972416',
          display_url: 'twitter.com/i/web/status/9…',
          indices: [102, 125]
        }
      ]
    },
    source:
      '<a href="http://twitter.com" rel="nofollow">Twitter Web Client</a>',
    in_reply_to_status_id: null,
    in_reply_to_status_id_str: null,
    in_reply_to_user_id: null,
    in_reply_to_user_id_str: null,
    in_reply_to_screen_name: null,
    user: {
      id: 790576835478249473,
      id_str: '790576835478249473',
      name: 'Science Fiction Book',
      screen_name: 'scifibooks3',
      location: 'Worldwide',
      description:
        'Great Deals on the best Science Fiction Books & EBooks Everyday!!! Sign up for free- \nhttps://t.co/3MR2mFjyl6',
      url: 'https://t.co/o1xt0CAWpm',
      entities: {
        url: {
          urls: [
            {
              url: 'https://t.co/o1xt0CAWpm',
              expanded_url: 'http://sciencefictionfreebooks.com/',
              display_url: 'sciencefictionfreebooks.com',
              indices: [0, 23]
            }
          ]
        },
        description: {
          urls: [
            {
              url: 'https://t.co/3MR2mFjyl6',
              expanded_url: 'http://forms.aweber.com/form/66/874606766.htm',
              display_url: 'forms.aweber.com/form/66/874606…',
              indices: [86, 109]
            }
          ]
        }
      },
      protected: false,
      followers_count: 32654,
      friends_count: 31298,
      listed_count: 92,
      created_at: 'Mon Oct 24 15:33:00 +0000 2016',
      favourites_count: 0,
      utc_offset: null,
      time_zone: null,
      geo_enabled: false,
      verified: false,
      statuses_count: 7911,
      lang: 'en',
      contributors_enabled: false,
      is_translator: false,
      is_translation_enabled: false,
      profile_background_color: 'F5F8FA',
      profile_background_image_url: null,
      profile_background_image_url_https: null,
      profile_background_tile: false,
      profile_image_url:
        'http://pbs.twimg.com/profile_images/828700075274625024/6zd0dEoc_normal.jpg',
      profile_image_url_https:
        'https://pbs.twimg.com/profile_images/828700075274625024/6zd0dEoc_normal.jpg',
      profile_banner_url:
        'https://pbs.twimg.com/profile_banners/790576835478249473/1486412314',
      profile_link_color: '1DA1F2',
      profile_sidebar_border_color: 'C0DEED',
      profile_sidebar_fill_color: 'DDEEF6',
      profile_text_color: '333333',
      profile_use_background_image: true,
      has_extended_profile: true,
      default_profile: true,
      default_profile_image: false,
      following: false,
      follow_request_sent: false,
      notifications: false,
      translator_type: 'none'
    },
    geo: null,
    coordinates: null,
    place: null,
    contributors: null,
    is_quote_status: false,
    retweet_count: 0,
    favorite_count: 0,
    favorited: false,
    retweeted: false,
    possibly_sensitive: false,
    lang: 'en',
    network: 'twitter',
    entity_id: 'twitter:946820903286972416',
    queued_at: 1514574670343,
    timeline_id: '079f14ca-eccc-11e7-9d7c-b888a1d5202e'
  }
];
