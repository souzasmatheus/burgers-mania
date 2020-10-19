import React, { useState } from 'react';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import { Container } from '~/components/templates';
import { SearchBar, ProductCard } from '~/components/atoms';
import { Categories, HorizontalScroller } from '~/components/molecules';

import { StyledFAB, styles } from './styled';

const burgers = [
  {
    key: 0,
    name: 'Número 1',
    price: '13,00',
    description: '200g meat, 100g chicken, bacon, tomato, greens and sauce',
    source:
      'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=902&q=80',
  },
  {
    key: 1,
    name: 'Número 1',
    price: '13,00',
    description: '200g meat, 100g chicken, bacon, tomato, greens and sauce',
    source:
      'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=902&q=80',
  },
  {
    key: 2,
    name: 'Número 1',
    price: '13,00',
    description: '200g meat, 100g chicken, bacon, tomato, greens and sauce',
    source:
      'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=902&q=80',
  },
  {
    key: 3,
    name: 'Número 1',
    price: '13,00',
    description: '200g meat, 100g chicken, bacon, tomato, greens and sauce',
    source:
      'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=902&q=80',
  },
];

const fries = [
  {
    key: 0,
    name: 'Número 1',
    price: '13,00',
    source:
      'https://images.unsplash.com/photo-1585109649139-366815a0d713?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
  },
  {
    key: 1,
    name: 'Número 1',
    price: '13,00',
    source:
      'https://images.unsplash.com/photo-1585109649139-366815a0d713?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
  },
  {
    key: 2,
    name: 'Número 1',
    price: '13,00',
    source:
      'https://images.unsplash.com/photo-1585109649139-366815a0d713?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
  },
  {
    key: 3,
    name: 'Número 1',
    price: '13,00',
    source:
      'https://images.unsplash.com/photo-1585109649139-366815a0d713?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
  },
];

const baurus = [
  {
    key: 0,
    name: 'Número 1',
    price: '13,00',
    source:
      'https://images.unsplash.com/photo-1554433607-66b5efe9d304?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80',
  },
  {
    key: 1,
    name: 'Número 1',
    price: '13,00',
    source:
      'https://images.unsplash.com/photo-1554433607-66b5efe9d304?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80',
  },
  {
    key: 2,
    name: 'Número 1',
    price: '13,00',
    source:
      'https://images.unsplash.com/photo-1554433607-66b5efe9d304?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80',
  },
  {
    key: 3,
    name: 'Número 1',
    price: '13,00',
    source:
      'https://images.unsplash.com/photo-1554433607-66b5efe9d304?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80',
  },
];

export default () => {
  const [categoriesVisible, setCategoriesVisible] = useState(false);

  const toggleCategoriesVisible = () =>
    setCategoriesVisible(!categoriesVisible);

  return (
    <Container>
      <SearchBar onSettingsClick={toggleCategoriesVisible} />
      <Categories visible={categoriesVisible} />
      <HorizontalScroller
        title="Burgers"
        data={burgers}
        renderItem={(item, index) => (
          <ProductCard
            key={`product-${item.key}`}
            name={item.name}
            price={`R$${item.price}`}
            description={item.description}
            source={item.source}
            style={
              styles[
                index === burgers.length - 1 ? 'lastProduct' : 'productCard'
              ]
            }
          />
        )}
        keyExtractor={(item) => `burger-${item.key}`}
        style={styles.horizontalScroller}
      />
      <HorizontalScroller
        title="Fries"
        data={fries}
        renderItem={(item, index) => (
          <ProductCard
            key={`product-${item.key}`}
            name={item.name}
            price={`R$${item.price}`}
            source={item.source}
            style={
              styles[
                index === burgers.length - 1 ? 'lastProduct' : 'productCard'
              ]
            }
          />
        )}
        keyExtractor={(item) => `fries-${item.key}`}
        style={styles.horizontalScroller}
      />
      <HorizontalScroller
        title="Baurus"
        data={baurus}
        renderItem={(item, index) => (
          <ProductCard
            key={`product-${item.key}`}
            name={item.name}
            price={`R$${item.price}`}
            source={item.source}
            style={
              styles[
                index === burgers.length - 1 ? 'lastProduct' : 'productCard'
              ]
            }
          />
        )}
        keyExtractor={(item) => `baurus-${item.key}`}
        style={styles.horizontalScroller}
      />
      <StyledFAB>
        <ShoppingCartIcon />
      </StyledFAB>
    </Container>
  );
};
