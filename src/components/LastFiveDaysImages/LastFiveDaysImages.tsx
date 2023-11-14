import React, { FC } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { PostImage as PostImagesTypes } from "../../types";
import PostImage from "../PostImage";

const lastFiveDaysImages: FC <{postImages?: PostImagesTypes[]}> = ({postImages}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Last 5 Days</Text>
            <ScrollView style={styles.content}>
                {postImages?.map(postImage => (
                    <PostImage key={`post-image-${postImage.title}`} {...postImage}></PostImage>
                ))}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 8,
        borderRadius: 32,
        padding: 10,
    },
    title: {
        color: 'white',
        fontSize: 18,
        marginBottom: 18,
    },
    content: {
        
    },
});

export default lastFiveDaysImages;