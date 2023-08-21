import { View, Text, StyleSheet, ViewStyle } from 'react-native'
import React from 'react';
import { PokemonStat } from '../../api/types/api';
import { capitalize } from 'lodash';

interface StatsProps {
  stats: PokemonStat[]
}

export default function Stats({ stats }: StatsProps) {

  const barFilledStyle = (value: number) => {
    let bgColor = "#FF3E3E";

    if (value > 25 && value < 50) {
      bgColor = "#F08700";
    } else if (value >= 50 && value < 75) {
      bgColor = "#EFCA08";
    } else if (value >= 75) {
      bgColor = "#6EEB83";
    }
    return {
      backgroundColor: bgColor,
      width: `${value > 100 ? 100 : value}%`,
    }
  }

  return (
    <View style={styles.content}>
      <Text style={styles.title}>Base Stats</Text>
      {stats.map(
        (item, index) =>
        (
          <View key={index} style={styles.block}>
            <View key={index} style={styles.blockTitle}>
              <Text style={styles.statName}>{capitalize(item.stat.name)}</Text>
            </View>
            <View style={styles.barStat}>
              <Text style={styles.baseStat}>{item.base_stat}</Text>
              <View style={styles.bar}>
                <View style={[styles.value, barFilledStyle(item.base_stat) as ViewStyle]} />
              </View>
            </View>
          </View>
        )
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 20,
    marginTop: 10,
  },
  title: {
    fontWeight: '900',
    fontSize: 20,
    paddingBottom: 5
  },
  block: {
    flexDirection: 'row',
    paddingVertical: 5,
  },
  blockTitle: {
    width: '30%'
  },
  statName: {
    fontSize: 12,
    color: '#6B6B6B'
  },
  barStat: {
    width: '70%',
    flexDirection: 'row',
    alignItems: 'center'
  },
  baseStat: {
    fontSize: 12,
    width: '12%'
  },
  bar: {
    width: '88%',
    backgroundColor: '#DEDEDE',
    height: 5,
    borderRadius: 20,
    overflow: 'hidden'
  },
  value: {
    height: 5,
    borderRadius: 20
  }

});