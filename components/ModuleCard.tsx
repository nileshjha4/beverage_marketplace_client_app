import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useGlobalContext } from "@/context/GlobalProvider"; 
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { AddToCart } from '@/logic/add-to-cart';
import { RemoveFromCart } from '@/logic/remove-from-cart';
import { Alert } from 'react-native';
import { router } from 'expo-router';

const ModuleCard = ({ id, title, flavour, imageUrl, price, minqty, qty, generatingReport }) => {
  const { token, user, reports, setReports, applied, setApplied } = useGlobalContext();
  const [addedQty, setAddedQty] = useState(0);
  const queryClient = useQueryClient()
  
  const { mutateAsync: addToCart } = useMutation({
    mutationFn: (quantity) => AddToCart(token, id, quantity, price),
    onSuccess: (res) => {
        if(res?.success){
          setAddedQty(res?.qty)
          queryClient.invalidateQueries(["cart"]);
          return
        }
        Alert.alert(res?.error)
    },
  });

  const { mutateAsync: removeFromCart } = useMutation({
    mutationFn: (quantity) => RemoveFromCart(token, id, quantity, price),
    onSuccess: (res) => {
        if(res?.success){
          setAddedQty(res?.qty)
          queryClient.invalidateQueries(["cart"]);
          return
        }
        Alert.alert(res?.error)
    },
  });

  const handleAdd = async() => {
    if (addedQty === 0) {
      await addToCart(Number(minqty))
    } else {
      const newQty = addedQty + 1;
      await addToCart(newQty);
    }
  };

  const handleSubtract = async() => {
    if (addedQty == minqty) {
      await removeFromCart(0);
    } else {
      const newQty = addedQty - 1;
      await removeFromCart(newQty)
    }
  };

  return (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        <Image 
          source={{ uri: imageUrl }} 
          style={styles.image}
          resizeMode="cover"
        />
        <View style={styles.priceTag}>
          <Text style={styles.priceText}>Rs {price}</Text>
        </View>
      </View>
      
      <View style={styles.contentContainer}>
        {/* Title and Flavor */}
        <View style={styles.textContainer}>
  <Text numberOfLines={1} style={styles.title}>
    {title || 'General'}
  </Text>
  <Text numberOfLines={1} style={styles.flavour}>
    {flavour}
  </Text>
  <View style={styles.infoRow}>
    <View style={styles.minQtyBadge}>
      <Text style={styles.minQtyText}>Min. order: {minqty}</Text>
    </View>
    {addedQty > 0 && (
      <View style={styles.totalAmount}>
        <Text style={styles.totalAmountText}>
          Total: Rs {(addedQty * price).toFixed(2)}
        </Text>
      </View>
    )}
  </View>
</View>

        {addedQty === 0 ? (
          <TouchableOpacity
            style={styles.addButton}
            onPress={handleAdd}
          >
            <Text style={styles.addButtonText}>Add to Cart</Text>
          </TouchableOpacity>
        ) : (
          <View style={styles.quantityContainer}>
            <View style={styles.quantityControls}>
              <TouchableOpacity
                style={styles.quantityButton}
                onPress={handleSubtract}
              >
                <Text style={styles.quantityButtonText}>-</Text>
              </TouchableOpacity>
              
              <View style={styles.quantityDisplay}>
                <Text style={styles.quantityText}>{addedQty}</Text>
                <Text style={styles.quantityLabel}>quantity</Text>
              </View>
              
              <TouchableOpacity
                style={[styles.quantityButton, styles.quantityButtonAdd]}
                onPress={handleAdd}
              >
                <Text style={styles.quantityButtonTextAdd}>+</Text>
              </TouchableOpacity>
            </View>
            
            <Text style={styles.minQuantityText}>
              Min. quantity: {minqty}
            </Text>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 280,
    backgroundColor: 'white',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginRight: 16,
    marginBottom: 16,
  },
  imageContainer: {
    position: 'relative',
  },
  image: {
    width: '100%',
    height: 180,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  priceTag: {
    position: 'absolute',
    top: 8,
    right: 8,
    backgroundColor: 'white',
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  priceText: {
    color: '#2563eb',
    fontWeight: '600',
  },
  contentContainer: {
    padding: 16,
  },
  textContainer: {
    marginBottom: 16,
    gap: 4,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 4,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: 4,
  },
  flavour: {
    fontSize: 14,
    color: '#6b7280',
  },
  addButton: {
    backgroundColor: '#2563eb',
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  addButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },
  quantityContainer: {
    gap: 12,
  },
  quantityControls: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f9fafb',
    padding: 8,
    borderRadius: 8,
  },
  quantityButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#2563eb',
    alignItems: 'center',
    justifyContent: 'center',
  },
  quantityButtonAdd: {
    backgroundColor: '#2563eb',
    borderWidth: 0,
  },
  quantityButtonText: {
    color: '#2563eb',
    fontSize: 18,
    fontWeight: '600',
  },
  quantityButtonTextAdd: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
  quantityDisplay: {
    alignItems: 'center',
  },
  quantityText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#1f2937',
  },
  quantityLabel: {
    fontSize: 12,
    color: '#6b7280',
  },
  minQuantityText: {
    textAlign: 'center',
    fontSize: 14,
    color: '#6b7280',
  },
  minQtyBadge: {
    backgroundColor: '#f3f4f6',
  paddingHorizontal: 8,
  paddingVertical: 4,
  borderRadius: 4,
  },
  minQtyText: {
    fontSize: 12,
    color: '#6b7280',
    fontWeight: '500',
  },
  totalAmount: {
    backgroundColor: '#dbeafe',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  totalAmountText: {
    fontSize: 12,
    color: '#2563eb',
    fontWeight: '600',
  },
});

export default ModuleCard;