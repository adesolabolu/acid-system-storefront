import React from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { Path, Rect, Line, Text, G } from 'react-native-svg';

interface Props {
  width?: number | string;
  height?: number | string;
  type?: string;
  identifier?: string;
}

export const CADMobileIllustration: React.FC<Props> = ({ 
  width = '100%', 
  height = '100%',
  type = 'tee',
  identifier = 'ACID-1000'
}) => {
  const stroke = '#D2E823'; 
  const bone = '#F8F4E8';
  const dim = '#333333';

  return (
    <View style={[styles.container, { width: width as any, height: height as any }]}>
      <Svg width="100%" height="100%" viewBox="0 0 100 100">
        {/* Engineering Grid */}
        <Line x1="0" y1="25" x2="100" y2="25" stroke={dim} strokeWidth="0.5" />
        <Line x1="0" y1="50" x2="100" y2="50" stroke={dim} strokeWidth="0.5" />
        <Line x1="0" y1="75" x2="100" y2="75" stroke={dim} strokeWidth="0.5" />
        <Line x1="25" y1="0" x2="25" y2="100" stroke={dim} strokeWidth="0.5" />
        <Line x1="50" y1="0" x2="50" y2="100" stroke={dim} strokeWidth="0.5" />
        <Line x1="75" y1="0" x2="75" y2="100" stroke={dim} strokeWidth="0.5" />

        {/* Garment Geometry */}
        <Path
          d={
            type === 'tee' 
              ? "M25,25 L75,25 L75,85 L25,85 Z M35,25 L35,45 L65,45 L65,25" 
              : type === 'trs' 
              ? "M30,15 L70,15 L75,95 L50,65 L25,95 Z"
              : type === 'blz'
              ? "M20,15 L80,15 L75,90 L25,90 Z M45,15 L45,90 M55,15 L55,90"
              : "M20,30 L80,30 L70,90 L30,90 Z"
          }
          fill="none"
          stroke={stroke}
          strokeWidth="1.5"
        />
        
        {/* Calipers and Badges */}
        <Line x1="10" y1="25" x2="15" y2="25" stroke={bone} strokeWidth="1" />
        <Line x1="10" y1="85" x2="15" y2="85" stroke={bone} strokeWidth="1" />
        <Line x1="12.5" y1="25" x2="12.5" y2="85" stroke={bone} strokeWidth="0.5" strokeDasharray="2,2" />
        
        <Text x="6" y="60" fill={bone} fontSize="3.5" transform="rotate(-90 6,60)" letterSpacing="1">
          Y-AXIS SPEC
        </Text>

        <Rect x="65" y="88" width="30" height="8" fill={stroke} />
        <Text x="67" y="94" fill="#121316" fontSize="4" fontWeight="bold">
          {identifier}
        </Text>
        
        <Text x="4" y="8" fill={stroke} fontSize="5" fontWeight="bold" letterSpacing="0.5">
          ACID//SYS
        </Text>
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#121316',
    borderWidth: 2,
    borderColor: '#09090B',
    overflow: 'hidden',
  }
});
