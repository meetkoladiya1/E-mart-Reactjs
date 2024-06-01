import React from "react";
import Container from "react-bootstrap/esm/Container";
import { useSelector , useDispatch } from "react-redux";
import { removeToCart } from "../Product_Data/Redux/Action";
import { increment } from "../Product_Data/Redux/Action";
import { decrement } from "../Product_Data/Redux/Action";

const Cart = () => {

  const dispatch = useDispatch();
  const cartData = useSelector((state) => state.reducer);
  const totalamount = cartData.reduce((total , item) => total +(item.d_price * item.quantity) ,0);

  
  
  return (
    <>
      <div className="bg-gradient-to-l from-[#e8f3fc]  to-[#f8fafc]">
        <Container>
        {cartData.length === 0 ? (

          <div className="py-[150px]">
            <div className="mb-[50px] shadow-2xl shodow-gray-700">
              <p className="py-[18px] bg-white text-[18px] px-[25px]">
                Your Cart is currently empty.
              </p>
            </div>
            <button className="hover:-translate-y-[10px] duration-300 ease-in-out">
              <a href="./Shop_Now" className="text-white py-[13px] px-[30px] bg-black text-[17px] ">
                  Return To Shop
              </a>
            </button>
          </div>
        ) : (

          <div className=" py-[102px] px-[111px] flex container mx-auto justify-between border-top">
            <table className="w-[65%] text-center table-fixed bg-white ">
              <thead>
                <tr className="flex row justify-between pb-[20px] pt-[30px] px-[20px]">
                  <th className="col-6 font-normal">Products</th>
                  <th className="col-2 font-normal">Price</th>
                  <th className="col-2 font-normal">Quantity</th>
                  <th className="col-2 font-normal">Total</th>
                </tr>
              </thead>
              {cartData.map((item) => {
                return (
                  <table key={item.id}>
                    <thead className="flex items-center py-[30px]  ">
                      <td className="flex col-6 items-center pl-[20px]">
                        <button  onClick={() => dispatch(removeToCart(item.id))} className='btn btn-denger btn-sm'>
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" class="feather feather-x-circle"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>
                          </button>
                        <img
                          className="h-[102px]  max-w-[102px] col-6 object-cover"
                          src={item.img}
                          alt="" />
                        <td className="col-6">{item.name}</td>
                      </td>

                      <td className="col-2 ms-28">${item.d_price}</td>
                      <div className="col-2 ms-8 border-1 border-black py-[10px] items-center flex justify-around">
                       <button onClick={() => dispatch(decrement(item.id))} className="me-2">-</button>
                       <td>{item.quantity}</td>
                       <button onClick={() => dispatch(increment(item.id))} className="ms-2">+</button>
                      </div>
                      <td className="col-2 ms-3">${item.d_price * item.quantity}</td>
                    </thead>
                  </table> 
                );
              })}
              <div>
                <div className='flex h-full justify-start py-[15px]'>
                  <input type='numver' className='border-1 border-[#d3ced2] px-[10px]' placeholder='coupan code'/>
                  <button className='bg-black py-[11px] px-[33px] border-black border-1 text-white chekout ' type='submit'>Apply Coupon</button>
                </div>
              </div>
            </table>
            
          

            <div className="w-[30%] bg-white max-xl:w-[100%] max-xl:mt-[30px]">
              {/* <thead>
            <tr className='border-2 border-black'>
              <th>Total Price</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-2 border-black'>
              <td>{amount}</td>
            </tr>
          </tbody> */}

              <div className="p-[25px]">
                <h4 className="my-[8px]">Cart Totals</h4>
                <hr />
                <div className="flex justify-between mt-[30px] mb-[20px]">
                  <span>Subtotal</span>
                  <span>${totalamount}</span>
                </div>
                <div className="leading-10 my-[15px]">
                  <h1>Shipping</h1>
                  <div className="flex justify-between">
                    <span>Flat Rate:</span>
                    <span>$10.00</span>
                  </div>
                  <div> Shipping to <span className="font-bold">CA</span> </div>
                  <h4>Change address </h4>
                </div>
                <div className="flex justify-between my-[25px]">
                <span>Total:</span>
                <span>${totalamount + 10}</span>
              </div>
                <div className="w-full py-[15px] text-center border-2 border-black hover:-translate-y-[15px] duration-300 ease-in-out bg-black text-white checkout">
                  <button>
                    <a href="./CheckOut">
                      Proceed To Checkout
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
    
        </Container>
      </div>
    </>
  );
};

export default Cart;
