import React, { useEffect, useState } from 'react';
import { View,Text, StyleSheet, TextInput, Platform, FlatList } from 'react-native';
import { Button } from '../components/Button';
import { SkillCard } from '../components/SkillCards';

export function Home(){ 
    interface mySkills{
        id:string,
        name:string
    }
    const [newSkills,setNewSkills] = useState<string>('');
    const [mySkills,setMySkills] = useState<mySkills[]>([]);
    const [getGreeting,setGretting] = useState<string>('');
    function handleAddNewSkill(){
        const data = {
            id: String(new Date().getTime()),
            name: newSkills
        }
        console.log(data);
        setMySkills(oldState =>[...oldState,data]);  
    }
    function handleRemoveSkill(id: string){
        setMySkills(oldState => oldState.filter(
            skill => skill.id !== id
        ));
    }
    useEffect(() =>{
        let date = new Date().getHours();
        if(date >= 12 && date <= 17){ 
            setGretting("Boa Tarde"); 
        }else if(date >= 6 && date <= 11){ 
            setGretting("Boa Dia"); 
        }else{ 
            setGretting("Bom Noite"); 
        }
    },[mySkills])
    return(
        <>
            <View style={styles.container}>
                <Text style={styles.title}>Welcome, Gabriel</Text>
                {
                    <Text style={styles.greeting}>
                        {getGreeting}
                    </Text>
                }  
                <TextInput style={styles.input}
                    placeholderTextColor="white" 
                    placeholder='New Skill'
                    onChangeText={setNewSkills}
                /> 
                <Button
                    title="Add" 
                    onPress={handleAddNewSkill}
                />
                <Text style={[styles.title,{marginVertical:30}]}>
                    MySkill
                </Text>   
                <FlatList
                    data={mySkills}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <SkillCard 
                            onPress={ () =>handleRemoveSkill(item.id)} 
                            skill={item.name}
                        />
                          
                    )}
                /> 
                    
            </View>
        </>
        
    ); 
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingVertical:70,
        paddingHorizontal:30,
        backgroundColor:'#232022', 
    },
    greeting:{
        color:'#fff',
        fontWeight:'800'
    },
    title:{
        fontSize:24,
        fontWeight:'bold',
        color:'white'
        
    },
    input:{
        backgroundColor:'#505050',
        color:'white',
        fontSize:18,
        padding:Platform.OS ? 15 : 10,
        marginTop:30,
        borderRadius:7
    },
    button:{
        backgroundColor:'#a370f7',
        padding:15,
        borderRadius:7,
        alignItems:'center',
        marginTop:18
    },
    textButton:{
        color:'#fff',
        fontSize:17,
        fontWeight:'bold', 
    }, 
});