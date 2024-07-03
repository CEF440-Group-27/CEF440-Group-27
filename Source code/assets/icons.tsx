import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/dist/Ionicons';

import {Avatar} from 'react-native-paper';

const cameraAccountIcon = <Avatar.Icon size={60} icon="camera-account"/>

function Pencil({navigation, screenName}) {
  return (
    <TouchableOpacity onPress={() => navigation.navigate(screenName)}>
      <Icon name="pencil" size={50} />
    </TouchableOpacity>
  );
}

function LockOpen() {
  return (
    <TouchableOpacity>
      <Icon name="lock-open" size={30} />
    </TouchableOpacity>
  );
}

export {Pencil, LockOpen, cameraAccountIcon};
