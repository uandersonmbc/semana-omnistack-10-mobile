export interface Coordinates {
    coordinates: [number, number];
    type: string;
}
export interface User {
    _id: string,
    techs: [string],
    github_username: string,
    name: string,
    avatar_url: string,
    bio: string,
    location: Coordinates
}
