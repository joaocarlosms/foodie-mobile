import { FlatList, View, Image, Text } from "react-native";
import { pedidos } from "../../constants/dados.js";
import icons from "../../constants/icons.js";
import { styles } from "./orders.style.js";
import Order from "../../components/order/order.jsx";

const Orders = () => {
    return(
        <View style={styles.container}>
            <FlatList data={pedidos} 
                keyExtractor={(pedido) => pedido.id}
                showsVerticalScrollIndicator={false}
                renderItem={({item}) => {
                    return (
                        <Order logotipo={item.logotipo}
                            nome={item.nome}
                            valor={item.vl_total}
                            dt_pedido={item.dt_pedido}
                            status={item.status} />
                    )
                }}

                contentContainerStyle={styles.containerList}

                ListEmptyComponent={() => {
                    return (
                        <View style={styles.empty}>
                            <Image source={icons.empty}/>
                            <Text style={styles.emptyText}>Nenhum favorito encontrado!</Text>
                        </View>
                    )
                }}
            />
        </View>
    );
}

export default Orders;