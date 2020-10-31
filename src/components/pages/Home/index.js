import React, { useState } from 'react';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import { Container } from '~/components/templates';
import { SearchBar, ProductCard } from '~/components/atoms';
import { Categories, HorizontalScroller } from '~/components/molecules';

import { useStore } from '~/store/index';

import { getCategories, getSingleCategoryProducts } from '~/helpers/products';
import { capitalize } from '~/helpers/string';

import { StyledFAB, styles } from './styled';

export default () => {
  const products = useStore((state) => state.products);
  const [categoriesVisible, setCategoriesVisible] = useState(false);

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
            title={capitalize(category)}
            data={currentCategoryProducts}
            renderItem={(item, index) => (
              <ProductCard
                key={`product-${item.key}`}
                name={item.title}
                price={`R$${item.price}`}
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
            keyExtractor={(item) => `${category}-${item.key}`}
            style={styles.horizontalScroller}
          />
        );
      })}
      <StyledFAB>
        <ShoppingCartIcon />
      </StyledFAB>
    </Container>
  );
};
