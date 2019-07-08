import React from 'react';
import {Text, Button, View, Image, ScrollView} from 'react-native';
import CameraRoll from '@react-native-community/cameraroll';
import {Col, Row, Grid} from 'react-native-easy-grid';

class App extends React.Component {

    constructor() {
        super();

        this.state = {photos: []};
        this.open = this.open.bind(this);
    }

    open() {

        console.log('>>> inside open', this.state.photos);
        CameraRoll.getPhotos({
            first: 100,
            assetType: 'Photos',
        })
            .then(r => {
                this.setState({photos: r.edges});
            })
            .catch((err) => {
                //Error Loading Images
                console.log(err);
            });

    }

    render() {

        return (

            <Grid>
                <Row size={60} style={{backgroundColor: 'red'}}>
                    <Image
                        style={{  flex: 1,

                            alignSelf: 'center',
                            width: '100%',
                            height: '100%'}}
                        source={{uri: 'https://www.mini.in/en_IN/home/jcr:content/main/home_teaser_gallery/home-teaser-gallery-par/home_teaser_item_cop_783170173/image-item/damImage.wide.560w.j_1561456852353.jpg'}}
                    />
                </Row>
                <Row size={20} style={{backgroundColor: 'green'}}>
                    <Col style = {{backgroundColor: "red"}}></Col>
                    <Col style = {{backgroundColor: "black"}}></Col>
                    <Col></Col>
                </Row>

                <Row size={20} style={{backgroundColor: 'red'}}>
                    <Col style = {{backgroundColor: "black"}}></Col>
                    <Col style = {{backgroundColor: "red"}}></Col>
                    <Col style = {{backgroundColor: "black"}}></Col>

                </Row>
            </Grid>


        );
    }

}

export default App;
