import React, { useState } from 'react';
import { View, SafeAreaView, Text } from 'react-native';
import styles from './Sign.style';
import { Formik } from 'formik';
import auth from '@react-native-firebase/auth';
import {showMessage} from 'react-native-flash-message';
import authErrorMessageParser from '../../../utils/authErrorMessageParser';

import Input from '../../../components/Input';
import Button from '../../../components/Button';

const initialFormValues = {
    usermail: '',
    password: '',
    repassword: '',
}

const Sign = ({navigation}) => {
    const [loading, setLoading] = useState(false);
    function handleLogin() {
        navigation.goBack();
    }
    async function handleFormSubmit(formValues) {
        if(formValues.password !== formValues.repassword) {
            showMessage({
                message: 'Şifreler uyuşmuyor',
                type: 'danger',
            })
            return;
        }
        try {
            await auth().createUserWithEmailAndPassword(
                formValues.usermail,
                formValues.password
            );
            showMessage({
                message: 'Kullanıcı oluşturuldu',
                type: 'success',
            })
            navigation.navigate('LoginPage');
            setLoading(false);
        } catch (error) {
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
                    <>
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
                        <Input
                         value={values.repassword} 
                         onType={handleChange('repassword')} 
                         placeholder="şifrenizi tekrar giriniz.." 
                         iconName="key"
                         isSecure
                        />
                        <Button text="Giriş Yap" loading={loading} onPress={handleSubmit} />
                    </>
                )}
            </Formik>
            <Button text="Geri" theme="secondary" onPress={handleLogin} />
        </SafeAreaView>
    )
}

export default Sign;