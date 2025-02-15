"use client";

import React, { ReactNode, useRef } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Flex,
  Text,
} from "@chakra-ui/react";

import { CartItemProps, CartItem } from "../";
import {
  Column,
  SpaceBetween,
  useColors,
  useAppSelector,
  useAuth,
  currency,
} from "@/components";

import LoginModal from "@/components/auth/LoginModal";
import Link from "next/link";

const CartDrawer = ({ children }: { children: ReactNode }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef<HTMLDivElement>(null);
  const { isLoggedIn } = useAuth();

  const { cartItems, subTotal } = useAppSelector((state) => state.cart);

  const colors = useColors();
  const { brand, brandText } = useColors();

  return (
    <>
      <Flex cursor="pointer" ref={btnRef} onClick={onOpen}>
        {children}
      </Flex>
      <Drawer
        size="md"
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent bg={colors.bg}>
          <DrawerCloseButton />
          <DrawerHeader bg={colors.brandText} color={colors?.primaryText}>
            Shopping Cart
          </DrawerHeader>

          <DrawerBody>
            <Column gap={4}>
              {cartItems.map((item: CartItemProps, i: number) => (
                <CartItem key={i} {...item} />
              ))}
            </Column>
          </DrawerBody>

          <DrawerFooter bg={colors?.brandText}>
            <Column gap={4}>
              <SpaceBetween fontSize="1.2rem" fontWeight="600">
                <Text>Subtotal</Text>
                <Text>
                  {currency?.symbol} {subTotal.toLocaleString()}
                </Text>
              </SpaceBetween>
              {isLoggedIn ? (
                <Link href="/checkout">
                  <Button
                    bg={brand}
                    border={`1px solid ${brand}`}
                    color={brandText}
                    _hover={{
                      bg: brandText,
                      color: brand,
                    }}
                    borderRadius="lg"
                    isDisabled={!cartItems?.length}
                    w="full"
                  >
                    Checkout
                  </Button>
                </Link>
              ) : (
                <LoginModal>
                  <Button
                    bg={brand}
                    color={brandText}
                    _hover={{
                      bg: brandText,
                      color: brand,
                    }}
                    borderRadius="lg"
                    w="full"
                  >
                    Log In to Checkout
                  </Button>
                </LoginModal>
              )}
              {!isLoggedIn && (
                <Link href="/checkout">
                  <Button
                    isDisabled={!cartItems?.length}
                    textAlign="center"
                    fontWeight={500}
                    w="full"
                    variant="outline"
                  >
                    Checkout as Guest
                  </Button>
                </Link>
              )}
            </Column>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default CartDrawer;
