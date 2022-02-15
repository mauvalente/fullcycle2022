export interface TweetUser {
    Id: string;
    Name: string;
    ScreenName: string;
    Location: string;
    Description: string;
    ContributorsEnabled: boolean;
    ProfileImageURL: string;
    BiggerProfileImageURL: string;
    MiniProfileImageURL: string;
    OriginalProfileImageURL: string;
    ProfileImageURLHttps: string;
    BiggerProfileImageURLHttps: string;
    MiniProfileImageURLHttps: string;
    OriginalProfileImageURLHttps: string;
    DefaultProfileImage: boolean;
    URL: string;
    Protected: boolean;
    FollowersCount: number;
    ProfileBackgroundColor: string;
    ProfileTextColor: string;
    ProfileLinkColor: string;
    ProfileSidebarFillCollor: string;
    ProfileSidebarBorderColor: string;
    ProfileUserBackgroundImage: boolean;
    DefaultProfile: boolean;
    ShowAllInlineMedia: boolean;
    FriendsCount: number;
    CreatedAt: number;
    FavouritesCount: number;
  //JUMP
    Lang: string;
    StatusesCount: number;
    GeoEnabled: boolean;
    Verified: boolean;
    Translator: boolean;
    ListedCount: number;
    FollowRequestSent: boolean;
    WithheldInCountries: any[];
}

export interface Tweet {
    Text: string;
    Source: string;
    Truncated: string;
    InReplyToStatusId: number;
    InReplyToUserId: number;
    InReplyToScreenName: string | null;
    Place: boolean;
    Retweeted: boolean;
    FavoriteCount: number;
    Retweet: false;
    Contributors: any[];
    RetweetCount: number;
    RetweetedByMe: boolean;
    CurrentUserRetweetId: string;
    PossibleSensitive: boolean;
    Lang: string;
    WithheldInCountries: any[];
    HashtagEntities: any[];
    UserMentionEntities: any[];
    MediaEntities: any[];
    SymbolEntities: any[];
    URLEntities: any[];
    User: TweetUser;
    CreatedAt: number;
}

