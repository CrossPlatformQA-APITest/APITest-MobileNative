import React from 'react';
import { StyleSheet, Text, View, Button } from "react-native";
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import * as Colour from "../settings/Colour";
import * as Style from "../settings/Style";



export default class SwipePage extends React.Component {

    resetPage() {
        this.setState({
            backgroundColor: Colour.COLOUR_BACKGROUND,
            displayWelcomeText: "flex",
            displaySwipeUp: "none",
            displaySwipeRight: "none",
            displaySwipeDown: "none",
            displaySwipeLeft: "none",
        });
    }

    static navigationOptions = {
      title: "Swipe Page",
      headerLeft: null,
      headerStyle: {
        backgroundColor: Colour.COLOUR_HEADER,
        height: 45,
      },
      headerTintColor: "white",
      headerTitleStyle:{
        fontWeight: "normal",
        textAlign: "center",
        flex: 1,
      },
    };

    constructor(props) {
        super(props);
        this.state = {
            swipeAnnouncer: "Please Swipe",
            gestureName: "none",
            backgroundColor: Colour.COLOUR_BACKGROUND,
            displayWelcomeText: "flex",
            displaySwipeUp: "none",
            displaySwipeRight: "none",
            displaySwipeDown: "none",
            displaySwipeLeft: "none",
        };
    }

    onSwipeUp(gestureState) {
        this.setState({swipeAnnouncer: 'You swiped up!'});
    }
    
    onSwipeDown(gestureState) {
        this.setState({swipeAnnouncer: 'You swiped down!'});
    }
    
    onSwipeLeft(gestureState) {
        this.setState({swipeAnnouncer: 'You swiped left!'});
    }
    
    onSwipeRight(gestureState) {
        this.setState({swipeAnnouncer: 'You swiped right!'});
    }

    onSwipe(gestureName, gestureState) {
        const {SWIPE_UP, SWIPE_DOWN, SWIPE_LEFT, SWIPE_RIGHT} = swipeDirections;
        this.setState({gestureName: gestureName});
        switch (gestureName) {
          case SWIPE_UP:
            this.setState({
                backgroundColor: 'red',
                displayWelcomeText: "none",
                displaySwipeUp: "flex",
                displaySwipeRight: "none",
                displaySwipeDown: "none",
                displaySwipeLeft: "none"
            });
            break;
          case SWIPE_DOWN:
            this.setState({
                backgroundColor: 'green',
                displayWelcomeText: "none",
                displaySwipeUp: "none",
                displaySwipeRight: "none",
                displaySwipeDown: "flex",
                displaySwipeLeft: "none"
            });
            break;
          case SWIPE_LEFT:
            this.setState({
                backgroundColor: 'blue',
                displayWelcomeText: "none",
                displaySwipeUp: "none",
                displaySwipeRight: "none",
                displaySwipeDown: "none",
                displaySwipeLeft: "flex"
            });
            break;
          case SWIPE_RIGHT:
            this.setState({
                backgroundColor: 'yellow',
                displayWelcomeText: "none",
                displaySwipeUp: "none",
                displaySwipeRight: "flex",
                displaySwipeDown: "none",
                displaySwipeLeft: "none"
        });
            break;
        }
    }

    render() {
        const config = {
            velocityThreshold: 0.3,
            directionalOffsetThreshold: 80
          };

      const { navigate } = this.props.navigation;

      return (
        <View style={{
            flex: 1,
            flexDirection: "column",
            }}>

            <View style={Style.STYLES.navigationButtonsContainer}>
                <View style={Style.STYLES.navigationButtonContainer}>
                    <Button title="Button Page"
                            color={Colour.COLOUR_HEADER_BUTTON}
                            accessibilityLabel="switchToButton"
                            onPress={() => {    this.resetPage()
                                                navigate("Button", { name: "buttonPageButton" })}} />
                </View>

                <View style={Style.STYLES.navigationButtonContainer}>
                    <Button title="Swipe Page"
                            color={Colour.COLOUR_HEADER_BUTTON_SELECTED}
                            accessibilityLabel="switchToSwipe"
                            onPress={() => this.resetPage()} />
                </View>

                <View style={Style.STYLES.navigationButtonContainer}>
                    <Button title="Scroll Page"
                            color={Colour.COLOUR_HEADER_BUTTON}
                            accessibilityLabel="switchToScroll"
                            onPress={() => {    this.resetPage()
                                                navigate("Scroll", { name: "scrollPageButton" })}} />
                </View>
            </View>

            <GestureRecognizer  onSwipe={(direction, state) => this.onSwipe(direction, state)}
                                onSwipeUp={(state) => this.onSwipeUp(state)}
                                onSwipeDown={(state) => this.onSwipeDown(state)}
                                onSwipeLeft={(state) => this.onSwipeLeft(state)}
                                onSwipeRight={(state) => this.onSwipeRight(state)}
                                config={config}
                                style={{
                                flex: 1,
            backgroundColor: this.state.backgroundColor }}>
                <View style={styles.textContainer}>
                    <Text
                        accessibilityLabel="welcomeText"
                        style={{
                            textAlign: "center",
                            display: this.state.displayWelcomeText
                        }}>Welcome to the swipe page, please swipe.</Text>

                    <Text
                        accessibilityLabel="swipeUp"
                        style={{
                            textAlign: "center",
                            display: this.state.displaySwipeUp
                    }}>You swiped up!</Text>

                    <Text
                        accessibilityLabel="swipeRight"
                        style={{
                            textAlign: "center",
                            display: this.state.displaySwipeRight
                    }}>You swiped right!</Text>

                    <Text
                        accessibilityLabel="swipeDown"
                        style={{
                            textAlign: "center",
                            display: this.state.displaySwipeDown
                    }}>You swiped down!</Text>

                    <Text
                        accessibilityLabel="swipeLeft"
                        style={{
                            textAlign: "center",
                            display: this.state.displaySwipeLeft
                    }}>You swiped left!</Text>
                </View>
        </GestureRecognizer>
        </View>

      );
    }
}

const styles = StyleSheet.create({
    textContainer: {
        flex: 1,
        justifyContent: "center",
    }
});