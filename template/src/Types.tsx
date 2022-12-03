import { DrawerScreenProps } from '@react-navigation/drawer';
import { PayloadAction } from '@reduxjs/toolkit';
import { ColorSchemeType } from 'native-base/lib/typescript/components/types';
import { ImageSourcePropType } from 'react-native';

export type RGB = `rgb(${number}, ${number}, ${number})`;

export type NavigatorScreens = {
    Cards: undefined;
    Gallery: undefined;
    Forms: undefined;
    Session: undefined;
};

export type CardsScreensProps = DrawerScreenProps<NavigatorScreens, 'Cards'>;
export type GalleryScreensProps = DrawerScreenProps<NavigatorScreens, 'Gallery'>;
export type FormsScreensProps = DrawerScreenProps<NavigatorScreens, 'Forms'>;
export type SessionScreensProps = DrawerScreenProps<NavigatorScreens, 'Session'>;

export type CardProps = {
    id: number;
    image: ImageSourcePropType;
    title: string;
    addressTop: string;
    addressBottom: string;
    description: string;
    time: string;
    size: '100%' | '1/2' | '1/3' | '1/4';
};

export interface AppState {
    color: {
        value: RGB;
    };
    alert: {
        status: boolean;
        header: boolean;
        footer: boolean;
        title: string;
        description: string;
        cancelButtonColor: ColorSchemeType;
        cancelButtonText: string;
        actionButtonColor: ColorSchemeType;
        actionButtonText: string;
        actionButtonFunction: PayloadAction;
    };
    session: {
        email?: string;
        password?: string;
        work?: string;
        remarks?: string;
        competence?: number;
        acceptance?: boolean;
        avatar?: string;
        status: boolean;
    };
}
