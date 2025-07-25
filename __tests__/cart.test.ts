import { useCartStore } from '@/store/cart'
import { act, renderHook } from '@testing-library/react'

// Mock product for testing
const mockProduct = {
  id: 1,
  title: 'Test Product',
  price: 19.99,
  description: 'A test product',
  category: 'test',
  image: 'https://example.com/image.jpg',
  rating: {
    rate: 4.5,
    count: 10
  }
}

describe('Cart Store', () => {
  beforeEach(() => {
    // Reset the store before each test
    const { result } = renderHook(() => useCartStore())
    act(() => {
      result.current.clearCart()
    })
  })

  it('should add item to cart', () => {
    const { result } = renderHook(() => useCartStore())

    act(() => {
      result.current.addItem(mockProduct)
    })

    expect(result.current.items).toHaveLength(1)
    expect(result.current.items[0]).toEqual({ ...mockProduct, quantity: 1 })
  })

  it('should increase quantity when adding existing item', () => {
    const { result } = renderHook(() => useCartStore())

    act(() => {
      result.current.addItem(mockProduct)
      result.current.addItem(mockProduct)
    })

    expect(result.current.items).toHaveLength(1)
    expect(result.current.items[0].quantity).toBe(2)
  })

  it('should remove item from cart', () => {
    const { result } = renderHook(() => useCartStore())

    act(() => {
      result.current.addItem(mockProduct)
      result.current.removeItem(mockProduct.id)
    })

    expect(result.current.items).toHaveLength(0)
  })

  it('should update item quantity', () => {
    const { result } = renderHook(() => useCartStore())

    act(() => {
      result.current.addItem(mockProduct)
      result.current.updateQuantity(mockProduct.id, 5)
    })

    expect(result.current.items[0].quantity).toBe(5)
  })

  it('should remove item when quantity is set to 0', () => {
    const { result } = renderHook(() => useCartStore())

    act(() => {
      result.current.addItem(mockProduct)
      result.current.updateQuantity(mockProduct.id, 0)
    })

    expect(result.current.items).toHaveLength(0)
  })

  it('should calculate total items correctly', () => {
    const { result } = renderHook(() => useCartStore())

    act(() => {
      result.current.addItem(mockProduct)
      result.current.addItem({ ...mockProduct, id: 2 })
      result.current.updateQuantity(1, 3)
    })

    expect(result.current.getTotalItems()).toBe(4) // 3 + 1
  })

  it('should calculate total price correctly', () => {
    const { result } = renderHook(() => useCartStore())

    act(() => {
      result.current.addItem(mockProduct) // 19.99 * 1
      result.current.addItem({ ...mockProduct, id: 2, price: 10.00 }) // 10.00 * 1
    })

    expect(result.current.getTotalPrice()).toBe(29.99)
  })

  it('should clear cart', () => {
    const { result } = renderHook(() => useCartStore())

    act(() => {
      result.current.addItem(mockProduct)
      result.current.clearCart()
    })

    expect(result.current.items).toHaveLength(0)
  })
})