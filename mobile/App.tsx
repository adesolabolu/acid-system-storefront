import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Platform, View } from 'react-native';
import { WebView } from 'react-native-webview';
import { API_BASE_URL } from './src/lib/api';

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="dark" />
      <View style={styles.container}>
        <WebView 
          source={{ uri: API_BASE_URL }} 
          style={styles.webview}
          bounces={false}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          sharedCookiesEnabled={true}
          thirdPartyCookiesEnabled={true}
          domStorageEnabled={true}
          javaScriptEnabled={true}
          mixedContentMode="always"
          allowFileAccess={true}
          applicationNameForUserAgent="AcidSysMobileApp"
          injectedJavaScript={`
            document.documentElement.classList.add('is-native-app');
            window.isNativeApp = true;
            true;
          `}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F8F4E8', // Matches the Next.js background to avoid white flashes
  },
  container: {
    flex: 1,
    // Add margin top for Android to avoid overlapping the status bar, iOS handles it via SafeAreaView
    marginTop: Platform.OS === 'android' ? 24 : 0, 
  },
  webview: {
    flex: 1,
    backgroundColor: 'transparent',
  }
});
