import React, { useEffect } from "react"
import { ProductList } from "../../../components/ProductList/ProductList"
import { useDispatch, useSelector } from "react-redux"
import { setProductsByDiscountAsync } from "../actions"

export const ProductsByDiscount = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state) => state.productsByDiscount)

  useEffect(() => {
    dispatch(setProductsByDiscountAsync())
    const unSubsribe = () => dispatch(setProductsByDiscountAsync())

    return () => {
      unSubsribe()
    }
  }, [])

  return <ProductList btnText="Все Акции" title="Акции" items={items} />
}
