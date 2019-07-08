import React from 'react';
import { Text , Button , View , Image , ScrollView} from 'react-native';
import CameraRoll from "@react-native-community/cameraroll";
class App extends React.Component {

    constructor() {
        super();

        this.state = {photos: []};
        this.open = this.open.bind(this);
    }

    open() {

        console.log('>>> inside open')
        CameraRoll.getPhotos({
            first: 20,
            assetType: 'Photos',
        })
            .then(r => {
                this.setState({ photos: r.edges });
            })
            .catch((err) => {
                //Error Loading Images
                console.log(err)
            });

    }

    render() {

        return ( <View>
            <Button title="Load Images" onPress={this.open} />
            <ScrollView>
                {this.state.photos.map((p, i) => {
                    return (
                        <Image
                            key={i}
                            style={{
                                width: 500,
                                height: 500,
                                borderRadius:3,
                                borderColor:"red"
                            }}
                            source={{ uri: p.node.image.uri }}
                        />
                    );
                })}
            </ScrollView>
        </View>);
    }

}

export default App;
