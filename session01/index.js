function ClickButton() {

    const [clicked, setClick] = React.useState(false);
  
    if (clicked) {
     /* return 'Nothing here yet! Change this text to add more info.'; */
     return 'Hellow World!';
     return React.createElement('h1')
    }
  
    return React.createElement(
      'button', {
      onClick: () => setClick(true), 
      className: 'main-button',
      className: 'heading1'
    },
    
    
     /* 'Click To Reveal',  */
     'Press Here',
    );
  }

  
  
  const domContainer = document.querySelector('#root');
  ReactDOM.render(React.createElement(ClickButton), domContainer);