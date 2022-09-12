import React, { Fragment, useState } from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import { Formik } from 'formik';
import auth from '@react-native-firebase/auth'
import {showMessage} from 'react-native-flash-message';

import authErrorMessageParser from '../../../utils/authErrorMessageParser';
import styles from './Login.style';
import Input from '../../../components/Input';
import Button from '../../../components/Button';

const initialFormValues = {
    usermail: '',
    password: '',
}

const Login = ({navigation}) => {
    const [loading, setLoading] = useState(false);
    function handleSignUp() {
        navigation.navigate('SignPage');
    }

    async function handleFormSubmit(formValues) {
        try {
            setLoading(true);
            await auth().signInWithEmailAndPassword(
                formValues.usermail,
                formValues.password
            )
            setLoading(false);
        } catch (error) {
            console.log(error)
            showMessage({
                message: authErrorMessageParser(error.code),
                type: 'danger',
            })
            setLoading(false);
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.header}>bana NE?</Text>
            <Formik initialValues={initialFormValues} onSubmit={handleFormSubmit}>
                {({values, handleChange, handleSubmit}) => (
                    <Fragment>
                        <Input
                         value={values.usermail}
                         onType={handleChange('usermail')} 
                         placeholder="e-postanızı giriniz.." 
                         iconName="email"
                        />
                        <Input
                         value={values.password} 
                         onType={handleChange('password')} 
                         placeholder="şifrenizi giriniz.." 
                         iconName="key"
                         isSecure
                        />
                        <Button text="Giriş Yap" onPress={handleSubmit} loading={loading} />
                    </Fragment>
                )}
            </Formik>
            <Button text="Kayıt Ol" theme="secondary" onPress={handleSignUp} />
        </SafeAreaView>
    )
}

export default Login;