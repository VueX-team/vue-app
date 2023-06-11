import { ref, reactive } from 'vue'
import { defineStore } from 'pinia'

export const useWithlistStore = defineStore('wishlist', () => {
  const wishlist = reactive([
    {
      id: 1,
      quantity: 0,
      title: 'iPhone 9',
      description: 'An apple mobile which is nothing like apple',
      price: 549,
      discountPercentage: 12.96,
      rating: 4.69,
      stock: 94,
      brand: 'Apple',
      category: 'smartphones',
      thumbnail: 'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
      images: [
        'https://i.dummyjson.com/data/products/1/1.jpg',
        'https://i.dummyjson.com/data/products/1/2.jpg',
        'https://i.dummyjson.com/data/products/1/3.jpg',
        'https://i.dummyjson.com/data/products/1/4.jpg',
        'https://i.dummyjson.com/data/products/1/thumbnail.jpg'
      ]
    }
  ])

  function addWishlist(data) {
    wishlist.push(data)
  }

  function deleteWishlist(id) {
    for (let i in wishlist) {
      if (wishlist[i].id == id) {
        wishlist.splice(i, 1)
      }
    }
  }

  function getWishlist(id) {
    for (let i in wishlist) {
      if (wishlist[i].id == id) {
        return wishlist[i]
      }
    }
  }

  return { wishlist, addWishlist, deleteWishlist, getWishlist }
})
