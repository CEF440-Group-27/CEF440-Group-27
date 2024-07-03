/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {
  View,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from 'react-native';

import {Avatar, Button} from 'react-native-paper';
import {customTheme} from '../CSS/colors';
import {updateUserById, findUserById} from '../Services/server';

import styles from '../CSS/Styles';

import * as Camera from '../Services/Camera';


function ProfilePage({navigation}) {
  const [photo, setPhoto] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await findUserById('668284e0a84a1d5f51a9a34b');
        setPhoto(result.profilePicture);
        setName(result.name);
        setEmail(result.email);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    getData();
  }, []);

  return (
    <SafeAreaView>
      <View>
        {photo ? (
          <TouchableOpacity
            style={{alignContent: 'center', alignItems: 'center', padding: 30}}
            onPress={() => {
              Camera.openImagePicker(setPhoto);
              updateUserById('668284e0a84a1d5f51a9a34b', {profilePicture: photo});
              }}
          >
            <Image
              source={{uri: photo}}
              style={styles.capturedPhoto}
              resizeMode="contain"
            />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={{alignContent: 'center', alignItems: 'center', padding: 30}}
            onPress={() => Camera.openImagePicker(setPhoto)}>
            <Avatar.Icon size={60} icon="camera-account" />
          </TouchableOpacity>
        )}
      </View>
      <View>
        <TextInput
          style={styles.input}
          onChangeText={setName}
          value={name}
          placeholder="name"
        />
        <TextInput
          style={styles.input}
          onChangeText={setEmail}
          value={email}
          placeholder="email"
        />
      </View>
      <View>
        <Button
          mode="contained"
          theme={customTheme}
          onPress={() => {
            updateUserById('668284e0a84a1d5f51a9a34b', {
              username: name,
              email: email,
              profilePicture: photo,
              updatedAt: Date(),
            });
          }}>
          Update Profile
        </Button>
      </View>
    </SafeAreaView>
  );
}
export default ProfilePage;
