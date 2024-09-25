
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import QRCode from 'react-native-qrcode-svg'
import Svg, {Line, Circle} from 'react-native-svg'
import { Flight } from '@/components/flight';
import { Info } from '@/components/info';

import {styles} from './styles'
import {Ionicons} from '@expo/vector-icons'
import { colors } from '@/styles/colors';




export function Home() {
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.header} source={require("@/assets/cover.jpg")}>
        <Text style={styles.title}>Cartão de embarque</Text>
        <Text style={styles.subtitle}>Faltam 45 dias para a sua viagem</Text>
      </ImageBackground>
      <View style={styles.ticket}>

          <View style={styles.content}>
            <View style={styles.flight}>
                <Flight label='São Paulo' value='GRU'/>
                <View style={styles.duration}>
                  <Ionicons name='airplane-sharp' size={32} color={colors.black}/>
                  <Text style={styles.hours}> 3h 0m</Text>
                </View>
                <Flight label='Teresina' value='THE'/>
            </View>
            <Text style={styles.label}>PASSAGEIRO</Text>
            <Text style={styles.name}>Lucas de Moura</Text>


            <View style={styles.details}>
              <View style={styles.inline}>
                <Info label='Data' value='17 de Nov.'/>
                <Info label='Embarque' value='17:25'/>
              </View>
            </View>
          
          
          </View>
          <View>
            <Svg height={20} width={"100%"}>
              <Line 
                x1="0%" //onde começa na horizontal
                y1="50%" //onde começa na vertical
                x2="100%" //onde finaliza na horizontal
                y2="50%" //onde finalizar na vertical
                stroke={colors.gray[400]} //para definir a cor
                strokeWidth={2} //espessura
                strokeDasharray="5,5" //para tracejar
              />
              <Circle
                r={8}
                cx="0%"
                cy="50%"
                stroke={colors.black}
              />
              <Circle
                r={8}
                cx="100%"
                cy="50%"
                stroke={colors.black}
              />
            </Svg>
          </View>
          <View style={styles.footer}>
            <View style={styles.footerContent}>
                <View style={styles.inline}>
                  <Info label='Voo' value='YZ 607'/> 
                  <Info label='Assento' value='45G'/> 
                </View>
                <View style={styles.inline}>
                  <Info label='Terminal' value='1'/> 
                  <Info label='Portão' value='1'/> 
                </View>
            </View>
            <QRCode value='Boarding Code' size={130}/>
          </View>


      </View>
    </View>
  );
}


