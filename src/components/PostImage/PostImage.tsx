import React, { FC } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { PostImage as PostImagesTypes, PostImageNavigationProps } from "../../types";
import { useNavigation } from '@react-navigation/native';

const PostImage: FC<PostImagesTypes> = ({ title, date, url, explanation }) => {
    const { navigate } = useNavigation<PostImageNavigationProps>();
    const handleViewPress = () => {
        navigate('Detail', {title, date, url, explanation});
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.date}>{date}</Text>
            <View style={styles.buttonContainer}>
                <Button title="View" onPress={handleViewPress}/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#2c449d',
        borderRadius: 20,
        marginBottom: 12,
        padding: 20
    },
    title: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 22,
        marginBottom: 12
    },
    date: {
        color: 'white',
        fontSize: 18
    },
    buttonContainer: {
        alignItems: 'flex-end'
    },
});

export default PostImage;