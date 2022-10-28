import { createSlice } from "@reduxjs/toolkit"


// creo el estado inicial y las props
// const estadoInicialSlice = {
//   id: 1,
//   empresa: "cuchuflito",
//   siglas: "cft",
//   img: "img5",
//   destino: "RETIRO",
//   horarioSalida: "23:25",
//   horarioEstimado: "23:25",
//   plataforma: "5",
//   estado: "PARTIO"
// };

const colectivos = [
  {
    id: 1,
    empresa: "flecha-bus",
    siglas: "fb",
    img: "img1",
    destino: "CORDOBA CAPITAL",
    horarioSalida: "23:25",
    horarioEstimado: "23:25",
    plataforma: "5",
    estado: "PARTIO",
  },
  {
    id: 2,
    empresa: "andesmar",
    siglas: "adm",
    img: "img2",
    destino: "MENDOZA",
    horarioSalida: "23:25",
    horarioEstimado: "23:25",
    plataforma: "25",
    estado: "PARTIO",
  },
  {
    id: 3,
    empresa: "jovi-bus",
    siglas: "jvb",
    img: "img3",
    destino: "MENDOZA",
    horarioSalida: "23:25",
    horarioEstimado: "23:25",
    plataforma: "5",
    estado: "PARTIO",
  },
  {
    id: 4,
    empresa: "nuevo expreso",
    siglas: "ne",
    img: "img4",
    destino: "JUJUY",
    horarioSalida: "23:25",
    horarioEstimado: "23:25",
    plataforma: "25",
    estado: "PARTIO",
  },
  {
    id: 6,
    empresa: "cuchuflito",
    siglas: "cft",
    img: "img5",
    destino: "MENDOZA",
    horarioSalida: "23:25",
    horarioEstimado: "23:25",
    plataforma: "5",
    estado: "PARTIO",
  },
  {
    id: 7,
    empresa: "cuchuflito",
    siglas: "cft",
    img: "img5",
    destino: "MENDOZA",
    horarioSalida: "23:25",
    horarioEstimado: "23:25",
    plataforma: "25",
    estado: "PARTIO",
  },
  {
    id: 8,
    empresa: "cuchuflito",
    siglas: "cft",
    img: "img5",
    destino: "MENDOZA",
    horarioSalida: "23:25",
    horarioEstimado: "23:25",
    plataforma: "5",
    estado: "PARTIO",
  },
  {
    id: 9,
    empresa: "cuchuflito",
    siglas: "cft",
    img: "img5",
    destino: "MENDOZA",
    horarioSalida: "23:25",
    horarioEstimado: "23:25",
    plataforma: "25",
    estado: "PARTIO",
  },
  {
    id: 10,
    empresa: "cuchuflito",
    siglas: "cft",
    img: "img5",
    destino: "MENDOZA",
    horarioSalida: "23:25",
    horarioEstimado: "23:25",
    plataforma: "5",
    estado: "PARTIO",
  },
  {
    id: 11,
    empresa: "cuchuflito",
    siglas: "cft",
    img: "img5",
    destino: "MENDOZA",
    horarioSalida: "23:25",
    horarioEstimado: "23:25",
    plataforma: "25",
    estado: "PARTIO",
  },
  {
    id: 12,
    empresa: "cuchuflito",
    siglas: "cft",
    img: "img5",
    destino: "MENDOZA",
    horarioSalida: "23:25",
    horarioEstimado: "23:25",
    plataforma: "5",
    estado: "PARTIO",
  },
  {
    id: 13,
    empresa: "cuchuflito",
    siglas: "cft",
    img: "img5",
    destino: "MENDOZA",
    horarioSalida: "23:25",
    horarioEstimado: "23:25",
    plataforma: "25",
    estado: "PARTIO",
  },
  {
    id: 14,
    empresa: "cuchuflito",
    siglas: "cft",
    img: "img5",
    destino: "MENDOZA",
    horarioSalida: "23:25",
    horarioEstimado: "23:25",
    plataforma: "5",
    estado: "PARTIO",
  },
  {
    id: 15,
    empresa: "cuchuflito",
    siglas: "cft",
    img: "img5",
    destino: "MENDOZA",
    horarioSalida: "23:25",
    horarioEstimado: "23:25",
    plataforma: "25",
    estado: "PARTIO",
  },
  {
    id: 5,
    empresa: "cuchuflito",
    siglas: "cft",
    img: "img5",
    destino: "MENDOZA",
    horarioSalida: "23:25",
    horarioEstimado: "23:25",
    plataforma: "5",
    estado: "PARTIO",
  },
];


export const estadoGlobalSlice = createSlice({

    name: "estado",
    initialState: colectivos,
    reducers: {

        setId: function(state, action){
            state.id = action.payload
        },

        setEmpresa: function(state, action){
            state.empresa = action.payload
        },

        setSiglas: function(state, action){
            state.siglas = action.payload
        },

        setImg: function(state, action){
            state.img = action.payload
        },

        setPlataforma: function(state, action){

            state.plataforma = action.payload
        }

        // setHoraArribo: function(state, action){
        //     state.setHoraArribo = action.payload
        // },

        // setHoraEstimada: function(state, action){
        //     state.horaEstimada = action.payload
        // },
        
        // setDestino: function(state,action){
        //     state.destino = action.payload
        // },

        // setPlataforma: function(state,action){
        //     state.plataforma = action.payload
        // },

        // setEstadoActual: function(state,action){
        //     state.estadoActual = action.payload
        // },

    }
})

// console.log('counterSlice.reducer', counterSlice.reducer.increment)

export const { setHoraEstimado, setHoraEstimada, setDestino, setPlataforma, setEstadoActual, setId, setEmpresa, setSiglas, setImg } = estadoGlobalSlice.actions
export default estadoGlobalSlice.reducer