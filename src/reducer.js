export const initialState = {
  cart: [],
};

export const getAmountItems = (cart) => {
  return cart.reduce((sum, item) => {
    return sum + item.amount;
  }, 0);
};

export const getTotalCart = (cart) => {
  return cart.reduce((sum, item) => {
    if (item.isBuying) {
      return sum + item.price * item.amount;
    }
    return sum;
  }, 0);
};

export const toPrice = (price) => {
  const str = price.toString();
  let count = 0;
  let newStr = '';
  for (let i = str.length - 1; i >= 0; i--) {
    count++;
    if (count > 3) {
      newStr = str.charAt(i) + '.' + newStr;
      count = 1;
    } else {
      newStr = str.charAt(i) + newStr;
    }
  }
  return newStr;
};

const reducer = (state, action) => {
  if (action.type === 'ADD_TO_CART') {
    const index = state.cart.findIndex((item) => {
      return item.id === action.item.id;
    });

    if (index !== -1) {
      /* if item available */
      let newCart = [...state.cart];

      newCart[index] = {
        ...newCart[index],
        amount: newCart[index].amount + action.amount,
      };

      return { ...state, cart: newCart };
    } else {
      /* if item not available */
      return {
        ...state,
        cart: [...state.cart, { ...action.item, amount: action.amount }],
      };
    }
  }

  if (action.type === 'INCREASE_ITEM') {
    const index = state.cart.findIndex((item) => {
      return item.id === action.id;
    });

    let newCart = [...state.cart];

    newCart[index] = { ...newCart[index], amount: newCart[index].amount + 1 };

    return { ...state, cart: newCart };
  }

  if (action.type === 'DECREASE_ITEM') {
    const index = state.cart.findIndex((item) => {
      return item.id === action.id;
    });

    let newCart = [...state.cart];

    if (newCart[index].amount === 1) {
      newCart = newCart.filter((cart) => cart.id !== newCart[index].id);
    } else {
      newCart[index] = { ...newCart[index], amount: newCart[index].amount - 1 };
    }

    return { ...state, cart: newCart };
  }

  if (action.type === 'REMOVE_ITEM') {
    return {
      ...state,
      cart: state.cart.filter((item) => item.id !== action.id),
    };
  }

  if (action.type === 'REMOVE_ALL') {
    return { ...state, cart: [] };
  }

  if (action.type === 'BUYING_ITEM') {
    const index = state.cart.findIndex((item) => {
      return item.id === action.id;
    });

    let newCart = [...state.cart];

    newCart[index] = { ...newCart[index], isBuying: !newCart[index].isBuying };

    console.log(newCart[index]);

    return { ...state, cart: newCart };
  }

  if (action.type === 'BUYING_ALL') {
    if (action.isBuyingAll) {
      let newCart = state.cart.map((item) => {
        return { ...item, isBuying: true };
      });
      return { ...state, cart: newCart };
    } else {
      let newCart = state.cart.map((item) => {
        return { ...item, isBuying: false };
      });
      return { ...state, cart: newCart };
    }
  }

  throw new Error();
};

export default reducer;
