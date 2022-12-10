import storage from "@react-native-firebase/storage"
import { DocumentPickerResponse } from "react-native-document-picker"

const IMAGES_PATH = "/images"

const uploadImageAndGetURL = async (fileDetals: DocumentPickerResponse) => {
  const uri = fileDetals.uri.replace("file://", "")
  const ref = storage().ref(`${IMAGES_PATH}/${fileDetals.name}`)
  await ref.putFile(uri)
  return await ref.getDownloadURL()
}

export {}