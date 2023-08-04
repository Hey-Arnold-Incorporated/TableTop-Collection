import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import ButtonList from '../components/GameList/ButtonList';
import GamesList from '../components/GameList/GamesList.js';
import allDummyGames from '../components/GameList/dummy/allDummyGames';
import personalDummyGames from '../components/GameList/dummy/personalDummyGames';
import NavBar from '../components/NavBar/NavBar.js';
import {useDispatch, useSelector } from 'react-redux';

// testing Slider for Patrick
import SickSlider from '../components/Sliders/SickSlider';

export default function Home ({ navigation, route }) {

  // const collections = [ 'My Games', 'Recommendations', 'Liked', 'Wishlist', 'All' ];
  const collectionNames = useSelector(state => Object.keys(state.collections.collections));
  const collections = useSelector(state => state.collections.collections);

  const [ listType, setListType ] = useState(collectionNames[0]);
  const [gameDetails, setGameDetails] = useState({});
  const [ games, setGames ] = useState([]);

  let { user, handleLogout } = route.params;
  // console.log('route.params', route.params);
  // console.log('user in home page: ', user);
  console.log('collections in home', collections);

  // console.dir(allDummyGames);
  // console.dir(personalDummyGames);

  useEffect(()=> {
    async function setGameArray(collectionName) {
      for(let key in collections) {
        if (listType === collectionName){
          console.log('listType in useEffect loop', listType);
          console.log('collections[key] in useEffect loop', collections[key]);
          setGames(collections[key]);
        }
      }
    }
    setGameArray(listType);
  }, [listType]);

  return (

    <View style={{paddingBottom: '40px'}}>
      <Text>(Alex): Display Slider for Patrick</Text>
      <SickSlider />

      <Text>This is {user.email}'s HomePage</Text>
      <View style={ styles.gameListContent }>
        <ButtonList
          collections={ collectionNames }
          listType={ listType }
          setListType={ setListType }
        />
        <GamesList
          handlePress={() => {
            navigation.navigate('Game Details', {user: user})
          }}
          games={ games }
          listType={ listType }
        />
      </View>

      <NavBar navigation={navigation} user={user}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  gameListContent: {
    flex: 1, // takes 70% of available space
    marginTop: 10
  },
});