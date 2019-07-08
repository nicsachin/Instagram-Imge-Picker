import React from 'react';
import {Text, Button, View, Image, ScrollView , TouchableOpacity} from 'react-native';
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

                <Row size={5} style={{backgroundColor: 'white'}}>
                    <Col style = {{margin:20}} size={15} >
                        <TouchableOpacity onPress={this._onPressButton}>
                            <Text style={{color:"black" , fontWeight: 'bold'}}>Cancel</Text>
                        </TouchableOpacity>
                    </Col>
                    <Col style = {{}} size={70}>

                    </Col>


                    <Col style = {{margin:20}} size={15}>

                        <TouchableOpacity onPress={this._onPressButton}>
                            <Text style={{color:"lightblue" , fontWeight: 'bold'}}>Next</Text>
                        </TouchableOpacity>
                          </Col>

                </Row>
                <Row size={55} style={{ borderColor : 'white' , borderWidth: 3 ,backgroundColor: "grey"}}>
                </Row>
                <Row size={15} style={{backgroundColor: 'green'}}>
                    <Col style = {{backgroundColor: "grey" , borderColor : 'white' , borderWidth: 3 , paddingBottom:30}}></Col>
                    <Col style = {{backgroundColor: "grey" , borderColor : 'white' , borderWidth: 3 , paddingBottom:30}}></Col>
                    <Col  style = {{backgroundColor: "grey" , borderColor : 'white' , borderWidth: 3 , paddingBottom:30}}></Col>
                    <Col  style = {{backgroundColor: "grey" ,  borderColor : 'white' , borderWidth: 3 , paddingBottom:30}}></Col>
                </Row>

                <Row size={15} style={{backgroundColor: 'red'}}>
                    <Col style = {{backgroundColor: "grey" , borderColor : 'white' , borderWidth: 3 , paddingBottom:30}}></Col>
                    <Col style = {{backgroundColor: "grey" , borderColor : 'white' , borderWidth: 3 , paddingBottom:30}}></Col>
                    <Col  style = {{backgroundColor: "grey" , borderColor : 'white' , borderWidth: 3 , paddingBottom:30}}></Col>
                    <Col  style = {{backgroundColor: "grey" ,  borderColor : 'white' , borderWidth: 3 , paddingBottom:30}}></Col>

                </Row>

                <Row size={10} style={{backgroundColor: 'white'}}>
                    <Col style = {{margin:20}} size={20} >
                        <TouchableOpacity onPress={this._onPressButton}>
                            <Text style={{color:"black" , fontWeight: 'bold'}}>Library</Text>
                        </TouchableOpacity>
                    </Col>
                    <Col style = {{}} size={60}>

                    </Col>


                    <Col style = {{margin:20}} size={20}>

                        <TouchableOpacity onPress={this._onPressButton}>
                            <Text style={{color:"lightblue" , fontWeight: 'bold'}}>Photo</Text>
                        </TouchableOpacity>
                    </Col>
                </Row>
            </Grid>


        );
    }

}

export default App;
