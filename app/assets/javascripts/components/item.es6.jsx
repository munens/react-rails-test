class Item extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {item: ''}
  }
  
  // this is the function that is run as soon as the Component is mounted in DOM:
  componentDidMount() {
    $.getJSON('/api/users', (response) => {
      console.log(response);
      this.setState({item: response[0].username})
    })
  }
  
  render () {
    return (
      <div>
        <h2>Rails react starter</h2>
        <div>{this.state.item}</div>
      </div>
    );
  }
}

