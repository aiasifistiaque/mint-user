/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import {
  Column,
  Layout,
  useAppDispatch,
  useAppSelector,
  useAuth,
  useColors,
} from "@/components";
import VInput from "@/components/buttons/primary/VInput";
import VTextarea from "@/components/buttons/primary/VTextArea";
import { useGetSelfQuery } from "@/store/services/authApi";
import { Button, Grid, Heading, useToast } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import CheckoutItems from "./_components/CheckoutItems";
import { usePostMutation } from "@/store/services/commonApi";
import { resetCart } from "@/store/slices/cartSlice";
import useCustomToast from "@/components/hooks/useCustomToast";
import { useRouter } from "next/navigation";
import {
  useCartTotalsMutation,
  useCreateOrderMutation,
} from "@/store/services/checkoutApi";

const CheckoutPage = () => {
  const [address, setAddress] = useState<any>({
    name: "",
    email: "",
    phone: "",
    street: "",
    city: "",
    postalCode: "",
  });
  const storeId = process.env.NEXT_PUBLIC_STORE;

  const { cartItems } = useAppSelector((state) => state.cart);
  const { isLoggedIn } = useAuth();
  const [trigger, result] = usePostMutation();
  const [triggerCart, resultCart] = usePostMutation();
  const dispatch = useAppDispatch();

  // These are for guest user
  const [guestOrderTrigger, guestOrderResult] = useCreateOrderMutation();
  // const [triggerVerifyCoupon, verifyCoupon] = useVerifyCouponMutation();
  const [guestTriggerCart, guestCartResult] = useCartTotalsMutation();

  const toast = useToast();
  // const [couponCode, setCouponCode] = useState('');

  const { data, isLoading } = useGetSelfQuery({});
  const { brand, brandText } = useColors();

  console.log(data, "STORE DATA");

  const onChange = (e: React.ChangeEvent<any>) => {
    setAddress({
      ...address,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = () => {
    const body = {
      address,
      cart: resultCart.data,
      isPaid: false,
      paymentMethod: "cash on delivery",
      paymentAmount: 0,
      status: "pending",
    };
    trigger({ path: "orders", body });
  };

  useEffect(() => {
    if (!data) return;
    setAddress({
      name: data.name,
      email: data.email,
      phone: data.phone,
    });
  }, [data, isLoading]);

  const router = useRouter();

  useEffect(() => {
    if (result.isSuccess) {
      dispatch(resetCart());
      router.push(`/invoice/${result.data.order._id}`);
    }
  }, [result]);

  useEffect(() => {
    triggerCart({
      body: { items: cartItems, discount: 0, shipping: 0 },
      path: "orders/cart-total",
    });
  }, [cartItems]);

  const isDisabled =
    !address.name ||
    !address.email ||
    !address.phone ||
    !address.street ||
    !address.city ||
    !address.postalCode;

  const handlePlaceOrderAsGuest = () => {
    const body = {
      address,
      cart: guestCartResult.data,
      isPaid: false,
      paymentMethod: "cash on delivery",
      paymentAmount: 0,
      status: "pending",
    };
    if (guestCartResult?.data?.items?.length < 1) {
      toast({
        title: "Cart Empty",
        description:
          "Your cart is empty. Please add products before placing an order.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }
    guestOrderTrigger({ storeId: storeId, body });
  };

  // const applyCouponCode = () => {
  // 	triggerVerifyCoupon({
  // 		storeId: storeId,
  // 		body: {
  // 			coupon: couponCode,
  // 		},
  // 	});
  // };

  useEffect(() => {
    if (result.isSuccess || guestOrderResult?.isSuccess) {
      dispatch(resetCart());
      router.push(
        `/invoice/${result?.data?.order?._id || guestOrderResult?.data?._id}`
      );
    }
  }, [result, guestOrderResult]);

  // useEffect(() => {
  // 	if (verifyCoupon?.isSuccess) {
  // 		guestTriggerCart({
  // 			storeId: storeId,
  // 			body: {
  // 				coupon: couponCode,
  // 				items: cartItems,
  // 			},
  // 		});
  // 	}

  // 	if (verifyCoupon?.isError) {
  // 		toast({
  // 			title: 'Invalid coupon code!',
  // 			status: 'error',
  // 			duration: 3000,
  // 			isClosable: true,
  // 		});
  // 	}
  // }, [verifyCoupon]);

  useEffect(() => {
    triggerCart({
      body: { items: cartItems, discount: 0, shipping: 0 },
      path: "orders/cart-total",
    });

    guestTriggerCart({
      storeId: storeId,
      body: {
        // coupon: couponCode,
        items: cartItems,
      },
    });
  }, [cartItems]);
  useCustomToast({
    isError: result.isError || guestOrderResult.isError,
    isSuccess: result.isSuccess || guestOrderResult.isSuccess,
    error: result.error || guestOrderResult?.error,
    isLoading: result.isLoading || guestOrderResult?.isLoading,
    successText: "Order placed successfully",
    successTitle: "Success",
  });

  const colors = useColors();

  return (
    <Layout>
      <Grid
        gap={{ base: 4, md: 12 }}
        gridTemplateColumns={{ base: "1fr", md: "3fr 2fr" }}
        p={{ base: 4, md: 6 }}
      >
        <Column gap={4}>
          <Heading size="lg" color={colors?.primaryText}>
            Address
          </Heading>
          <Column gap={4}>
            <VInput
              name="name"
              label="Recipient Name"
              value={address.name}
              onChange={onChange}
            />
            <Grid gridTemplateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={4}>
              <VInput
                name="email"
                label="Recipient Email"
                value={address.email}
                onChange={onChange}
              />
              <VInput
                name="phone"
                label="Recipient Phone"
                value={address.phone}
                onChange={onChange}
              />
            </Grid>

            <VTextarea
              name="street"
              label="Full Address"
              value={address.street}
              onChange={onChange}
            />
            <Grid gridTemplateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={4}>
              <VInput
                name="city"
                label="City"
                value={address.city}
                onChange={onChange}
              />
              <VInput
                name="postalCode"
                label="Postal Code"
                value={address.postalCode}
                onChange={onChange}
              />
            </Grid>
          </Column>
        </Column>
        <Column>
          <CheckoutItems />
          <Button
            bg={brand}
            border={`1px solid ${brand}`}
            color={brandText}
            _hover={{ bg: brandText, color: brand }}
            isLoading={result.isLoading}
            isDisabled={isDisabled}
            onClick={isLoggedIn ? onSubmit : handlePlaceOrderAsGuest}
          >
            Confirm Order
          </Button>
        </Column>
      </Grid>
    </Layout>
  );
};

export default CheckoutPage;
