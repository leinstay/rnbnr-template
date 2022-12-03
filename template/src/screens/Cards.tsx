import React from 'react';
import { Box, Stack } from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';
import Card from '../components/Card';

export default function () {
    const places = [
        {
            id: 1,
            title: 'Nibiru X',
            addressTop: "24° 58' 51.8844'' N",
            addressBottom: "12° 33' 17.1504'' E",
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            time: '1 second ago',
            image: require('../../src/assets/images/sp1.jpg'),
        },
        {
            id: 2,
            title: 'Nibiru M',
            addressTop: "24° 58' 51.8844'' N",
            addressBottom: "12° 33' 17.1504'' E",
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            time: '2 seconds ago',
            image: require('../../src/assets/images/sp2.jpg'),
        },
        {
            id: 3,
            title: 'Nibiru S',
            addressTop: "24° 58' 51.8844'' N",
            addressBottom: "12° 33' 17.1504'' E",
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            time: '3 seconds ago',
            image: require('../../src/assets/images/sp3.jpg'),
        },
        {
            id: 4,
            title: 'Nibiru L',
            addressTop: "24° 58' 51'' N",
            addressBottom: "12° 33' 17'' E",
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            time: '4 seconds ago',
            image: require('../../src/assets/images/sp4.jpg'),
        },
        {
            id: 5,
            title: 'Nibiru B',
            addressTop: "24° 58' 51'' N",
            addressBottom: "12° 33' 17'' E",
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            time: '5 seconds ago',
            image: require('../../src/assets/images/sp5.jpg'),
        },
        {
            id: 6,
            title: 'Nibiru N',
            addressTop: "24° 58' 51'' N",
            addressBottom: "12° 33' 17'' E",
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            time: '6 seconds ago',
            image: require('../../src/assets/images/sp6.jpg'),
        },
    ];

    return (
        <ScrollView contentInsetAdjustmentBehavior="automatic" showsVerticalScrollIndicator={false}>
            <Box safeArea p="2" w="100%">
                <Stack direction="row" flexWrap={'wrap'}>
                    {places.map((place, i) => {
                        switch (true) {
                            case i === 0:
                                return <Card key={'card' + i} {...place} {...{ size: '100%' }} />;
                            case i === 1 || i === 2:
                                return <Card key={'card' + i} {...place} {...{ size: '1/2' }} />;
                            default:
                                return <Card key={'card' + i} {...place} {...{ size: '1/3' }} />;
                        }
                    })}
                </Stack>
            </Box>
        </ScrollView>
    );
}
