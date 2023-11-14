import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import Header from "../../components/Header";
import fetchApi from '../../utils/fetch';
import TodaysImage from "../../components/TodaysImage";
import { PostImage } from "../../types";
import { format, sub } from "date-fns";
import LastFiveDaysImages from "../../components/LastFiveDaysImages";

const Home = () => {
    const [todaysImage, setTodaysImage] = useState<PostImage>();
    const [lastFiveDaysImages, setLastFiveDaysImages] = useState<PostImage[]>([]);
    useEffect(() => {
        const loadTodaysImage = async () => {
            try{
                const todayImageResponse = await fetchApi();
                setTodaysImage(todayImageResponse);
            }catch(error){
                setTodaysImage({});
            }
        };
        
        const loadLast5DaysImages = async () => {
            try{
                const date = new Date();
                const todaysDate = format(date, 'yyyy-MM-dd');
                const fiveDaysAgoDate = format(sub(date, {days: 5}), 'yyyy-MM-dd');

                const lastFiveDaysImagesResponse = await fetchApi(`&start_date=${fiveDaysAgoDate}&end_date=${todaysDate}`);
                setLastFiveDaysImages(lastFiveDaysImagesResponse);
            }catch(error){
                console.log(error);
                setLastFiveDaysImages([]);
            }
        }

        loadTodaysImage().catch(null);
        loadLast5DaysImages().catch(null);
    }, []);

    return (
        <View style={styles.container}>
            <Header />
            <TodaysImage {...todaysImage}/>
            <LastFiveDaysImages postImages={lastFiveDaysImages}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
        backgroundColor: 'rgba(7, 26, 93, 255)',
    }
});

export default Home;