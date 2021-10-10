import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const style = StyleSheet.create({
  separator: {
    height: 10
  },
});

const repositories = [
  {
    id: 'jaredpalmer.formik',
    fullName: 'jaredpalmer/formik',
    description: 'Build forms in react, without the tears',
    language: 'TypeScript',
    forksCount: 1589,
    stargazersCount: 21553,
    ratingAverage: 88,
    reviewCount: 4,
    ownersAvatarUrl: 'https://avatars2.githubusercontent.com/u/40601B7?v=4',
  },
  {
    id: 'rails.rails',
    fullName: 'rails/rails',
    description: 'Ruby on Rails',
    language: 'Ruby',
    forksCount: 18349,
    stargazersCount: 45377,
    ratingAverage: 100,
    reviewCount: 2,
    ownersAvatarUrl: 'https://avatars1.githubusercontent.com/u/4223?v=4',
  },
  {
    id: 'django.django',
    fullName: 'django/django',
    description: 'The Web framework for perfectionist with deadlines.',
    language: 'Python',
    forksCount: 21015,
    stargazersCount: 48496,
    ratingAverage: 73,
    reviewCount: 5,
    ownersAvatarUrl: 'https://avatars2.githubusercontent.com/u/27804?v=4',
  },
  {
    id: 'reduxjs.redux',
    fullName: 'reduxjs/redux',
    description: 'Predictable state container for JavaScript apps',
    language: 'TypeScript',
    forksCount: 13902,
    stargazersCount: 52869,
    ratingAverage: 0,
    reviewCount: 0,
    ownersAvatarUrl: 'https://avatars3.githubusercontent.com/u/13142323?v=4',
  },
];

const ItemSeparator = () => <View style={style.separator} />;

const RepositoryList = () => {
  return (
    <View>
      <Text>Go cart==============</Text>
      <FlatList
        data={repositories}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={({ item }) => 
          <View>
            <Text>{item.fullName}</Text>
            <Text>{item.description}</Text>
            <Text>{item.language}</Text>
            <Text>{item.forksCount}</Text>
            <Text>{item.stargazersCount}</Text>
            <Text>{item.ratingAverage}</Text>
            <Text>{item.reviewCount}</Text>
            <Text>{item.ownersAvatarUrl}</Text>
          </View>
        }
      />
    </View>
  )
}

export default RepositoryList;