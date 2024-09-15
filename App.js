// import { StatusBar } from 'expo-status-bar';
// import { MaterialCommunityIcons } from '@expo/vector-icons';
// import {
//   Button,
//   SafeAreaView,
//   StyleSheet,
//   Text,
//   View,
//   Image,
//   ScrollView,
// } from 'react-native';

// export default function App() {
//   return (
//     <SafeAreaView style={{ flex: 1 }}>
//       <ScrollView style={styles.container}>
//         <StatusBar backgroundColor="#e27f7f" />
//         <Text>Teste </Text>
//         <Image
//           source={require('./img/minhaFoto2.jpg')}
//           style={styles.imageFoto}
//         />
//         <Text style={styles.myName}>Tiago da Silva Couto</Text>
//         <Text style={styles.myPosition}>Desenvolvedor de Software</Text>

//         <Text style={styles.title}>Contato</Text>
//         <View style={styles.separator} />

//         <View style={styles.row}>
//           <MaterialCommunityIcons
//             name="email-alert-outline"
//             size={30}
//             color="#0077B5"
//           />
//           <Text>Tiago@gmail.com</Text>
//         </View>

//         <View style={styles.row}>
//           <MaterialCommunityIcons name="phone" size={30} color="#0077B5" />
//           <Text>4002-8922</Text>
//         </View>

//         <View style={styles.row}>
//           <MaterialCommunityIcons name="linkedin" size={30} color="#0077B5" />
//           <Text>linkedin@link</Text>
//         </View>

