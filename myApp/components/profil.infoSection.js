import * as React from 'react'
import { StyleSheet,ScrollView } from "react-native"
import { Layout, Text } from '@ui-kitten/components';
import { useSelector, useDispatch } from 'react-redux';
import { OrderSection } from './profil.OrderSection';
import { useFonts } from "expo-font";
import { 
    Roboto_100Thin,
    Roboto_100Thin_Italic,
    Roboto_300Light,
    Roboto_300Light_Italic,
    Roboto_400Regular,
    Roboto_400Regular_Italic,
    Roboto_500Medium,
    Roboto_500Medium_Italic,
    Roboto_700Bold,
    Roboto_700Bold_Italic,
    Roboto_900Black,
    Roboto_900Black_Italic 
} from '@expo-google-fonts/roboto'






export const ProfilInfo = ()=>{

    let [fontsLoaded] = useFonts({
        Roboto_100Thin,
        Roboto_100Thin_Italic,
        Roboto_300Light,
        Roboto_300Light_Italic,
        Roboto_400Regular,
        Roboto_400Regular_Italic,
        Roboto_500Medium,
        Roboto_500Medium_Italic,
        Roboto_700Bold,
        Roboto_700Bold_Italic,
        Roboto_900Black,
        Roboto_900Black_Italic 
    })    

    if(!fontsLoaded){
        return null
    }

    const styles = StyleSheet.create({
        container: {
            height: '60%',
            width: '95%',
            margin: 'auto',
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            elevation: 5
        }
    })



    return(

        <Layout style={styles.container}>
            <Text category='h5' style={{textAlign: 'center', marginTop: 10, fontFamily: 'Roboto_700Bold', marginBottom: 10}}>
                Informations :
            </Text>
            <OrderSection/>


        </Layout>

    )

}