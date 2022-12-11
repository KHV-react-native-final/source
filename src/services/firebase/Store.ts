import firestore from '@react-native-firebase/firestore';
import {Alert} from 'react-native';

const POST_COLLECTTION = 'posts';

export interface IPost {
  username: string;
  date: string;
  content: string;
  img: {
    deleteHash: string;
    link: string;
  };
}

class Post {
  static getAll = async (handler: (postList: IPost[]) => void) => {
    const docs = (await firestore().collection<IPost>(POST_COLLECTTION).get())
      .docs;
    const postList = docs.map(post => post.data());
    handler(postList);
  };

  static addAPost = async (data: IPost, onError?: (error: any) => void) => {
    return await firestore()
      .collection(POST_COLLECTTION)
      .add(data)
      .then(() => {
        Alert.alert('Add the post successfully! Enjoy!');
      })
      .catch(onError);
  };

  static deletePost = async (id: string) => {
    return await firestore().collection(POST_COLLECTTION).doc(id).delete();
  };
}

export {Post};
