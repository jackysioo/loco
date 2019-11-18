import React from 'react';
import { withNavigation } from 'react-navigation';
import {
    Dimensions,
    SafeAreaView,
    Platform,
    StatusBar,
    ScrollView,
    StyleSheet,
    Image,
    Text,
    View,
    ImageBackground,
    TouchableOpacity,
    TextInput,
    Modal,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
import { Images, Colors } from "../constants";
import { ParagraphText1, ParagraphText2, HeadingText1, HeadingText2, HeadingText3 } from '../components/Texts';
const { width, height } = Dimensions.get("screen");


class ReviewScreen extends React.Component {
    state = {
        messageFormVisible: false,
        reviewTitleInput: this.props.navigation.state.params.title,
        reviewInput: this.props.navigation.state.params.review,
        ratingInput: this.props.navigation.state.params.rating,
    };

    updateReviewTitle = (reviewTitleInput) => {
        this.setState({ reviewTitleInput });
    };

    updateReview = (reviewInput) => {
        this.setState({ reviewInput });
    };

    updateRating = (ratingInput) => {
        this.setState({ ratingInput });
    };

    render() {
        const { reviewTitleInput } = this.state;
        const { reviewInput } = this.state;
        const { ratingInput } = this.state;

        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={styles.container}>
                    <View style={{ flex: 1 }}>
                        <ImageBackground
                            source={Images.ProfileBackground}
                            style={styles.outerContainer}
                            imageStyle={styles.background}>
                            <ScrollView
                                showsVerticalScrollIndicator={false}
                                style={styles.itemContainer}>
                                <TouchableOpacity style={styles.back} onPress={() => this.props.navigation.goBack()}>
                                    <HeadingText1 style={{ color: Colors.white }}> Back </HeadingText1>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.edit} onPress={() => { this.setState({ messageFormVisible: true }) }}>
                                    <HeadingText1 style={{ color: Colors.white }}> Edit </HeadingText1>
                                    <Image style={styles.icon} source={require('../assets/icons/icons8-edit-24.png')} />
                                </TouchableOpacity>
                                <View style={styles.innerContainer}>
                                    <View style={styles.list}>
                                        <Image source={{ uri: this.props.navigation.state.params.image }}
                                            style={styles.reviewImage}>
                                        </Image>
                                        <View style={styles.review}>
                                            <HeadingText1>❝  {this.props.navigation.state.params.title}</HeadingText1>
                                            <HeadingText2 style={{ marginTop: 4 }}>{this.props.navigation.state.params.review}  ❞</HeadingText2>
                                        </View>
                                        <View style={{ marginTop: 20, flexDirection: 'row' }}>
                                            <HeadingText1 style={styles.headerLeft}>R e v i e w   b y</HeadingText1>
                                            <HeadingText2 style={styles.headerRight}> {this.props.navigation.state.params.user} </HeadingText2>
                                        </View>
                                        <View style={{ marginTop: 15, flexDirection: 'row' }}>
                                            <HeadingText1 style={styles.headerLeft}>S e r v i c e   b y</HeadingText1>
                                            <HeadingText2 style={styles.headerRight}> {this.props.navigation.state.params.business} </HeadingText2>
                                        </View>
                                        <View style={{ marginTop: 15, flexDirection: 'row' }}>
                                            <HeadingText1 style={styles.headerLeft}>D a t e</HeadingText1>
                                            <HeadingText2 style={styles.headerRight}> {this.props.navigation.state.params.date} </HeadingText2>
                                        </View>
                                        <View style={{ marginTop: 15, flexDirection: 'row' }}>
                                            <HeadingText1 style={styles.headerLeft}>R a t i n g</HeadingText1>
                                            <View style={{ justifyContent: 'flex-end' }}>
                                                <View style={styles.rating}>
                                                    <HeadingText2 style={{ color: Colors.placeholder, marginRight: 3 }}>
                                                        {this.props.navigation.state.params.rating}
                                                    </HeadingText2>
                                                    <Image style={styles.icon} source={require('../assets/icons/icons8-star-24-grey.png')} />
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </ScrollView>
                        </ImageBackground>
                    </View>
                    <Modal
                        animationType="slide"
                        transparent={false}
                        visible={this.state.messageFormVisible}>
                        <KeyboardAwareScrollView style={styles.container}>
                            <View style={{ flex: 1 }}>
                                <ImageBackground
                                    source={Images.ProfileBackground}
                                    style={styles.outerContainer}
                                    imageStyle={styles.background}>
                                    <ScrollView
                                        showsVerticalScrollIndicator={false}
                                        style={styles.modalItemContainer}>
                                        <TouchableOpacity
                                            style={styles.back}
                                            onPress={() => { this.setState({ messageFormVisible: false }) }}>
                                            <HeadingText1 style={{ color: Colors.white }}> Cancel </HeadingText1>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={styles.save} onPress={() => { this.setState({ messageFormVisible: false }) }}>
                                            <HeadingText1 style={{ color: Colors.white }}> Save Changes </HeadingText1>
                                        </TouchableOpacity>
                                        <View style={styles.innerContainer}>
                                            <View style={styles.list}>
                                                <Image source={{ uri: this.props.navigation.state.params.image }}
                                                    style={styles.reviewImage}>
                                                </Image>
                                                <TextInput
                                                    style={styles.reviewTitleInput}
                                                    onChangeText={this.updateReviewTitle}
                                                    inputContainerStyle={{ backgroundColor: Colors.white }}
                                                    containerStyle={{ backgroundColor: '#ffffff' }}
                                                    inputStyle={{ fontSize: 13 }}
                                                    value={reviewTitleInput}
                                                    placeholder={"Give your review a title!"}
                                                    placeholderTextColor={Colors.placeholder} />
                                                <TextInput
                                                    multiline={true}
                                                    style={styles.reviewInput}
                                                    onChangeText={this.updateReview}
                                                    inputContainerStyle={{ backgroundColor: Colors.white }}
                                                    containerStyle={{ backgroundColor: '#ffffff' }}
                                                    inputStyle={{ fontSize: 13 }}
                                                    value={reviewInput}
                                                    placeholder={"Write about your experience!"}
                                                    placeholderTextColor={Colors.placeholder} />
                                                <View style={{ marginTop: 20, flexDirection: 'row' }}>
                                                    <HeadingText1 style={styles.headerLeft}>R e v i e w   b y</HeadingText1>
                                                    <HeadingText2 style={styles.headerRight}> {this.props.navigation.state.params.user} </HeadingText2>
                                                </View>
                                                <View style={{ marginTop: 15, flexDirection: 'row' }}>
                                                    <HeadingText1 style={styles.headerLeft}>S e r v i c e   b y</HeadingText1>
                                                    <HeadingText2 style={styles.headerRight}> {this.props.navigation.state.params.business} </HeadingText2>
                                                </View>
                                                <View style={{ marginTop: 15, flexDirection: 'row' }}>
                                                    <HeadingText1 style={styles.headerLeft}>D a t e</HeadingText1>
                                                    <HeadingText2 style={styles.headerRight}> {this.props.navigation.state.params.date} </HeadingText2>
                                                </View>
                                                <View style={{ marginTop: 15, flexDirection: 'row' }}>
                                                    <HeadingText1 style={styles.headerLeft}>R a t i n g</HeadingText1>
                                                    <View style={{ justifyContent: 'flex-end' }}>
                                                        <View style={styles.rating}>
                                                            <HeadingText2 style={{ color: Colors.placeholder, marginRight: 3 }}>
                                                                {this.props.navigation.state.params.rating}
                                                            </HeadingText2>
                                                            <Image style={styles.icon} source={require('../assets/icons/icons8-star-24-grey.png')} />
                                                        </View>
                                                    </View>
                                                </View>
                                            </View>
                                        </View>
                                    </ScrollView>
                                </ImageBackground>
                            </View>
                        </KeyboardAwareScrollView>
                    </Modal>
                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    reviewTitleInput: {
        flex: 1,
        width: width - 60,
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 10,
        paddingHorizontal: 10,
        borderColor: Colors.highlight,
        borderWidth: 1,
        marginBottom: 10,
    },
    reviewInput: {
        flex: 1,
        paddingHorizontal: 10,
        paddingTop: 10,
        paddingBottom: 10,
        textAlignVertical: 'top',
        width: width - 60,
        borderWidth: 1,
        borderColor: Colors.highlight,
        borderRadius: 10,
        zIndex: 1,
    },
    innerInfo: {
        flex: 1,
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 5
    },
    headerLeft: {
        color: Colors.primary,
        flex: 1,
        justifyContent: 'flex-start',
        zIndex: 1,
    },
    headerRight: {
        color: Colors.placeholder,
        flex: 1,
        textAlign: 'right',
        zIndex: 1,
    },
    edit: {
        flex: 1,
        flexDirection: "row",
        color: Colors.white,
        position: 'absolute',
        right: 10,
        marginTop: 10,
        zIndex: 1,
        justifyContent: "center",
        alignItems: "center",
        shadowColor: Colors.black,
        shadowOffset: { width: 0, height: 0 },
        shadowRadius: 10,
        shadowOpacity: 0.5,
    },
    list: {
        flex: 1,
        flexDirection: "column",
        justifyContent: 'center',
        alignItems: 'center',
        margin: 20,
    },
    innerContainer: {
        marginTop: 40,
        marginHorizontal: 10,
        marginBottom: 40,
        paddingBottom: 10,
        borderRadius: 10,
        zIndex: 5,
        backgroundColor: Colors.white,
        shadowColor: Colors.black,
        shadowOffset: { width: 0, height: 0 },
        shadowRadius: 10,
        shadowOpacity: 0.25,
        justifyContent: 'center',
        alignItems: 'center'
    },
    back: {
        position: "absolute",
        left: 12,
        top: 10,
        shadowColor: Colors.black,
        shadowOffset: { width: 0, height: 0 },
        shadowRadius: 10,
        shadowOpacity: 0.7,
    },
    save: {
        position: "absolute",
        right: 12,
        top: 10,
        shadowColor: Colors.black,
        shadowOffset: { width: 0, height: 0 },
        shadowRadius: 10,
        shadowOpacity: 0.7,
    },
    itemContainer: {
        flex: 1,
        marginBottom: 40,
    },
    modalItemContainer: {
        marginTop: 20,
        flex: 1,
    },
    background: {
        marginTop: -20,
        height: height / 2,
        width: width
    },
    outerContainer: {
        width: width,
        height: height,
        padding: 0,
        zIndex: 1
    },
    container: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0)',
    },
    review: {
        width: width - 70,
        flex: 1,
        flexDirection: 'column',
        marginVertical: 5,
    },
    reviewImage: {
        width: width - 55,
        height: width - 55,
        marginHorizontal: width / 60,
        marginBottom: 15,
    },
    icon: {
        width: 15,
        height: 15,
    },
    rating: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        color: Colors.placeholder,
        zIndex: 1,
    },
});
export default withNavigation(ReviewScreen);