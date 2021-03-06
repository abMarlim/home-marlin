import React from 'react';

export default class Form extends React.Component {
  render() {
    return (
      <div className="indexed-section indexed-section--form">
        <div className="form">
          <form>
            <h3>Vamos nos falar?</h3>
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="E-mail" />
            <textarea type="text" placeholder="Message" />

            <div className="form__bottom">
              <button>Enviar</button>
            </div>
          </form>
        </div>

        <div className="indexed-section__index">
          <p className="indexed-section__index__section">let's talk</p>
          <span />
          <p className="indexed-section__index__number">08</p>
        </div>
      </div>
    );
  }
}
