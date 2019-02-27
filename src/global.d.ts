interface ResponseItem {
  created_at: string;
  id: string;
  id_str: string;
  text: string;
  truncated: boolean;
  entities: Entities;
  source: string;
  in_reply_to_status_id?: null;
  in_reply_to_status_id_str?: null;
  in_reply_to_user_id?: null;
  in_reply_to_user_id_str?: null;
  in_reply_to_screen_name?: null;
  user: User;
  geo?: null;
  coordinates?: null;
  place?: null;
  contributors?: null;
  is_quote_status: boolean;
  retweet_count: number;
  favorite_count: number;
  favorited: boolean;
  retweeted: boolean;
  possibly_sensitive: boolean;
  lang: string;
  network: string;
  entity_id: string;
  queued_at: number;
  timeline_id: string;
}

interface FacebookResponseItem extends ResponseItem {
  id: string;
  from: {
    id: string;
    name: string;
    broadcast_name: string;
  };
  facebook_id: string;
  message: string;
  like_count: number;
  created_time: string;
}

interface Entities {
  hashtags?: (HashtagsEntity)[] | null;
  symbols?: (null)[] | null;
  user_mentions?: (null)[] | null;
  urls?: (UrlsEntity)[] | null;
}

interface HashtagsEntity {
  text: string;
  indices?: (number)[] | null;
}

interface UrlsEntity {
  url: string;
  expanded_url: string;
  display_url: string;
  indices?: (number)[] | null;
}

interface User {
  id: number;
  id_str: string;
  name: string;
  screen_name: string;
  location: string;
  description: string;
  url: string;
  entities: Entities1;
  protected: boolean;
  followers_count: number;
  friends_count: number;
  listed_count: number;
  created_at: string;
  favourites_count: number;
  utc_offset?: null;
  time_zone?: null;
  geo_enabled: boolean;
  verified: boolean;
  statuses_count: number;
  lang: string;
  contributors_enabled: boolean;
  is_translator: boolean;
  is_translation_enabled: boolean;
  profile_background_color: string;
  profile_background_image_url: string;
  profile_background_image_url_https: string;
  profile_background_tile: boolean;
  profile_image_url: string;
  profile_image_url_https: string;
  profile_banner_url: string;
  profile_link_color: string;
  profile_sidebar_border_color: string;
  profile_sidebar_fill_color: string;
  profile_text_color: string;
  profile_use_background_image: boolean;
  has_extended_profile: boolean;
  default_profile: boolean;
  default_profile_image: boolean;
  following: boolean;
  follow_request_sent: boolean;
  notifications: boolean;
  translator_type: string;
}

interface Entities1 {
  url: Url;
  description: Description;
}

interface Url {
  urls?: (UrlsEntity)[] | null;
}

interface Description {
  urls?: (null)[] | null;
}

interface ITweet {
  id: string;
  network: string;
  posterName: string;
  posterUsername: string;
  posterAvatar: string;
  text: string;
  createdAt: string;
  likesCount: number;
}

interface IFBPost {
  id: string;
  network: string;
  src: string;
  posterName: string;
  posterUsername: string;
  posterAvatar: string;
  text: string;
  likesCount: number;
  createdAt: string;
  profile: string;
}

interface IInstagramPost {}
