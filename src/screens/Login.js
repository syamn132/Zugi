import { View, Text, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Login = () => {
  const nav = useNavigation()
  return (
    <ScrollView style={{
      flex: 1,
      backgroundColor: 'white'
    }}>
      <Image
        style={{
          marginTop: 50,
          alignSelf: 'center'
        }}
        source={require('../assets/zugi.png')}>
      </Image>
      <View style={{
        paddingHorizontal: 20,
        marginTop: 30
      }}>
        <Text style={{
          fontSize: 24,
          fontWeight: "500"
        }}>Sign Up</Text>
        <Text style={{
          fontSize: 16,
          fontWeight: '400',
          color: 'grey',
          marginTop: 10
        }}
        >Enter your credetails to Continue</Text>
        <Text style={{
          fontSize: 16,
          fontWeight: '500',
          color: 'grey',
          marginTop: 40
        }}
        >Username</Text>
        <TextInput
          maxLength={9}
          keyboardType='name-phone-pad'
          style={{
            borderColor: "grey",
            borderBottomWidth: 1,
            fontSize: 16
          }}
        />
        <Text style={{
          fontSize: 16,
          fontWeight: '500',
          color: 'grey',
          marginTop: 40
        }}
        >Email</Text>
        <TextInput
          keyboardType='email-address'
          style={{
            borderColor: "grey",
            borderBottomWidth: 1,
            fontSize: 16
          }}
        />
        <Text style={{
          fontSize: 16,
          fontWeight: '500',
          color: 'grey',
          marginTop: 40
        }}
        >Password</Text>
        <TextInput
          keyboardType='ascii-capable'
          style={{
            borderColor: "grey",
            borderBottomWidth: 1,
            fontSize: 16
          }}
        />
        <Text
          numberOfLines={2}
          style={{
            fontSize: 14,
            fontWeight: '400',
            color: 'black',
            marginTop: 15,
            letterSpacing: 0.7,
            lineHeight: 25,
          }}
        >By continuing you agree to our Terms of Services and Privacy Policy</Text>
        <TouchableOpacity style={{
          backgroundColor: 'green',
          marginTop: 30,
          height: 70,
          borderRadius: 20,
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <Text style={{
            fontSize: 16,
            color: "white",
            fontWeight: "500"
          }}>Sign Up</Text>
        </TouchableOpacity>
      </View>
      <View style={{
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
        gap: 5
      }}>
        <Text style={{
          fontSize: 16,
          fontWeight: "600",
        }}>
          Already have an account?
        </Text>
        <TouchableOpacity
          onPress={() => 
          {nav.navigate('HomeScreen')}
          }
        >
          <Text style={{
            fontSize: 15,
            fontWeight: "600",
            color: 'green',
          }}>
            Login Now
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

export default Login