import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

const data = [
    {
        code : 1, name : 'Andres', latitude : 40.5244692, longitude : -3.6404527777777775,
    },
    {
        code : 2, name : 'Sara', latitude : 40.71533720510121, longitude : -74.00294795473049,
    },
    {
        code : 3, name : 'Jholo', latitude : 6.117933, longitude : -75.635434,
    },
    {
        code : 4, name : 'Julia', latitude : 6.377845, longitude : -75.445143,
    },
    {
        code : 5, name : 'Karina', latitude : 6.346384, longitude : -75.507893,
    },
    {
        code : 6, name : 'Alejo', latitude : 6.245199, longitude : -75.605538,
    },
    {
        code : 7, name : 'Kevin', latitude : 6.090579, longitude : -75.641746,
    },
];

export default class App extends Component {

    state = {
        region: null,
        coordinate : {
            latitude  : 0,
            longitude : 0
        },
    };



    componentDidMount() {
        navigator.geolocation.getCurrentPosition(
            (position) =>{
                this.setState({
                    region: {
                        latitude        : position.coords.latitude,
                        longitude       : position.coords.longitude,
                        latitudeDelta   : 0.500,
                        longitudeDelta  : 0.500,
                    },
                    coordinate: {
                        latitude        : position.coords.latitude,
                        longitude       : position.coords.longitude,
                    }
                })
            }, // sucsses
            (error) => alert(JSON.stringify(error)), // error
            {timeout: 2000, enableHighAccuracy: true, maximumAge: 1000,}
        )
    }

    render() {
        const { region, coordinate, } = this.state;
        return (
            <View style={styles.container}>
                <MapView
                    showsMyLocationButton
                    loadingEnabled
                    provider                =   {PROVIDER_GOOGLE}
                    region                  =   {region}
                    style                   =   {{ flex: 1 }}
                >
                    <MapView.Marker
                        coordinate  =   {coordinate}
                        title       =   {'My Location'}
                    />

                    {data.map((item,key)=>{
                        return(
                            <MapView.Marker
                                coordinate  = {{
                                    latitude  : item.latitude,
                                    longitude : item.longitude
                                }}
                                title       = {item.name}
                                key         = {`key_key_marker${key}-${item.code}`}
                            />
                        )
                    })}

                </MapView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
});
