import React, { useState } from "react";
import "./Calculadora.css";
import Container from '@mui/material/Container'; 
import { Box } from "@mui/system";


export default function Calculadora() {
        const[num, setNum] = useState(0);  //constante para guardar o número que será selecionado
        const[oldnum, setOldNum] = useState(0); //constante para guardar o número e settar o número antigo após selecionar o operador
        const[operador, setOperador] = useState(0); //constate para guardar o operador que será selecionado
    
    //função responsavel por colocar o número no "visor" da calculadora
    function inputNum(e) {  
        var input = e.target.value; //variavel que irá guardar o número selecionado
        if(num == 0) { //if para o 0 não ficar na frente dos proximos números que serão selecionados
            setNum(input);
        } else {
            setNum(num + input);
        }

        
    }

    function clear(e) { //função para limpar o "visor" da calculadora
        setNum(0);
    }

    function operadorHandler(e) { //função que irá guardar o operador e settar o número "antigo"  
        var operadorInput = e.target.value;
        setOperador(operadorInput);
        setOldNum(num);
        setNum(0);
    }

    function calculate() { //função que irá calcular, baseado no operador escolhido, a conta
        if(operador == "/") {
            setNum(oldnum / num);
        } else if(operador == "x") {
            setNum(oldnum * num);
        } else if(operador == "-") {
            setNum(oldnum - num);
        } else if(operador == "+") {
            setNum(parseFloat(oldnum) + parseFloat(num)); //parsefloat necessário, js interpreta os atributos como uma string quando usado o sinal "+" 
        } 
    }
    return (
        <div>
            <Box m={5}/> {/* Box, um recurso do material ui que servirá como margem*/}
            <Container maxWidth="xs">  {/* Container, um recurso do material ui que irá "empacotar" a tela */}
                <div className="screen">
                    <Box m={8}/>
                    <h1 className="result">{num}</h1>
                    <button className="specialBtns" onClick={clear}>AC</button>
                    <button className="specialBtns" onClick={operadorHandler} value={"x"}>X</button>
                    <button className="specialBtns" onClick={operadorHandler} value={"/"}>/</button>
                    <button onClick={inputNum} value={9}>9</button>
                    <button className="specialBtns" onClick={operadorHandler} value={"+"}>+</button>
                    <button className="specialBtns" onClick={operadorHandler} value={"-"}>-</button>
                    <button onClick={inputNum} value={6}>6</button>
                    <button onClick={inputNum} value={7}>7</button>
                    <button onClick={inputNum} value={8}>8</button>
                    <button onClick={inputNum} value={3}>3</button>
                    <button onClick={inputNum} value={4}>4</button>
                    <button onClick={inputNum} value={5}>5</button>
                    <button onClick={inputNum} value={0}>0</button>
                    <button onClick={inputNum} value={1}>1</button>
                    <button onClick={inputNum} value={2}>2</button>
                    <button className="specialBtns2" onClick={inputNum} value={"."}>,</button>
                    <button className="specialBtns2" onClick={calculate}>=</button>
                </div>
            </Container>
        </div>
    )
}