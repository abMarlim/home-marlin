import React from 'react';

export default class Payment extends React.Component {
  render() {
    return (
      <div className="payment">
        <div className="payment-container" ref={ this.props.servicesReference }>
          <div className="payment-container__content">
            <section className="payment-container__section">
              <h2>Pagamento online</h2>
              <p>
                Anti-fraude integrado
                <br />
                Checkout transparente
                <br />
                Link de Pagamento
                <br />
                One click buy
              </p>
            </section>
            <section className="payment-container__section">
              <h2>Pagamento offline</h2>
              <p>
                POS (Point of Sale)
                <br />
                Wi-fi e 3g
                <br />
                Liberdade de ir até o cliente
                <br />
                Impressora na própria máquina
              </p>
              <p>
                EFT (Eletronic fund transfer)
                <br />
                Conexão com outra máquina
                <br />
                Sistema de integração
                <br />
                Pagamento sem contato direto com o cliente
              </p>
            </section>
          </div>
        </div>
        <div className="payment__decoration">
          <div className="payment__decoration__image" />
          <div className="payment__decoration__blue-box" />
        </div>
      </div>
    );
  }
}
