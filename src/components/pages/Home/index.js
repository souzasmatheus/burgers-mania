import React, { useState } from 'react';

import { Container } from '~/components/templates';
import {
  SearchBar,
  ProductCard,
  CartButton,
  LocationCard,
} from '~/components/atoms';
import { Categories, HorizontalScroller } from '~/components/molecules';
import { OrderCard } from '~/components/organism';

import { useStore } from '~/store/index';

import { getCategories, getSingleCategoryProducts } from '~/helpers/products';
import { capitalize } from '~/helpers/string';

import { styles } from './styled';

export default () => {
  const [products, location] = useStore((state) => [
    state.products,
    state.location,
  ]);
  const [categoriesVisible, setCategoriesVisible] = useState(false);
  const [orderModalVisible, setOrderModalVisible] = useState(false);

  const categories = getCategories(products);

  const toggleCategoriesVisible = () =>
    setCategoriesVisible(!categoriesVisible);

  return (
    <Container>
      <SearchBar onSettingsClick={toggleCategoriesVisible} />
      <Categories visible={categoriesVisible} />
      {categories.map((category) => {
        const currentCategoryProducts = getSingleCategoryProducts(
          products,
          category
        );
        return (
          <HorizontalScroller
            key={`horizontal-scroll-${category}`}
            title={capitalize(category)}
            data={currentCategoryProducts}
            renderItem={(item, index) => (
              <ProductCard
                id={item.id}
                name={item.title}
                price={item.price[location]}
                description={item.ingredients}
                source={item.source}
                style={
                  styles[
                    index === currentCategoryProducts.length - 1
                      ? 'lastProduct'
                      : 'productCard'
                  ]
                }
              />
            )}
            keyExtractor={(item) => `${category}-${item.id}`}
            style={styles.horizontalScroller}
          />
        );
      })}
      <CartButton handleCartButtonClick={() => setOrderModalVisible(true)} />
      <OrderCard
        visible={orderModalVisible}
        handleClose={() => setOrderModalVisible(false)}
      />
      <LocationCard />
    </Container>
  );
};
