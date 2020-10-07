### Redux ###

const store = useState() acesso ao store(GlobalState)
// store.getState() retorna o estado.


# Permite granularizar(filtrar) os estados da aplicação
const state = useSelector() recebe uam função de parametro retorna state(GlobalState)
// state.email retornaria somente o estado referente ao email e atualiz somente componentes que usem diretamente o email e não os demais dados.


# Isolar estados dentro do Redux (Reducers)

// Reducer é o ponto central de um estado/modulo dentro Redux
// RootReducer centraliza todos os reducers dos modulos
