import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

import { CategoryCard } from '~/components/atoms';

import { CategoriesContainer } from './styled';

import Burger from '~/assets/images/burger.jpg';
import Fries from '~/assets/images/fries.jpg';
import Bauru from '~/assets/images/bauru.jpg';

const Categories = ({ visible }) => {
  const items = [
    {
      key: 0,
      name: 'Burgers',
      backgroundSource: Burger,
    },
    {
      key: 1,
      name: 'Batatas',
      backgroundSource: Fries,
    },
    {
      key: 2,
      name: 'Baurus',
      backgroundSource: Bauru,
    },
  ];

  const AnimatedCategoryCard = motion.custom(CategoryCard);

  const variants = {
    visible: (i) => ({
      opacity: 1,
      transition: {
        delay: i * 0.3,
      },
    }),
  };

  return (
    visible && (
      <CategoriesContainer transition={{ duration: 2 }}>
        {items.map((item, i) => (
          <AnimatedCategoryCard
            custom={i}
            key={i + 'key'}
            animate="visible"
            variants={variants}
            name={item.name}
            backgroundSource={item.backgroundSource}
          />
        ))}
      </CategoriesContainer>
    )
  );
};

Categories.propTypes = {
  visible: PropTypes.bool.isRequired,
};

export default Categories;
