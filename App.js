import React from "react";
import { View, Text, Image, Button,SafeAreaView, ScrollView } from "react-native";
import add from "./img/add.png";
import menu from "./img/menu.png";
import fotoprofile from "./img/profile.jpeg";
import home from "./img/home.png";
import search from "./img/search.png";
import reel from "./img/reel.png";
import shop from "./img/shop.png";
import feed from "./img/feed.png";
import tag from "./img/tag.png";
import gambar1 from "./img/gambar1.jpeg";
import gambar2 from "./img/gambar2.jpeg";
import gambar3 from "./img/gambar3.jpeg";


const Angka = (props) => {
  return(
    <View style={{alignItems:"center"}}>
      <Text style={{fontSize:26,color: 'black',fontWeight: 'bold',marginTop:24}}>{props.jumlahAngka}</Text>
      <Text style={{fontSize:12,color: 'black',fontWeight: 'bold',marginTop:-23}}>{props.labelDetail}</Text>
    </View>
  );
}

const Textbio = (props) => {
  return(
      <View>
        <Text>{props.textBio}</Text>
      </View>
  );
}

const App = () => {
  return (
    <View style={{flex:1}}>
      <View style={{  flex: 1,flexDirection: "row",}}>
        <Text style={{  color: 'black',padding:12 ,fontWeight: 'bold' ,fontSize: 22 ,flex: 4 }}>
          lindasuvirahmawati
        </Text>
        <View style={{  flex: 1 }}>
          <Image style={{ height:32, width: 32, marginLeft:12, marginTop:12}} source = {add}/>
        </View>
        <View style={{  flex: 1 }}>
          <Image style={{ height:22, width: 22, marginLeft:17, marginTop:17}} source = {menu}/>
        </View>
      </View >
      <View style={{flex: 2, flexDirection: "row" }}>
        <View style={{ flex: 2 }}>
          <Image style={{ height:94, width: 94, borderRadius:100,marginLeft:22, marginTop:8,borderColor: "black",borderWidth: 1,}} source = {fotoprofile}/>
        </View>
        <View style={{ flex: 1 }}>
          <Angka jumlahAngka="100"/>
          <Angka labelDetail="Posts"/>
        </View> 
        <View style={{ flex: 1 }} >
          <Angka jumlahAngka="1.010"/>
          <Angka labelDetail="Followers"/>
        </View>
        <View style={{ flex: 1 }} >
          <Angka jumlahAngka="1706"/>
          <Angka labelDetail="Following"/>
        </View>
      </View>
      <View style={{ backgroundColor: "white", flex: 2 }}>
        <Text style={{ color: 'black', marginLeft:20,marginTop:8 ,fontWeight: 'bold',fontSize: 16 , flex:1 }}>
            Linda Suvi Rahmawati
        </Text>
        <Text style={{marginLeft:20,color: 'blue'}}>👨‍👩‍👦‍👦@andri_hcwmalang</Text>
        <Text style={{marginLeft:20,color: 'blue'}}>👩@anindhitaazzahraprasetyo</Text>
        <Text style={{marginLeft:20,color: 'blue'}}>👨@abqaryalzhafranprasetyo</Text>
        <Text style={{marginLeft:20,color: 'blue'}}>🏢@kampus_stimata</Text>
      </View>
      <View style={{  backgroundColor: "white", flex: 1, flexDirection: "row" }}>
        <View style={{  flex: 4 }}>
          <View style = {{marginTop:10, marginLeft:14,width:260}}>
            <Button title="Edit Profile" >
            </Button>
          </View>
        </View>
        <View style={{ flex: 1 }}>
          <View style = {{marginTop:10, marginLeft:14,width:40}}>
            <Button title="v" >
            </Button>
          </View>
        </View>
      </View>
      <View style={{ flex: 2, flexDirection:"row" }}>
        <View style={{marginTop:11, marginLeft:16}}>
          <Image style={{ height:60, width: 60, borderRadius:100, marginTop:8,borderColor: "black",borderWidth: 1,}} source = {fotoprofile}/>
          <Text style={{textAlign:"center", fontSize: 12,color:"black"}}>celebrate😘</Text>
        </View>
        <View style={{marginTop:11, marginLeft:16, }}>
          <Image style={{ marginLeft:10, height:60, width: 60, borderRadius:100, marginTop:8,borderColor: "black",borderWidth: 1,}} source = {fotoprofile}/>
          <Text style={{textAlign:"center", fontSize: 12,color:"black"}}>gadis and bujan</Text>
        </View>
        <View style={{marginTop:11, marginLeft:16}}>
          <Image style={{height:60, width: 60, borderRadius:100, marginTop:8,borderColor: "black",borderWidth: 1,}} source = {fotoprofile}/>
          <Text style={{textAlign:"center", fontSize: 12,color:"black"}}>haru biru 😍</Text>
        </View>
        <View style={{marginTop:11, marginLeft:16}}>
          <Image style={{ height:60, width: 60, borderRadius:100, marginTop:8,borderColor: "black",borderWidth: 1,}} source = {fotoprofile}/>
          <Text style={{textAlign:"center", fontSize: 12,color:"black"}}>gadisku😍</Text>
        </View>
      </View>
      <View style={{ backgroundColor: "white", flex: 1, flexDirection: "row"}}> 
        <View style={{  alignItems:"center",flex: 1 }}>
          <Image style={{ height:50, width: 50, marginTop:4}} source = {feed}/>
        </View>
        <View style={{  alignItems:"center",flex: 1 }}>
          <Image style={{ height:34, width: 34, marginTop:11}} source = {reel}/>
        </View>
        <View style={{  alignItems:"center",flex: 1 }}>
          <Image style={{ height:38, width: 38, marginTop:8}} source = {tag}/>
        </View>
      </View>
      <View style={{ backgroundColor: "red", flex: 2,flexDirection: "row" }}>
        <View style={{ backgroundColor: "white", flex: 1 }}>
        <Image style={{ width: '100%',height: undefined,aspectRatio: 1,}} source = {gambar1}/>
        </View>
        <View style={{ backgroundColor: "white", flex: 1 }}>
        <Image style={{ width: '100%',height: undefined,aspectRatio: 1,}} source = {gambar2}/>
        </View>
        <View style={{ backgroundColor: "white", flex: 1 }}>
        <Image style={{ width: '100%',height: undefined,aspectRatio: 1,}} source = {gambar3}/>
        </View>
      </View>
      <View style={{ backgroundColor: "white", flex: 1, flexDirection: "row" }}>
        <View style={{ flex: 1 }}>
          <Image style={{ height:34, width: 34, marginLeft:18, marginTop:10}} source = {home}/>
        </View>
        <View style={{  flex: 1 }}>
          <Image style={{ height:30, width: 30, marginLeft:20, marginTop:13}} source = {search}/>
        </View>
        <View style={{  flex: 1 }}>
          <Image style={{ height:30, width: 30, marginLeft:20, marginTop:13}} source = {reel}/>
        </View>
        <View style={{ flex: 1 }}>
          <Image style={{ height:30, width: 30, marginLeft:20, marginTop:13}} source = {shop}/>
        </View>
        <View style={{ flex: 1 }}>
          <Image style={{ height:30, width: 30, marginLeft:20, marginTop:13, borderRadius:100, borderColor: "black",borderWidth: 1,}} source = {fotoprofile}/>
        </View>
      </View>
    </View>
  );
};

export default App;