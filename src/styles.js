import styled from "styled-components"

export const About = styled.div`
  min-height: 90vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5rem 8rem;
  color: white;

`
export const Description = styled.div `
  flex: 1;
  padding-right: 10rem;
  h2{
    font-weight: lighter;
  }
`
export const Image = styled.div`
  flex: 1;
  overflow: hidden;
img{
  width: 100%;
  height: 90vh;
  object-fit: cover;
}
`
export const Hide = styled.div `
  overflow: hidden;

`

