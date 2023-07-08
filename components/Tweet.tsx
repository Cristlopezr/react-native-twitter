import { View, Image, Text, StyleSheet, Pressable } from 'react-native';
import { TweetType } from '../types';
import { Entypo } from '@expo/vector-icons';
import { IconButton } from './IconButton';
import { Link } from 'expo-router';

type TweetProps = {
    tweet: TweetType;
};

export const Tweet = ({ tweet }: TweetProps) => {
    const { user, content, image } = tweet;

    return (
        <Link href={`/tweet/${tweet.id}`} asChild>
            <Pressable style={styles.container}>
                <Image source={{ uri: user?.image }} style={styles.userImage} />
                <View style={styles.mainContainer}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={styles.name}>{user.name}</Text>
                        <Text style={styles.username}>{user.username} · 2h</Text>
                        <Entypo
                            name='dots-three-horizontal'
                            size={16}
                            color='grey'
                            style={{ marginLeft: 'auto' }}
                        />
                    </View>

                    <Text style={styles.content}>{content}</Text>

                    {image && <Image source={{ uri: image }} style={styles.image} />}
                    <View style={styles.footer}>
                        <IconButton icon='comment' text={tweet.numberOfComments} />
                        <IconButton icon='retweet' text={tweet.numberOfRetweets} />
                        <IconButton icon='heart' text={tweet.numberOfLikes} />
                        <IconButton icon='chart' text={tweet.impressions} />
                        <IconButton icon='share-apple' />
                    </View>
                </View>
            </Pressable>
        </Link>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 10,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: 'lightgrey',
        backgroundColor: 'white',
    },
    userImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    mainContainer: {
        marginLeft: 10,
        flex: 1,
    },
    name: {
        fontWeight: '600',
    },
    username: {
        marginLeft: 5,
        color: 'grey',
    },
    content: {
        lineHeight: 20,
        marginTop: 5,
    },
    image: {
        width: '100%',
        aspectRatio: 16 / 9,
        marginVertical: 10,
        borderRadius: 15,
    },
    footer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
        justifyContent: 'space-between',
    },
});
