import React, {useState, useEffect} from 'react';
import styles from './styles'
import {Text, View, CheckBox, ScrollView, ImageBackground, Image } from 'react-native';
export default function UserSettings ({navigation, route}) {
    const [image, setImage] = useState();
    const [name, setName] = useState(' Bob Peterson ');
    const [username, setUsername] = useState(' legend27 ');
    const [age, setAge] = useState('18');
    const [playStyle, setPlayStyle] = useState('1vs1')
    const [favorite, setFavorite] = useState('Civilization');
    const [categories, setCategories] = useState([
        'Fantasy',
        'Action',
        'Strategy',
        'War',
        'Quest',
        'Mystery',
        'Dice',
        'Numbers',
        'RPG',
        'Sci-Fi',
    ]);
    const [leftCol, setLeftCol] = useState([])
    const [rightCol, setRightCol] = useState([])
    function labelCategories() {
        // console.log('categories: ', categories);
        categories.forEach((category, index) => {
          if (index % 2 === 0) {
            setLeftCol((prevLeftCol) => [...prevLeftCol, category]);
            // console.log('current leftCol: ', leftCol);
            // console.log('setLeft: ' + index, leftCol);
          } else {
            setRightCol((prevRightCol) => [...prevRightCol, category]);
            // console.log('current leftCol: ', rightCol);
            // console.log('setRight: ' + index, rightCol);
          }
        });
    }
    useEffect(() => {
        labelCategories()
    }, [])
    const HandleLogOut = (e) => {
    }
    const UpdateUsername = (e) => {
    }
    const UpdateName = (e) => {
    }
    const UpdateAge = (e) => {
    }
    const UpdateStyle = (e) => {
    }
    const UpdateFavorite = (e) => {
    }
    const UpdateCategories = (e) => {
    }
    return (
        <ScrollView contentContainerStyle = {styles.MainContainer}>
            <ImageBackground
            source={require('../../assets/Asset-Background-Wood.png')}
            style={styles.wood} >
            <View style={styles.InnerContainer}>
                <View style = {styles.circleContainer}>
                <Image
                            source={require('../../assets/profileicon.png')}
                            style={styles.profileImage}
                        />
                </View>
                <View style = {styles.NameContainer}>
                    <Text style = {styles.text}>
                        {name}
                    </Text>
                </View>
                <View style = {styles.NameContainer}>
                    <Text style = {styles.text}>
                        {username}
                    </Text>
                </View>
                <View style = {styles.InputContainer}>
                    <Text style = {styles.text}>
                        Age:
                    </Text>
                    <Text style = {styles.text}>
                        {age}
                    </Text>
                </View>
                <View style = {styles.InputContainer}>
                    <Text style = {styles.text}>
                        Preferred Play Style:
                    </Text>
                    <Text style = {styles.text}>
                        {playStyle}
                    </Text>
                </View>
                <View style = {styles.InputContainer}>
                    <Text style = {styles.text}>
                        Mythical Creature:
                    </Text>
                    <Text style = {styles.text}>
                        Fairy
                    </Text>
                </View>
                <View style = {styles.InputContainer}>
                    <Text style = {styles.text}>
                        Favorite Game:
                    </Text>
                    <Text style = {styles.text}>
                        {favorite}
                    </Text>
                </View>
                <View style={styles.MainCategoryContainer}>
                    <View style={styles.CategoryColumn}>
                        {leftCol.map((category) => (
                        <View key={category} style={styles.eachCategory}>
                            <CheckBox value={true} />
                            <Text>{category}</Text>
                        </View>
                        ))}
                    </View>
                    <View style={styles.CategoryColumn}>
                        {rightCol.map((category) => (
                            <View key={category} style={styles.eachCategory}>
                                <CheckBox value={true} />
                                <Text>{category}</Text>
                            </View>
                        ))}
                    </View>
                </View>
            </View>
            </ImageBackground>
        </ScrollView>
    )
}