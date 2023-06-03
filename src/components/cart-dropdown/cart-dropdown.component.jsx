import Button from "../button/button.component";

import "./cart-dropdown.styles.scss";

const CartDropdown = () => {
  return (
    <div className="cart-dropdown-container">
      <div className="cart-itemss"></div>
      <Button>Go To Check Out</Button>
    </div>
  );
};

export default CartDropdown;
