import React from 'react';
import { Box, HStack, Heading, Stack, Image, Text } from 'native-base';
import { CardProps } from '../Types';

export default function ({ image, title, addressTop, addressBottom, description, time, size }: CardProps) {
    return (
        <Box w={size}>
            <Box m="2" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" bg="gray.50">
                <Box>
                    <Image height="120" source={image} alt="image" />
                </Box>
                <Stack p="4" space={3}>
                    <Stack space={2}>
                        <Heading size="md" ml="-1">
                            {title}
                        </Heading>
                        <Text fontSize="xs" color="violet.500" fontWeight="500" ml="-0.5" mt="-1">
                            {addressTop}
                        </Text>
                        <Text fontSize="xs" color="violet.500" fontWeight="500" ml="-0.5" mt="-1">
                            {addressBottom}
                        </Text>
                    </Stack>
                    <Text fontWeight="400">{description}</Text>
                    <HStack alignItems="center" space={4} justifyContent="space-between">
                        <HStack alignItems="center">
                            <Text color="coolGray.600" fontWeight="400">
                                {time}
                            </Text>
                        </HStack>
                    </HStack>
                </Stack>
            </Box>
        </Box>
    );
}
