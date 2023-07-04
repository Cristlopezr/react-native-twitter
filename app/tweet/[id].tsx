import { Text } from 'react-native';
import { Tweet } from '../../components/Tweet';
import tweets from '../../assets/data/tweets';
import { useSearchParams } from 'expo-router';

function tweetScreen() {
    const { id } = useSearchParams();

    const tweet = tweets.find(tweet => tweet.id === id);

    if (!tweet) return <Text>Tweet with {id} not found!</Text>;

    return <Tweet tweet={tweet} />;
}

export default tweetScreen;
