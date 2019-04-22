import React, {Component} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import { Container, Card, Icon } from "native-base";
import Photo from './src/assets/faces.jpg'
// import Mapa from './src/Mapa'

export default class App extends Component {
    render() {
        return (
            <Container style={{display : 'flex', justifyContent : 'center', alignItems: 'center', paddingHorizontal : 20}}>
                <Card style={styles.content_Card}>
                    <View style={styles.content_Img}>
                        <Image
                            style={styles.img}
                            source={Photo}
                        />
                    </View>
                    <Icon name={'heart'} style={{position: 'absolute', right : 12, top : 10, fontSize : 25}} />
                    <Icon name={'calendar'} style={{position: 'absolute', left : 12, top : 10, fontSize : 25}} />
                    <Text style={styles.name_User}>Jorge Alejandro Q...</Text>
                    <View style={styles.content_ranking}>
                        <Text style={{fontWeight: 'bold', fontSize : 22}}>4,8</Text>
                        <View style={{flexDirection: 'row',}}>
                            <Icon name={'star'} style={{fontSize: 20, margin : 1}}/>
                            <Icon name={'star'} style={{fontSize: 20, margin : 1}}/>
                            <Icon name={'star'} style={{fontSize: 20, margin : 1}}/>
                            <Icon name={'star'} style={{fontSize: 20, margin : 1}}/>
                            <Icon name={'star'} style={{fontSize: 20, margin : 1}}/>
                        </View>
                    </View>
                    <View style={styles.content_description}>
                        <Text style={{textAlign: 'justify'}}>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,.</Text>
                    </View>
                    <View style={{margin : 5, flexDirection : 'row'}}>
                        <Icon name={'medal'} style={{fontSize : 24, margin : 3}} />
                        <Icon name={'medal'} style={{fontSize : 24, margin : 3}} />
                        <Icon name={'medal'} style={{fontSize : 24, margin : 3}} />
                        <Icon name={'medal'} style={{fontSize : 24, margin : 3}} />
                        <Icon name={'medal'} style={{fontSize : 24, margin : 3}} />
                        <Icon name={'medal'} style={{fontSize : 24, margin : 3}} />
                    </View>
                    <View style={{flexDirection : 'row', margin : 10}}>
                        <View style={styles.content_references}>
                            <Image style={styles.img_references} source={Photo}/>
                        </View>
                        <View style={styles.content_references}>
                            <Image style={styles.img_references} source={Photo}/>
                        </View>
                        <View style={styles.content_references}>
                            <Image style={styles.img_references} source={Photo}/>
                        </View>
                        <View style={styles.content_references}>
                            <Image style={styles.img_references} source={Photo}/>
                        </View>
                        <View style={styles.content_references}>
                            <Image style={styles.img_references} source={Photo}/>
                        </View>
                        <View style={styles.content_references}>
                            <Image style={styles.img_references} source={Photo}/>
                        </View>
                    </View>
                    <Text style={{fontSize : 20, marginBottom : 20, marginTop : 5}}>$35.000/ hr.</Text>
                </Card>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    content_Card : {
        alignItems : 'center',
        paddingTop : 35,
        padding    : 12,
        width      : '100%'
    },
    content_Img : {
        position : 'absolute',
        top : -40,
        shadowColor : "#000",
        shadowOffset : { width: 0, height: 0, },
        shadowOpacity : 0.30,
        shadowRadius : 4.65,
        elevation : 8,
        borderRadius : 100,
    },
    img : {
        borderRadius : 100,
        width        : 70,
        height       : 70,
    },
    name_User : {
        fontSize : 17,
    },
    content_ranking : {
        flexDirection : 'column',
        alignItems    : 'center',
    },
    content_description : {
        padding : 12,
        width   : '100%'
    },
    content_references : {
        borderRadius : 100,
        shadowColor : "#000",
        shadowOffset : { width: 0, height: 0, },
        shadowOpacity : 0.30,
        shadowRadius : 4.65,
        elevation : 5,
        margin : 5
    },
    img_references : {
        borderRadius : 100,
        width        : 37,
        height       : 37,
    }
});