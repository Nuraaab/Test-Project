import styled from '@emotion/styled';
import { css } from '@emotion/react';
/** @jsxImportSource @emotion/react */

export const Heading = styled('h1')`
  background-color: ${props => props.bg};
  color: ${props => props.fg};
  padding:${props => props.pad};
  margin:${props => props.mar};
  height:${props => props.hei};
`;
export const Continer = styled.div`
text-align: center;
margin:20px;
padding:20px;
`;
export const Card = styled.div`
text-align: center;
`;
export const FCard = styled.div`
text-align: center;
margin:0px 200px 0px 200px ;
`;
export const ButtonDiv = styled.div`
text-align:right;
margin:10px;
`;

export const TButton = styled.button`
width: 150px;
margin: 5px;
padding:15px;
border-radius:5px;
background:#2E7D32;
border:none;
color:white;
text-align: center;
`;
export const Table = styled.table`
width:100%;
border-collapse: collapse;
margin: 25px 0;
font-size: 0.9em;
font-family: sans-serif;
box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
`;

export const Thead = styled.thead`
background-color: #212121;
color: #ffffff;
text-align: left;
text-align:center;
height:50px;
`;
export const Clink = css({
    width:  '200px',
    padding: '10px',
    borderRadius: '5px',
    textDecoration:'none',
    textAlign: 'center',
    background:'black',
    color:'white'
  });

  export const tr = css({
    border: '1px solid #dddddd',
  });

  export const tTbtn = css({
    background:'#C62828',
  });

  export const center = css({
    textAlign:'center',
  });

  export const back = css({
    width: '150px',
    margin: '5px',
    padding:'10px 55px 12px 55px',
    borderRadius:'5px',
    background:'#C62828',
    border:'none',
    color:'white',
    textAlign: 'center',
    textDecoration:'none',
  });
  export const Input = styled.input`
  border: #BBC1E1;
  width:100%;
  border:1px solid #03A9F4;
  border-radius:5px;
  padding:15px 0px 15px 15px;
  border-hover: #275EFE;
  background: #fff;
  disabled: #F6F8FF;
  disabled-inner: #E1E6F9;
`;
export const Form = styled.form`
padding:30px;
border:1px solid #424242;
border-radius:10px;
`;