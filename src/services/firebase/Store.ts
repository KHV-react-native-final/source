import firestore, { firebase } from '@react-native-firebase/firestore';
import { Alert } from 'react-native';

export interface IPost {
  username: string;
  date: string;
  img: {
    deleteHash: string,
    link: string
  }
}

class Post {
  static addAPost = async (data: IPost) => {
    return await firestore().collection('posts').add(data)
    .then(() => {
      Alert.alert("Add the post successfully! Enjoy!")
    });
  };
  static deletePost = async (id: string) => {
    return await firestore().collection('posts').doc(id).delete()
  }
}

export {Post};
