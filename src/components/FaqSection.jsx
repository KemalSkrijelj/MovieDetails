import React from "react";
import styled from "styled-components";
import { About } from "../styles";

const FaqSection = () => {
  return(
   <Faq className="faq">
    <h2>Any Questions <span>FAQ</span></h2>
    <div className="question">
      <h4>How Do I start?</h4>
      <div className="answer">
        <p>Lorem ipsum dolor sit amet.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, perspiciatis.</p>

      </div>
      <div className="faq-line"></div>
    </div>
    <div className="question">
      <h4>Daily Schedule</h4>
      <div className="answer">
        <p>Lorem ipsum dolor sit amet.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, perspiciatis.</p>
        
      </div>
      <div className="faq-line"></div>

    </div>
    <div className="question">
      <h4>Diferrent Payment Methods</h4>
      <div className="answer">
        <p>Lorem ipsum dolor sit amet.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, perspiciatis.</p>
        
      </div>
      <div className="faq-line"></div>

    </div>
    <div className="question">
      <h4>What product do you offer</h4>
      <div className="answer">
        <p>Lorem ipsum dolor sit amet.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, perspiciatis.</p>
        
      </div>
      <div className="faq-line"></div>

    </div>
   </Faq>
  )
}

const Faq = styled(About)`

  display:block;

  span{
  display:block
  }

  h2{
  padding-bottom: 2rem;
  font-weight: lighter
  }

  .faq-line{
  background: #cccccc;
  height: 0.2rem;
  margin: 2rem 0rem;
  width: 100%auto
  }
  .question{
   padding:3rem 0rem;
   cursor:pointer
  }
   .answer{
   p{
   margin:0;
   padding: 1.5rem 0rem;
   width:100%;
   }
   }
`
export default FaqSection