import React from "react";
import { StyleSheet, Text, TouchableOpacity,TouchableOpacityProps } from "react-native"; 
interface ButtonProps extends TouchableOpacityProps{
    title:string
}
export function Button({title,...rest}:ButtonProps){ 
    return(
        <TouchableOpacity  
            style={styles.button}
            activeOpacity={0.7}
            {...rest}
        >
            <Text>
                {title}
            </Text>
        </TouchableOpacity>
    );
}


const styles = StyleSheet.create({ 
    button:{
        backgroundColor:'#a370f7',
        padding:15,
        borderRadius:7,
        alignItems:'center',
        marginTop:18
    },
});