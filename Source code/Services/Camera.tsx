/* eslint-disable prettier/prettier */
import ImagePicker from 'react-native-image-crop-picker';


  const reqObject = {
    width: 300,
    height: 400,
    cropping: true,
    includeBase64: true,
    cropperCircleOverlay: true,
    freeStyleCropEnabled: true,


};
const handleCameraLaunch = (setSelectedImage) => {
  ImagePicker.openCamera(reqObject).then(image => {
    const photo = `data:${image.mime};base64,${image.data}`;
    setSelectedImage(photo);
    console.log('Selected Image: ', selectedImage);
    })
      .catch(err => {console.log(err);});
      cleanUp();
}

const openImagePicker = (setSelectedImage) => {
  ImagePicker.openPicker(reqObject).then(image => {
        const photo = `data:${image.mime};base64,${image.data}`;
        setSelectedImage(photo);
      })
      .catch((err) =>{
        console.log(err);
        cleanUp();
      });
  }
  const cleanUp = () => {
    ImagePicker.clean().then(() => {
        console.log('removed all tmp images from tmp directory');
      }).catch(e => {
        Alert.alert(e);
      });
  }

  export {openImagePicker, handleCameraLaunch};
  


 
  


/*

  return (
    <View>
      <View>
    <Button
    title="Open Camera"
    onPress={handleCameraLaunch}
    />

    <Button
    title="Upload Image"
    onPress={openImagePicker}
    />
    </View>
    <View
       >
        <Image
        style={styles.logo}
        source={{uri: selectedImage ? selectedImage :  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
        }}
        />
      </View>
   </View>
  );


}
export default Camera;

*/