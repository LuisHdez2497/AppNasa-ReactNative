import React, { FC } from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';
import { PostImage, PostImageNavigationProps } from '../../types';
import { useNavigation } from '@react-navigation/native';

const TodaysImage: FC<PostImage> = ({date, title, url, explanation}) => {
    const { navigate } = useNavigation<PostImageNavigationProps>();
    const handleViewPress = () => {
        navigate('Detail', {title, date, url, explanation});
    };

    return (
        <View style={styles.container}>
            <View>
                <Image source={{uri: url}} style={styles.image}/>
            </View>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.date}>{date}</Text>
            <View style={styles.buttonContainer}>
                <Button title='View' onPress={handleViewPress}/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#2c449d',
        marginVertical: 15,
        borderRadius: 32,
        padding: 15,
    },
    image: {
        width: '100%',
        borderRadius: 32,
        height: 190,
        borderWidth: 2,
        borderColor: 'white'
    },
    title: {
        color: 'white',
        fontSize: 22,
        marginVertical: 12,
        fontWeight: 'bold'
    },
    date: {
        color: 'white',
        fontSize: 18,
    },
    buttonContainer: {
        alignItems: 'flex-end',
    },
});

export default TodaysImage;