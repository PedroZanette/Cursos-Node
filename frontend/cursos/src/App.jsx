import React, { useState, useEffect} from 'react'
import axios  from 'axios'
import './App.css'

function App() {
  const [usuarios, setUsuarios] = useState([])
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    idade: '',
    sexo: ''
  })

  useEffect(() => {
    //carrega os usuarios ao montar o componente
    fetchUsuarios();
  }, []);

  const fetchUsuarios = async () => {
    try {
      //faz uma requisição GET para obter a lista de usuários
      const response = await axios.get(`http://localhost:3000/usuarios`)
      //Atualiza o estado com os usuários obtidos
    }catch(error) {
      console.error(error)
    }
  }

  return (
    <>
      
    </>
  )
}

export default App
