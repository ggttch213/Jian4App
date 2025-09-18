import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet, Modal, ScrollView, Button } from 'react-native';
import read1 from '../assets/image/read1.png';
import read2 from '../assets/image/read2.png';
import read3 from '../assets/image/read3.png';
import read from '../assets/image/READ.png';

const articles = [
  { id: '1', title: '10分鐘的臀腿二頭肌訓練 - Fitting Room TW', image: read1, content: '這是文章1的內容...' },
  { id: '2', title: '練出六塊肌最聰明的方法-Fitting Room TW', image: read2, content: '這是文章2的內容...' },
  { id: '3', title: '10個你必須知道的減脂技巧-shuaisoserious', image: read3, content: '這是文章3的內容...' }
  
];

export default function HomeScreen({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState(null);

  const openModal = (article) => {
    setSelectedArticle(article);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedArticle(null);
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Image source={read} style={styles.headerImage} />
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerText}>閱讀文章</Text>
        </View>
      </View>
      <FlatList
        data={articles}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.article} onPress={() => openModal(item)}>
            <Image source={item.image} style={styles.articleImage} />
            <Text style={styles.articleTitle}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
      

      {selectedArticle && (
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={closeModal}>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>{selectedArticle.title}</Text>
              <ScrollView style={styles.modalBody}>
                <Text>{selectedArticle.content}</Text>
              </ScrollView>
              <Button title="Close" onPress={closeModal} />
            </View>
          </View>
        </Modal>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f8d7da' },
  headerContainer: { position: 'relative', width: '100%', height: 200 },
  headerImage: { width: '100%', height: '100%' },
  headerTextContainer: {
    position: 'absolute',
    top: '50%',
    left: '40%',
    transform: [{ translateX: -50 }, { translateY: -50 }],

    padding: 10,
    borderRadius: 5,
  },
  headerText: { color: 'white', fontSize: 42, fontWeight: 'bold', textAlign: 'center' },
  article: { flexDirection: 'row', padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' },
  articleImage: { width: 50, height: 50, marginRight: 10 },
  articleTitle: { flex: 1, fontSize: 24 },
  addButton: {
    width: 60,
    height: 60,
    backgroundColor: '#00f',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 30,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // 半透明背景
  },
  modalContent: {
    width: '80%',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalBody: {
    marginBottom: 20,
  },
});
