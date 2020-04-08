import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

let padToTwo = (number) => (number <= 9 ? `0${number}` : number);

const styles = StyleSheet.create({
    parent: {
        display: "flex",
        flexDirection: "row",
        borderWidth: 1,
        borderRadius: 80,
        borderColor: "#694966",
        backgroundColor: '#694966',
        paddingLeft: "8%",
        paddingRight: "8%",
        paddingTop: ".5%",
        paddingBottom: ".5%",
    },

    child: {
        fontSize: 40,
        color: "#C89933",
    },

    buttonParent: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: "12%",
    },

    button: {
        backgroundColor: "#694966",
        paddingTop: "5%",
        paddingBottom: "5%",
        paddingLeft: "5%",
        paddingRight: "5%",
        display: "flex",
        borderRadius: 20,
        borderWidth: 1,
        borderColor: "#694966",
        height: 60,
    },

    buttonText: {
        color: "#C89933",
        fontSize: 20,
        alignSelf: "center"
    }
});

class StopWatchcontainer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            min: 0,
            sec: 0,
            msec: 0
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.parent}>
                    <Text style={styles.child}>{padToTwo(this.state.min) + ' : '}</Text>
                    <Text style={styles.child}>{padToTwo(this.state.sec) + ' : '}</Text>
                    <Text style={styles.child}>{padToTwo(this.state.msec)}</Text>
                </View>

                <View style={styles.buttonParent}>
                    <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>Reset</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>Start</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>Lap</Text></TouchableOpacity>
                </View>
            </View>
        );
    }

}

export default StopWatchcontainer;