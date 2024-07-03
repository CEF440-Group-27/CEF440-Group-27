import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  Image,
  ActivityIndicator,
  Text,
  TextInput,
} from 'react-native';

import {Button} from 'react-native-paper';
import styles from '../CSS/Styles';
import {customTheme} from '../CSS/colors';

import {
  getPostById,
  postComment,
  getComments,
  updatePostById,
} from '../Services/server';

function CommentsPage({navigation, route}) {
  const [refresh, setRefresh] = useState(false);
  const [load, setLoad] = useState(false);
  const [postId, setPostId] = useState('');
  const [data, setData] = useState(null);
  const [comment, setComment] = useState('');
  const [listComments, setListComments] = useState([]);

  useEffect(() => {
    const _Id = route.params?.postId;
    if (_Id) {
      setPostId(_Id);
    }
    const getData = async _Id => {
      try {
        const result = await getPostById(_Id);
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    const getListComments = async () => {
      try {
        const result = await getComments();
        setListComments(result);
      } catch (error) {
        console.error('Error fetching comments:', error);
      }
    };
    if (_Id) {
      getData(_Id);
    }
    getListComments();
  }, [refresh, load, route.params]);

  return (
    <SafeAreaView style={styles.container}>
      {data ? (
        <View style={{flexDirection: 'row', paddingTop: 10}}>
          <Image
            source={{uri: data.media[0]}}
            style={styles.capturedPhoto}
            resizeMode="contain"
          />
          <Text style={styles.authtext}>{data.content}</Text>
        </View>
      ) : (
        <View>
          <ActivityIndicator size="large" color="#0000ff" />
          <Text>Loading...</Text>
        </View>
      )}

      <View>
        <TextInput
          style={styles.input}
          onChangeText={setComment}
          value={comment}
        />
      </View>
      <View>
        <Button
          mode="contained"
          theme={customTheme}
          onPress={async () => {
            await postComment({
              postId: postId,
              userId: '668284e0a84a1d5f51a9a34b',
              comment: comment,
            });
            setLoad(!load);
            setRefresh(!refresh);
            //navigation.navigate('Comments Page');
          }}>
          Post Comment
        </Button>
      </View>
      {listComments.length > 0 ? (
        <View>
          {listComments.map((item, index) => (
            <Text
              style={{fontWeight: 'bold', padding: 10, fontSize: 25}}
              key={index}>
              {item.comment}
            </Text>
          ))}
        </View>
      ) : (
        <View>
          <ActivityIndicator size="large" color="#0000ff" />
          <Text>Loading...</Text>
        </View>
      )}
    </SafeAreaView>
  );
}

export default CommentsPage;
