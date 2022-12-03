import React from 'react';
import { Box, Button, Checkbox, Divider, FormControl, Heading, HStack, Input, Link, Select, Slider, Text, TextArea, VStack } from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';
import { Formik } from 'formik';
import * as Yup from 'yup';

import { setSession } from '../slices/SessionsController';
import { AppState, FormsScreensProps } from '../Types';
import { useDispatch } from 'react-redux';

export default function ({ navigation }: FormsScreensProps) {
    const dispatch = useDispatch();

    const formSchema = { email: '', password: '', work: '', remarks: '', competence: 70, acceptance: false, status: true };
    const validationSchema = Yup.object().shape({
        email: Yup.string().email('Invalid e-mail address.').required('This field is required.'),
        password: Yup.string().min(8, 'Password must contain 8 characters or more.').max(50, 'Password must contain less than 50 characters.').required('This field is required.'),
        acceptance: Yup.boolean().required('The terms and conditions must be accepted.').oneOf([true], 'The terms and conditions must be accepted.'),
    });

    const submit = (data: AppState['session']) => {
        dispatch(setSession(data));
        navigation.navigate('Session');
    };

    return (
        <Formik initialValues={formSchema} onSubmit={submit} validateOnChange={true} validateOnBlur={false} validationSchema={validationSchema}>
            {({ handleChange, handleBlur, handleSubmit, setFieldValue, values, errors }) => (
                <>
                    <ScrollView contentInsetAdjustmentBehavior="automatic" showsVerticalScrollIndicator={false}>
                        <Box safeArea p="4" w="100%">
                            <Heading size="lg" fontWeight="600" color="coolGray.800">
                                Create User Session
                            </Heading>
                            <Heading mt="1" color="coolGray.600" fontWeight="medium" size="xs">
                                Enter your data here
                            </Heading>

                            <VStack space={3} mt="5">
                                <FormControl isRequired isInvalid={'email' in errors}>
                                    <FormControl.Label>Email</FormControl.Label>
                                    <Input value={values.email} onBlur={handleBlur('email')} onChangeText={handleChange('email')} />
                                    <FormControl.ErrorMessage>{errors.email}</FormControl.ErrorMessage>
                                </FormControl>
                                <FormControl isRequired isInvalid={'password' in errors}>
                                    <FormControl.Label>Password</FormControl.Label>
                                    <Input value={values.password} type="password" onBlur={handleBlur('password')} onChangeText={handleChange('password')} />
                                    <FormControl.ErrorMessage>{errors.password}</FormControl.ErrorMessage>
                                </FormControl>
                                <FormControl>
                                    <FormControl.Label>Fields of Work</FormControl.Label>
                                    <Select selectedValue={values.work} onValueChange={handleChange('work')}>
                                        <Select.Item label="UX Research" value="ux" />
                                        <Select.Item label="Web Development" value="web" />
                                        <Select.Item label="Cross Platform Development" value="cross" />
                                        <Select.Item label="UI Designing" value="ui" />
                                        <Select.Item label="Backend Development" value="backend" />
                                    </Select>
                                </FormControl>
                                <FormControl>
                                    <FormControl.Label>Level of Competence</FormControl.Label>
                                    <Slider
                                        defaultValue={values.competence}
                                        onChangeEnd={v => {
                                            setFieldValue('competence', v);
                                        }}
                                        minValue={0}
                                        maxValue={100}
                                        step={1}>
                                        <Slider.Track>
                                            <Slider.FilledTrack />
                                        </Slider.Track>
                                        <Slider.Thumb />
                                    </Slider>
                                </FormControl>
                                <FormControl>
                                    <FormControl.Label>Remarks</FormControl.Label>
                                    <TextArea value={values.remarks} onBlur={handleBlur('remarks')} onChangeText={handleChange('remarks')} h="20" autoCompleteType={1} />
                                    <Link _text={{ fontSize: 'xs', fontWeight: '500', color: 'indigo.500' }} alignSelf="flex-end" mt="1">
                                        Any questions?
                                    </Link>
                                </FormControl>
                                <FormControl isRequired isInvalid={'acceptance' in errors}>
                                    <Checkbox
                                        value={'acceptance'}
                                        onChange={v => {
                                            setFieldValue('acceptance', v);
                                        }}>
                                        I accept the terms & conditions
                                    </Checkbox>
                                    <FormControl.ErrorMessage>{errors.acceptance}</FormControl.ErrorMessage>
                                </FormControl>
                                <HStack mt="2">
                                    <Text fontSize="sm" color="coolGray.600">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet,
                                        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                                        et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum
                                        dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua.
                                    </Text>
                                </HStack>
                            </VStack>
                        </Box>
                    </ScrollView>
                    <Divider />
                    <Button onPress={handleSubmit} m="4" colorScheme="trueGray">
                        Save
                    </Button>
                </>
            )}
        </Formik>
    );
}
