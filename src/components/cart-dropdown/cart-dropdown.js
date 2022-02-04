import React from 'react';
import './cart-dropdown.scss';

import CustomButton from '../custom-button';

const CartDropdown = () => (
    <div className="cart-dropdown">
        <div className="cart-items" />
        <CustomButton>Go to Checkout</CustomButton>
    </div>
);

export default CartDropdown;