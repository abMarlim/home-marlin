import styled from 'styled-components';
import { appColors } from 'utils';

import One from './icons/one.svg';
import Two from './icons/two.svg';
import Three from './icons/three.svg';

const OurClients = () => {

  return (
    <OURCLIENTS className="mw">
      <h2>Our Clients</h2>
      <ul className="flex">
        <li><img src="/images/clients/confidence.png" alt="Confidence" /></li>
        <li><img src="/images/clients/simple.png" alt="Simple" /></li>
        <li><img src="/images/clients/vips.png" alt="Vips" /></li>
        <li><img src="/images/clients/amz.png" alt="Amz" /></li>
        <li><img src="/images/clients/picchioni.png" alt="Picchioni" /></li>
        <li><img src="/images/clients/cambio_store.png" alt="CambioStore" /></li>
        <li><img src="/images/clients/frente.png" alt="Frente" /></li>
      </ul>
      <section>
        <div>
          <span className="flex"><One /></span>
          <h4>Lorem ipsum dolor</h4>
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam</p>
        </div>
        <div>
          <span className="flex"><Two /></span>
          <h4>Lorem ipsum dolor</h4>
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam</p>
        </div>
        <div>
          <span className="flex"><Three /></span>
          <h4>Lorem ipsum dolor</h4>
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam</p>
        </div>
      </section>
    </OURCLIENTS>
  )

}

export const OURCLIENTS = styled.section`

  margin: 100vh 0 0!important;

  > h2 {
    text-align: center;
    font-weight: 700;
    color: ${appColors.text};
    font-size: 3.2rem;
    margin: 20px 0 0; 
  }

  > ul {

    max-width: 100%;
    justify-content: flex-start;
    overflow-x: scroll;
    padding: 40px 0;

    > li {
      min-width: 248px;
      max-width: 248px;
      margin: 0 40px 0 0;
      > img {
        width: 100%;
      }
      :last-of-type {
        margin: 0;
      }
    }

  }

  > section {
    
    margin: 96px 0 0;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    > div {

      width: 25%;

      > span {
        width: 96px;
        height: 96px;
        border-radius: 30px;
        background: rgba(33, 255, 163, .24);
        > svg {
          height: 32px;
        }
      }

      > h4 {
        color: ${appColors.text};
        font-size: 2.4rem;
        font-weight: 700;
        margin: 48px 0 32px;
      }

      > p {
        color: rgba(59, 55, 68, .5);
        font-size: 1.6rem;
        max-width: 90%;
      }

      :nth-child(2) > span {
        background: rgba(255, 8, 123, .24);
      }
      
      :last-of-type > span {
        background: rgba(82, 74, 199, .24);
      }

    }
  
  }

`;

export default OurClients;