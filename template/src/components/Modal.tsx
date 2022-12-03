import React from 'react';
import { Center, AlertDialog, Button } from 'native-base';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal, getModalState } from '../slices/AlertManager';

export default function () {
    const dispatch = useDispatch();
    const modal = useSelector(getModalState);
    const cancelRef = React.useRef(null);

    return (
        <>
            <Center>
                <AlertDialog closeOnOverlayClick={true} leastDestructiveRef={cancelRef} isOpen={modal.status} onClose={() => dispatch(closeModal())}>
                    <AlertDialog.Content>
                        {modal.header ? (
                            <>
                                <AlertDialog.CloseButton />
                                <AlertDialog.Header>{modal.title}</AlertDialog.Header>
                            </>
                        ) : (
                            <></>
                        )}

                        <AlertDialog.Body>{modal.description}</AlertDialog.Body>

                        {modal.footer ? (
                            <AlertDialog.Footer>
                                <Button.Group space={2}>
                                    {modal.cancelButtonText ? (
                                        <Button variant="unstyled" colorScheme={modal.cancelButtonColor} onPress={() => dispatch(closeModal())} ref={cancelRef}>
                                            {modal.cancelButtonText}
                                        </Button>
                                    ) : (
                                        <></>
                                    )}
                                    {modal.actionButtonText ? (
                                        <Button
                                            onPress={() => {
                                                dispatch(modal.actionButtonFunction);
                                                dispatch(closeModal());
                                            }}
                                            colorScheme={modal.actionButtonColor}>
                                            {modal.actionButtonText}
                                        </Button>
                                    ) : (
                                        <></>
                                    )}
                                </Button.Group>
                            </AlertDialog.Footer>
                        ) : (
                            <></>
                        )}
                    </AlertDialog.Content>
                </AlertDialog>
            </Center>
        </>
    );
}
