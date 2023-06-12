import { ref, reactive } from 'vue'
import { defineStore } from 'pinia'
import { products } from '../contants/products'
console.log(products)
export const useWithlistStore = defineStore('wishlist', () => {
  const wishlist = reactive([...products.data.slice(0, 5)])

  function getAll(data) {
    return wishlist
  }

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

  return { wishlist, addWishlist, deleteWishlist, getWishlist, getAll }
})
