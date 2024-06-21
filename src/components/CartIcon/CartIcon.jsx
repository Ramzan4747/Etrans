import React from 'react'

function CartIcon() {
    return (
        <>
            <div class="dropdown-menu dropdown-menu-end show">
                <a href="">
                    <div class="cart-header">
                        <p class="cart-header-title mb-0">8 ITEMS</p>
                        <p class="cart-header-clear ms-auto mb-0">VIEW CART</p>
                    </div>
                </a>
                <div class="cart-list ps ps--active-y">
                    <a class="dropdown-item" href="javascript:;">
                        <div class="d-flex align-items-center">
                            <div class="flex-grow-1">
                                <h6 class="cart-product-title">Men White T-Shirt</h6>
                                <p class="cart-product-price">1 X $29.00</p>
                            </div>
                            <div class="position-relative">
                                <div class="cart-product-cancel position-absolute"><i class="bx bx-x"></i>
                                </div>
                                <div class="cart-product">
                                    <img src="assets/images/products/01.png" class="" alt="product image"/>
                                </div>
                            </div>
                        </div>
                    </a>
                    <a class="dropdown-item" href="javascript:;">
                        <div class="d-flex align-items-center">
                            <div class="flex-grow-1">
                                <h6 class="cart-product-title">Puma Sports Shoes</h6>
                                <p class="cart-product-price">1 X $29.00</p>
                            </div>
                            <div class="position-relative">
                                <div class="cart-product-cancel position-absolute"><i class="bx bx-x"></i>
                                </div>
                                <div class="cart-product">
                                    <img src="assets/images/products/05.png" class="" alt="product image"/>
                                </div>
                            </div>
                        </div>
                    </a>
                    <a class="dropdown-item" href="javascript:;">
                        <div class="d-flex align-items-center">
                            <div class="flex-grow-1">
                                <h6 class="cart-product-title">Women Red Sneakers</h6>
                                <p class="cart-product-price">1 X $29.00</p>
                            </div>
                            <div class="position-relative">
                                <div class="cart-product-cancel position-absolute"><i class="bx bx-x"></i>
                                </div>
                                <div class="cart-product">
                                    <img src="assets/images/products/17.png" class="" alt="product image"/>
                                </div>
                            </div>
                        </div>
                    </a>
                    <a class="dropdown-item" href="javascript:;">
                        <div class="d-flex align-items-center">
                            <div class="flex-grow-1">
                                <h6 class="cart-product-title">Black Headphone</h6>
                                <p class="cart-product-price">1 X $29.00</p>
                            </div>
                            <div class="position-relative">
                                <div class="cart-product-cancel position-absolute"><i class="bx bx-x"></i>
                                </div>
                                <div class="cart-product">
                                    <img src="assets/images/products/10.png" class="" alt="product image"/>
                                </div>
                            </div>
                        </div>
                    </a>
                    <a class="dropdown-item" href="javascript:;">
                        <div class="d-flex align-items-center">
                            <div class="flex-grow-1">
                                <h6 class="cart-product-title">Blue Girl Shoes</h6>
                                <p class="cart-product-price">1 X $29.00</p>
                            </div>
                            <div class="position-relative">
                                <div class="cart-product-cancel position-absolute"><i class="bx bx-x"></i>
                                </div>
                                <div class="cart-product">
                                    <img src="assets/images/products/08.png" class="" alt="product image"/>
                                </div>
                            </div>
                        </div>
                    </a>
                    <a class="dropdown-item" href="javascript:;">
                        <div class="d-flex align-items-center">
                            <div class="flex-grow-1">
                                <h6 class="cart-product-title">Men Leather Belt</h6>
                                <p class="cart-product-price">1 X $29.00</p>
                            </div>
                            <div class="position-relative">
                                <div class="cart-product-cancel position-absolute"><i class="bx bx-x"></i>
                                </div>
                                <div class="cart-product">
                                    <img src="assets/images/products/18.png" class="" alt="product image"/>
                                </div>
                            </div>
                        </div>
                    </a>
                    <a class="dropdown-item" href="javascript:;">
                        <div class="d-flex align-items-center">
                            <div class="flex-grow-1">
                                <h6 class="cart-product-title">Men Yellow T-Shirt</h6>
                                <p class="cart-product-price">1 X $29.00</p>
                            </div>
                            <div class="position-relative">
                                <div class="cart-product-cancel position-absolute"><i class="bx bx-x"></i>
                                </div>
                                <div class="cart-product">
                                    <img src="assets/images/products/04.png" class="" alt="product image"/>
                                </div>
                            </div>
                        </div>
                    </a>
                    <a class="dropdown-item" href="javascript:;">
                        <div class="d-flex align-items-center">
                            <div class="flex-grow-1">
                                <h6 class="cart-product-title">Pool Charir</h6>
                                <p class="cart-product-price">1 X $29.00</p>
                            </div>
                            <div class="position-relative">
                                <div class="cart-product-cancel position-absolute"><i class="bx bx-x"></i>
                                </div>
                                <div class="cart-product">
                                    <img src="assets/images/products/16.png" class="" alt="product image"/>
                                </div>
                            </div>
                        </div>
                    </a>
                    <div class="ps__rail-x" style={{left: "0px", bottom: "-424px"}}><div class="ps__thumb-x" tabindex="0" style={{left: "0px", width: "0px"}}></div></div><div class="ps__rail-y" style={{top: "424px", right: "0px", height: "24px"}}><div class="ps__thumb-y" tabindex="0" style={{top: "147px", height: "77px"}}></div></div></div>
                <a href="javascript:;">
                    <div class="text-center cart-footer d-flex align-items-center">
                        <h5 class="mb-0">TOTAL</h5>
                        <h5 class="mb-0 ms-auto">$189.00</h5>
                    </div>
                </a>
                <div class="d-grid p-3 border-top"> <a href="javascript:;" class="btn btn-light btn-ecomm">CHECKOUT</a>
                </div>
            </div>
        </>
    )
}

export default CartIcon