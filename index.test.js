describe('clearCart()', () => {
    it('should set the transaction total to zero', () => {
      addToCart('Apple', 0.99);
      clearCart();
      const transactionTotalElement = document.querySelector('.total-amount');
      expect(transactionTotalElement.textContent).toBe('0.00');
    });
  });
  