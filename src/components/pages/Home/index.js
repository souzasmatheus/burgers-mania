import React, { useState } from 'react';

import { Container } from '~/components/templates';
import { CartButton, LocationCard } from '~/components/atoms';
import { HorizontalScroller } from '~/components/molecules';
import { OrderCard, ProductCard } from '~/components/organism';

import { useStore } from '~/store/index';

import { getCategories, getSingleCategoryProducts } from '~/helpers/products';
import { capitalize } from '~/helpers/string';

import { styles } from './styled';

export default () => {
  const [products, location] = useStore((state) => [
    state.products,
    state.location,
  ]);
  const [orderModalVisible, setOrderModalVisible] = useState(false);

  const categories = getCategories(products);

  return (
    <Container>
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
                specialCondition={item.specialCondition?.name}
                specialConditionPrice={item.specialCondition?.price[location]}
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
