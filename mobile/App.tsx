import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, SafeAreaView, Modal } from 'react-native';
import { AuthProvider, useAuth } from './src/context/AuthContext';
import { CartProvider, useCart } from './src/context/CartContext';
import { CADMobileIllustration } from './src/components/CADMobileIllustration';
import { ShoppingBag, User, X } from 'lucide-react-native';

const PRODUCTS = [
  { id: 1, name: 'ACID//SYS Technical Blazer', price: 250000, sku: 'ACID-1000', type: 'blz' },
  { id: 7, name: 'Oversized Poplin Shirt', price: 85000, sku: 'ACID-1006', type: 'sht' },
  { id: 13, name: 'Structured Scuba Hoodie', price: 140000, sku: 'ACID-1012', type: 'tee' },
  { id: 19, name: 'Wide-Leg Trousers', price: 160000, sku: 'ACID-1018', type: 'trs' },
];

const CATEGORIES = ['ALL', 'TAILORING', 'SHIRTING', 'TOPS', 'BOTTOMS', 'FOOTWEAR & CARRY'];

function Storefront() {
  const { user, login, logout } = useAuth();
  const { cartItems, cartCount, totalPrice, addToCart, removeFromCart, isSyncing } = useCart();
  const [cartOpen, setCartOpen] = useState(false);
  const [activeCat, setActiveCat] = useState('ALL');

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.logoText}>ACID//SYS READY-TO-WEAR</Text>
          <View style={styles.syncContainer}>
            <View style={[styles.pulse, isSyncing && styles.pulseActive]} />
            <Text style={styles.syncText}>{isSyncing ? 'SYNCING...' : 'LIVE SYNC'}</Text>
          </View>
        </View>
        <View style={styles.headerActions}>
          <TouchableOpacity onPress={user ? logout : login} style={styles.iconBtn}>
            <User color="#09090B" size={20} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setCartOpen(true)} style={styles.iconBtn}>
            <ShoppingBag color="#09090B" size={20} />
            {cartCount > 0 && (
              <View style={styles.badge}>
                <Text style={styles.badgeText}>{cartCount}</Text>
              </View>
            )}
          </TouchableOpacity>
        </View>
      </View>

      {/* Categories */}
      <View style={styles.categoriesWrapper}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.categories}>
          {CATEGORIES.map(c => (
            <TouchableOpacity key={c} onPress={() => setActiveCat(c)} style={[styles.pill, activeCat === c && styles.pillActive]}>
              <Text style={[styles.pillText, activeCat === c && styles.pillTextActive]}>{c}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Product Grid */}
      <ScrollView contentContainerStyle={styles.grid}>
        {PRODUCTS.map(p => (
          <View key={p.id} style={styles.card}>
            <CADMobileIllustration width="100%" height={160} type={p.type} identifier={p.sku} />
            <View style={styles.cardInfo}>
              <Text style={styles.cardTitle} numberOfLines={1}>{p.name}</Text>
              <Text style={styles.cardPrice}>₦{p.price.toLocaleString()}</Text>
              <TouchableOpacity style={styles.addBtn} onPress={() => addToCart(p.sku, 'M')}>
                <Text style={styles.addBtnText}>+ ADD</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>

      {/* Cart Modal */}
      <Modal visible={cartOpen} animationType="slide" presentationStyle="formSheet">
        <View style={styles.modalContainer}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>BAG MANIFEST</Text>
            <TouchableOpacity onPress={() => setCartOpen(false)}>
              <X color="#09090B" size={24} />
            </TouchableOpacity>
          </View>
          <ScrollView style={styles.cartList}>
            {cartItems.map((item, idx) => (
              <View key={item.id || idx} style={styles.cartItem}>
                <View>
                  <Text style={styles.cartItemTitle}>{item.product_name || item.product_sku}</Text>
                  <Text style={styles.cartItemSub}>SIZE: {item.size}  QTY: {item.quantity}</Text>
                </View>
                <TouchableOpacity onPress={() => removeFromCart(item.id)}>
                  <Text style={styles.removeText}>REMOVE</Text>
                </TouchableOpacity>
              </View>
            ))}
          </ScrollView>
          <View style={styles.cartFooter}>
            <View style={styles.totalRow}>
              <Text style={styles.totalLabel}>TOTAL YIELD:</Text>
              <Text style={styles.totalValue}>₦{totalPrice.toLocaleString()}</Text>
            </View>
            <TouchableOpacity style={styles.checkoutBtn}>
              <Text style={styles.checkoutBtnText}>INITIALIZE DISPATCH</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Storefront />
      </CartProvider>
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8F4E8' },
  header: { flexDirection: 'row', justifyContent: 'space-between', padding: 16, borderBottomWidth: 2, borderColor: '#09090B', paddingTop: 60 },
  logoText: { fontFamily: 'monospace', fontWeight: 'bold', fontSize: 16, color: '#09090B' },
  syncContainer: { flexDirection: 'row', alignItems: 'center', marginTop: 4 },
  pulse: { width: 8, height: 8, backgroundColor: '#333', borderRadius: 4, marginRight: 6 },
  pulseActive: { backgroundColor: '#D2E823' },
  syncText: { fontFamily: 'monospace', fontSize: 10, color: '#666' },
  headerActions: { flexDirection: 'row', gap: 12 },
  iconBtn: { padding: 4, position: 'relative' },
  badge: { position: 'absolute', top: -4, right: -4, backgroundColor: '#D2E823', width: 16, height: 16, borderRadius: 8, alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: '#09090B' },
  badgeText: { fontSize: 9, fontWeight: 'bold' },
  categoriesWrapper: { borderBottomWidth: 2, borderColor: '#09090B', backgroundColor: '#fff' },
  categories: { padding: 12, gap: 8 },
  pill: { paddingHorizontal: 16, paddingVertical: 8, borderWidth: 1, borderColor: '#09090B', borderRadius: 20 },
  pillActive: { backgroundColor: '#09090B' },
  pillText: { fontFamily: 'monospace', fontSize: 12, color: '#09090B' },
  pillTextActive: { color: '#F8F4E8' },
  grid: { flexDirection: 'row', flexWrap: 'wrap', padding: 8 },
  card: { width: '50%', padding: 8 },
  cardInfo: { paddingVertical: 8 },
  cardTitle: { fontFamily: 'monospace', fontSize: 11, fontWeight: 'bold', color: '#09090B', marginBottom: 2 },
  cardPrice: { fontFamily: 'monospace', fontSize: 11, color: '#666', marginBottom: 8 },
  addBtn: { backgroundColor: '#09090B', padding: 8, alignItems: 'center' },
  addBtnText: { color: '#D2E823', fontFamily: 'monospace', fontSize: 10, fontWeight: 'bold' },
  modalContainer: { flex: 1, backgroundColor: '#F8F4E8' },
  modalHeader: { flexDirection: 'row', justifyContent: 'space-between', padding: 20, borderBottomWidth: 2, borderColor: '#09090B' },
  modalTitle: { fontFamily: 'monospace', fontSize: 18, fontWeight: 'bold' },
  cartList: { flex: 1, padding: 20 },
  cartItem: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 15, borderBottomWidth: 1, borderColor: '#E5E5E5' },
  cartItemTitle: { fontFamily: 'monospace', fontSize: 12, fontWeight: 'bold' },
  cartItemSub: { fontFamily: 'monospace', fontSize: 10, color: '#666', marginTop: 4 },
  removeText: { fontFamily: 'monospace', fontSize: 10, color: 'red', textDecorationLine: 'underline' },
  cartFooter: { padding: 20, borderTopWidth: 2, borderColor: '#09090B', backgroundColor: '#fff' },
  totalRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 15 },
  totalLabel: { fontFamily: 'monospace', fontSize: 14, fontWeight: 'bold' },
  totalValue: { fontFamily: 'monospace', fontSize: 14, fontWeight: 'bold' },
  checkoutBtn: { backgroundColor: '#09090B', padding: 16, alignItems: 'center' },
  checkoutBtnText: { color: '#D2E823', fontFamily: 'monospace', fontSize: 14, fontWeight: 'bold' }
});