//         <Text style={[styles.title, { marginTop: 10 }]}> Resumo</Text>
//         <View style={styles.separator} />
//         <Text>
//           Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat,
//           ullam perspiciatis incidunt blanditiis eum provident repellat illum,
//           eveniet commodi nesciunt quo doloribus. Repellat voluptatum atque aut
//           adipisci soluta vel ipsum.
//         </Text>
//         <Text style={[styles.title, { marginTop: 10 }]}> Experiencia</Text>
//         <View style={styles.separator} />
//         <Text style={styles.title}> Devin House</Text>
//         <Text>Jul 2024 - Presente</Text>
//         <Text style={{ marginTop: 10 }}>
//           {' '}
//           Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat,
//           ullam perspiciatis incidunt blanditiis eum provident repellat illum,
//           eveniet commodi nesciunt quo doloribus. Repellat voluptatum atque aut
//           adipisci soluta vel ipsum.
//         </Text>
//         <Text style={[styles.title, { marginTop: 10 }]}> Habilidade</Text>
//         <View style={styles.separator} />
//         <View style={styles.list} horizontal={false}>
//           <View style={styles.badge}>
//             <Text>Java</Text>
//           </View>
//           <View style={styles.badge}>
//             <Text>Python</Text>
//           </View>
//           <View style={styles.badge}>
//             <Text>Javascript</Text>
//           </View>
//           <View style={styles.badge}>
//             <Text>VBA</Text>
//           </View>
//           <View style={styles.badge}>
//             <Text>Node.js</Text>
//           </View>
//           <View style={styles.badge}>
//             <Text>Node.js</Text>
//           </View>
//           <View style={styles.badge}>
//             <Text>Node.js</Text>
//           </View>
//           <View style={styles.badge}>
//             <Text>Node.js</Text>
//           </View>
//           <View style={styles.badge}>
//             <Text>Node.js</Text>
//           </View>
//           <View style={styles.badge}>
//             <Text>Node.js</Text>
//           </View>
//           <View style={styles.badge}>
//             <Text>Node.js</Text>
//           </View>
//           <View style={styles.badge}>
//             <Text>Node.js</Text>
//           </View>
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   imageFoto: {
//     width: 100,
//     height: 100,
//     borderRadius: 50,
//     alignSelf: 'center',
//     marginTop: 50,
//   },
//   container: {
//     padding: 20,
//     flex: 1,
//   },

//   myName: {
//     color: '#0077B5',
//     fontSize: 24,
//     textAlign: 'center',
//   },
//   myPosition: {
//     color: '#CCC',
//     fontSize: 20,
//     textAlign: 'center',
//     marginBottom: 20,
//   },
//   title: {
//     color: '#0077B5',
//     fontSize: 18,
//   },
//   separator: {
//     backgroundColor: '#0077B5',
//     width: '100%',
//     height: 1,
//     marginVertical: 5,
//   },
//   row: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: 10,
//   },
//   list: {
//     flexDirection: 'row',
//     gap: 10,
//     flexWrap: 'wrap',
//     marginBottom: 40,
//   },
//   badge: {
//     backgroundColor: '#0077b5',
//     padding: 5,
//     borderRadius: 5,
//     opacity: 0.7,
//   },
// });

// import {
//   Text,
//   View,
//   SafeAreaView,
//   StyleSheet,
//   Image,
//   StatusBar,
//   TouchableOpacity,
//   Vibration,
//   ScrollView,
// } from 'react-native';
// import { MaterialCommunityIcons } from '@expo/vector-icons';

// import { posts } from './posts';

// export default function App() {
//   return (
//     <SafeAreaView style={styles.safe}>
//       <StatusBar backgroundColor="#F56040" />

//       <View style={styles.header}>
//         <Image
//           style={styles.logo}
//           source={require('./assets/instagram.png')}
//           // source={{ uri: 'https://i.redd.it/srbsixa0r7081.jpg' }}
//         />
//         <MaterialCommunityIcons name="chat-outline" size={30} color="#CCC" />
//       </View>

//       <ScrollView>
//         {posts.map(post => (
//           <View key={post.id}>
//             <View style={styles.headerPost}>
//               <Text>{post.user}</Text>
//               <MaterialCommunityIcons
//                 name="dots-horizontal"
//                 size={30}
//                 color="#000"
//               />
//             </View>

//             <Image style={styles.imagePost} source={{ uri: post.image }} />

//             <View style={styles.footerPost}>
//               <TouchableOpacity onPress={() => Vibration.vibrate(500)}>
//                 <MaterialCommunityIcons
//                   name="heart-outline"
//                   size={30}
//                   color="#CCC"
//                 />
//               </TouchableOpacity>
//               <TouchableOpacity>
//                 <MaterialCommunityIcons
//                   name="chat-outline"
//                   size={30}
//                   color="#CCC"
//                 />
//               </TouchableOpacity>
//               <TouchableOpacity>
//                 <MaterialCommunityIcons
//                   name="share-outline"
//                   size={30}
//                   color="#CCC"
//                 />
//               </TouchableOpacity>
//             </View>

//             <Text style={styles.likeCount}> {post.likes} likes</Text>
//             <Text style={styles.comment}>{post.caption}</Text>
//           </View>
//         ))}
//       </ScrollView>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   safe: {
//     flex: 1,
//     backgroundColor: '#FFF',
//   },
//   logo: {
//     width: 40,
//     height: 40,
//   },
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     padding: 10,
//     alignItems: 'center',
//     borderBottomColor: '#CCC',
//     borderBottomWidth: 1,
//   },
//   headerPost: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     padding: 5,
//     alignItems: 'center',
//   },
//   imagePost: {
//     width: '100%',
//     height: 300,
//   },
//   footerPost: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     padding: 5,
//     alignItems: 'center',
//   },
//   likeCount: {
//     fontWeight: 'bold',
//     marginLeft: 5,
//   },
//   comment: {
//     textAlign: 'justify',
//     marginLeft: 5,
//   },
// });

import {
  View,
  SafeAreaView,
  StyleSheet,
  Image,
  StatusBar,
  ScrollView,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { posts } from './posts';

import { Post } from './Post';

export default function App() {
  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar backgroundColor="#F56040" />
      <View style={styles.header}>
        <Image
          style={styles.logo}
          // source={require('./assets/instagram.png')}
          source={{ uri: 'https://i.redd.it/srbsixa0r7081.jpg' }}
        />
        <MaterialCommunityIcons name="chat-outline" size={30} color="#CCC" />
      </View>

      <ScrollView>
        {posts.map(post => (
          <Post key={post.id} post={post}></Post>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  logo: {
    width: 40,
    height: 40,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    alignItems: 'center',
    borderBottomColor: '#CCC',
    borderBottomWidth: 1,
  },
});
