import React from 'react';
import { Box, Text, Divider, Button, Avatar } from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';
import DocumentPicker from 'react-native-document-picker';
import { clearSession, getAvatar, getSession, removeAvatar, setAvatar } from '../slices/SessionsController';
import { useDispatch, useSelector } from 'react-redux';
import { openModal } from '../slices/AlertManager';

export default function () {
    const dispatch = useDispatch();
    const session = useSelector(getSession);
    const avatar = useSelector(getAvatar);

    const modalData = {
        header: true,
        footer: true,
        title: 'Attention',
        description: 'This will destroys all of the data associated with the current session.',
        cancelButtonColor: 'coolGray',
        cancelButtonText: 'Cancel',
        actionButtonColor: 'danger',
        actionButtonText: 'Proceed',
        actionButtonFunction: clearSession(),
    };

    const handleDocumentSelection = async () => {
        try {
            const response = await DocumentPicker.pick({
                presentationStyle: 'fullScreen',
                type: [DocumentPicker.types.images],
            });
            if (response[0].uri) {
                dispatch(setAvatar({ ...{ avatar: response[0].uri } }));
            }
        } catch (e) {}
    };

    return (
        <>
            <ScrollView contentInsetAdjustmentBehavior="automatic" showsVerticalScrollIndicator={false}>
                <Box safeArea p="4" w="100%">
                    <Text fontSize="md" color="coolGray.600">
                        Session data
                    </Text>
                    <Divider my="2" />
                    <Text fontSize="sm" color="coolGray.600">
                        {JSON.stringify(session, null, 4)}
                    </Text>
                    {avatar ? <Avatar mt="10" alignSelf="center" size="2xl" source={{ uri: avatar }} /> : <></>}
                </Box>
            </ScrollView>
            <Button onPress={handleDocumentSelection} mx="4" mb="2" colorScheme="trueGray">
                Add avatar
            </Button>
            <Button onPress={() => dispatch(removeAvatar())} mx="4" mb="2" colorScheme="trueGray">
                Remove avatar
            </Button>
            <Button onPress={() => dispatch(openModal({ ...modalData }))} mx="4" mb="4" colorScheme="trueGray">
                Clear session
            </Button>
        </>
    );
}
