import React from 'react';
import { Box, StatusBar, HStack, View, IconButton, Text, Icon } from 'native-base';
import { displayName } from '../../app.json';

import { useDispatch, useSelector } from 'react-redux';
import { getRandomColor, revertColor, setRandomColor } from '../slices/ColorRandomizer';
import { openModal } from '../slices/AlertManager';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import type { DrawerHeaderProps } from '@react-navigation/drawer';

export default function ({ navigation }: DrawerHeaderProps) {
    const dispatch = useDispatch();
    const color = useSelector(getRandomColor);

    const modalData = {
        header: false,
        footer: false,
        description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        cancelButtonColor: 'coolGray',
        cancelButtonText: 'Cancel',
    };

    return (
        <>
            <StatusBar animated={true} backgroundColor="#fff" barStyle="light-content" />
            <Box safeAreaTop bg={color} />
            <HStack bg={color} px="2" py="3" justifyContent="space-between" alignItems="center" w="100%">
                <HStack alignItems="center">
                    <View>
                        <IconButton onPress={() => navigation.toggleDrawer()} icon={<Icon size="sm" as={MaterialIcons} name="menu" color="white" />} />
                    </View>
                    <Text px="4" color="white" fontSize="20" fontFamily="heading" fontWeight="600">
                        {displayName}
                    </Text>
                </HStack>
                <HStack>
                    <IconButton onPress={() => dispatch(revertColor())} icon={<Icon as={MaterialIcons} name="autorenew" size="sm" color="white" />} />
                    <IconButton onPress={() => dispatch(setRandomColor())} icon={<Icon as={MaterialIcons} name="shuffle" size="sm" color="white" />} />
                    <IconButton onPress={() => dispatch(openModal({ ...modalData }))} icon={<Icon as={MaterialIcons} name="new-releases" size="sm" color="white" />} />
                </HStack>
            </HStack>
        </>
    );
}
