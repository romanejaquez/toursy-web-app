export interface TileModel {
    img: string;
    topLabel: string;
    bottomLabel: string;
    id: string;
    isSelected: boolean;
    allowFavorites?: boolean;
    tileType?: string;
    tileSubType?: string;
}