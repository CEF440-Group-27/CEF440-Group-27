import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

import {Avatar} from 'react-native-paper';
import {getPost} from '../Services/server';
import styles from '../CSS/Styles';

function HomePage({navigation}) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await getPost();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    getData();
  }, []);

  return (
    <View style={styles.container}>
      {data ? (
        <FlatList
          data={data}
          keyExtractor={item => item._id}
          renderItem={({item}) => (
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                paddingTop: 10,
              }}
              onPress={() => {
                console.log('Home Page: ', {item._id, item.media);
                navigation.navigate('Comments Page', {
                  postId: item._id,
                });
              }}>
              {item.media[0] ? (
                <Image
                  source={{uri: item.media[0]}}
                  style={styles.capturedPhoto}
                  resizeMode="contain"
                />
              ) : (
                <Avatar.Icon size={60} icon="car" />
              )}
              <Text style={styles.authtext}>{item.content}</Text>
            </TouchableOpacity>
          )}
        />
      ) : (
        <View>
          <ActivityIndicator size="large" color="#0000ff" />
          <Text>Loading...</Text>
        </View>
      )}
    </View>
  );
}

export default HomePage;
