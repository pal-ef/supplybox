import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Header = () => {
    return (
        <View style={theme.header}>
            <View style={theme.logo}>
                <Ionicons style={theme.logoSvg} name="cube-outline" size={33} />
                <View style={theme.logoRight}>
                    <Text style={theme.logoTxt}>SupplyBox</Text>
                    <Text style={theme.logoLoc}>Guadalajara, Jalisco</Text>
                </View>
            </View>
        </View>
    )
}

const theme = StyleSheet.create({
    header: {
        padding: 20,
        borderBottomColor: '#D9D9D9',
        borderBottomWidth: 3,
        marginBottom: 20
    },
    logo: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    logoSvg: {
        color: 'black'
    },
    logoRight: {
        marginLeft:3
    },
    logoTxt: {
        color: 'black',
        fontSize: 15
    },
    logoLoc: {
        fontSize:10
    }
})

export default Header;