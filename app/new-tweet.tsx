import { useState } from 'react';
import { Link, useRouter } from 'expo-router';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TextInput,
    Pressable,
    SafeAreaView,
    StatusBar,
    Platform,
} from 'react-native';

const user = {
    id: 'u1',
    username: 'VadimNotJustDev',
    name: 'Vadim',
    image: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.png',
};

function NewTweet() {
    const [text, setText] = useState('');
    const router = useRouter();

    const onTweetPress = () => {
        console.warn('Posting Tweet', text);

        if (text === '') return;

        setText('');
        router.back();
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <View style={styles.buttonContainer}>
                    <Link href='../' style={{ fontSize: 18 }}>
                        Cancel
                    </Link>
                    <Pressable style={styles.button} onPress={onTweetPress}>
                        <Text style={styles.buttonText}>Tweet</Text>
                    </Pressable>
                </View>
                <View style={styles.inputContainer}>
                    <Image source={{ uri: user.image }} style={styles.image} />
                    <TextInput
                        value={text}
                        onChangeText={setText}
                        style={{ flex: 1 }}
                        placeholder="What's happening?"
                        multiline
                    />
                </View>
            </View>
        </SafeAreaView>
    );
}

export default NewTweet;

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        backgroundColor: 'white',
    },
    container: {
        padding: 10,
        flex: 1,
    },
    buttonContainer: {
        flexDirection: 'row',
        marginTop: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#1C9BF0',
        padding: 10,
        paddingHorizontal: 20,
        borderRadius: 50,
    },
    buttonText: {
        color: 'white',
        fontWeight: '600',
        fontSize: 16,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    image: {
        width: 50,
        aspectRatio: 1,
        borderRadius: 50,
        marginRight: 10,
    },
});
