import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: '',
      hasTrunfo: false,
      cardTrunfo: false,
      isSaveButtonDisabled: true,
      novoEstado: [],
    };
  }

  onInputChange = ({ target }) => {
    const { name, type, checked, value } = target;

    this.setState({ [name]: type === 'checkbox' ? checked : value });

    if (value !== '') {
      this.setState({ isSaveButtonDisabled: false });
    }
    const numero = 90;
    if (value > numero || value < numero) {
      this.setState({ isSaveButtonDisabled: true });
    }
  }

  onSaveButtonClick = (event) => {
    event.preventDefault();
    const estado = this.state;

    this.setState((prevewState) => ({
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      novoEstado: [...prevewState.novoEstado, estado],
    }));

    if (estado.cardTrunfo === true) {
      this.setState({
        hasTrunfo: true,
      });
    }
  }

  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      novoEstado,
    } = this.state;

    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          onInputChange={ this.onInputChange }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onSaveButtonClick={ this.onSaveButtonClick }
          hasTrunfo={ hasTrunfo }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
        <div className="divCart">
          {novoEstado.map((carta) => <Card { ...carta } key={ carta.cardName } />)}
        </div>
      </div>
    );
  }
}

export default App;
