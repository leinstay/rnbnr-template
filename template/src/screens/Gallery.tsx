import React, { useState } from 'react';
import { Box, Image, Center, VStack } from 'native-base';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import ImageView from 'react-native-image-viewing';

export default function () {
    const [visible, setIsVisible] = useState(false);
    const [currentImage, setCurrentImage] = useState(0);

    const images = [
        { uri: 'https://i.imgur.com/SQZjrYK.jpg' },
        { uri: 'https://i.imgur.com/LJjm7gJ.jpg' },
        { uri: 'https://i.imgur.com/w67HtQu.jpg' },
        { uri: 'https://i.imgur.com/r7pRuzB.jpg' },
        { uri: 'https://i.imgur.com/6tYrhkv.jpg' },
        { uri: 'https://i.imgur.com/2cGuU0N.jpg' },
        { uri: 'https://i.imgur.com/tu7tqyM.jpg' },
    ];

    return (
        <>
            <ScrollView contentInsetAdjustmentBehavior="automatic" showsVerticalScrollIndicator={false}>
                <Box safeArea p="4" w="100%">
                    <VStack space={4}>
                        {images.map((image, i) => {
                            return (
                                <Center key={'image' + i}>
                                    <TouchableOpacity
                                        onPress={() => {
                                            setIsVisible(true);
                                            setCurrentImage(i);
                                        }}>
                                        <Image width="500" height="120" rounded="lg" alt="" source={{ uri: image.uri }} />
                                    </TouchableOpacity>
                                </Center>
                            );
                        })}
                    </VStack>
                </Box>
            </ScrollView>
            <ImageView images={images} imageIndex={currentImage} visible={visible} onRequestClose={() => setIsVisible(false)} />
        </>
    );
}
