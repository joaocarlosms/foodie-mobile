import { View, Text } from "react-native";

const Categorias = () => {
    
    const categorias = [
        {
            id: 1,
            descricao: "Burguers",
            icone: require("../../assets/cat-burguer.png")
        },
        {
            id: 2,
            descricao: "Pizza",
            icone: require("../../assets/cat-pizza.png")
        },
        {
            id: 3,
            descricao: "Fritas",
            icone: require("../../assets/cat-fritas.png")
        },
        {
            id: 4,
            descricao: "Sushi",
            icone: require("../../assets/cat-sushi.png")
        },
        {
            id: 5,
            descricao: "Churrasco",
            icone: require("../../assets/cat-churrasco.png")
        },
        {
            id: 6,
            descricao: "Sucos",
            icone: require("../../assets/cat-suco.png")
        },
        {
            id: 7,
            descricao: "Doces",
            icone: require("../../assets/cat-sobremesa.png")
        }
    ];

    return (
        <View>
            {
                categorias.map((categoria) => {
                    return <Text key={categoria.id}>{categoria.descricao}</Text>
                })
            }
        </View>
    );
}


export default Categorias;