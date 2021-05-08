import React from 'react';
import type {Node} from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Image,
    TextInput,
    TouchableOpacity
  } from 'react-native';

  export default class Login extends React.Component {

    render(){
        return(
            <SafeAreaView style={style.body}>
                <ScrollView>
                    <View style={style.header} ><Text style={style.title}>Sign In</Text></View>
                    <View style={style.logo_area} ><Image resizeMode={'contain'} source={require('../../../assets/images/icons8-login-50.png')}></Image></View>
                    <View style={style.board}>
                    <View style={style.item}>
                        <TextInput style={style.input} placeholder={'UserName'}></TextInput>
                    </View>
                    <View style={style.item}>
                        <TextInput secureTextEntry style={style.input} placeholder={'Password'}></TextInput>
                    </View>
                    <View style={[style.item,{flexDirection:'row',justifyContent:'flex-end',fontSize:16}]}>
                        <Text style={{color:'#525464'}}>Forget Your Password</Text>
                    </View>
                    <View style={style.item}>
                        <TouchableOpacity style={style.button}><Text style={style.button_text}>Login</Text></TouchableOpacity> 
                    </View>
                    <View style={[style.item,{flexDirection:'row',justifyContent:'center',fontSize:16}]}>
                        <Text style={{color:'#525464'}}>Or</Text>
                    </View>
                    <View style={style.social}>
                    <TouchableOpacity style={style.social_item}><Text>Facebook</Text></TouchableOpacity> 
                    <TouchableOpacity style={style.social_item}><Text >Twitter</Text></TouchableOpacity> 
                    <TouchableOpacity style={style.social_item}><Text>LinkedIn</Text></TouchableOpacity> 
                    </View>
                    <View style={[style.item]}>
                        <TouchableOpacity style={{justifyContent:'center',alignItems:'center'}}><Text style={{fontSize:16,fontWeight:'500',color:'#525464'}}>Don't Have an Account? <Text style={{color:'#FFB19D'}}>Sign Up</Text></Text></TouchableOpacity>
                    </View>
                </View>
                </ScrollView>
            </SafeAreaView>
        )
    }
  }

  const style = StyleSheet.create({
    body:{
        backgroundColor:'white',
        flex:1
    },
    header:{
        padding:15,
        justifyContent:'center',
        alignItems:'center'
    },
    title:{
        fontWeight:'700',
        fontSize:20,
        color:'#525464'
    },
    logo_area:{
        alignItems:'center',
        marginTop:40,
    },
    board:{
        marginTop:30,paddingHorizontal:30
    },
    item:{
        marginBottom:20
    },
        input:{
            backgroundColor:'#F7F7F7',
            padding:10,height:50,
            paddingVertical:10,
            paddingHorizontal:30,
            borderWidth:1,
            borderColor:'#B0B0C3'
    },
        button:{
        backgroundColor:'#20C3AF',
        paddingVertical:20,
        borderRadius:5,justifyContent:'center',alignItems:'center'
    },
    button_text:{
        textAlign:'center',
        color:'white',
        fontSize:17,
        fontWeight:'700'
    },
    social:{
        flexDirection:'row',
        justifyContent:'space-around',
        marginBottom:20
    },
    social_item:{
        padding:10,
        width:100,
        height:60,
        borderWidth:1,
        justifyContent:'center',
        alignItems:'center',
        borderColor:'#E2E2E0'}
  });