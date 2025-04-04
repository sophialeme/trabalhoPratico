import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Banner from './components/Banner'

function App() {
  return (
    <>
      <Header/>
      <Banner/>
      <div className="re">
        <div className="re1">
            <p>Agende Sua</p>
            <p>Sessão</p>
        </div>
        <div className="re2">
            <p>Veja Nossas</p>
            <p>Promoções</p>
        </div>
      </div>
      <div className="retangulo">
        <div className="retangulo1"> <p>Pacote</p><p>Básico</p><p>R$ 400,00</p> </div>
        <div className="retangulo2"> <p>Pacote</p><p>Família</p><p>R$ 1.000,00</p> </div>
        <div className="retangulo3"> <p>Pacote</p><p>Premium</p><p>R$ 2.000,00</p> </div>
        <div className="retangulo4"> <p>Pacote</p><p>Casamento</p><p>R$ 6.000,00</p> </div>
        <div className="retangulo5"> <p>Pacote</p><p>Empresarial</p><p>R$ 1.500,00</p> </div>
        <div className="retangulo6"> <p>Pacote</p><p>Infantil</p><p>R$ 800,00</p> </div>
        <div className="retangulo7"> <p>Pacote</p><p>Temático</p><p>R$ 1.200,00</p> </div>
        <div className="retangulo8"> <p>Pacote de</p><p>Assinatura</p><p>R$ 1.500,00</p><p> por mês</p> </div>
        <div className="retangulo9"> <p>Pacote Mini</p><p>Ensaio</p><p>R$ 300,00</p> </div>
        <div className="retangulo0"> <p>Pacote</p><p>Pets</p><p>R$ 700,00</p> </div>
        <div className="retangulol"> <p>Pacote Evento</p><p>Social</p><p>R$ 2.000,00</p> </div>
        <div className="retangulos"> <p>Pacote</p><p>Maternidade</p><p>R$ 3.500,00</p> </div>
      </div>
      <header className="header2">
        <div className="img">
        <img className="logo" src="https://img.icons8.com/?size=100&id=DMouakoWuTB6&format=png&color=000000"/>
        </div>
        <div className="sociais2">
        <div>
            <ul className="ul2">
                <li>Nos siga nas redes sociais</li>
            </ul>
        </div>
        <div className="sociais">
        <div className="img">
            <img className="logo" src="https://img.icons8.com/?size=100&id=118467&format=png&color=FFFFFF"/>
        </div>
        <div className="img">
            <img className="logo" src="https://img.icons8.com/?size=100&id=32309&format=png&color=FFFFFF"/>
        </div>
        <div className="img">
            <img className="logo" src="https://img.icons8.com/?size=100&id=8808&format=png&color=FFFFFF"/>
        </div>
        <div className="img">
            <img className="logo" src="https://img.icons8.com/?size=100&id=aL0F8ToUoPjC&format=png&color=FFFFFF"/>
        </div>
        </div>
        </div>
        <div>
            <ul className="ul2">
                <li> 872 Morada Feliz - Cidade das Flores</li>
                <li>MG / 39567 - 123</li>
            </ul>
        </div>
      </header>
    </>
  )
}

export default App
