"use client"
import { useState } from 'react';
import { Wheel } from 'react-custom-roulette';

const data = [
  { option: 'Lavar louça', style: { backgroundColor: '#FF5733', textColor: 'white' } },  
  { option: 'Limpar a geladeira', style: { backgroundColor: '#33FF57', textColor: 'black' } },  
  { option: 'Limpar banheiro', style: { backgroundColor: '#3357FF', textColor: 'white' } },  
  { option: 'Arrumar a cama', style: { backgroundColor: '#FFC300', textColor: 'black' } },  
  { option: 'Tirar o lixo', style: { backgroundColor: '#FF33A1', textColor: 'white' } },  
  { option: 'Limpar a sala', style: { backgroundColor: '#33FFF3', textColor: 'black' } },  
  { option: 'Lavar roupa', style: { backgroundColor: '#B833FF', textColor: 'white' } },  
  { option: 'Limpar o fogão', style: { backgroundColor: '#FF8F33', textColor: 'black' } },  
  { option: 'Limpar janelas', style: { backgroundColor: '#8D33FF', textColor: 'white' } },  
  { option: 'Varrer a casa', style: { backgroundColor: '#33FF8F', textColor: 'black' } },  
  { option: 'Cozinhar', style: { backgroundColor: '#FF3388', textColor: 'white' } },  
  { option: 'Fazer nada', style: { backgroundColor: '#3388FF', textColor: 'white' } },  
];

export default function Home() {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [resultText, setResultText] = useState(''); // Novo estado para o resultado

  const handleSpinClick = () => {
    const newPrizeNumber = Math.floor(Math.random() * data.length);
    setPrizeNumber(newPrizeNumber); // Define o prêmio que a roleta vai parar
    setMustSpin(true); // Inicia o giro da roleta
  };

  const handleStopSpinning = () => {
    setMustSpin(false); // Para a roleta quando o giro acabar
    setResultText(data[prizeNumber].option); // Atualiza o texto com a opção selecionada
  };

  return (
    <>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '98vh',
        backgroundColor: '#3e3e3e',
      }}>
        <h1 style={{
          fontSize: '1.4rem',
          textAlign: 'center',
          margin: '0 0 20px 0',
          color: 'white',
        }}>
          Roleta das Tarefas de Casa
        </h1>
        <Wheel
          mustStartSpinning={mustSpin}
          prizeNumber={prizeNumber}
          data={data}
          fontSize={16}
          onStopSpinning={handleStopSpinning} // Função chamada ao parar
          backgroundColors={['#3e3e3e', '#df3428']}
          textColors={['#ffffff']}
        />
        {resultText && ( // Renderiza o texto do resultado se existir
          <div style={{
            marginTop: '10px',
            fontSize: '18px',
            color: 'white',
            fontWeight: 'bold',
            textAlign: 'center',
          }}>
            {resultText}
          </div>
        )}
        <button style={{
          marginTop: '20px',
          padding: '10px 20px',
          backgroundColor: '#007BFF',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          fontSize: '16px',
          transition: 'background-color 0.3s',
          fontWeight: 'bold',
        }} onClick={handleSpinClick}>GIRAR</button>
      </div>
    </>
  );
}
