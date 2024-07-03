import axios from 'axios';

const API_URL = 'http://192.168.42.79:8000';

//Users
export const postUser = async data => {
  try {
    const response = await axios.post(`${API_URL}/postUser`, data, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      data: data,
    });
    return response.data;
  } catch (error) {
    console.error('Error posting data:', error);
    throw error;
  }
};
export const updateUserById = async (userID, updateData) => {
  try {
    const response = await axios.patch(
      `${API_URL}/users/${userID}`,
      updateData
    );
    return response.data;
  } catch (error) {
    console.error('Error getting data:', error);
    throw error;
  }
};
export const findUserById = async _id => {
  try {
    const response = await axios.get(`${API_URL}/getuserbyId/${_id}`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error getting data:', error);
    throw error;
  }
};
//Post
export const postPost = async data => {
  try {
    const response = await axios.post(`${API_URL}/postPost`, data, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      data: data,
    });
    return response.data;
  } catch (error) {
    console.error('Error posting comment:', error);
    throw error;
  }
};

export const getPost = async () => {
  try {
    const response = await axios.get(`${API_URL}/getPosts`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error getting data:', error);
    throw error;
  }
};

export const getPostById = async _id => {
  try {
    console.log('_id: ', _id);
    const response = await axios.get(`${API_URL}/getPostbyId/${_id}`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error getting data:', error);
    throw error;
  }
};
export const updatePostById = async (postID, updateData) => {
  console.log('PostID: ', postID);
  console.log('Updated Data: ', updateData);
  try {
    const response = await axios.patch(
      `${API_URL}/updatePostById/${postID}`,
      updateData
    );
    return response.data;
  } catch (error) {
    console.error('Error getting data:', error);
    throw error;
  }
};
//coments
export const postComment = async data => {
  try {
    const response = await axios.post(`${API_URL}/postComment`, data, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      data: data,
    });
    return response.data;
  } catch (error) {
    console.error('Error posting comment:', error);
    throw error;
  }
};
export const updateCommentById = async (userID, updateData) => {
  try {
    const response = await axios.patch(
      `${API_URL}/comments/${userID}`,
      updateData
    );
    return response.data;
  } catch (error) {
    console.error('Error getting data:', error);
    throw error;
  }
};
export const getComments = async () => {
  try {
    const response = await axios.get(`${API_URL}/getComments`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error getting data:', error);
    throw error;
  }
};