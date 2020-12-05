import React,{ MouseEvent , FC } from "react";
import { AppCtx } from "./Context";
import { useContext } from "react";
import "./index.css";
import styled from "styled-components";


interface IProps {
   color:string;
   background?:string;
   disabled?:boolean
}

const Button = styled.button.attrs<IProps>({
    // or we can define dynamic ones or  static props
   color: (props:IProps) => props.color || 'red',
   background: (props:IProps) => props.background || '#fefefe',
   disabled: (props:IProps) => props.disabled || 'disabled',
 })
 // we can define static props
 `
 font-size: 20px;
 `
 ;
  

export {
   Button
} 

