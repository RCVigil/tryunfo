import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class Form extends Component {
  render() {
    return (
      <div>
        <form action="">
          <input
            type="text"
            data-testid="name-input"
          />

          <textarea
            name=""
            id="letter-description"
            cols="30"
            rows="10"
            data-testid="description-input"
          />

          <input type="number" data-testid="attr1-input" />

          <input type="number" data-testid="attr2-input" />

          <input type="number" data-testid="attr3-input" />

          <input type="text" data-testid="image-input" />

          <select
            name=""
            id=""
            data-testid="rare-input"
          >
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>

          <input type="checkbox" name="" id="" data-testid="trunfo-input" />

          <button type data-testid="save-button">
            Salvar
          </button>

        </form>
      </div>
    );
  }
}

// Form.propTypes = {

// };

export default Form;
